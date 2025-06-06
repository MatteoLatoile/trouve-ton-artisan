import { Route, Routes } from "react-router-dom";
import Footer from "./composant/Footer";
import Header from "./composant/Header";
import Accueil from "./pages/Accueil";
import Alimentation from "./pages/Alimentation";
import Batiment from "./pages/Batiment";
import Fabrication from "./pages/Fabrication";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/batiment" element={<Batiment />} />
        <Route path="/services/fabrication" element={<Fabrication />} />
        <Route path="/services/alimentation" element={<Alimentation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
