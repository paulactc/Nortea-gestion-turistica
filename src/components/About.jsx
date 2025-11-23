import React from "react";
import "./About.css";
import imagenFondo from "../assets/imagen.jpg";

const About = () => {
  return (
    <section
      className="about"
      id="nosotros"
      style={{ backgroundImage: `url(${imagenFondo})` }}
    >
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Nuestra mirada</h2>
          <p className="about-intro-main">
            En Nortea creemos que la gestión turística no es solo cuestión de calendarios y plataformas.
            Es acompañar lugares que tiene alma y hacer que quienes llegan puedan disfrutar del lugar como merecen.
          </p>
          <p className="about-intro-main">
            Nuestra forma de trabajar es sencilla: cercanía,organización y cuidado de cada detalle.
            Observamos cada alojamiento como un espacio único,
            con su luz, su historía y su forma de ser vivido.
          </p>
          <p className="about-intro-main">
            Nuestro papel es cuidar esa esencia y hacer que llegue a las personas adecuadas.
          </p>

          <h3 className="about-subtitle">Lo que nos mueve</h3>

          <div className="about-features">
            <div className="feature">
              <h4 className="feature-title">Experiencia desde dentro del sector</h4>
              <p className="feature-description">
                Conocemos el día a día de la gestión turística en Asturias,
                porque lo hemos vivido desde todos los ángulos.
              </p>
            </div>
            <div className="feature">
              <h4 className="feature-title">Cercanía real</h4>
              <p className="feature-description">
                No somos una plataforma anónima: respondemos, escuchamos y
                actuamos con humanidad.
              </p>
            </div>
            <div className="feature">
              <h4 className="feature-title">Estrategia + emoción</h4>
              <p className="feature-description">
                Combinamos análisis de datos y conocimiento local con una
                atención cálida y profesional.
              </p>
            </div>
            <div className="feature">
              <h4 className="feature-title">Transparencia total</h4>
              <p className="feature-description">
                Sin letra pequeña ni permanencias. Informes claros y
                comunicación constante.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
