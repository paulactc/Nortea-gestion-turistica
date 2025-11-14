import React from 'react';
import './Testimonials.css';

const Testimonials = ({ testimonials = [] }) => {
  const defaultTestimonials = [
    {
      id: 1,
      name: 'María González',
      role: 'Viajera frecuente',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'Una experiencia increíble. El servicio fue excepcional y la atención al detalle superó todas mis expectativas. Definitivamente volveré a reservar con ellos.'
    },
    {
      id: 2,
      name: 'Carlos Martínez',
      role: 'Aventurero',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'Organizaron mi viaje de forma impecable. Cada detalle estaba cuidado y el equipo siempre estuvo disponible para cualquier consulta. Altamente recomendado.'
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      role: 'Familia viajera',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'Viajamos en familia y fue perfecto. Actividades para todos, alojamiento excelente y una atención personalizada que hizo nuestro viaje inolvidable.'
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <span className="testimonials__subtitle">Testimonios</span>
          <h2 className="testimonials__title">Lo que dicen nuestros clientes</h2>
          <p className="testimonials__description">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="testimonials__grid">
          {displayTestimonials.map((testimonial, index) => (
            <article key={testimonial.id || index} className="testimonial-card">
              <div className="testimonial-card__rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="testimonial-card__star">⭐</span>
                ))}
              </div>
              <p className="testimonial-card__text">{testimonial.text}</p>
              <div className="testimonial-card__author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-card__avatar"
                />
                <div className="testimonial-card__info">
                  <h4 className="testimonial-card__name">{testimonial.name}</h4>
                  <p className="testimonial-card__role">{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-card__quote">"</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
