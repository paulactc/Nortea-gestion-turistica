import React from "react";
import { MessageCircle, Home, FileSearch, Settings, Handshake } from "lucide-react";
import "./HowWeWork.css";

const HowWeWork = () => {
  const steps = [
    {
      icon: <MessageCircle size={28} strokeWidth={1.5} />,
      title: "Primera conversación",
      description: "Hablamos contigo para entender tu alojamiento,tu situacción actual y lo que quieres mejorar.",
    },
    {
      icon: <Home size={28} strokeWidth={1.5} />,
      title: "Visita al alojamiento",
      description: "Vamos a verlo en persona.Tomamos nota de puntos fuertes,detalles a mejorar y necesidades reales.",
    },
    {
      icon: <FileSearch size={28} strokeWidth={1.5} />,
      title: "Revisión y propuesta",
      description: "Analizamos los anuncios, la etrategía de precios y la forma en que tu alojamiento aparece en las plataformas. A partir de ahí te presentamos una propuesta sencilla ,sensata y adaptada a tu caso. ",
    },
    {
      icon: <Settings size={28} strokeWidth={1.5} />,
      title: "Puesta a punto",
      description: "Actualizamos textos,imagenes,precios y calendario.Dejamos lista la comunicación con huespedes y el check-in on-line",
    },
    {
      icon: <Handshake size={28} strokeWidth={1.5} />,
      title: "Gestión diaria",
      description: "Tu mantienes el espacio y nosotros cuidamos la gestión , la visibilidad y la experiencia.",
    },
  ];

  return (
    <section className="how-we-work" id="como-trabajamos">
      <div className="how-we-work__container">
        <h2 className="how-we-work__title">Cómo trabajamos</h2>

        {/* Carrusel de pasos */}
        <div className="carousel">
          <div className="carousel__wrapper">
            {steps.map((step, index) => (
              <div key={index} className="carousel__step">
                <div className="carousel__icon">{step.icon}</div>
                <h3 className="carousel__title">{step.title}</h3>
                <p className="carousel__description">{step.description}</p>
              </div>
            ))}
            {/* Duplicar para efecto infinito */}
            {steps.map((step, index) => (
              <div key={`duplicate-${index}`} className="carousel__step">
                <div className="carousel__icon">{step.icon}</div>
                <h3 className="carousel__title">{step.title}</h3>
                <p className="carousel__description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <a href="#contacto" className="how-we-work__cta">
          Quiero mi evaluación gratuita
        </a>
      </div>
    </section>
  );
};

export default HowWeWork;
