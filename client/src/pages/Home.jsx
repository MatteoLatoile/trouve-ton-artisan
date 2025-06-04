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
            {artisan.nom} - {artisan.specialite}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
