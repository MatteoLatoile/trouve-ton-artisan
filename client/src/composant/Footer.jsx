import Bubble from "../../public/assets/images - background/bublle.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-[#0074C7] flex justify-between flex-wrap relative  text-white p-6 ">
          <img
            className="absolute left-0 top-[-40px] lg:top-[-88px] z-1"
            src={Bubble}
            alt=""
          />
          <div className="w-full mt-7 mb-6">
            <p>
              Conseil régional <br /> Auvergne-Rhône-Alpes
            </p>{" "}
          </div>
          <div className="w-1/2">
            <h4>Lyon</h4> <br />
            <p>
              101 cours Charlemagne <br />
              CS 20033 <br /> 69269 LYON CEDEX 02 <br /> France <br /> +33 (0)4
              26 73 40 00
            </p>{" "}
          </div>
          <div className="w-1/2">
            <h4>Clermont-Ferrand</h4> <br />
            <p>
              59 boulevard Léon Jouhaux <br />
              CS 90706 <br /> 63050 CLERMONT-FERRAND 02 <br /> France <br /> +33
              (0)4 26 73 40 00
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
