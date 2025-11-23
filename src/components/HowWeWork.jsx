import React from "react";
import "./HowWeWork.css";

const HowWeWork = () => {
  const steps = [
    {
      number: "1",
      icon: "🗣️",
      title: "Primera conversación",
      description: "Hablamos contigo para entender tu alojamiento,tu situacción actual y lo que quieres mejorar.",
    },
    {
      number: "2",
      icon: "🏡",
      title: "Visita al alojamiento",
      description: "Vamos a verlo en persona.Tomamos nota de puntos fuertes,detalles a mejorar y necesidades reales.",
    },
    {
      number: "3",
      icon: "🗎✔️",
      title: "Revisión y propuesta",
      description: "Analizamos los anuncios, la etrategía de precios y la forma en que tu alojamiento aparece en las plataformas. A partir de ahí te presentamos una propuesta sencilla ,sensata y adaptada a tu caso. ",
    },
    {
      number: "4",
      icon: "🔝",
      title: "Puesta a punto",
      description: "Actualizamos textos,imagenes,precios y calendario.Dejamos lista la comunicación con huespedes y el check-in on-line",
    },
    {
      number: "5",
      icon: "🤝",
      title: "Gestión diaria",
      description: "Tu mantienes el espacio y nosotros cuidamos la gestión , la visibilidad y la experiencia.",
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
              <div className="step__icon">{step.icon}</div>
              <div className="step__content">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#contacto" className="how-we-work__cta">
          Quiero mi evaluación gratuita
        </a>
      </div>
    </section>
  );
};

export default HowWeWork;
