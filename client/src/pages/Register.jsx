const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center lg:py-30 bg-[#F1F8FC] p-6">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0074C7]">
          Créer un compte
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Nom complet</label>
            <input
              type="text"
              name="nom"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Mot de passe</label>
            <input
              type="password"
              name="motDePasse"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Confirmation du mot de passe
            </label>
            <input
              type="password"
              name="confirmation"
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
