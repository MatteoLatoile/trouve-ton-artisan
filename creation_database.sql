-- Création de la base de données
CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Utilisation de la base
USE trouve_ton_artisan;

-- Table utilisateurs
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Table artisans
CREATE TABLE artisans (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  specialite VARCHAR(100) NOT NULL,
  note VARCHAR(20),
  ville VARCHAR(255),
  a_propos VARCHAR(255),
  categorie VARCHAR(100),
  top BOOLEAN DEFAULT FALSE,
  image_url VARCHAR(255)
);
