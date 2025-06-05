import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => setData(res.data))
      .catch((err) =>
        console.error("Erreur lors de la récupération des données :", err)
      );
  }, []);

  return (
    <div>
      <h1>Bienvenue sur Trouve Ton Artisan</h1>
      <h2>Liste des Artisans</h2>
      <ul>
        {data.map((artisan) => (
          <li key={artisan.id}>
            <img
              src={artisan.image}
              alt={`Photo de ${artisan.nom}`}
              style={{ width: "150px", height: "auto" }}
            />
            <a
              href={`mailto:${artisan.email}`}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Envoyer un e-mail
            </a>
            <p>
              {artisan.nom} - {artisan.specialite}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
