import Bubble from "../../public/assets/images - background/bublle.svg";
import HeroHome from "../composant/HeroHome";

const Accueil = () => {
  return (
    <div>
      <HeroHome />
      <img className="absolute left-0 top-0" src={Bubble} alt="" />
      <section className="bg-[#00497C]">
        <div>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ex
            voluptatem odit earum iure eius asperiores aliquam necessitatibus
            ullam impedit dignissimos vitae eos dolores praesentium voluptatibus
            aperiam architecto, eligendi dolorem!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
