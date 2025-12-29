import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import "./Header.css";
import logo from "../assets/Logo2.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={handleLogoClick}>
          <img
            src={logo}
            alt="NORTEA GESTION TURÍSITICA"
            className="header__logo-image"
          />
          <span className="header__logo-text">NORTEA GESTION TURÍSTICA</span>
        </Link>

        <div className="header__phone">
          <span className="header__phone-icon"><Phone size={20} /></span>
          <div className="header__phone-info">
            <span className="header__phone-number">653649789</span>
            <span className="header__phone-label">llámanos</span>
          </div>
        </div>

        <button
          className={`header__menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="header__nav-list">
            {location.pathname === "/" ? (
              <>
                <li className="header__nav-item">
                  <a
                    href="#inicio"
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inicio
                  </a>
                </li>

                <li className="header__nav-item">
                  <a
                    href="#servicios"
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Servicios
                  </a>
                </li>

                <li className="header__nav-item">
                  <a
                    href="#nosotros"
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nuestra mirada
                  </a>
                </li>

                {/* Temporalmente comentado hasta volver a publicar */}
                {/* <li className="header__nav-item">
                  <Link
                    to="/alojamientos"
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Alojamientos
                  </Link>
                </li> */}

                <li className="header__nav-item">
                  <a
                    href="#contacto"
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contacto
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="header__nav-item">
                  <Link
                    to="/"
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                </li>

                <li className="header__nav-item">
                  <Link
                    to="/"
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Servicios
                  </Link>
                </li>

                <li className="header__nav-item">
                  <Link
                    to="/"
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nuestra mirada
                  </Link>
                </li>

                {/* Temporalmente comentado hasta volver a publicar */}
                {/* <li className="header__nav-item">
                  <Link
                    to="/alojamientos"
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Alojamientos
                  </Link>
                </li> */}

                <li className="header__nav-item">
                  <Link
                    to="/"
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contacto
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
