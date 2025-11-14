import React from 'react';
import './Card.css';

const Card = ({
  image,
  title,
  description,
  price,
  rating,
  location,
  onBookClick,
  className = ''
}) => {
  return (
    <article className={`card ${className}`}>
      {image && (
        <div className="card__image-container">
          <img src={image} alt={title} className="card__image" />
          {rating && (
            <div className="card__rating">
              <span className="card__rating-icon">⭐</span>
              <span className="card__rating-value">{rating}</span>
            </div>
          )}
        </div>
      )}
      <div className="card__content">
        {location && (
          <div className="card__location">
            <span className="card__location-icon">📍</span>
            {location}
          </div>
        )}
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <div className="card__footer">
          {price && (
            <div className="card__price">
              <span className="card__price-label">Desde</span>
              <span className="card__price-value">{price}€</span>
            </div>
          )}
          {onBookClick && (
            <button className="card__button" onClick={onBookClick}>
              Reservar ahora
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
