import React from "react";
import {
  Calendar,
  FileText,
  ClipboardList,
  Search,
  Sparkles,
  TrendingUp,
  Star,
  CheckCircle,
  Puzzle,
  Eye,
  Camera
} from "lucide-react";
import "./Services.css";

const Services = () => {
  const onlineServices = [
    {
      icon: <Camera size={24} />,
      title: "Reportaje fotográfico",
      description: "Mostramos el alojamiento de forma clara y cuidada",
      color: "pink"
    },
    {
      icon: <Search size={24} />,
      title: "Perfil de Google",
      description: "Creación y gestión del perfil para posicionarte en búsquedas locales.",
      color: "orange"
    },
    {
      icon: <Sparkles size={24} />,
      title: "Optimización de anuncios",
      description: "Mejoramos tus anuncios en Booking, Airbnb y otros portales con textos y fotos optimizadas.",
      color: "purple"
    },

    {
      icon: <Calendar size={24} />,
      title: "Gestión de reservas",
      description: "Centralizamos canales, evitamos overbooking y mantenemos el calendario siempre sincronizado.",
      color: "blue"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Precios dinámicos",
      description: "Ajustes diarios según demanda, ocupación, eventos locales y competencia.",
      color: "gold"
    },
     {
      icon: <ClipboardList size={24} />,
      title: "Registro de viajeros",
      description: "Emisión y envío online conforme a la normativa vigente.",
      color: "teal"
    },
    
    {
      icon: <FileText size={24} />,
      title: "Facturación Verifactu integrada",
      description: "Cumplimos con la normativa verifactu para que para que todo sea seguro,legal y automatizado.",
      color: "coral"
    },
   
    
    
    {
      icon: <Star size={24} />,
      title: "Reputación online",
      description: "Respuesta profesional y cercana a todas las reseñas.",
      color: "cyan"
    },
    
  ];

  const flexibleServices = [
    {
      icon: <CheckCircle size={24} />,
      title: "Organización",
      description: "Avisamos, cuadramos y confirmamos con tus proveedores.",
      color: "blue"
    },

    {
      icon: <Puzzle size={24} />,
      title: "Coordinación",
      description: "Coordinamos limpieza,lavandería y horarios de entrada/salida.",
      color: "purple"
    },
    {
      icon: <Search size={24} />,
      title: "Seguimiento",
      description: "Seguimos el calendario operativo para que nada quede suelto.",
      color: "orange"
    },
    {
      icon: <Eye size={24} />,
      title: "Supervisión",
      description: "Sin ejecucción física , solo organización, avisos y seguimientos",
      color: "teal"
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
              de su alojamiento sin complicarse. Nos ocupamos de toda la parte digital y de la comercialización online:presencia en los principales portales (Booking,Airbnb, Escapada Rural..)control de reservas,precios y visibilidad para atraer más huespedes.
            </p>
          </div>

          <div className="service-section__grid">
            {onlineServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className={`service-card__icon service-card__icon--${service.color}`}>{service.icon}</div>
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

       
       
      </div>
    </section>
  );
};

export default Services;
