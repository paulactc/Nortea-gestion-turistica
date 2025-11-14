import React, { useState } from "react";
import "./Accommodations.css";

const Accommodations = () => {
  const [filters, setFilters] = useState({
    guests: "",
    checkIn: "",
    checkOut: "",
  });

  const accommodations = [
    {
      id: 1,
      name: "Casa Rural La Montaña",
      location: "Asturias, España",
      image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070",
      price: 120,
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      rating: 4.9,
      reviews: 124,
      features: ["WiFi", "Chimenea", "Jardín", "Parking"],
    },
    {
      id: 2,
      name: "Villa del Valle",
      location: "León, España",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
      price: 95,
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      rating: 4.8,
      reviews: 89,
      features: ["WiFi", "Terraza", "BBQ", "Vistas"],
    },
    {
      id: 3,
      name: "Cabaña del Bosque",
      location: "Cantabria, España",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      price: 150,
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      rating: 5.0,
      reviews: 156,
      features: ["WiFi", "Piscina", "Sauna", "Jardín"],
    },
    {
      id: 4,
      name: "Casa del Río",
      location: "Galicia, España",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      price: 85,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      rating: 4.7,
      reviews: 67,
      features: ["WiFi", "Río cercano", "Kayak", "Pesca"],
    },
    {
      id: 5,
      name: "Refugio Sierra Verde",
      location: "Asturias, España",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
      price: 110,
      guests: 5,
      bedrooms: 3,
      bathrooms: 2,
      rating: 4.9,
      reviews: 98,
      features: ["WiFi", "Chimenea", "Senderismo", "Parking"],
    },
    {
      id: 6,
      name: "Casa Piedra y Madera",
      location: "Cantabria, España",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
      price: 130,
      guests: 7,
      bedrooms: 3,
      bathrooms: 2,
      rating: 4.8,
      reviews: 112,
      features: ["WiFi", "Bodega", "Jardín", "BBQ"],
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
    console.log("Buscando con filtros:", filters);
  };

  return (
    <section className="accommodations" id="alojamientos">
      <div className="accommodations__container">
        <div className="accommodations__header">
          <h2 className="accommodations__title">Nuestros Alojamientos</h2>
          <p className="accommodations__description">
            Descubre nuestra selección de casas rurales disponibles para reservar.
            Cada alojamiento está cuidadosamente gestionado para garantizar tu comodidad.
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
                <option value="4">3-4 personas</option>
                <option value="6">5-6 personas</option>
                <option value="8">7-8 personas</option>
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
              🔍 Buscar
            </button>
          </form>
        </div>

        <div className="accommodations__grid">
          {accommodations.map((accommodation) => (
            <article key={accommodation.id} className="accommodation-card">
              <div className="accommodation-card__image-wrapper">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="accommodation-card__image"
                />
                <div className="accommodation-card__badge">
                  ⭐ {accommodation.rating}
                </div>
              </div>
              <div className="accommodation-card__content">
                <div className="accommodation-card__header">
                  <h3 className="accommodation-card__name">
                    {accommodation.name}
                  </h3>
                  <p className="accommodation-card__location">
                    📍 {accommodation.location}
                  </p>
                </div>
                <div className="accommodation-card__details">
                  <span className="accommodation-card__detail">
                    👥 {accommodation.guests} huéspedes
                  </span>
                  <span className="accommodation-card__detail">
                    🛏️ {accommodation.bedrooms} habitaciones
                  </span>
                  <span className="accommodation-card__detail">
                    🚿 {accommodation.bathrooms} baños
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
                  <div className="accommodation-card__price">
                    <span className="accommodation-card__price-amount">
                      {accommodation.price}€
                    </span>
                    <span className="accommodation-card__price-period">
                      / noche
                    </span>
                  </div>
                  <button className="accommodation-card__button">
                    Reservar ahora
                  </button>
                </div>
                <div className="accommodation-card__reviews">
                  {accommodation.reviews} reseñas
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
