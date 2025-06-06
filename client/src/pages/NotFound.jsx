import { Link } from "react-router-dom";
import ErrorImg from "../../public/assets/images - background/error404.png";
const NotFound = () => {
  return (
    <div className=" mt-30 mb-15 flex flex-col gap-7 p-4 lg:px-20 ">
      <h1 className="text-3xl font-bold text-[#00497C] sm:text-4xl">
        Erreur 404
      </h1>
      <p>
        Cette page n'existe pas ! Elle n'a jamais franchi la ligne d'arrivée.
      </p>
      <img src={ErrorImg} alt="" />
      <p>© Région Auvergne-Rhône-Alpes Afficher la transcription</p>
      <Link
        className="bg-[#0074C7] py-4 px-8 w-fit text-[#fff] rounded-full"
        to="/"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
