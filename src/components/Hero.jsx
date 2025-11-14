import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero__overlay"></div>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Gestión profesional de alojamientos turísticos en Asturias
          </h1>
          <p className="hero__subtitle">
            Nos ocupamos de cada detalle para que tu alojamiento funcione con
            eficacia, calidad y resultados.
          </p>
          <p className="hero__intro">
            Impulsamos tu alojamiento con una gestión eficiente, transparente y
            cuidada, combinando cercanía y profesionalidad en cada detalle.
          </p>
          <div className="hero__cta-group">
            <button className="hero__cta hero__cta--primary">
              Consultanos
            </button>
            <button className="hero__cta hero__cta--secondary">
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
