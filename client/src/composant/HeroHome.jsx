import Hero from "../../public/assets/images - background/hero.jpg";

const HeroHome = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        className="h-full w-full object-cover"
        src={Hero}
        alt="Image de fond"
      />

      {/* Boîte de contenu centrée avec fond semi-transparent */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className=" text-white text-center p-10 rounded-lg md:w-full md:mx-4 lg:w-1/2">
          <h1 className="sm:text-3xl lg:text-4xl font-bold mb-4">
            Trouvez facilement un artisan local en Auvergne-Rhône-Alpes
          </h1>
          <h2 className="sm:text-sm lg:text-xl mb-6">
            Une plateforme régionale pour entrer en contact direct avec les
            artisans près de chez vous : demande de devis, prestations ou simple
            renseignement, en quelques clics.
          </h2>
          <button className="bg-[#0074C7] hover:bg-[#00497C] px-10 py-2 rounded-full text-white mb-2">
            Trouver des artisans
          </button>
          <p className="text-sm my-2">Vous êtes artisan ?</p>
          <button className="border-2 border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
            Rejoindre la plateforme
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
