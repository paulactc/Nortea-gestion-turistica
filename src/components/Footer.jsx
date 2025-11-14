import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">NORTEA GESTION LOGISTICA</h3>
          <p className="footer-description">
            Profesionales en la gestión logística integral.
            Optimizamos tus operaciones mientras tú disfrutas de tranquilidad.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#nosotros">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Servicios</h4>
          <ul className="footer-links">
            <li>
              <a href="#servicios">Gestión de Licencias</a>
            </li>
            <li>
              <a href="#servicios">Limpieza y Mantenimiento</a>
            </li>
            <li>
              <a href="#servicios">Gestión de Reservas</a>
            </li>
            <li>
              <a href="#servicios">Marketing Digital</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Síguenos</h4>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 NORTEA GESTION LOGISTICA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
