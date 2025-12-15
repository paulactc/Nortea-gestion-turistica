import React from "react";
import { Link } from "react-router-dom";
import { Bed } from "lucide-react";
import "./CategorySelection.css";

const CategorySelection = () => {
  const categories = [
    {
      id: 1,
      title: "Apartamentos de 1 Dormitorio",
      description: "Perfectos para parejas o pequeñas familias. Espacios acogedores con todas las comodidades.",
      image: "https://www.laquintanaderomillo.es/wp-content/uploads/El-Balcon-2.webp",
      bedrooms: 1,
      capacity: "2-3 personas",
      path: "/alojamientos/1-dormitorio",
      count: 2
    },
    {
      id: 2,
      title: "Apartamentos de 2 Dormitorios",
      description: "Ideales para familias y grupos. Amplios espacios para disfrutar de una estancia confortable.",
      image: "https://www.laquintanaderomillo.es/wp-content/uploads/apartamento-rural-el-corredor-la-quintana-de-romillo-8.webp",
      bedrooms: 2,
      capacity: "4-5 personas",
      path: "/alojamientos/2-dormitorios",
      count: 5
    }
  ];

  return (
    <section className="category-selection">
      <div className="category-selection__container">
        <div className="category-selection__header">
          <h1 className="category-selection__title">La Quintana de Romillo</h1>
          <p className="category-selection__description">
            Siete apartamentos rurales independientes en Romillo, Parres.
            Entre Cangas de Onís y los Picos de Europa. Cada apartamento cuenta con cocina equipada,
            jardín privado y barbacoa. Disfruta de zonas comunes con granja, juegos infantiles y piscina.
            ¡Admitimos mascotas!
          </p>
          <h2 className="category-selection__subtitle">Elige tu tipo de alojamiento</h2>
        </div>

        <div className="category-selection__grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="category-card"
            >
              <div className="category-card__image-wrapper">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-card__image"
                />
                <div className="category-card__overlay">
                  <div className="category-card__badge">
                    <Bed size={24} />
                    <span>{category.bedrooms} {category.bedrooms === 1 ? "Dormitorio" : "Dormitorios"}</span>
                  </div>
                </div>
              </div>
              <div className="category-card__content">
                <h3 className="category-card__title">{category.title}</h3>
                <p className="category-card__description">{category.description}</p>
                <div className="category-card__info">
                  <span className="category-card__capacity">Capacidad: {category.capacity}</span>
                  <span className="category-card__count">{category.count} {category.count === 1 ? "apartamento" : "apartamentos"} disponibles</span>
                </div>
                <div className="category-card__cta">
                  Ver apartamentos →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySelection;
