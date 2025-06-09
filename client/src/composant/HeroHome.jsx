import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Hero from "../../public/assets/images - background/hero.jpg";

// Register the plugin
gsap.registerPlugin(SplitText);

const HeroHome = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(".hero-line", { type: "lines" });

      gsap.from(split.lines, {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full">
      <img
        className="h-full w-full object-cover"
        src={Hero}
        alt="Image de fond"
      />

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="text-white text-center p-8 rounded-lg md:w-full md:mx-4 lg:w-1/2">
          <h1 className="hero-line sm:text-3xl lg:text-5xl lg:tracking-[-2px] font-bold mb-4">
            Trouvez facilement un artisan local en Auvergne-Rhône-Alpes
          </h1>
          <h2 className="hero-line sm:text-sm lg:text-l my-6">
            Une plateforme régionale pour entrer en contact direct avec les
            artisans près de chez vous : demande de devis, prestations ou simple
            renseignement, en quelques clics.
          </h2>
          <Link to="/services">
            <button className="bg-[#0074C7] hover:bg-[#00497C] sm:px-20 py-2 rounded-full text-white mb-2">
              Trouver des artisans
            </button>
          </Link>
          <p className="text-sm my-2">Vous êtes artisan ?</p>
          <Link to="/register">
            <button className="border-2 border-white sm:px-15 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
              Rejoindre la plateforme
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
