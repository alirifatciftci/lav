import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
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
      className="bg-black min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-light text-white mb-8 leading-tight">
              Hayalinizdeki projeyi<br />birlikte gerçekleştirelim.
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl font-body leading-relaxed">
              Projeniz hakkında konuşmak, fikir alışverişinde bulunmak veya 
              hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8 font-body">
                İletişim Bilgileri
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" strokeWidth={1} />
                    <div>
                      <h3 className="text-xl font-display font-light text-white mb-2">Adres</h3>
                      <p className="text-gray-400 font-body leading-relaxed">
                        Yenişehir Mah. Osmanlı Bulvarı Ayport No:2/A<br />
                        İç Kapı No:65<br />
                        Kurtköy-Pendik / İstanbul
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-white mt-1 flex-shrink-0" strokeWidth={1} />
                    <div>
                      <h3 className="text-xl font-display font-light text-white mb-2">Telefon</h3>
                      <div className="space-y-1">
                        <a href="tel:+902162085051" className="block text-gray-400 hover:text-white transition-colors font-body">
                          +90 (216) 208 50 51
                        </a>
                        <a href="https://wa.me/905323735207" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors font-body">
                          +90 (532) 373 52 07 (WhatsApp)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-white mt-1 flex-shrink-0" strokeWidth={1} />
                    <div>
                      <h3 className="text-xl font-display font-light text-white mb-2">E-posta</h3>
                      <div className="space-y-1">
                        <a href="mailto:info@lavmimarlik.com" className="block text-gray-400 hover:text-white transition-colors font-body">
                          info@lavmimarlik.com
                        </a>
                        <a href="mailto:lavyapimimarlik@gmail.com" className="block text-gray-400 hover:text-white transition-colors font-body">
                          lavyapimimarlik@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-8 border-t border-gray-900">
                  <h3 className="text-xl font-display font-light text-white mb-4">Sosyal Medya</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/lavmimarlik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Instagram size={24} strokeWidth={1} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/lav-mimarlik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin size={24} strokeWidth={1} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-950 border border-gray-900 p-8 md:p-12"
            >
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img 
                  src="/assets/beyazlogo.png" 
                  alt="LAV Mimarlık" 
                  className="h-16"
                />
              </div>

              <h2 className="text-2xl font-display font-light text-white text-center mb-3">
                Bizimle İletişime Geçin
              </h2>
              <p className="text-sm text-gray-400 text-center mb-8 font-body">
                Projeniz hakkında konuşalım
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2 font-body">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Adınız ve soyadınız"
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white placeholder:text-gray-600 focus:border-white focus:outline-none transition-colors font-body"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2 font-body">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ornek@email.com"
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white placeholder:text-gray-600 focus:border-white focus:outline-none transition-colors font-body"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-400 mb-2 font-body">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 (5XX) XXX XX XX"
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white placeholder:text-gray-600 focus:border-white focus:outline-none transition-colors font-body"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2 font-body">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Projeniz hakkında bize bilgi verin..."
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white placeholder:text-gray-600 focus:border-white focus:outline-none transition-colors resize-none font-body"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300 text-sm font-body tracking-wide disabled:opacity-50 disabled:cursor-not-allowed uppercase font-medium"
                >
                  {submitted ? '✓ Mesajınız Gönderildi' : 'Mesaj Gönder'}
                </button>

                <p className="text-xs text-gray-500 text-center font-body">
                  * işaretli alanlar zorunludur
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8 font-body">
              Konum
            </h2>
            <div className="aspect-[21/9] bg-gray-900 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.2345678901!2d29.3077503!3d40.9305055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cada1203fe7c87%3A0x53d0c00cf3d6d2db!2zxLBtZ2EgUG9ydGFsbA!5e0!3m2!1str!2str!4v1707318000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LAV Mimarlık - İmga Portall, Kurtköy, Pendik / İstanbul"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

