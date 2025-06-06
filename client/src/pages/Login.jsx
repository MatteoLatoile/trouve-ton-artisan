const Login = () => {
  return (
    <div className="min-h-screen p-6 flex items-center justify-center bg-[#F1F8FC] lg:py-30">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0074C7]">
          Connexion
        </h2>

        <form className="space-y-4">
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

          <button
            type="submit"
            className="w-full bg-[#0074C7] text-white py-2 rounded-lg hover:bg-[#005fa3] transition"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Vous n'avez pas de compte ?{" "}
          <a href="/register" className="text-[#0074C7] underline">
            S'inscrire
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
