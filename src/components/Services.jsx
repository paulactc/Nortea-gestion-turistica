import React from "react";
import "./Services.css";

const Services = () => {
  const onlineServices = [
    "Gestión de reservas. Centralizamos canales, evitamos overbooking y mantenemos el calendario siempre sincronizado.",
    "Registro de viajeros. Emisión y envío online conforme a la normativa vigente.",
    "Creación y gestión del perfil de Google. Te posicionamos en las búsquedas locales.",
    "Optimización de anuncios. Evaluamos y mejoramos tus anuncios en Booking, Airbnb y otros portales, con textos y fotos optimizadas.",
    "Precios dinámicos. Ajustes diarios según demanda, ocupación, eventos locales y competencia.",
    "Análisis de huéspedes. Estadísticas de ocupación y rendimiento, explicadas de forma clara.",
    "Reputación online. Respuesta profesional y cercana a todas las reseñas.",
    "Atención al huésped 360°. Comunicación constante desde el primer contacto hasta el check-out, con guías prácticas y recomendaciones locales.",
    "Información turística local. Rutas, planes y consejos reales para mejorar la experiencia del viajero.",
  ];

  const flexibleServices = [
    "Facturación segura (VeriFactu). Emisión de facturas con software homologado por la Agencia Tributaria.",
    "Limpieza profesional. Coordinación integral y control de calidad: tu alojamiento impecable en cada estancia.",
    "Lavandería y lencería. Gestión del cambio y stock de ropa de cama y baño, con control de plazos y calidad.",
    "Check-in / Check-out digitalizados. Procesos de llegada y salida ágiles, con revisión del estado del alojamiento tras la salida de cada huésped.",
    "Mantenimiento básico. Solución de pequeñas incidencias y coordinación con oficios.",
    "Fotografías atractivas y visuales. Mostramos el alma de tu alojamiento para destacar frente a la competencia.",
  ];

  return (
    <section className="services" id="servicios">
      <div className="services-container">
        <h1 className="services-main-title">Nuestros servicios</h1>

        {/* Gestión Online */}
        <div className="service-section">
          <h2 className="service-section__title">Gestión Online</h2>
          <p className="service-section__description">
            La opción ideal para propietarios que quieren optimizar la rentabilidad
            de su alojamiento sin complicarse.
          </p>
          <p className="service-section__description">
            Nos ocupamos de toda la parte digital, mejorando la visibilidad, la
            reputación y la conversión de tus anuncios.
          </p>

          <h3 className="service-section__subtitle">Incluye:</h3>
          <ul className="service-section__list">
            {onlineServices.map((service, index) => (
              <li key={index} className="service-section__list-item">
                {service}
              </li>
            ))}
          </ul>

          <button className="service-section__cta">
            Quiero la gestión online
          </button>
        </div>

        {/* Gestión Flexible */}
        <div className="service-section service-section--flexible">
          <h2 className="service-section__title">Gestión Flexible</h2>
          <p className="service-section__description">
            Nos adaptamos a las necesidades de cada propietario, ofreciendo servicios
            adicionales que completan la gestión online y te permiten delegar solo lo
            que necesites.
          </p>

          <h3 className="service-section__subtitle">Servicios disponibles:</h3>
          <ul className="service-section__list">
            {flexibleServices.map((service, index) => (
              <li key={index} className="service-section__list-item">
                {service}
              </li>
            ))}
          </ul>

          <button className="service-section__cta service-section__cta--secondary">
            Solicitar una propuesta personalizada
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
