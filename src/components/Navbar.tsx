import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Anasayfa' },
    { to: '/projeler', label: 'Projeler' },
    { to: '/hizmetler', label: 'Hizmetler' },
    { to: '/kurumsal', label: 'Kurumsal' },
    { to: '/ekip', label: 'Kadro' },
    { to: '/iletisim', label: 'İletişim' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/assets/beyazlogo.png" alt="LAV Mimarlık" className="h-12" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-white hover:text-yellow-400 transition-colors font-body text-sm ${
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
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-900">
          <div className="px-8 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-white hover:text-yellow-400 transition-colors font-body text-sm ${
                    isActive ? 'text-yellow-400' : ''
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
