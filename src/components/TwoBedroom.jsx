import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Bed, Bath, MapPin, Search, RotateCcw, Phone, ArrowLeft } from "lucide-react";
import "./Accommodations.css";

const TwoBedroom = () => {
  const [filters, setFilters] = useState({
    guests: "",
    checkIn: "",
    checkOut: "",
  });
  const [filteredAccommodations, setFilteredAccommodations] = useState(null);

  const accommodations = [
    {
      id: 3,
      name: "El Corredor",
      location: "Romillo, Parres - Asturias",
      image: "https://www.laquintanaderomillo.es/wp-content/uploads/apartamento-rural-el-corredor-la-quintana-de-romillo-8.webp",
      guests: 5,
      bedrooms: 2,
      bathrooms: 1,
      features: ["Cocina equipada", "Jardín privado", "Barbacoa", "Admite mascotas"],
      description: "Amplio apartamento de 2 dormitorios, perfecto para familias. Acceso independiente.",
      contact: "636 52 06 78",
    },
    {
      id: 4,
      name: "La Buhardilla",
      location: "Romillo, Parres - Asturias",
      image: "https://www.laquintanaderomillo.es/wp-content/uploads/la-buhardilla-1.webp",
      guests: 5,
      bedrooms: 2,
      bathrooms: 1,
      features: ["Cocina equipada", "Jardín privado", "Barbacoa", "Admite mascotas"],
      description: "Encantador apartamento abuhardillado con mucho encanto y calidez rural.",
      contact: "636 52 06 78",
    },
    {
      id: 5,
      name: "La Bodeguina",
      location: "Romillo, Parres - Asturias",
      image: "https://www.laquintanaderomillo.es/wp-content/uploads/apartamento-rural-la-bodeguina-la-quintana-de-romillo-1.webp",
      guests: 5,
      bedrooms: 2,
      bathrooms: 1,
      features: ["Cocina equipada", "Jardín privado", "Barbacoa", "Admite mascotas"],
      description: "Apartamento rústico con todo el sabor tradicional asturiano. Totalmente equipado.",
      contact: "636 52 06 78",
    },
    {
      id: 6,
      name: "La Cuadrina",
      location: "Romillo, Parres - Asturias",
      image: "https://www.laquintanaderomillo.es/wp-content/uploads/apartamento-rural-la-cuadrina-la-quintana-de-romillo-5.webp",
      guests: 5,
      bedrooms: 2,
      bathrooms: 1,
      features: ["Cocina equipada", "Jardín privado", "Barbacoa", "Admite mascotas"],
      description: "Espacioso y luminoso, perfecto para desconectar en plena naturaleza.",
      contact: "636 52 06 78",
    },
    {
      id: 7,
      name: "El Sueve",
      location: "Romillo, Parres - Asturias",
      image: "https://www.laquintanaderomillo.es/wp-content/uploads/apartamento-rural-el-sueve-la-quintana-de-romillo-7.webp",
      guests: 5,
      bedrooms: 2,
      bathrooms: 1,
      features: ["Cocina equipada", "Jardín privado", "Barbacoa", "Admite mascotas"],
      description: "Apartamento nombrado en honor al majestuoso Sueve. Ideal para grupos y familias.",
      contact: "636 52 06 78",
    },
  ];

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!filters.guests && !filters.checkIn && !filters.checkOut) {
      setFilteredAccommodations(null);
      return;
    }

    let results = accommodations;

    if (filters.guests) {
      const guestCount = parseInt(filters.guests);
      results = results.filter(acc => acc.guests >= guestCount);
    }

    setFilteredAccommodations(results);
  };

  const handleReset = () => {
    setFilters({
      guests: "",
      checkIn: "",
      checkOut: "",
    });
    setFilteredAccommodations(null);
  };

  const displayAccommodations = filteredAccommodations !== null ? filteredAccommodations : accommodations;

  return (
    <section className="accommodations" id="alojamientos">
      <div className="accommodations__container">
        <div className="accommodations__back">
          <Link to="/alojamientos" className="accommodations__back-button">
            <ArrowLeft size={20} /> Volver a categorías
          </Link>
        </div>

        <div className="accommodations__header">
          <h2 className="accommodations__title">Apartamentos de 2 Dormitorios</h2>
          <p className="accommodations__description">
            Ideales para familias y grupos. Amplios espacios para disfrutar de una estancia confortable en plena naturaleza asturiana.
          </p>
        </div>

        <div className="accommodations__search">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-form__group">
              <label htmlFor="guests">Huéspedes</label>
              <select
                id="guests"
                name="guests"
                value={filters.guests}
                onChange={handleFilterChange}
              >
                <option value="">Selecciona</option>
                <option value="2">1-2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
              </select>
            </div>
            <div className="search-form__group">
              <label htmlFor="checkIn">Entrada</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={filters.checkIn}
                onChange={handleFilterChange}
              />
            </div>
            <div className="search-form__group">
              <label htmlFor="checkOut">Salida</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={filters.checkOut}
                onChange={handleFilterChange}
              />
            </div>
            <button type="submit" className="search-form__button">
              <Search size={18} /> Buscar
            </button>
            {filteredAccommodations !== null && (
              <button
                type="button"
                className="search-form__button search-form__button--reset"
                onClick={handleReset}
              >
                <RotateCcw size={18} /> Mostrar todos
              </button>
            )}
          </form>
        </div>

        {filteredAccommodations !== null && filteredAccommodations.length === 0 && (
          <div className="accommodations__no-results">
            <p>No se encontraron apartamentos que cumplan con los criterios de búsqueda.</p>
            <button className="search-form__button" onClick={handleReset}>
              Ver todos los apartamentos
            </button>
          </div>
        )}

        {displayAccommodations.length > 0 && (
          <div className="accommodations__results-count">
            {filteredAccommodations !== null && (
              <p>Se encontraron {displayAccommodations.length} apartamento{displayAccommodations.length !== 1 ? 's' : ''}</p>
            )}
          </div>
        )}

        <div className="accommodations__grid">
          {displayAccommodations.map((accommodation) => (
            <article key={accommodation.id} className="accommodation-card">
              <div className="accommodation-card__image-wrapper">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="accommodation-card__image"
                />
                <div className="accommodation-card__badge">
                  2 Dormitorios
                </div>
              </div>
              <div className="accommodation-card__content">
                <div className="accommodation-card__header">
                  <h3 className="accommodation-card__name">
                    {accommodation.name}
                  </h3>
                  <p className="accommodation-card__location">
                    <MapPin size={16} /> {accommodation.location}
                  </p>
                </div>
                <p className="accommodation-card__description">
                  {accommodation.description}
                </p>
                <div className="accommodation-card__details">
                  <span className="accommodation-card__detail">
                    <Users size={16} /> {accommodation.guests} huéspedes
                  </span>
                  <span className="accommodation-card__detail">
                    <Bed size={16} /> {accommodation.bedrooms} habitaciones
                  </span>
                  <span className="accommodation-card__detail">
                    <Bath size={16} /> {accommodation.bathrooms} baño
                  </span>
                </div>
                <div className="accommodation-card__features">
                  {accommodation.features.map((feature, index) => (
                    <span key={index} className="accommodation-card__feature">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="accommodation-card__footer">
                  <a
                    href={`tel:${accommodation.contact.replace(/\s/g, '')}`}
                    className="accommodation-card__button"
                  >
                    <Phone size={16} /> Consultar disponibilidad
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoBedroom;
