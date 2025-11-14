import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="nosotros">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">¿Por Qué Elegirnos?</h2>
          <p className="about-intro">
            En NORTEA GESTION LOGISTICA ayudamos a propietarios del Oriente de Asturias —en zonas como Cangas de Onís, Parres y Onís— a sacar el máximo rendimiento a sus alojamientos turísticos.
          </p>
          <p className="about-intro">
            Nos encargamos de la gestión online, la coordinación de servicios, la atención al huésped y todos los aspectos operativos que garantizan una experiencia excelente tanto para el propietario como para el viajero.
          </p>
          <p className="about-intro">
            Tú decides hasta dónde quieres delegar; nosotros nos ocupamos del resto.
          </p>
          <div className="about-features">
            <div className="feature">
              <h3 className="feature-title">Experiencia Comprobada</h3>
              <p className="feature-description">
                No somos nuevos en el tema. Llevamos más de 15 años gestionando
                alojamientos turísticos y ya hemos visto de todo. Sabemos qué
                funciona, qué no, y cómo sacarle el máximo jugo a cada
                propiedad. Tu casa va a estar en manos que saben lo que hacen,
                te lo prometemos.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Contigo ,de Tú a Tú</h3>
              <p className="feature-description">
                Aquí no hay plantillas ni soluciones en serie. Cada casa tiene
                su rollo y cada dueño tiene sus ideas, y nos parece genial. Nos
                sentamos contigo, te escuchamos, y creamos un plan que vaya con
                tu estilo y tus objetivos. Para nosotros eres parte del equipo,
                no un número más en una lista.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Tecnología Avanzada</h3>
              <p className="feature-description">
                amos las mejores herramientas para que todo funcione como un
                reloj: sincronización automática con todas las plataformas,
                gestión de precios inteligente, calendarios siempre
                actualizados... Pero tú no tienes que tocar nada de eso. La
                tecnología trabaja en segundo plano mientras tú vives tranquilo.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Transparencia Total</h3>
              <p className="feature-description">
                Puedes ver cómo va tu propiedad cuando quieras, desde donde
                quieras. Te mandamos informes cada mes, estamos siempre
                disponibles para hablar, y si tienes dudas, las resolvemos al
                momento. Trabajamos codo con codo, porque tu confianza es lo más
                importante para nosotros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
