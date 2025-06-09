import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/login", values, { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "succès") {
          navigate("/"); // Rediriger vers une page appropriée
        } else {
          alert(res.data.error);
        }
      })
      .catch((err) => {
        console.error("Erreur lors de la connexion :", err);
      });
  };

  return (
    <div className="min-h-screen p-6 flex items-center justify-center bg-[#F1F8FC] lg:py-30">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0074C7]">
          Connexion
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Adresse e-mail</label>
            <input
              type="email"
              name="mail"
              value={values.mail}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0074C7] text-white py-2 rounded-lg hover:bg-[#005fa3] transition"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Vous n'avez pas de compte ?{" "}
          <Link to="/register" className="text-[#0074C7] underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
