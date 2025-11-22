import React from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <section className="what-we-do" id="que-hacemos">
      <div className="what-we-do__container">
        <h2 className="what-we-do__title">Qué hacemos</h2>
        <p className="what-we-do__description">
          Gestionamos alojamientos rurales en Asturias con profesionalidad y trato cercano.
          Ponemos en valor tu alojamiento,acompañamos a tus huéspedes y te ayudamos a aumentar las reservas sin perder la esencia del lugar de forma sencilla.
        </p>

        <div className="what-we-do__features">
          <div className="what-we-do__feature">
            <div className="what-we-do__feature-icon">
              ⏰
            </div>
            <p className="what-we-do__feature-text">
              Mas de 10 años gestionando alojamientos en Asturias
            </p>
          </div>

          <div className="what-we-do__feature">
            <div className="what-we-do__feature-icon">
              💬
            </div>
            <p className="what-we-do__feature-text">
              Atención y respuesta continua, 365 días al año
            </p>
          </div>

          <div className="what-we-do__feature">
            <div className="what-we-do__feature-icon">
              📈
            </div>
            <p className="what-we-do__feature-text">
              Precios actualizados a diario según la demanda
            </p>
          </div>

          <div className="what-we-do__feature">
            <div className="what-we-do__feature-icon">
              📊
            </div>
            <p className="what-we-do__feature-text">
              Transparencia total: informes claros y comunicación constante
            </p>
          </div>
        </div>

        <a href="#servicios" className="what-we-do__cta">
          Ver servicios
        </a>
      </div>
    </section>
  );
};

export default WhatWeDo;
