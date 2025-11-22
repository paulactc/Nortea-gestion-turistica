import React from "react";
import "./Services.css";

const Services = () => {
  const onlineServices = [
    {
      icon: "📅",
      title: "Gestión de reservas",
      description: "Centralizamos canales, evitamos overbooking y mantenemos el calendario siempre sincronizado."
    },
    {
      icon: "📋",
      title: "Registro de viajeros",
      description: "Emisión y envío online conforme a la normativa vigente."
    },
    {
      icon: "🔍",
      title: "Perfil de Google",
      description: "Creación y gestión del perfil para posicionarte en búsquedas locales."
    },
    {
      icon: "✨",
      title: "Optimización de anuncios",
      description: "Mejoramos tus anuncios en Booking, Airbnb y otros portales con textos y fotos optimizadas."
    },
    {
      icon: "📊",
      title: "Precios dinámicos",
      description: "Ajustes diarios según demanda, ocupación, eventos locales y competencia."
    },
    {
      icon: "📈",
      title: "Análisis de huéspedes",
      description: "Estadísticas de ocupación y rendimiento, explicadas de forma clara."
    },
    {
      icon: "⭐",
      title: "Reputación online",
      description: "Respuesta profesional y cercana a todas las reseñas."
    },
    {
      icon: "💬",
      title: "Atención al huésped 360°",
      description: "Comunicación constante desde el primer contacto hasta el check-out, con guías y recomendaciones."
    },
    {
      icon: "🗺️",
      title: "Información turística",
      description: "Rutas, planes y consejos reales para mejorar la experiencia del viajero."
    },
  ];

  const flexibleServices = [
    {
      icon: "🧾",
      title: "Facturación segura",
      description: "Emisión de facturas con software homologado por la Agencia Tributaria (VeriFactu)."
    },
    
    {
      icon: "🔑",
      title: "Check-in / Check-out",
      description: "Procesos digitalizados de llegada y salida ágiles, con revisión del estado del alojamiento."
    },
    {
      icon: "🔧",
      title: "Mantenimiento básico",
      description: "Solución de pequeñas incidencias y coordinación con oficios."
    },
    {
      icon: "📸",
      title: "Fotografía profesional",
      description: "Mostramos el alma de tu alojamiento para destacar frente a la competencia."
    },
  ];

  return (
    <section className="services" id="servicios">
      <div className="services-container">
        <h1 className="services-main-title">Nuestros servicios</h1>

        {/* Gestión Online */}
        <div className="service-section">
          <div className="service-section__header">
            <h2 className="service-section__title">Gestión Online</h2>
            <p className="service-section__description">
              La opción ideal para propietarios que quieren optimizar la rentabilidad
              de su alojamiento sin complicarse. Nos ocupamos de toda la parte digital.
            </p>
          </div>

          <div className="service-section__grid">
            {onlineServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <div className="service-card__content">
                  <h4 className="service-card__title">{service.title}</h4>
                  <p className="service-card__description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="service-section__footer">
            <a href="#contacto" className="service-section__cta">
              Quiero la gestión online
            </a>
          </div>
        </div>

        {/* Gestión Flexible */}
        <div className="service-section service-section--flexible">
          <div className="service-section__header">
            <span className="service-section__badge service-section__badge--secondary">Servicios adicionales</span>
            <h2 className="service-section__title">Gestión Flexible</h2>
            <p className="service-section__description">
              Servicios complementarios que puedes añadir según tus necesidades.
              Personaliza tu plan de gestión.
            </p>
          </div>

          <div className="service-section__grid service-section__grid--small">
            {flexibleServices.map((service, index) => (
              <div key={index} className="service-card service-card--compact">
                <div className="service-card__icon">{service.icon}</div>
                <div className="service-card__content">
                  <h4 className="service-card__title">{service.title}</h4>
                  <p className="service-card__description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="service-section__footer">
            <button className="service-section__cta service-section__cta--secondary">
              Personalizar mi plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
