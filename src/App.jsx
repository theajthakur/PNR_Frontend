import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/header/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About"; // Ensure this component exists
import Contact from "./components/pages/Contact"; // Ensure this component exists
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tnc from "./components/pages/Tnc";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/PNR_Frontend/" element={<Home />} />
          <Route path="/PNR_Frontend/about" element={<About />} />
          <Route path="/PNR_Frontend/terms-conditions" element={<Tnc />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
