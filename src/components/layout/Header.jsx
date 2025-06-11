import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Sobre Ximena', path: '/sobre-ximena' },
  { name: 'Propuestas', path: '/propuestas' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Se aplica el nuevo estilo de cristal
    <header className="glass-header sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/images/logo-ximena.svg" alt="Logo Ximena López" className="h-10 w-10" />
          <span className="font-bold text-lg text-brand-green hidden sm:block">Ximena López Yule</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-semibold transition-colors ${
                  isActive ? 'text-brand-green' : 'text-gray-200 hover:text-white' // Se ajusta el color para mejor contraste
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-header pb-4" // También se aplica el estilo de cristal al menú móvil
        >
          <nav className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-semibold text-lg ${
                    isActive ? 'text-brand-green' : 'text-gray-200'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}

export default Header;