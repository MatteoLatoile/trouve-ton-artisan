const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const myConnection = require("express-myconnection");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Remplace par ton port Vite
    credentials: true,
  })
);

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

// Middleware pour parser le corps des requêtes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route de base
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

const port = 5000;
app.listen(port, () => console.log(`🚀 Le serveur a démarré au port ${port}`));
