import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [values, setValues] = useState({
    fullname: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.password !== values.confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    axios
      .post("http://localhost:5000/register", values, { withCredentials: true })
      .then((res) => {
        if (res.data.status === "succès") {
          setMessage("Inscription réussie !");
        } else if (res.data.error) {
          setMessage(res.data.error);
        }
      })
      .catch((err) => {
        console.error("Erreur lors de l'inscription :", err);
        setMessage("Une erreur est survenue.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F8FC] p-6">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0074C7]">
          Créer un compte
        </h2>

        {message && (
          <div className="mb-4 text-center text-sm text-red-500">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Nom complet</label>
            <input
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

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

          <div>
            <label className="block mb-1 font-semibold">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0074C7] text-white py-2 rounded-lg hover:bg-[#005fa3] transition"
          >
            S'inscrire
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="text-[#0074C7] underline">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
