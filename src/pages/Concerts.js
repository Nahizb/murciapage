import React from 'react';
import tarjeta1 from '../styles/images/cuadro1.jpg';
import tarjeta2 from '../styles/images/cuadro2.jpg';
import tarjeta3 from '../styles/images/cuadro3.jpg';
import tarjeta4 from '../styles/images/cuadro4.jpg';
import tarjeta5 from '../styles/images/cuadro5.jpg';

function Concerts() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="concerts-section">
      <h1 className="concerts-title">Próximos Eventos</h1>

      <div className="no-events">No hay más eventos próximos</div>

      <div className="down-arrow" onClick={scrollToBottom}>
        &#8595;
      </div>

      <div className="no-events1">Eventos pasados</div>



      <div className="cards-section">
        {[tarjeta1, tarjeta2, tarjeta3, tarjeta4, tarjeta5].map((img, index) => (
          <div className="card card-reverse" key={index}>
            <div className="card-content">
              <h3 className="card-title">El Año Del Caiman + Stillblind + Astter {index + 1}</h3>
              <p className="card-date">30 Nov sábado  {index + 1}</p>
              <p className="card-description">Descripción del evento {index + 1}</p>
            </div>
            <div className="card-image">
              <img src={img} alt={`Concierto ${index + 1}`} className="card-img" />
            </div>
          </div>
        ))}
      </div>

      <section className="fifth-section">
        <h2 className="section-title">Nos encanta leeros después de vuestra visita</h2>
        <div className="separator"></div>
        <div className="cards-container">
          {[
            { name: "Antonio Martinez", date: "03/11/2024", comment: "Sala de conciertos muy acogedora!", stars: "⭐⭐⭐⭐", image: tarjeta1 },
            { name: "Víctor López", date: "03/11/2024", comment: "Buen sonido, mejor humanidad!", stars: "⭐⭐⭐⭐⭐", image: tarjeta2 },
            { name: "E P", date: "20/10/2024", comment: "Sala muy buena para conciertos.", stars: "⭐⭐⭐", image: tarjeta3 },
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

export default Concerts;

