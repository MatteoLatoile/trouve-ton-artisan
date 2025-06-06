import { useEffect } from "react";
import { Link } from "react-router-dom";
import Alimention from "../../public/assets/icon/alimentation.png";
import Batiment from "../../public/assets/icon/batiment.png";
import Fab from "../../public/assets/icon/fab.png";
import Artisant from "../composant/Artisant";

const Services = () => {
  useEffect(() => {
    document.title = "Services - Trouve ton artisan";
  }, []);
  return (
    <div>
      <div className="bg-[#F1F8FC] rounded-full w-150 h-150 left-[-100px] top-[-200px] z-[-999] absolute"></div>
      <section>
        <div className=" justify-center gap-1 flex-wrap flex mt-30 text-white px-2 py-10">
          <Link
            className="bg-[#0074C7] rounded-2xl text-center py-4 m-1 w-1/3 align-middle "
            to="/services/fabrication"
          >
            <img className="w-[50%] m-auto mb-2" src={Fab} alt="" />
            <p className="font-bold">Fabrications</p>
          </Link>
          <Link
            to="/services/alimentation"
            className="bg-[#0074C7] rounded-2xl text-center py-4 m-1 w-1/3 align-middle "
          >
            <img className="w-[50%] m-auto mb-2" src={Alimention} alt="" />
            <p className="font-bold">Alimentation</p>
          </Link>
          <Link
            to="/services/batiment"
            className="bg-[#0074C7] rounded-2xl text-center py-4 m-1 w-1/3 align-middle "
          >
            <img className="w-[50%] m-auto mb-2" src={Batiment} alt="" />
            <p className="font-bold">Bâtiment</p>
          </Link>
        </div>
      </section>
      <Artisant />
    </div>
  );
};

export default Services;
