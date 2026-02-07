import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Printer, Globe, Building2, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/lavlogoname.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-950 border-t border-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="LAV Mimarlık" className="h-20 mb-6 brightness-110 drop-shadow-2xl" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-body">
              Estetik ve fonksiyonun uyumu ile modern mimarlık çözümleri sunuyoruz.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start text-sm text-gray-400">
                <Building2 size={18} className="mr-3 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="font-body leading-relaxed">LAV MİMARLIK İNŞAAT LTD. ŞTİ.</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 group border border-gray-700 hover:border-yellow-400"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 group border border-gray-700 hover:border-yellow-400"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 group border border-gray-700 hover:border-yellow-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 group border border-gray-700 hover:border-yellow-400"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-display font-semibold text-yellow-400 mb-6 uppercase tracking-wider">
              Hızlı Erişim
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Anasayfa' },
                { to: '/kurumsal', label: 'Kurumsal' },
                { to: '/hizmetler', label: 'Hizmetler' },
                { to: '/projeler', label: 'Projeler' },
                { to: '/ekip', label: 'Kadro' },
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
            <h4 className="text-base font-display font-semibold text-yellow-400 mb-6 uppercase tracking-wider">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-gray-400 group">
                <div className="w-8 h-8 bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors border border-gray-700 group-hover:border-yellow-400/50">
                  <MapPin size={16} className="text-yellow-400" />
                </div>
                <span className="font-body leading-relaxed pt-1">
                  Yenişehir Mah. Osmanlı Bulvarı<br />
                  Ayport No:2/A İç Kapı No:65<br />
                  Kurtköy-Pendik / İSTANBUL
                </span>
              </li>
              <li className="flex items-start text-sm text-gray-400 group">
                <div className="w-8 h-8 bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors border border-gray-700 group-hover:border-yellow-400/50">
                  <Phone size={16} className="text-yellow-400" />
                </div>
                <div className="font-body pt-1">
                  <a href="tel:+902162085051" className="hover:text-yellow-400 transition-colors">+90 216 208 50 51</a>
                  <div className="text-xs text-gray-500 mt-1">
                    <a href="https://wa.me/905323735207" className="hover:text-yellow-400 transition-colors">+90 532 373 52 07 (WhatsApp)</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start text-sm text-gray-400 group">
                <div className="w-8 h-8 bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors border border-gray-700 group-hover:border-yellow-400/50">
                  <Printer size={16} className="text-yellow-400" />
                </div>
                <div className="font-body pt-1">
                  <div className="text-xs text-gray-500 mb-1">Faks</div>
                  <span>+90 216 684 08 82</span>
                </div>
              </li>
              <li className="flex items-start text-sm text-gray-400 group">
                <div className="w-8 h-8 bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors border border-gray-700 group-hover:border-yellow-400/50">
                  <Mail size={16} className="text-yellow-400" />
                </div>
                <div className="font-body pt-1">
                  <a href="mailto:info@lavmimarlik.com" className="hover:text-yellow-400 transition-colors">info@lavmimarlik.com</a>
                  <div className="text-xs text-gray-500 mt-1">
                    <a href="mailto:lavyapimimarlik@gmail.com" className="hover:text-yellow-400 transition-colors">lavyapimimarlik@gmail.com</a>
                  </div>
                </div>
              </li>
              <li className="flex items-center text-sm text-gray-400 group">
                <div className="w-8 h-8 bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors border border-gray-700 group-hover:border-yellow-400/50">
                  <Globe size={16} className="text-yellow-400" />
                </div>
                <a 
                  href="https://www.lavmimarlik.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body hover:text-yellow-400 transition-colors"
                >
                  www.lavmimarlik.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-base font-display font-semibold text-yellow-400 mb-6 uppercase tracking-wider">
              Kurumsal Bilgiler
            </h4>
            <div className="space-y-6">
              <div className="bg-gray-800/30 border border-gray-700 p-4 hover:border-yellow-400/50 transition-colors">
                <div className="text-gray-500 text-xs mb-2 uppercase tracking-wider font-body">Ticaret Odası</div>
                <div className="text-sm text-gray-300 font-body">İstanbul Tic. Odası</div>
                <div className="text-xs text-yellow-400 mt-1 font-body">Sicil No: 956870-0</div>
              </div>
              
              <div className="bg-gray-800/30 border border-gray-700 p-4 hover:border-yellow-400/50 transition-colors">
                <div className="text-gray-500 text-xs mb-2 uppercase tracking-wider font-body">Mimarlar Odası</div>
                <div className="text-xs text-yellow-400 font-body">Belge Tescil No: 34-196</div>
              </div>
              
              <div className="bg-gray-800/30 border border-gray-700 p-4 hover:border-yellow-400/50 transition-colors">
                <div className="text-gray-500 text-xs mb-2 uppercase tracking-wider font-body">Vergi Dairesi</div>
                <div className="text-sm text-gray-300 font-body">Pendik V.D.</div>
                <div className="text-xs text-yellow-400 mt-1 font-body">VKN: 6081734879</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-center text-sm text-gray-500 font-body">
            © 2025 <span className="text-yellow-400">LAV Mimarlık İnşaat Ltd. Şti.</span> Tüm hakları saklıdır.
          </p>
          <div className="flex items-center space-x-6 text-xs text-gray-500 font-body">
            <Link to="/gizlilik-politikasi" className="hover:text-yellow-400 transition-colors">
              Gizlilik Politikası
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/kvkk" className="hover:text-yellow-400 transition-colors">
              KVKK
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/cerez-politikasi" className="hover:text-yellow-400 transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
