import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero__overlay"></div>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Gestión Profesional<br />
            Alojamientos Turísticos
          </h1>
          <h2 className="hero__location">
            ASTURIAS
          </h2>
          <p className="hero__subtitle">
            La tranquilidad de una gestión cuidada.
          </p>

          <div className="hero__cta-group">
            <a href="#contacto" className="hero__cta hero__cta--primary">
              Quiero mejorar mi alojamiento
            </a>
            <a href="#servicios" className="hero__cta hero__cta--secondary">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
