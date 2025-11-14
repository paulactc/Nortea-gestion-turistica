import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Gestión de Reservas",
      description:
        "Optimizamos tus reservas en múltiples plataformas como Airbnb y Booking. Maximiza tu ocupación y tus ingresos con nuestra gestión profesional y calendar inteligente.",
      icon: "📅",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    },
    {
      id: 2,
      title: "Limpieza y Mantenimiento",
      description:
        "Sabemos que tu casa es tu tesoro, y la cuidamos como tal. Limpieza a fondo después de cada huésped, mantenimiento regular para que todo funcione perfectamente, y ojo avizor para detectar cualquier detallito antes de que se convierta en problema. Tus huéspedes siempre encontrarán todo impecable, como recién estrenado.",
      icon: "✨",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070",
    },
    {
      id: 3,
      title: "Atención al Huésped",
      description:
        "Estamos siempre disponibles para tus huéspedes, de día y de noche. Les ayudamos con el check-in, les contamos dónde está el mejor restaurante del pueblo, les recomendamos esa ruta de senderismo que no sale en las guías, y si surge cualquier cosa, lo solucionamos al momento. Tratamos a cada huésped como nos gustaría que nos trataran a nosotros. Así conseguimos que se vayan encantados y vuelvan con amigos.",
      icon: "💬",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
    },
    {
      id: 4,
      title: "Marketing y Fotografía",
      description:
        "Vamos a hacer que tu alojamiento brille. Fotos preciosas que hagan justicia a tu espacio, textos que enganchen y den ganas de reservar ya, y un posicionamiento que haga que te encuentren fácilmente. No se trata de ser el más barato, sino el que más apetece. Queremos que cuando alguien vea tu alojamiento piense: Quiero ir!.",
      icon: "📸",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070",
    },
    {
      id: 5,
      title: "Gestión Financiera",
      description:
        "Nada de sorpresas ni letra pequeña. Cada mes te mandamos un informe clarito con todo: cuánto has ganado, en qué se ha gastado, cómo va la rentabilidad. Todo a la vista. Y si ves algo raro o quieres optimizar algo, hablamos y buscamos la mejor solución juntos. Tus resultados son nuestros resultados y  queremos que lo veas crecer mes a mes.",
      icon: "💰",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011",
    },
    {
      id: 6,
      title: "Experiencia de Bienvenida que Enamora",
      description:
        "El primer momento marca la diferencia. Recibimos a cada huésped con un kit de bienvenida cuidadosamente seleccionado: productos locales auténticos, una guía personalizada de la zona con nuestras recomendaciones favoritas, y esos pequeños detalles que sorprenden y emocionan. Creamos experiencias que los viajeros querrán compartir, recordar y repetir. Valoraciones excepcionales garantizadas.",
      icon: "🎁",
      image:
        "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070",
    },
  ];

  return (
    <section className="services" id="servicios">
      <div className="services-container">
        <h2 className="services-title">Nuestros Servicios</h2>
        <p className="services-intro">
          Soluciones completas para la gestión de tu propiedad turística
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card__image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card__image"
                />
              </div>
              <div className="service-card__content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
