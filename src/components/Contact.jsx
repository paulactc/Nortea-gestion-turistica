import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contacto">
      <div className="contact-container">
        <h1 className="contact-main-title">Hablemos de tu alojamiento</h1>
        <p className="contact-intro">
          Rellena el formulario y te contactaremos en menos de 24 h para ofrecerte
          una evaluación gratuita y sin compromiso.
        </p>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre y apellidos *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Teléfono *</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="location">Localidad del alojamiento *</label>
                <input type="text" id="location" name="location" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="type">Tipo de alojamiento *</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  placeholder="casa, apartamento, hotel rural..."
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="listing">Enlace al anuncio (opcional)</label>
                <input type="url" id="listing" name="listing" />
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox-group-label">¿Qué necesitas?</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="services" value="online" />
                  <span>Gestión Online</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="services" value="limpieza" />
                  <span>Limpieza</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="services" value="lavanderia" />
                  <span>Lavandería</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="services" value="checkin" />
                  <span>Check-in/out</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="services" value="facturacion" />
                  <span>Facturación VeriFactu</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="services" value="otro" />
                  <span>Otro</span>
                </label>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Solicitar evaluación gratuita
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
