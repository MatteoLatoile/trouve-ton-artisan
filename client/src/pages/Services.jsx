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
    <div className="mt-25 relative">
      <div className="absolute sm:left-10 sm:top-2 sm:text-2xl font-bold text-[#0074C7] p-4 bg-[#fff]">
        <span className="text-6xl text-[#0074C7] font-black">-</span> <br />
        Choisissez votre service
      </div>
      <div
        className="
      bg-[#F1F8FC] overflow-hidden rounded-full w-150 h-150 left-[-100px] top-[-200px] z-[-999] absolute sm:left-[-100px] sm:w-200 sm:h-160 md:left-[-15px] md:w-250 md:h-150 lg:w-275 xl:hidden"
      ></div>
      <section className="mt-30">
        <div className=" justify-center m-auto gap-1 flex-wrap flex mt-30 text-white px-2 py-10">
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
      <section className="mt-30 relative mb-20">
        <div className="absolute sm:left-10 sm:top-[-30px] sm:text-2xl font-bold text-white p-4 bg-[#0074C7]">
          <span className="text-6xl text-[#fff] font-black">-</span> <br />
          Tous nos artisans
        </div>
        <Artisant />
      </section>
    </div>
  );
};

export default Services;
