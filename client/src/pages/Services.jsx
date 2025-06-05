import { useEffect } from "react";
import Artisant from "../composant/Artisant";

const Services = () => {
  useEffect(() => {
    document.title = "Services - Trouve ton artisan";
  }, []);
  return (
    <div>
      <Artisant />
    </div>
  );
};

export default Services;
