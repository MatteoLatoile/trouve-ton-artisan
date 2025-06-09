import { useEffect } from "react";
import BgChiffre from "../../public/assets/images - background/bgchiffre.jpg";
import Bubble from "../../public/assets/images - background/bublle.svg";
import Menuisier from "../../public/assets/images - background/menuisier.png";
import Artisant from "../composant/Artisant";
import CarouselAvis from "../composant/CarouselAvis";
import HeroHome from "../composant/HeroHome";

const Accueil = () => {
  useEffect(() => {
    document.title = "Accueil - Trouve ton artisan";
  }, []);

  return (
    <div>
      <HeroHome />

      {/* Présentation du service */}
      <section className="bg-[#00497C] p-4 mt-8 relative">
        <img
          className="absolute  left-0 top-[-50px] lg:top-[-98px] z-1"
          src={Bubble}
          alt=""
        />
        <div className="absolute sm:left-10 sm:top-2 sm:text-2xl font-bold text-white p-4 bg-[#0074C7]">
          <span className="text-6xl text-white font-black">-</span> <br />
          Présentation du service
        </div>

        <div className="mb-10">
          <img className="sm:w-[100%] sm:m-auto" src={Menuisier} alt="" />
          <div className="text-white lg:px-20 lg:py-10 sm:text-sm mt-4">
            <p>
              Trouve ton artisan est une plateforme web conçue pour faciliter la
              mise en relation entre les particuliers et les artisans de la
              région Auvergne-Rhône-Alpes. Ce service s’adresse à toute personne
              souhaitant trouver rapidement un professionnel de confiance, qu’il
              s’agisse de travaux dans le bâtiment, de services du quotidien, de
              fabrication artisanale ou d’alimentation. Le site permet en
              quelques clics :
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-4">
              <li>
                <span className="font-bold">De trouver un artisan :</span> de
                parcourir les artisans disponibles par catégorie ou via la barre
                de recherche,
              </li>
              <li>
                <span className="font-bold">De consulter les avis :</span> de
                consulter leur fiche détaillée (spécialité, localisation, note,
                description…),
              </li>
              <li>
                <span className="font-bold">De contacter facilement :</span> et
                de les contacter facilement grâce à un formulaire intégré.
              </li>
            </ul>
            <p className="mt-4">
              Chaque artisan est référencé selon sa spécialité, elle-même
              rattachée à une catégorie principale. Cela garantit une navigation
              simple et intuitive pour l’utilisateur. Afin de garantir la
              qualité des services proposés, chaque fiche artisan met en avant
              les avis et notes, visibles directement sur le site.
            </p>
          </div>
        </div>
      </section>

      {/* Section chiffres */}
      <section className="relative">
        <div className="absolute z-10 sm:left-10 sm:top-2 text-xl sm:text-2xl font-bold text-white p-4 bg-[#0074C7]">
          <span className="text-6xl text-white font-black">-</span> <br />
          Quelques chiffres
        </div>

        <img className="object-cover w-full sm:h-170" src={BgChiffre} alt="" />

        <div className="absolute w-full top-[100px] lg:top-1/2 left-0 px-4 sm:px-10">
          <div className="flex flex-col sm:flex-row sm:gap-6 gap-4">
            {/* Carte 1 */}
            <div className="flex-1 bg-[#F1F8FC] rounded-2xl p-6 flex flex-col items-center text-center">
              <p className="text-5xl font-bold mb-4">48H</p>
              <p className="text-sm text-gray-700">
                C’est le délai moyen pour obtenir une réponse après avoir
                contacté un artisan via la plateforme.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="flex-1 bg-[#F1F8FC] rounded-2xl p-6 flex flex-col items-center text-center">
              <p className="text-5xl font-bold mb-4">12</p>
              <p className="text-sm text-gray-700">
                Départements couverts par la plateforme, représentant l’ensemble
                du territoire régional.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="flex-1 bg-[#F1F8FC] rounded-2xl p-6 flex flex-col items-center text-center">
              <p className="text-5xl font-bold mb-4">221 000</p>
              <p className="text-sm text-gray-700">
                Entreprises artisanales recensées dans la région
                Auvergne-Rhône-Alpes en 2021.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section avis */}
      <section className="bg-[#ebebeb] relative py-16">
        <div className="absolute z-1 sm:left-10 sm:top-2 sm:text-2xl font-bold text-white p-4 bg-[#0074C7]">
          <span className="text-6xl text-white font-black">-</span> <br />
          Avis des utilisateurs
        </div>
        <CarouselAvis />
      </section>
      <section className="relative">
        <div className="absolute z-1 sm:left-10 sm:top-2 sm:text-2xl font-bold text-white p-4 bg-[#0074C7]">
          <span className="text-6xl text-white font-black">-</span> <br />
          Notre Top 3
        </div>
        <Artisant />
      </section>
    </div>
  );
};

export default Accueil;
