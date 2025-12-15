import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import CategorySelection from "./components/CategorySelection";
import OneBedroom from "./components/OneBedroom";
import TwoBedroom from "./components/TwoBedroom";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alojamientos" element={<><CategorySelection /><Contact /></>} />
          <Route path="/alojamientos/1-dormitorio" element={<><OneBedroom /><Contact /></>} />
          <Route path="/alojamientos/2-dormitorios" element={<><TwoBedroom /><Contact /></>} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
