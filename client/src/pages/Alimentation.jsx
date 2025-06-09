import Artisant from "../composant/Artisant";

const Alimentation = () => {
  return (
    <div className="mt-25 relative">
      <div className="absolute z-1 sm:left-10 sm:top-2 sm:text-2xl font-bold text-white p-4 bg-[#0074C7]">
        <span className="text-6xl text-white font-black">-</span> <br />
        Alimentation
      </div>
      <Artisant />
    </div>
  );
};

export default Alimentation;
