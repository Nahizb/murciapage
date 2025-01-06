import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Concerts from './pages/Concerts';
import Discordia from './pages/Discordia';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importa el Footer

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      {/* Define las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conciertos" element={<Concerts />} />
        <Route path="/discordia" element={<Discordia />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Incluye el Footer aquí */}
      <Footer />
    </Router>
  );
}

export default AppRoutes;
