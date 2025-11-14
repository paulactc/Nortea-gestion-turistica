import React from "react";
import "./HowWeWork.css";

const HowWeWork = () => {
  const steps = [
    {
      number: "1",
      title: "Evaluación gratuita de tu alojamiento",
      description: "Analizamos tu presencia online, precios, fotos y reputación.",
    },
    {
      number: "2",
      title: "Propuesta personalizada",
      description: "Te presentamos mejoras y un plan adaptado a tu alojamiento.",
    },
    {
      number: "3",
      title: "Puesta en marcha",
      description: "Optimizamos anuncios, creamos tu perfil de Google y activamos los canales.",
    },
    {
      number: "4",
      title: "Gestión continua",
      description: "Nos ocupamos de la operativa diaria, atención al huésped y precios dinámicos.",
    },
    {
      number: "5",
      title: "Seguimiento constante",
      description: "Informes periódicos y comunicación directa contigo para ajustar estrategias.",
    },
  ];

  return (
    <section className="how-we-work" id="como-trabajamos">
      <div className="how-we-work__container">
        <h2 className="how-we-work__title">Cómo trabajamos</h2>

        <div className="how-we-work__steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step__number">{step.number}</div>
              <div className="step__content">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="how-we-work__cta">
          Quiero mi evaluación gratuita
        </button>
      </div>
    </section>
  );
};

export default HowWeWork;
