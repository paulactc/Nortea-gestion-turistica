import React, { useRef, useState } from "react";
import { MessageCircle, Home, FileSearch, Settings, Handshake } from "lucide-react";
import "./HowWeWork.css";

const HowWeWork = () => {
  const wrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  // Manejo de arrastre con mouse - pausa la animación mientras arrastra
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (wrapperRef.current) {
      const transform = window.getComputedStyle(wrapperRef.current).transform;
      if (transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        setScrollLeft(matrix.m41);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = (x - startX) * 1.5;
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateX(${scrollLeft + walk}px)`;
    }
  };

  // Manejo de arrastre táctil
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    if (wrapperRef.current) {
      const transform = window.getComputedStyle(wrapperRef.current).transform;
      if (transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        setScrollLeft(matrix.m41);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 1.5;
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateX(${scrollLeft + walk}px)`;
    }
  };

  return (
    <section className="how-we-work" id="como-trabajamos">
      <div className="how-we-work__container">
        <h2 className="how-we-work__title">Cómo trabajamos</h2>

        {/* Carrusel de pasos */}
        <div
          className="carousel"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div
            ref={wrapperRef}
            className={`carousel__wrapper ${isDragging ? 'paused' : ''}`}
          >
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
