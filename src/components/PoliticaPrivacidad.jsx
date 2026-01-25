import { useEffect } from "react";
import "./LegalPages.css";

const PoliticaPrivacidad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Política de Privacidad</h1>

        <section>
          <h2>Responsable del tratamiento</h2>
          <ul>
            <li><strong>Responsable:</strong> DYL, CB</li>
            <li><strong>Nombre comercial:</strong> Nortea Gestión Turística</li>
            <li><strong>CIF:</strong> E52577558</li>
            <li><strong>Email:</strong> info@norteagestionturistica.es</li>
            <li><strong>Teléfono:</strong> 609 368 133</li>
          </ul>
        </section>

        <section>
          <h2>Datos personales tratados</h2>
          <ul>
            <li>Nombre y apellidos</li>
            <li>Teléfono</li>
            <li>Correo electrónico</li>
            <li>Datos facilitados a través de formularios, email, WhatsApp o redes sociales</li>
          </ul>
        </section>

        <section>
          <h2>Finalidad del tratamiento</h2>
          <ul>
            <li>Atender consultas y solicitudes de información</li>
            <li>Gestión de servicios</li>
            <li>Comunicaciones relacionadas con los servicios prestados</li>
          </ul>
        </section>

        <section>
          <h2>Base legal</h2>
          <ul>
            <li>Consentimiento del interesado</li>
            <li>Relación contractual o precontractual</li>
            <li>Cumplimiento de obligaciones legales</li>
          </ul>
        </section>

        <section>
          <h2>Conservación de los datos</h2>
          <p>
            Los datos se conservarán mientras exista relación comercial o durante los plazos exigidos por la normativa vigente.
          </p>
        </section>

        <section>
          <h2>Cesión de datos</h2>
          <p>
            No se cederán datos a terceros salvo obligación legal o cuando sea necesario para la correcta prestación del servicio.
          </p>
        </section>

        <section>
          <h2>Derechos del usuario</h2>
          <p>
            El usuario puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un correo a <strong>info@norteagestionturistica.es</strong>.
          </p>
        </section>

        <section>
          <h2>Medidas de seguridad</h2>
          <p>
            Se aplican medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos personales.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
