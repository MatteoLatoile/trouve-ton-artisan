import axios from "axios";
import { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi"; // pour l'icône d'enveloppe

const Artisant = () => {
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
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-white p-6">
      {data.map((artisan) => (
        <div
          key={artisan.id}
          className="bg-[#F1F8FC] shadow-md w-80 p-4 m-4 flex flex-col items-center text-center"
        >
          <img
            src={artisan.image}
            alt={`Illustration de ${artisan.nom}`}
            className="w-full object-contain mb-4"
          />

          <div className="flex mb-2">
            {Array(5)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-[#0074C7] text-lg">
                  ★
                </span>
              ))}
          </div>

          <h3 className="text-lg font-bold">{artisan.nom}</h3>
          <p className="text-sm text-gray-600 mb-2">{artisan.specialite}</p>
          <p className="text-sm text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            consequat malesuada rhoncus. Proin hendrerit mollis.
          </p>

          {artisan.site_web ? (
            <a
              href={artisan.site_web}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0074C7] text-white px-4 py-2 rounded-lg hover:bg-[#00497C] transition mb-3"
            >
              Visitez le site de l’entreprise
            </a>
          ) : (
            <button
              disabled
              className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg mb-3 cursor-not-allowed"
            >
              Site non disponible
            </button>
          )}

          <a
            href={`mailto:${artisan.email}`}
            className=" text-blue-600 p-2 rounded-full hover:bg-blue-100 transition"
          >
            <FiMail className="text-[28px]" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Artisant;
