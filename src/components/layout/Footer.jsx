import { Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">Ximena López Yule</h3>
            <p className="text-gray-300">Candidata a la Cámara de Representantes<br/>Circunscripción Territorial N1 Alto Patía Norte del Cauca</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Navegación</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="text-gray-300 hover:text-white">Inicio</Link></li>
              <li><Link to="/sobre-ximena" className="text-gray-300 hover:text-white">Sobre Ximena</Link></li>
              <li><Link to="/propuestas" className="text-gray-300 hover:text-white">Propuestas</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Sígueme</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-gray-300 hover:text-white"><Twitter/></a>
              <a href="#" className="text-gray-300 hover:text-white"><Facebook/></a>
              <a href="#" className="text-gray-300 hover:text-white"><Instagram/></a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Campaña Ximena López Yule. Todos los derechos reservados.</p>
          <p>Desarrollado con compromiso por la comunidad.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;