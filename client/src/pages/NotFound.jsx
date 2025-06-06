const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6 text-center">
      <h1 className="text-6xl font-bold text-[#0074C7] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page non trouvée</h2>
      <p className="text-gray-600 mb-6">
        Oups ! La page que vous cherchez n’existe pas.
      </p>
      <a
        href="/"
        className="bg-[#0074C7] text-white px-6 py-3 rounded-full hover:bg-[#005999] transition"
      >
        Retour à l'accueil
      </a>
    </div>
  );
};

export default NotFound;
