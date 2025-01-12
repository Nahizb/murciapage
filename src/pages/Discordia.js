import React from 'react';
import tarjeta1 from '../styles/images/cuadro1.jpg';
import fondo2 from '../styles/images/fondo2.jpg';

function Discordia() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="discordia-section" style={{ backgroundImage: `url(${fondo2})` }}>
      <h1 className="concerts-title">Próximos Eventos</h1>

      <div className="no-events">No hay más eventos próximos</div>

      <div className="down-arrow" onClick={scrollToBottom}>
        &#8595;
      </div>

      <div className="no-events1">Eventos pasados</div>

      <div className="upcoming-events-section">
        <div className="cards-section">
          <div className="card card-reverse">
            <div className="card-content">
              <h3 className="card-title">El Año Del Caiman + Stillblind + Astter</h3>
              <p className="card-date">30 Nov sábado</p>
              <p className="card-description">Descripción del evento</p>
            </div>
            <div className="card-image">
              <img src={tarjeta1} alt="Concierto" className="card-img" />
            </div>
          </div>
        </div>
      </div>

      <section className="fifth-section">
        <h2 className="section-title">Nos encanta leeros después de vuestra visita</h2>
        <div className="separator"></div>
        <div className="cards-container">
          {[
            { name: "Antonio Martinez", date: "03/11/2024", comment: "Sala de conciertos muy acogedora!", stars: "⭐⭐⭐⭐", image: tarjeta1 },
            { name: "Víctor López", date: "03/11/2024", comment: "Buen sonido, mejor humanidad!", stars: "⭐⭐⭐⭐⭐", image: tarjeta1 },
            { name: "E P", date: "20/10/2024", comment: "Sala muy buena para conciertos.", stars: "⭐⭐⭐", image: tarjeta1 },
          ].map((user, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={user.image} alt={`Imagen usuario ${user.name}`} className="user-image" />
              </div>
              <div className="card-content">
                <h3 className="user-name">{user.name}</h3>
                <p className="comment-date">{user.date}</p>
                {user.stars}
                <p className="comment">{user.comment}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-below-cards">
          <h2>¡Dejad que la música os una a nosotros!</h2>
          <p>
            Podéis encontrar la Sala Spectrum en Instagram, donde compartimos noticias, eventos y contenido relacionado con la música que os apasiona.
          </p>
          <button className="btn-more-info">Más información</button>
        </div>
      </section>
    </div>
  );
}

export default Discordia;
