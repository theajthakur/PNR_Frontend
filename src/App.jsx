import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/header/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About"; // Ensure this component exists
import Contact from "./components/pages/Contact"; // Ensure this component exists
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tnc from "./components/pages/Tnc";
import Network from "./components/loaders/Network";

function App() {
  return (
    <Router basename="/PNR_Frontend">
      <>
        <Navbar />
        <Network />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms-conditions" element={<Tnc />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
