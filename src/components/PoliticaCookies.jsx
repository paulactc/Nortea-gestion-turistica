import { useEffect } from "react";
import "./LegalPages.css";

const PoliticaCookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Política de Cookies</h1>

        <section>
          <h2>Qué son las cookies</h2>
          <p>
            Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario para permitir el correcto funcionamiento del sitio web.
          </p>
        </section>

        <section>
          <h2>Tipos de cookies utilizadas</h2>
          <ul>
            <li><strong>Cookies técnicas necesarias:</strong> Permiten la navegación básica y el uso de las funcionalidades del sitio web.</li>
            <li><strong>Cookies analíticas:</strong> Si se utilizan, permiten analizar el comportamiento de los usuarios para mejorar el servicio.</li>
            <li><strong>Cookies de terceros:</strong> Redes sociales como Instagram o Facebook pueden instalar sus propias cookies cuando se visualizan contenidos integrados.</li>
          </ul>
        </section>

        <section>
          <h2>Gestión de cookies</h2>
          <p>
            El usuario puede aceptar, rechazar o configurar las cookies a través del banner de cookies que aparece al acceder al sitio web o desde la configuración de su navegador.
          </p>
        </section>

        <section>
          <h2>Cómo desactivar las cookies</h2>
          <p>
            Las cookies pueden eliminarse o bloquearse desde la configuración del navegador. A continuación se indican los pasos para los navegadores más comunes:
          </p>
          <ul>
            <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
            <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
            <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web</li>
            <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio → Cookies y datos almacenados</li>
          </ul>
          <p>
            Tenga en cuenta que si desactiva las cookies, algunas funcionalidades del sitio web pueden no funcionar correctamente.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PoliticaCookies;
