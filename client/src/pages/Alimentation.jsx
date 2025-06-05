import { useEffect } from "react";

const Alimentation = () => {
  useEffect(() => {
    document.title = "Alimentation - Trouve ton artisan";
  }, []);
  return <div>Alimentation</div>;
};

export default Alimentation;
