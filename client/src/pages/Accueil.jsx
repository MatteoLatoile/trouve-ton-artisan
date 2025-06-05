import BgChiffre from "../../public/assets/images - background/bgchiffre.jpg";
import Bubble from "../../public/assets/images - background/bublle.svg";
import Menuisier from "../../public/assets/images - background/menuisier.png";
import CarouselAvis from "../composant/CarouselAvis";
import Footer from "../composant/Footer";
import HeroHome from "../composant/HeroHome";
const Accueil = () => {
  return (
    <div>
      <HeroHome />

      <section className="bg-[#00497C] p-4 mt-8 relative">
        <img className="absolute left-0 top-[-50px] z-1" src={Bubble} alt="" />
        {/* titre section */}
        <div className="absolute sm:left-10 sm:top-2 sm:text-2xl font-bold text-white p-4 bg-[#0074C7]">
          <span className="text-6xl text-white font-black">-</span> <br />{" "}
          Présentation du service
        </div>
        {/* titre section */}
        <div className="mb-10">
          <img className="sm:w-[100%] sm:m-auto" src={Menuisier} alt="" />
          <p className="text-white sm:text-small mt-4">
            Trouve ton artisan est une plateforme web conçue pour faciliter la
            mise en relation entre les particuliers et les artisans de la région
            Auvergne-Rhône-Alpes. Ce service s’adresse à toute personne
            souhaitant trouver rapidement un professionnel de confiance, qu’il
            s’agisse de travaux dans le bâtiment, de services du quotidien, de
            fabrication artisanale ou d’alimentation. Le site permet en quelques
            clics : <br />
            <ul>
              <li className="mt-8">
                <span className="font-bold">De trouver un artisan :</span>de
                parcourir les artisans disponibles par catégorie ou via la barre
                de recherche,
              </li>
              <li className="mt-8">
                <span className="font-bold">De consulter les avis :</span>
                de consulter leur fiche détaillée (spécialité, localisation,
                note, description…),
              </li>
              <li className="mt-8">
                <span className="font-bold">De contacter facilement :</span>et
                de les contacter facilement grâce à un formulaire intégré.
              </li>
            </ul>
            Chaque artisan est référencé selon sa spécialité, elle-même
            rattachée à une catégorie principale. Cela garantit une navigation
            simple et intuitive pour l’utilisateur. Afin de garantir la qualité
            des services proposés, chaque fiche artisan met en avant les avis et
            notes, visibles directement sur le site.
          </p>
        </div>
      </section>
      {/* partie chiffres */}
      <section className="relative">
        {/* titre section */}
        <div className="absolute z-1 sm:left-10 sm:top-2 sm:text-2xl font-bold text-white p-4 bg-[#0074C7]">
          <span className="text-6xl text-white font-black">-</span> <br />{" "}
          Quelques chiffres
        </div>
        {/* titre section */}
        <img className="object-cover sm:h-170 " src={BgChiffre} alt="" />
        <div className="absolute w-full sm:top-[100px] left-0 p-4 text-center ">
          {/* glassmorphism */}
          <div className="flex flex-col gap-10 ">
            {/* carte chiffre */}
            <div className="flex">
              <div className="w-1/3 rounded-l-2xl text-center bg-[#F1F8FC] p-8 flex items-center justify-center">
                <p className="text-6xl font-bold">48H</p>
              </div>
              <div className="w-2/3 rounded-r-2xl bg-[#F1F8FC] flex items-center p-8">
                <p>
                  C’est le délai moyen pour obtenir une réponse après avoir
                  contacté un artisan via la plateforme.
                </p>
              </div>
            </div>
            {/* fin carte */}
            {/* carte chiffre */}
            <div className="flex">
              <div className="w-1/3 rounded-l-2xl text-center bg-[#F1F8FC] p-8 flex items-center justify-center">
                <p className="text-6xl font-bold">12</p>
              </div>
              <div className="w-2/3 rounded-r-2xl bg-[#F1F8FC] flex items-center p-8">
                <p>
                  départements couverts par la plateforme, représentant
                  l’ensemble du territoire régional.
                </p>
              </div>
            </div>
            {/* fin carte */}
            {/* carte chiffre */}
            <div className="flex">
              <div className="w-1/3 rounded-l-2xl text-center bg-[#F1F8FC] p-8 flex items-center justify-center">
                <p className="text-5xl font-bold">221,000</p>
              </div>
              <div className="w-2/3 rounded-r-2xl bg-[#F1F8FC] flex items-center p-8">
                <p>
                  Entreprises artisanales recensées dans la région
                  Auvergne-Rhône-Alpes en 2021.
                </p>
              </div>
            </div>
            {/* fin carte */}
          </div>
          {/* fin glassmorphism */}
        </div>
      </section>
      {/* avis */}
      <section className="bg-[#ebebeb] relative py-16">
        <div className="absolute z-1 sm:left-10 sm:top-2 sm:text-2xl font-bold text-white p-4 bg-[#0074C7]">
          <span className="text-6xl text-white font-black">-</span> <br />{" "}
          Quelques chiffres
        </div>
        <CarouselAvis />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Accueil;
