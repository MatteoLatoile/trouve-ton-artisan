import { useEffect } from "react";

const Batiment = () => {
  useEffect(() => {
    document.title = "Batiment - Trouve ton artisan";
  }, []);
  return <div>Batiment</div>;
};

export default Batiment;
