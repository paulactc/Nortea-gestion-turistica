import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Services from "./components/Services";
import About from "./components/About";
import HowWeWork from "./components/HowWeWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <WhatWeDo />
      <Services />
      <About />
      <HowWeWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
