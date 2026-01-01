import React, { useState } from "react";
import { MessageCircle, Home, FileSearch, Settings, Handshake, ChevronLeft, ChevronRight } from "lucide-react";
import "./HowWeWork.css";

const HowWeWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      icon: <MessageCircle size={28} strokeWidth={1.5} />,
      title: "Primera conversación",
      description: "Hablamos contigo para entender tu alojamiento, tu situación actual y lo que quieres mejorar.",
    },
    {
      icon: <Home size={28} strokeWidth={1.5} />,
      title: "Visita al alojamiento",
      description: "Vamos a verlo en persona. Tomamos nota de puntos fuertes, detalles a mejorar y necesidades reales.",
    },
    {
      icon: <FileSearch size={28} strokeWidth={1.5} />,
      title: "Revisión y propuesta",
      description: "Analizamos los anuncios, la estrategia de precios y la forma en que tu alojamiento aparece en las plataformas. A partir de ahí te presentamos una propuesta sencilla, sensata y adaptada a tu caso.",
    },
    {
      icon: <Settings size={28} strokeWidth={1.5} />,
      title: "Puesta a punto",
      description: "Actualizamos textos, imágenes, precios y calendario. Dejamos lista la comunicación con huéspedes y el check-in online.",
    },
    {
      icon: <Handshake size={28} strokeWidth={1.5} />,
      title: "Gestión diaria",
      description: "Tú mantienes el espacio y nosotros cuidamos la gestión, la visibilidad y la experiencia.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(steps.length - 1, prev + 1));
  };

  // Calcular cuántas tarjetas se pueden desplazar
  const maxIndex = steps.length - 3; // Máximo 3 tarjetas visibles en desktop

  return (
    <section className="how-we-work" id="como-trabajamos">
      <div className="how-we-work__container">
        <h2 className="how-we-work__title">Cómo trabajamos</h2>

        {/* Carrusel con flechas - Simple y claro */}
        <div className="steps-carousel">
          <button
            className="carousel-arrow carousel-arrow--left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Anterior"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-container"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {steps.map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-card__icon">{step.icon}</div>
                  <h3 className="step-card__title">{step.title}</h3>
                  <p className="step-card__description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-arrow carousel-arrow--right"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Siguiente"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Indicadores de posición */}
        <div className="carousel-dots">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a la posición ${index + 1}`}
            />
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
