import { useEffect } from "react";

const Fabrication = () => {
  useEffect(() => {
    document.title = "Fabrications - Trouve ton artisan";
  }, []);
  return <div>Fabrication</div>;
};

export default Fabrication;
