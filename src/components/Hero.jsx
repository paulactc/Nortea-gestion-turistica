import React from "react";
import "./Hero.css";
import imagenHero from "../assets/foto1.3.jpg";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <img src={imagenHero} alt="Hero" className="hero__image" />
      <div className="hero__overlay"></div>
      <div className="hero__container">
        {/* Contenedor de textos */}
        <div className="hero__text-wrapper">
          <div className="hero__content">
            <h1 className="hero__title">
              GESTIÓN DE<br />
              ALOJAMIENTOS TURÍSTICOS
            </h1>
            <h2 className="hero__location">
              ASTURIAS
            </h2>
            <p className="hero__subtitle">
              La tranquilidad de una gestión cuidada.
            </p>
          </div>
        </div>

        {/* Contenedor de botones */}
        <div className="hero__buttons-wrapper">
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
