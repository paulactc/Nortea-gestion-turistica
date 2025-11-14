import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <h3 className="footer-title">Nortea Gestión Turística</h3>
          <p className="footer-location">
            📍 Oriente de Asturias · Cangas de Onís · Parres · Ribadesella · Onís
          </p>
          <div className="footer-contact">
            <p>
              📧 <a href="mailto:info@norteagestionturistica.es">info@norteagestionturistica.es</a>
            </p>
            <p>📞 <a href="tel:+34XXXXXXXXX">+34 XXX XXX XXX</a></p>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Instagram">
              Instagram
            </a>
            <span>|</span>
            <a href="#" className="social-link" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Nortea Gestión Turística. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
