import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Spinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Artisant = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true); // 🆕 loader

  const location = useLocation();
  const cardsRef = useRef([]);

  const getCategorieFromPath = (path) => {
    if (path.includes("/services/batiment")) return "Bâtiment";
    if (path.includes("/services/alimentation")) return "Alimentation";
    if (path.includes("/services/fabrication")) return "Fabrication";
    return null;
  };

  const categorie = getCategorieFromPath(location.pathname);

  useEffect(() => {
    setLoading(true); // debut loader
    setTimeout(() => {
      axios
        .get("http://localhost:5000/artisans", { withCredentials: true })
        .then((res) => {
          const filtered = categorie
            ? categorie === "Top"
              ? res.data.filter((artisan) => artisan.top === true)
              : res.data.filter((artisan) => artisan.categorie === categorie)
            : location.pathname === "/"
            ? res.data.filter((artisan) => artisan.top === true)
            : res.data;

          setData(filtered);
          setFilteredData(filtered);
          setLoading(false); // 🆕 Stop loader
        })
        .catch((err) => {
          console.error("Erreur lors de la récupération des données :", err);
          setLoading(false);
        });
    }, 1000);
  }, [categorie, location.pathname]);

  useEffect(() => {
    const filtered = data.filter((artisan) =>
      artisan.ville?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [filteredData]);

  const renderStars = (note) => {
    const fullStars = Math.floor(note);
    const hasHalfStar = note - fullStars >= 0.25 && note - fullStars < 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const fullStar = (
      <svg
        className="w-5 h-5 text-[#0074C7]"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.685a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.127 2.27a1 1 0 00-.364 1.118l1.2 3.685c.3.921-.755 1.688-1.538 1.118l-3.127-2.27a1 1 0 00-1.176 0l-3.127 2.27c-.783.57-1.838-.197-1.538-1.118l1.2-3.685a1 1 0 00-.364-1.118L2.45 9.112c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.685z" />
      </svg>
    );

    const halfStar = (
      <svg
        className="w-5 h-5 text-[#0074C7]"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <defs>
          <linearGradient id="half-grad">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half-grad)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.685a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.127 2.27a1 1 0 00-.364 1.118l1.2 3.685c.3.921-.755 1.688-1.538 1.118l-3.127-2.27a1 1 0 00-1.176 0l-3.127 2.27c-.783.57-1.838-.197-1.538-1.118l1.2-3.685a1 1 0 00-.364-1.118L2.45 9.112c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.685z"
        />
      </svg>
    );

    const emptyStar = (
      <svg
        className="w-5 h-5 text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.685a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.127 2.27a1 1 0 00-.364 1.118l1.2 3.685c.3.921-.755 1.688-1.538 1.118l-3.127-2.27a1 1 0 00-1.176 0l-3.127 2.27c-.783.57-1.838-.197-1.538-1.118l1.2-3.685a1 1 0 00-.364-1.118L2.45 9.112c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.685z" />
      </svg>
    );

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`}>{fullStar}</span>
        ))}
        {hasHalfStar && <span>{halfStar}</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`}>{emptyStar}</span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Rechercher une ville..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0074C7] transition"
        />
      </div>

      <div className="flex flex-wrap justify-center items-start">
        {loading ? (
          <Spinner />
        ) : filteredData.length > 0 ? (
          filteredData.map((artisan, index) => (
            <div
              key={artisan.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-[#F1F8FC] shadow-md w-80 p-4 m-4 flex flex-col items-center text-center rounded-xl"
            >
              <img
                src={artisan.image}
                alt={`Illustration de ${artisan.nom}`}
                className="w-full object-contain mb-4"
              />
              {renderStars(artisan.note)}
              <h3 className="text-lg font-bold mt-2">{artisan.nom}</h3>
              <p className="text-sm text-gray-600">{artisan.specialite}</p>
              <p className="text-sm text-gray-500 mb-2 italic">
                {artisan.ville}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                className="text-blue-600 p-2 rounded-full hover:bg-blue-100 transition"
              >
                <FiMail className="text-[28px]" />
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Aucun artisan trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default Artisant;
