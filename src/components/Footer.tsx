import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/lavlogoname.png';

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=600&fit=crop"
          alt="Geleceği Birlikte İnşa Edelim"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-light text-white mb-4"
            >
              Geleceği Birlikte İnşa Edelim
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="/iletisim"
                className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300 text-sm font-body tracking-wide"
              >
                İletişime Geçin
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              alt="LAV Mimarlık" 
              className="h-10 mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
              Estetik ve fonksiyonelliği bir araya getiren mimarlık.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lavmimarlik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/company/lav-mimarlik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-light text-lg mb-6">Keşfet</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors font-body text-sm">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/projeler" className="text-gray-400 hover:text-white transition-colors font-body text-sm">
                  Projeler
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-gray-400 hover:text-white transition-colors font-body text-sm">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link to="/kurumsal" className="text-gray-400 hover:text-white transition-colors font-body text-sm">
                  Kurumsal
                </Link>
              </li>
              <li>
                <Link to="/ekip" className="text-gray-400 hover:text-white transition-colors font-body text-sm">
                  Kadro
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-light text-lg mb-6">Hizmetler</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 font-body text-sm">Master Plan</li>
              <li className="text-gray-400 font-body text-sm">İç Mimari Planlama</li>
              <li className="text-gray-400 font-body text-sm">Peysaj Planlama</li>
              <li className="text-gray-400 font-body text-sm">Uygulama Projesi</li>
              <li className="text-gray-400 font-body text-sm">Mimari Taahhüt</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-light text-lg mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-gray-400 font-body text-sm leading-relaxed">
                  Yenişehir Mah. Osmanlı Bulvarı<br />
                  Ayport No:2/A İç Kapı No:65<br />
                  Kurtköy-Pendik / İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+902162085051" className="text-gray-400 hover:text-white transition-colors font-body text-sm">
                  +90 (216) 208 50 51
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@lavmimarlik.com" className="text-gray-400 hover:text-white transition-colors font-body text-sm">
                  info@lavmimarlik.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 font-body">
            © 2024 LAV Mimarlık. Tüm hakları saklıdır.
          </div>
          <div className="text-sm text-gray-500 font-body">
            <a 
              href="https://www.linkedin.com/in/alirifatciftci" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Designed by alirifatciftci
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
