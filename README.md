"Trouve ton Artisan" est une plateforme web qui connecte particuliers et artisans de la région Auvergne-Rhône-Alpes. L'utilisateur peut parcourir des services, consulter des artisans, et envoyer des demandes via une interface intuitive.

Fonctionnalités principales
Authentification avec sessions (express-session)

Navigation dynamique depuis la BDD

Recherche et filtrage d’artisans par domaine

| Frontend           | Backend          | Base de données | Auth / Sessions   |
| ------------------ | ---------------- | --------------- | ----------------- |
| React, tailwindcss | Node.js, Express | MySQL           | jwt, cookieParser |

Installation

Pré-requis
Node.js v18+

MySQL

Vite pour frontend React

Cloner le projet

git clonehttps://github.com/MatteoLatoile/trouve-ton-artisan.git
cd trouve-ton-artisan

Installer les dépendances

cd backend
npm install

cd client
npm install

Lancer les serveurs

dans un nouveau terminal (ctrl + shift + ù) => npm run server
dans un nouveau terminal (ctrl + shift + ù) => cd client => npm run dev

Auteur
Matteo Padalino

Projet fin du module avancée
