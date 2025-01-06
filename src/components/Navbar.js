import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../styles/images/logo1.jpg'; // Importar el logo
import spainFlag from '../styles/images/spain.png'; // Importar la bandera de España
import europeFlag from '../styles/images/europe.png'; // Importar la bandera de Europa (para inglés)
import hombreIcon from '../styles/images/hombre.png'; // Importar el icono de acceso

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Contenedor para el logo y los enlaces */}
        <div className="nav-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/conciertos">Conciertos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/discordia">Discordia</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Botón de cambio de idioma y herramientas de accesibilidad */}
        <div className="language-accessibility">
          {/* Pestaña de idioma */}
          <div className="dropdown lang-dropdown">
            <button className="lang-button dropdown-toggle">
              <img src={spainFlag} alt="ES" className="flag-icon" />
              <span className="lang-text">ES</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item">
                  <img src={europeFlag} alt="EN" className="flag-icon" />
                  <span className="lang-text">EN</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Pestaña de herramientas de accesibilidad */}
          <div className="accessibility-dropdown">
            <button className="accessibility-button">
              <img src={hombreIcon} alt="Accesibilidad" className="accessibility-icon" />
              <span className="accessibility-text">Herramientas de accesibilidad</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
