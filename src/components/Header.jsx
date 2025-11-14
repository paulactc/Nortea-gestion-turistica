import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/Logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <div className="header__logo">
          <img
            src={logo}
            alt="NORTEA GESTION LOGISTICA"
            className="header__logo-image"
          />
          <span className="header__logo-text">NORTEA GESTION LOGISTICA</span>
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
            <li className="header__nav-item">
              <a
                href="#inicio"
                className="header__nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
            </li>

            <li className="header__nav-item header__nav-item--dropdown">
              <button
                className="header__nav-link header__nav-link--dropdown"
                onClick={() => toggleDropdown("servicios")}
              >
                Servicios
                <span className="header__dropdown-arrow">▼</span>
              </button>
              <ul
                className={`header__dropdown ${
                  activeDropdown === "servicios" ? "active" : ""
                }`}
              >
                <li>
                  <a
                    href="#gestion-reservas"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gestión de Reservas
                  </a>
                </li>
                <li>
                  <a
                    href="#limpieza-mantenimiento"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Limpieza y Mantenimiento
                  </a>
                </li>
                <li>
                  <a
                    href="#gestion-integral"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gestión Integral
                  </a>
                </li>
                <li>
                  <a href="#marketing" onClick={() => setIsMenuOpen(false)}>
                    Marketing y Promoción
                  </a>
                </li>
              </ul>
            </li>

            <li className="header__nav-item">
              <a
                href="#nosotros"
                className="header__nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </a>
            </li>

            <li className="header__nav-item">
              <a
                href="#alojamientos"
                className="header__nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Alojamientos
              </a>
            </li>

            <li className="header__nav-item">
              <a
                href="#contacto"
                className="header__nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </li>
          </ul>

          <button className="header__cta" onClick={() => setIsMenuOpen(false)}>
            Consultanos
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
