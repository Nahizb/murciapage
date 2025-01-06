import React from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import cartel from '../styles/images/cartel.jpeg';
import fondo from '../styles/images/fondo.png';
import image1 from '../styles/images/image1.png';
import image2 from '../styles/images/image2.png';
import image3 from '../styles/images/image3.png';
import image4 from '../styles/images/image4.png';
import image5 from '../styles/images/image5.png';
import terceraImage from '../styles/images/tercera.jpg';
import tarjeta1 from '../styles/images/tarjeta1.png';
import tarjeta2 from '../styles/images/tarjeta2.png';
import tarjeta3 from '../styles/images/tarjeta3.png';

function Home() {
  return (
    <div className="home-container">
      {/* Primera Sección */}
      <section className="top-section" style={{ backgroundImage: `url(${fondo})` }}>
        <h1 className="main-title">Próximos eventos</h1>
        <div className="image-container">
          <img src={cartel} alt="Imagen principal" className="top-image" />
        </div>
        <div className="event-box">
          <p>No hay más eventos próximos</p>
          <button className="btn-yellow">Ver todos los eventos</button>
        </div>
      </section>

      {/* Segunda Sección */}
      <section className="middle-section">
        <div className="section-content">
          <div className="text-content">
            <h2>LA SALA</h2>
            <p>
              Exploramos la esencia del Heavy Metal underground, atrayendo a un público joven y
              entregado. En un ambiente auténtico y electrizante, los amantes del género disfrutan de
              su música favorita en vivo mientras degustan nuestras bebidas.
            </p>
          </div>
          <div className="carousel-container">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={image1} className="d-block w-100" alt="Evento 1" />
                </div>
                <div className="carousel-item">
                  <img src={image2} className="d-block w-100" alt="Evento 2" />
                </div>
                <div className="carousel-item">
                  <img src={image3} className="d-block w-100" alt="Evento 3" />
                </div>
                <div className="carousel-item">
                  <img src={image4} className="d-block w-100" alt="Evento 4" />
                </div>
                <div className="carousel-item">
                  <img src={image5} className="d-block w-100" alt="Evento 5" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tercera Sección */}
      <section className="bottom-section">
        <div className="content-container">
          <div className="text-content">
            <h2>Bienvenidos a nuestro evento</h2>
            <p>
              Aquí encontrarás información sobre nuestros eventos más esperados. ¡No te lo pierdas! 
              Ven y disfruta de la mejor música y ambiente, con los artistas más esperados.
            </p>
          </div>
          <div className="image-content">
            <img src={terceraImage} alt="Imagen del evento" className="event-image" />
          </div>
        </div>
      </section>

      {/* Cuarta Sección */}
      <section className="fourth-section"></section>

      {/* Quinta Sección - Comentarios de los usuarios */}
      <section className="fifth-section">
        <h2 className="section-title">Nos encanta leeros después de vuestra visita</h2>
        <div className="separator"></div>
        <div className="cards-container">
          <div className="card">
            <div className="card-image">
              <img src={tarjeta1} alt="Imagen usuario Antonio Martinez" className="user-image" />
            </div>
            <div className="card-content">
              <h3 className="user-name">Antonio Martinez</h3>
              <p className="comment-date">03/11/2024</p>
              ⭐⭐⭐⭐
              <p className="comment">
                Sala de conciertos muy acogedora! El ambiente es genial, la acústica excelente y la música de primera.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={tarjeta2} alt="Imagen usuario Víctor López" className="user-image" />
            </div>
            <div className="card-content">
              <h3 className="user-name">Víctor López</h3>
              <p className="comment-date">03/11/2024</p>
              ⭐⭐⭐⭐⭐⭐⭐
              <p className="comment">
                Buen sonido, mejor humanidad y buena música! Un lugar increíble para disfrutar de conciertos.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={tarjeta3} alt="Imagen usuario E P" className="user-image" />
            </div>
            <div className="card-content">
              <h3 className="user-name">E P</h3>
              <p className="comment-date">20/10/2024</p>
              ⭐⭐⭐
              <p className="comment">
                Sala muy buena para conciertos, tanto para ir a darlos como para verlos. Acústica buena, buen sitio en general.
              </p>
            </div>
          </div>
        </div>

        {/* Texto debajo de las tarjetas */}
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

export default Home;
