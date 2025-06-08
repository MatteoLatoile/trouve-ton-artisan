const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const salt = 10;
const mysql = require("mysql");
const cors = require("cors");
const myConnection = require("express-myconnection");
const cookieParser = require("cookie-parser"); // ✅ Correction ajoutée
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Port Vite
    credentials: true,
  })
);

app.use(cookieParser());

// Options de connexion à la base de données
const optionDb = {
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "trouve_ton_artisan",
};

// Middleware pour gérer les connexions MySQL
app.use(myConnection(mysql, optionDb, "pool"));

// Vérification de la connexion à la base de données au démarrage
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

// 🔐 Route d'inscription
app.post("/register", (req, res) => {
  console.log("📩 Reçu une demande d'inscription :", req.body); // 👈

  const sql = "INSERT INTO users (`fullname`, `mail`, `password`) VALUES (?)";

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) {
      console.error("❌ Erreur bcrypt :", err);
      return res.json({ error: "Erreur lors du hachage du mot de passe" });
    }

    const values = [req.body.fullname, req.body.mail, hash];

    req.getConnection((err, connection) => {
      if (err) {
        console.error("❌ Erreur de connexion DB :", err);
        return res.json({ error: "Erreur de connexion à la base de données" });
      }

      connection.query(sql, [values], (err, result) => {
        if (err) {
          console.error("❌ Erreur MySQL :", err); // 👈 log l'erreur SQL exacte
          return res.json({ error: "Erreur lors de l'insertion des données" });
        }

        console.log("✅ Utilisateur inscrit avec succès !");
        return res.json({ status: "succès" });
      });
    });
  });
});

// 📦 Récupérer tous les artisans
app.get("/", (req, res) => {
  req.getConnection((err, connection) => {
    if (err) {
      console.error("Erreur de connexion à la base de données :", err);
      return res.status(500).send("Erreur de connexion à la base de données.");
    }

    connection.query("SELECT * FROM artisans", [], (err, resultat) => {
      if (err) {
        console.error("Erreur lors de la requête :", err);
        return res
          .status(500)
          .send("Erreur lors de la récupération des artisans.");
      }

      res.json(resultat);
    });
  });
});

// 📁 Récupérer les liens de navigation
app.get("/api/nav-links", (req, res) => {
  req.getConnection((err, connection) => {
    if (err) return res.status(500).send("Erreur connexion DB");

    connection.query(
      "SELECT * FROM nav_links ORDER BY position",
      (err, rows) => {
        if (err) return res.status(500).send("Erreur requête SQL");

        res.json(rows);
      }
    );
  });
});

// 🚀 Lancement du serveur
const port = 5000;
app.listen(port, () => console.log(`🚀 Le serveur a démarré au port ${port}`));
