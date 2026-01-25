import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("nortea_cookies_accepted");
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("nortea_cookies_accepted", "true");
    localStorage.setItem("nortea_cookies_date", new Date().toISOString());
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("nortea_cookies_accepted", "false");
    localStorage.setItem("nortea_cookies_date", new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>Uso de Cookies</h3>
          <p>
            Utilizamos cookies propias para mejorar nuestros servicios y su experiencia de navegación.
            Para más información, consulte nuestra{" "}
            <Link to="/politica-cookies" className="cookie-link">
              Política de Cookies
            </Link>.
          </p>
        </div>
        <div className="cookie-buttons">
          <button onClick={rejectCookies} className="cookie-btn cookie-btn-reject">
            Rechazar
          </button>
          <button onClick={acceptCookies} className="cookie-btn cookie-btn-accept">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
