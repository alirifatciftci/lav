import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/lavlogoname.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-950 border-t border-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="LAV Mimarlık" className="h-16 mb-4 brightness-110 drop-shadow-2xl" />
            <p className="text-gray-400 text-sm leading-relaxed mb-4 font-body">
              Estetik ve fonksiyonun uyumu ile modern mimarlık çözümleri sunuyoruz.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center space-x-3">
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 group border border-gray-700 hover:border-yellow-400"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 group border border-gray-700 hover:border-yellow-400"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 group border border-gray-700 hover:border-yellow-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 group border border-gray-700 hover:border-yellow-400"
                aria-label="Twitter"
              >
                <Twitter size={16} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-semibold text-yellow-400 mb-4 uppercase tracking-wider">
              Hızlı Erişim
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Anasayfa' },
                { to: '/kurumsal', label: 'Kurumsal' },
                { to: '/hizmetler', label: 'Hizmetler' },
                { to: '/projeler', label: 'Projeler' },
                { to: '/iletisim', label: 'İletişim' }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors font-body flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-display font-semibold text-yellow-400 mb-4 uppercase tracking-wider">
              İletişim
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-gray-400">
                <MapPin size={16} className="text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="font-body text-xs leading-relaxed">
                  Yenişehir Mah. Osmanlı Bulvarı Ayport No:2/A İç Kapı No:65, Pendik / İstanbul
                </span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Phone size={16} className="text-yellow-400 mr-2 flex-shrink-0" />
                <a href="tel:+902162085051" className="font-body text-xs hover:text-yellow-400 transition-colors">
                  +90 216 208 50 51
                </a>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Mail size={16} className="text-yellow-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@lavmimarlik.com" className="font-body text-xs hover:text-yellow-400 transition-colors">
                  info@lavmimarlik.com
                </a>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Globe size={16} className="text-yellow-400 mr-2 flex-shrink-0" />
                <a 
                  href="https://www.lavmimarlik.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body text-xs hover:text-yellow-400 transition-colors"
                >
                  www.lavmimarlik.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6" />

        {/* Bottom Bar */}
        <div className="text-center space-y-3">
          <p className="text-xs text-gray-500 font-body">
            © 2025 <span className="text-yellow-400">LAV Mimarlık İnşaat Ltd. Şti.</span> Tüm hakları saklıdır.
          </p>
          <a 
            href="https://www.linkedin.com/in/alirifatciftci" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-body text-sm text-gray-500 hover:text-yellow-400 transition-colors inline-flex items-center group"
          >
            Designed by 
            <span className="ml-1.5 text-yellow-400 group-hover:text-yellow-300 font-medium">alirifatciftci</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
