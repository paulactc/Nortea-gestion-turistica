import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.target;

    // IMPORTANTE: Reemplaza 'TU_FORM_ID' con tu Form ID de Formspree
    // Ejemplo: https://formspree.io/f/xpwzabcd
    const formspreeEndpoint = "https://formspree.io/f/xeeoegob";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        setSubmitMessage("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.");
        form.reset();
      } else {
        setSubmitMessage("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setSubmitMessage("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact-container">
        <h1 className="contact-main-title">Cuéntanos sobre tu alojamiento</h1>
        <p className="contact-intro">
            Solo necesitamos lo básico: dónde está como lo gestionas actualmente.
            Escríbenos y nos pondremos en contacto contigo para verlo juntos.

        </p>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre y apellidos *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Teléfono *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Localidad del alojamiento *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                />
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
                <input
                  type="url"
                  id="listing"
                  name="listing"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox-group-label">¿Cuéntanos qué necesitas? *</label>
              <input
                  type="text"
                  id="needs"
                  name="needs"
                  required
                />
            </div>

            {submitMessage && (
              <div className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
                {submitMessage}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Solicitar evaluación gratuita"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
