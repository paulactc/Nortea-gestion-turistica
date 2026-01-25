import { useEffect } from "react";
import "./LegalPages.css";

const AvisoLegal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Aviso Legal</h1>

        <section>
          <h2>Titular del sitio web</h2>
          <ul>
            <li><strong>Nombre comercial:</strong> Nortea Gestión Turística</li>
            <li><strong>Razón social:</strong> DYL, CB</li>
            <li><strong>CIF:</strong> E52577558</li>
            <li><strong>Correo electrónico:</strong> info@norteagestionturistica.es</li>
            <li><strong>Teléfono:</strong> 609 368 133</li>
          </ul>
        </section>

        <section>
          <h2>Objeto</h2>
          <p>
            El presente sitio web tiene como finalidad ofrecer servicios de gestión y comercialización de alojamientos turísticos.
          </p>
        </section>

        <section>
          <h2>Condiciones de uso</h2>
          <p>
            El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación de estas condiciones. El usuario se compromete a utilizar los contenidos de forma adecuada y lícita.
          </p>
        </section>

        <section>
          <h2>Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño) son titularidad de DYL, CB o de terceros autorizados. Queda prohibida su reproducción sin autorización expresa.
          </p>
        </section>

        <section>
          <h2>Responsabilidad</h2>
          <p>
            DYL, CB no se responsabiliza del mal uso de los contenidos ni de posibles errores técnicos o interrupciones del servicio.
          </p>
        </section>

        <section>
          <h2>Legislación aplicable</h2>
          <p>
            La relación entre el usuario y el titular se rige por la legislación española.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AvisoLegal;
