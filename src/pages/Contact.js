import React, { useState } from 'react';
import { supabase } from '../components/supabaseClient'; // Asegúrate de importar correctamente tu cliente de Supabase
import tarjeta1 from '../styles/images/tarjeta1.png';
import tarjeta2 from '../styles/images/tarjeta2.png';
import tarjeta3 from '../styles/images/tarjeta3.png';
import fondo from '../styles/images/fondo.png'; // Asegúrate de importar la imagen de fondo

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    if (!name || !email || !message) {
      setStatus('Por favor, completa todos los campos.');
      return;
    }

    try {
      // Insertar datos en la tabla "Formulario"
      const { data, error } = await supabase
        .from('Formulario') // Usar el nombre correcto de la tabla
        .insert([
          {
            Nombre: name,        // Coincide con la columna "Nombre"
            email: email,        // Si "email" no existe, debes quitarlo
            message: message,    // Coincide con la columna "message"
            date: new Date(),    // Agrega la fecha actual si es necesario
          },
        ]);

      if (error) {
        setStatus('Error al enviar el mensaje. Intenta nuevamente.');
        console.error(error.message);
      } else {
        setStatus('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      setStatus('Error al enviar el mensaje. Intenta nuevamente.');
      console.error('Error inesperado:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.contactBox}>
        <h2>Contáctanos</h2>
        <p>Visitadnos cuando deseéis</p>
        <p>Os damos la bienvenida al mundo del Heavy Metal</p>

        {/* Formulario de contacto */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button type="submit" style={styles.submitButton}>Enviar</button>
        </form>

        {/* Mostrar estado de la operación */}
        {status && <p style={styles.status}>{status}</p>}
      </div>

      {/* Cuadro con el mapa de Google Maps */}
      <div style={styles.mapBox}>
        <h3>Ubicación</h3>
        <p>Visítanos en nuestra dirección:</p>
        <p>Av. Ciclista Mariano Rojas, 16, 30009 Murcia</p>

        {/* Incrustar el mapa usando el iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1493587056!2d-1.1453008999999998!3d38.0005948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd638191e7a86ea7%3A0x16c476f0518bf63e!2sAv.%20Ciclista%20Mariano%20Rojas%2C%2016%2C%2030009%20Murcia!5e1!3m2!1ses-419!2ses!4v1737302848700!5m2!1ses-419!2ses"
          width="600"
          height="450"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Sección de tarjetas */}
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <div style={styles.cardImage}>
            <img src={tarjeta1} alt="Imagen usuario Antonio Martinez" style={styles.userImage} />
          </div>
          <div style={styles.cardContent}>
            <h3>Antonio Martinez</h3>
            <p>03/11/2024</p>
            ⭐⭐⭐⭐
            <p>
              Sala de conciertos muy acogedora! El ambiente es genial, la acústica excelente y la música de primera.
            </p>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardImage}>
            <img src={tarjeta2} alt="Imagen usuario Víctor López" style={styles.userImage} />
          </div>
          <div style={styles.cardContent}>
            <h3>Víctor López</h3>
            <p>03/11/2024</p>
            ⭐⭐⭐⭐⭐⭐⭐
            <p>
              Buen sonido, mejor humanidad y buena música! Un lugar increíble para disfrutar de conciertos.
            </p>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardImage}>
            <img src={tarjeta3} alt="Imagen usuario E P" style={styles.userImage} />
          </div>
          <div style={styles.cardContent}>
            <h3>E P</h3>
            <p>20/10/2024</p>
            ⭐⭐⭐
            <p>
              Sala muy buena para conciertos, tanto para ir a darlos como para verlos. Acústica buena, buen sitio en general.
            </p>
          </div>
        </div>
      </div>

      {/* Texto debajo de las tarjetas */}
      <div style={styles.textBelowCards}>
        <h2>¡Dejad que la música os una a nosotros!</h2>
        <p>
          Podéis encontrar la Sala Spectrum en Instagram, donde compartimos noticias, eventos y contenido relacionado con la música que os apasiona.
        </p>
        <button className="btn-more-info">Más información</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundImage: `url(${fondo})`, // Aquí se agrega la imagen de fondo
    backgroundSize: 'cover', // Hace que la imagen cubra todo el espacio disponible
    backgroundPosition: 'center', // Centra la imagen
    backgroundAttachment: 'fixed', // Hace que la imagen se quede fija mientras se desplaza la página
  },
  contactBox: {
    margin: '20px auto',
    padding: '20px',
    maxWidth: '600px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro semi-transparente
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  form: {
    marginTop: '20px',
    textAlign: 'left',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  status: {
    marginTop: '20px',
    color: 'green',
  },
  mapBox: {
    marginTop: '40px',
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: 'black',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '30%',
  },
  cardImage: {
    textAlign: 'center',
  },
  userImage: {
    width: '100px',
    borderRadius: '50%',
  },
  cardContent: {
    textAlign: 'center',
  },
  textBelowCards: {
    marginTop: '40px',
    textAlign: 'center',
    color: 'white',
  },
};

export default Contact;
