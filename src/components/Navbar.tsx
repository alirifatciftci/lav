import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/lavlogoname.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Anasayfa' },
    { to: '/kurumsal', label: 'Kurumsal' },
    { to: '/hizmetler', label: 'Hizmetler' },
    { to: '/projeler', label: 'Projeler' },
    { to: '/ekip', label: 'Kadro' },
    { to: '/iletisim', label: 'İletişim' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-24">
          <Link to="/" className="absolute left-4 sm:left-6 lg:left-8 flex items-center">
            <img src={logo} alt="LAV Architecture" className="h-14 brightness-110" />
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium tracking-widest transition-all duration-200 text-white hover:text-yellow-400 uppercase ${
                    isActive ? 'text-yellow-400' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-4 sm:right-6 lg:right-8 p-2 text-white hover:text-yellow-400"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium py-3 uppercase tracking-wider ${
                    isActive
                      ? 'text-yellow-400 font-semibold'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
