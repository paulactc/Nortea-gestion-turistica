import { MessageCircle, Home, FileSearch, Settings, Handshake } from "lucide-react";
import "./HowWeWork.css";

const HowWeWork = () => {
  const steps = [
    {
      icon: <MessageCircle size={32} strokeWidth={1.5} />,
      title: "Primera conversación",
      description: "Hablamos contigo para entender tu alojamiento, tu situación actual y lo que quieres mejorar.",
      number: "01"
    },
    {
      icon: <Home size={32} strokeWidth={1.5} />,
      title: "Visita al alojamiento",
      description: "Vamos a verlo en persona. Tomamos nota de puntos fuertes, detalles a mejorar y necesidades reales.",
      number: "02"
    },
    {
      icon: <FileSearch size={32} strokeWidth={1.5} />,
      title: "Revisión y propuesta",
      description: "Analizamos los anuncios, la estrategia de precios y la forma en que tu alojamiento aparece en las plataformas. A partir de ahí te presentamos una propuesta sencilla, sensata y adaptada a tu caso.",
      number: "03"
    },
    {
      icon: <Settings size={32} strokeWidth={1.5} />,
      title: "Puesta a punto",
      description: "Actualizamos textos, imágenes, precios y calendario. Dejamos lista la comunicación con huéspedes y el check-in online.",
      number: "04"
    },
    {
      icon: <Handshake size={32} strokeWidth={1.5} />,
      title: "Gestión diaria",
      description: "Tú mantienes el espacio y nosotros cuidamos la gestión, la visibilidad y la experiencia.",
      number: "05"
    },
  ];

  return (
    <section className="how-we-work" id="como-trabajamos">
      <div className="how-we-work__container">
        <h2 className="how-we-work__title">Cómo trabajamos</h2>

        <div className="timeline">
          <div className="timeline-line"></div>
          {steps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-number">{step.number}</div>
                <div className="timeline-icon">{step.icon}</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-we-work__cta-container">
          <a href="#contacto" className="how-we-work__cta">
            Quiero mi evaluación gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
