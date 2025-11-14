import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contacto">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Contacta Con Nosotros</h2>
          <p className="contact-description">
            ¿Tienes una propiedad que quieres rentabilizar? Estamos aquí para
            ayudarte. Solicita una consulta gratuita y sin compromiso.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <h4>Teléfono</h4>
                <p>+34 900 123 456</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>info@nortealogistica.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h4>C/Asturias nº 4 </h4>
                <p>Oviedo, España</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
