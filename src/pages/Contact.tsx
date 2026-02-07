import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import logo from '../assets/lavlogoname.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop"
          alt="Contact"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-yellow-400/20 backdrop-blur-sm text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-6 rounded-full border border-yellow-400/30">
                İletişim
              </span>
              <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6">
                Bize Ulaşın
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-light text-white mb-6">
                Bizimle İletişime Geçin
              </h2>
              <p className="text-gray-300 mb-12 leading-relaxed text-lg">
                Projeleriniz için bizimle iletişime geçmekten çekinmeyin. Sizlere en
                kısa sürede dönüş yapacağız.
              </p>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-400/30">
                    <MapPin className="text-gray-900" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Adres</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Yenişehir Mah. Osmanlı Bulvarı Ayport No:2/A<br />
                      Kurtköy-Pendik / İSTANBUL
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300 border border-yellow-400/30">
                    <Phone className="text-yellow-400" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
                    <p className="text-gray-400 text-lg">+90 216 208 50 51</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-400/30">
                    <Mail className="text-gray-900" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">E-posta</h3>
                    <p className="text-gray-400 text-lg">info@lavmimarlik.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 h-80 bg-gray-900 overflow-hidden shadow-2xl shadow-yellow-400/10 border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.0234567890123!2d29.1234567!3d40.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzE1LjYiTiAyOcKwMDcnMjQuNCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LAV Mimarlık Konum"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-10 shadow-2xl border border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-light text-white mb-8">
                Mesaj Gönderin
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-800 p-10 text-center border border-yellow-400/30"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-6 shadow-lg shadow-yellow-400/30">
                    <Send className="text-gray-900" size={28} />
                  </div>
                  <h4 className="text-2xl font-medium text-white mb-3">
                    Mesajınız Gönderildi!
                  </h4>
                  <p className="text-gray-400">
                    En kısa sürede size dönüş yapacağız.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-yellow-400 mb-2 uppercase tracking-wider"
                    >
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors backdrop-blur-sm"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-yellow-400 mb-2 uppercase tracking-wider"
                    >
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors backdrop-blur-sm"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-yellow-400 mb-2 uppercase tracking-wider"
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors resize-none backdrop-blur-sm"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center shadow-lg shadow-yellow-400/30 hover:shadow-xl transform hover:scale-105"
                  >
                    <Send size={20} className="mr-3" />
                    GÖNDER
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
              Departmanlarımız
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6" />
            <p className="text-gray-300 text-lg font-body">
              Projeleriniz için doğru departmanla iletişime geçin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Department */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-yellow-400/30 p-10 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              <div className="flex items-center justify-center mb-8">
                <img src={logo} alt="LAV Mimarlık" className="h-20 brightness-110 drop-shadow-2xl" />
              </div>
              <h3 className="text-2xl font-display font-bold text-yellow-400 mb-6 text-center uppercase tracking-wider">
                Proje Departmanı
              </h3>
              <div className="text-center space-y-4">
                <div className="text-gray-300 font-body">
                  <div className="text-lg mb-2 font-semibold">İbrahim Çiftçi</div>
                  <div className="text-sm text-gray-500">Mimar (Kurucu)</div>
                </div>
                <a 
                  href="tel:+905323735207" 
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 font-bold text-lg shadow-lg shadow-yellow-400/30"
                >
                  <Phone size={20} className="mr-3" />
                  (+90) 532 373 52 07
                </a>
              </div>
            </motion.div>

            {/* Application Department */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-yellow-400/30 p-10 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              <div className="flex items-center justify-center mb-8">
                <img src={logo} alt="LAV Mimarlık" className="h-20 brightness-110 drop-shadow-2xl" />
              </div>
              <h3 className="text-2xl font-display font-bold text-yellow-400 mb-6 text-center uppercase tracking-wider">
                Uygulama Departmanı
              </h3>
              <div className="text-center space-y-4">
                <div className="text-gray-300 font-body">
                  <div className="text-lg mb-2 font-semibold">Servet Armani</div>
                  <div className="text-sm text-gray-500">Mimar</div>
                </div>
                <a 
                  href="tel:+905537561141" 
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 font-bold text-lg shadow-lg shadow-yellow-400/30"
                >
                  <Phone size={20} className="mr-3" />
                  (+90) 553 756 11 41
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-light tracking-wide mb-4"
            >
              Geleceği Birlikte İnşa Edelim
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
