import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Configuración de EmailJS
    // IMPORTANTE: Debes configurar estos valores en EmailJS:
    // 1. Crea una cuenta en https://www.emailjs.com/
    // 2. Crea un servicio de email (ej: Gmail, Outlook)
    // 3. Crea una plantilla de email
    // 4. Obtén tu Public Key desde Account > General
    const SERVICE_ID = "TU_SERVICE_ID"; // Reemplazar
    const TEMPLATE_ID = "TU_TEMPLATE_ID"; // Reemplazar
    const PUBLIC_KEY = "TU_PUBLIC_KEY"; // Reemplazar

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      );

      if (result.text === "OK") {
        setSubmitMessage("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.");
        e.target.reset();
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
