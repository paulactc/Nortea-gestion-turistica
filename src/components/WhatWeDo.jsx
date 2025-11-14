import React from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <section className="what-we-do" id="que-hacemos">
      <div className="what-we-do__container">
        <h2 className="what-we-do__title">Qué hacemos</h2>
        <p className="what-we-do__description">
          Gestionamos tu alojamiento con procesos profesionales y trato cercano:
          más ocupación, precios optimizados y huéspedes atendidos de principio a fin,
          sin que tengas que preocuparte de nada.
        </p>

        <div className="what-we-do__features">
          <div className="what-we-do__feature">
            <div className="what-we-do__feature-icon">
              ⏰
            </div>
            <p className="what-we-do__feature-text">
              +10 años gestionando alojamientos en Asturias
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
      </div>
    </section>
  );
};

export default WhatWeDo;
