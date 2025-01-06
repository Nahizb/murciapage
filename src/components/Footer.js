import React from 'react';
import '../styles/Footer.css'; // Ruta ajustada para apuntar a src/styles/Footer.css

function Footer() {
  return (
    <footer className="bg-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <p className="mb-0">© 2024 MurciaPage. Todos los derechos reservados.</p>
        <button className="btn btn-dark btn-hover">Consentimiento</button>
      </div>
    </footer>
  );
}

export default Footer;
