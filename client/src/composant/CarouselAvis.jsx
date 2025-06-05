const CarouselAvis = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      {/* Avis 1 - Julien */}
      <div className="flex justify-center">
        <div className="max-w-sm rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 p-6 shadow-md text-black">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-green-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-black">Julien, 42 ans</div>
              <div className="text-sm text-gray-700">Clermont-Ferrand</div>
            </div>
          </div>
          <p className="text-sm text-gray-900">
            "Site super simple à utiliser, j’ai trouvé une couturière dans mon
            quartier en quelques clics. Elle m’a rappelé dans la journée et le
            travail a été impeccable. Bravo pour cette plateforme locale !"
          </p>
        </div>
      </div>

      {/* Avis 2 - Marcelle */}
      <div className="flex justify-center">
        <div className="max-w-sm rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 p-6 shadow-md text-black">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-pink-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-black">Marcelle, 67 ans</div>
              <div className="text-sm text-gray-700">Saint-Étienne</div>
            </div>
          </div>
          <p className="text-sm text-gray-900">
            "En tant que retraité, j’ai toujours un peu de mal avec les sites
            compliqués… Mais là, tout est clair, accessible, et les artisans
            sont sérieux. C’est rassurant de savoir qu’on peut compter sur des
            pros de la région."
          </p>
        </div>
      </div>

      {/* Avis 3 - Amel */}
      <div className="flex justify-center">
        <div className="max-w-sm rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 p-6 shadow-md text-black">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-yellow-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-black">Amel, 38 ans</div>
              <div className="text-sm text-gray-700">Chambéry</div>
            </div>
          </div>
          <p className="text-sm text-gray-900">
            "J’avais besoin d’un menuisier pour rénover mes volets à Chambéry.
            Grâce à Trouve ton artisan, j’ai pu contacter un professionnel près
            de chez moi, très réactif et travail soigné. Je recommande à 100% !"
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselAvis;
