import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xbdowjae");

  if (state.succeeded) {
    return (
      <section className="contact" id="contacto">
        <div className="contact-container">
          <h1 className="contact-main-title">¡Mensaje enviado!</h1>
          <p className="contact-intro">
            Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
          </p>
        </div>
      </section>
    );
  }

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
                <ValidationError prefix="Nombre" field="name" errors={state.errors} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
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
                <ValidationError prefix="Teléfono" field="phone" errors={state.errors} />
              </div>
              <div className="form-group">
                <label htmlFor="location">Localidad del alojamiento *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                />
                <ValidationError prefix="Localidad" field="location" errors={state.errors} />
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
                <ValidationError prefix="Tipo" field="type" errors={state.errors} />
              </div>
              <div className="form-group">
                <label htmlFor="listing">Enlace al anuncio (opcional)</label>
                <input
                  type="url"
                  id="listing"
                  name="listing"
                />
                <ValidationError prefix="Enlace" field="listing" errors={state.errors} />
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
              <ValidationError prefix="Necesidades" field="needs" errors={state.errors} />
            </div>

            <button type="submit" className="submit-btn" disabled={state.submitting}>
              {state.submitting ? "Enviando..." : "Solicitar evaluación gratuita"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
