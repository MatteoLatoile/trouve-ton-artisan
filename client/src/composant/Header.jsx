import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [navLinks, setNavLinks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/nav-links")
      .then((res) => setNavLinks(res.data))
      .catch((err) => console.error("Erreur récupération nav :", err));
  }, []);

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={link.route}
              className={`hover:text-yellow-400 ${
                location.pathname === link.route ? "underline" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
