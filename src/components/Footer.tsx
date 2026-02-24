import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
      {/* CTA Banner with Enhanced Design */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=600&fit=crop"
          alt="Geleceği Birlikte İnşa Edelim"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Top decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-32 h-px bg-white/50 mx-auto mb-8"
            />

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-display font-light text-white mb-6"
            >
              Geleceği Birlikte İnşa Edelim
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 font-body mb-8 max-w-2xl mx-auto"
            >
              Hayalinizdeki projeyi gerçeğe dönüştürmek için bizimle iletişime geçin. 
              Uzman ekibimiz size özel çözümler sunmaya hazır.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="/iletisim"
                className="inline-block px-10 py-4 bg-white text-black hover:bg-gray-900 hover:text-white border-2 border-white transition-all duration-300 text-sm font-body tracking-widest uppercase"
              >
                İletişime Geçin
              </a>
              <a
                href="/projeler"
                className="inline-block px-10 py-4 bg-transparent text-white hover:bg-white hover:text-black border-2 border-white transition-all duration-300 text-sm font-body tracking-widest uppercase"
              >
                Projeleri İncele
              </a>
            </motion.div>

            {/* Bottom decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-32 h-px bg-white/50 mx-auto mt-8"
            />
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
              src="/assets/beyazlogo.png" 
              alt="LAV Mimarlık" 
              className="h-14 mb-6"
            />
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
              Estetik ve fonksiyonelliği bir araya getiren mimarlık.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lavmimarlik/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/lav-mimarl%C4%B1k-8568b61b1/"
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
            © 2026 LAV Mimarlık. Tüm hakları saklıdır.
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
