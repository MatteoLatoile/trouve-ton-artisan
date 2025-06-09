const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const salt = 10;
const mysql = require("mysql");
const cors = require("cors");
const myConnection = require("express-myconnection");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(cookieParser());

// Connexion à la base de données
const optionDb = {
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "trouve_ton_artisan",
};

app.use(myConnection(mysql, optionDb, "pool"));

const testDbConnection = () => {
  const testConnection = mysql.createConnection(optionDb);
  testConnection.connect((err) => {
    if (err) {
      console.error(
        "❌ Échec de la connexion à la base de données :",
        err.message
      );
    } else {
      console.log("✅ Connexion réussie à la base de données MySQL !");
    }
    testConnection.end();
  });
};
testDbConnection();

// Inscription
app.post("/register", (req, res) => {
  console.log("📩 Reçu une demande d'inscription :", req.body);

  const sql = "INSERT INTO users (`fullname`, `mail`, `password`) VALUES (?)";

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err)
      return res.json({ error: "Erreur lors du hachage du mot de passe" });

    const values = [req.body.fullname, req.body.mail, hash];

    req.getConnection((err, connection) => {
      if (err)
        return res.json({ error: "Erreur de connexion à la base de données" });

      connection.query(sql, [values], (err, result) => {
        if (err)
          return res.json({ error: "Erreur lors de l'insertion des données" });

        return res.json({ Status: "succès" });
      });
    });
  });
});

// Connexion
app.post("/login", (req, res) => {
  const { mail, password } = req.body;

  req.getConnection((err, connection) => {
    if (err)
      return res.json({ error: "Erreur de connexion à la base de données" });

    const sql = "SELECT * FROM users WHERE mail = ?";
    connection.query(sql, [mail], (err, results) => {
      if (err) return res.json({ error: "Erreur lors de la requête" });

      if (results.length > 0) {
        const utilisateur = results[0];

        bcrypt.compare(
          password.toString(),
          utilisateur.password,
          (err, match) => {
            if (err)
              return res.json({
                error: "Erreur de vérification du mot de passe",
              });

            if (match) {
              const name = utilisateur.fullname;
              const token = jwt.sign({ name }, "jwt-secret-key", {
                expiresIn: "1d",
              });
              res.cookie("token", token);
              return res.json({ Status: "succès" });
            } else {
              return res.json({ error: "Mot de passe incorrect" });
            }
          }
        );
      } else {
        return res.json({ error: "Aucun utilisateur trouvé avec cet e-mail" });
      }
    });
  });
});

// Récupérer tous les artisans
app.get("/", (req, res) => {
  req.getConnection((err, connection) => {
    if (err) return res.send("Erreur de connexion à la base de données.");

    connection.query("SELECT * FROM artisans", [], (err, resultat) => {
      if (err) return res.send("Erreur lors de la récupération des artisans.");

      res.json(resultat);
    });
  });
});

// Récupérer les liens de navigation
app.get("/api/nav-links", (req, res) => {
  req.getConnection((err, connection) => {
    if (err) return res.send("Erreur connexion DB");

    connection.query(
      "SELECT * FROM nav_links ORDER BY position",
      (err, rows) => {
        if (err) return res.send("Erreur requête SQL");

        res.json(rows);
      }
    );
  });
});

// Lancer le serveur
const port = 5000;
app.listen(port, () => console.log(`🚀 Le serveur a démarré au port ${port}`));
