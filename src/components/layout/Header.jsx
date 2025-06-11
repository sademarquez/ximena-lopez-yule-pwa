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
    <header className="glass-header sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          {/* Logo ahora con el color dorado */}
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-brand-gold"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
          <span className="font-bold text-lg text-gold hidden sm:block">Ximena López Yule</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              // Usamos la clase text-gold para heredar los estilos de hover
              className={({ isActive }) =>
                `font-semibold text-lg transition-colors ${
                  isActive ? 'text-brand-gold-light drop-shadow-gold-glow' : 'text-gold'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-gold">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-header pb-4"
        >
          <nav className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-semibold text-lg ${
                    isActive ? 'text-brand-gold-light drop-shadow-gold-glow' : 'text-gold'
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