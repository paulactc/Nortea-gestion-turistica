import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="nosotros">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Nuestro sello</h2>
          <p className="about-intro-main">
            Operamos en el Oriente de Asturias y conocemos de primera mano el
            comportamiento del mercado, las temporadas, los huéspedes y lo que
            realmente funciona.
          </p>
          <p className="about-intro-main">
            Unimos datos, experiencia y cercanía local para ofrecer una gestión
            profesional con alma.
          </p>

          <h3 className="about-subtitle">Lo que nos caracteriza</h3>

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
            <div className="feature">
              <h4 className="feature-title">Flexibilidad absoluta</h4>
              <p className="feature-description">
                Nos adaptamos al tipo de gestión, propiedad y nivel de
                implicación que desees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
