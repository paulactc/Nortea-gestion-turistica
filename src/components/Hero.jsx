import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero__overlay"></div>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Gestión profesional<br />
            Alojamientos turísticos
          </h1>
          <h2 className="hero__location">
            ASTURIAS
          </h2>
          <p className="hero__subtitle">
            Cuidamos de tu alojamiento como si fuera nuestro
          </p>

          <div className="hero__cta-group">
            <button className="hero__cta hero__cta--primary">
              Quiero mejorar mi alojamiento
            </button>
            <button className="hero__cta hero__cta--secondary">
              Ver servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
