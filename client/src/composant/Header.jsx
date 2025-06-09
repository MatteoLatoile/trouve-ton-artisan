import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuIcon = () => (
  <svg
    className="w-6 h-6 text-[#0074C7]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-6 h-6 text-[#0074C7]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Header = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true); // true par défaut sauf page d'accueil
  const location = useLocation();

  axios.defaults.withCredentials = true;

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/nav-links")
      .then((res) => setNavLinks(res.data))
      .catch((err) => console.error("Erreur récupération nav :", err));
  }, []);

  // Gestion de l'apparition animée uniquement sur la page d'accueil
  useEffect(() => {
    if (!isHomePage) {
      setShowHeader(true); // toujours visible hors page d'accueil
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowHeader(scrollY > window.innerHeight - 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/verify", { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "succès") {
          setAuth(true);
        } else {
          setAuth(false);
        }
      })
      .catch((err) => {
        console.error("Erreur verification du token :", err);
      });
  });

  //pour supprimer
  const handleDelete = () => {
    axios
      .get("http://localhost:5000/logout", { withCredentials: true })
      .then(() => {
        setAuth(false);
        location.reload();
      })
      .catch((err) => console.log("erreur lors de la deconnexion", err));
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-999 bg-[#F1F8FC] py-4 px-6 flex items-center justify-between
        transition-all duration-500 ease-in-out
        ${
          isHomePage
            ? showHeader
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
            : ""
        }
      `}
    >
      {/* Logo & Texte */}
      <div>
        <h1 className="text-lg font-bold text-gray-800">
          Trouve ton artisan !
        </h1>
        <p className="text-sm text-[#0074C7] font-medium leading-tight">
          Avec la région <br />
          Auvergne-Rhône-Alpes
        </p>
      </div>

      {/* Burger (mobile only) */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden"
      >
        {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>

      {/* Menu de navigation (desktop) */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-8 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.route}
                className={`hover:text-[#0074C7] ${
                  location.pathname === link.route
                    ? "underline font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {auth ? (
        <div className="relative hidden md:block">
          {/* Icône utilisateur */}
          <button
            onClick={() => {
              const menu = document.getElementById("user-menu");
              if (menu) menu.classList.toggle("hidden");
            }}
            className="text-[#0074C7] border border-[#0074C7] rounded-full p-2 hover:bg-blue-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
              />
            </svg>
          </button>

          {/* Menu déroulant toggle */}
          <div
            id="user-menu"
            className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50 hidden"
          >
            <button
              onClick={handleDelete}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
            >
              Déconnexion
            </button>
          </div>
        </div>
      ) : (
        <Link to="/login" className="hidden md:block">
          <button className="border border-[#0074C7] text-[#0074C7] rounded-full px-6 py-2 hover:bg-blue-100 transition-colors">
            Connexion
          </button>
        </Link>
      )}

      {/* Menu mobile déroulant */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-lg z-20 py-4 px-6 md:hidden">
          <ul className="space-y-4 text-[#0074C7] font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.route}
                  className={`block ${
                    location.pathname === link.route
                      ? "underline font-semibold"
                      : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {auth ? (
              <li>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full border bg-[#0074C7] text-[#fff] rounded-full py-2 hover:bg-blue-50">
                    Déconnexion
                  </button>
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full border bg-[#0074C7] text-[#fff] rounded-full py-2 hover:bg-blue-50">
                    Connexion
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
