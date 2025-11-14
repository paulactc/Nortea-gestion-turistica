import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Accommodations from "./components/Accommodations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Accommodations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
