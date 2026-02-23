import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../assets/lavlogoname.png';

const featuredProjects = [
  {
    id: 1,
    title: 'Marin Loft',
    location: 'Kartal, İstanbul',
    slug: 'marin-loft',
    image: '/assets/marin/marinloft1.png',
  },
  {
    id: 2,
    title: 'İmga Portall',
    location: 'Pendik, İstanbul',
    slug: 'imga-portall',
    image: '/assets/imga/imga1.png',
  },
  {
    id: 3,
    title: 'White Residence',
    location: 'Kartal, İstanbul',
    slug: 'white-residence',
    image: '/assets/white/white1.png',
  },
  {
    id: 4,
    title: 'Sipahi Konutları',
    location: 'Kuşadası, Aydın',
    slug: 'sipahi-konutlari',
    image: '/assets/sipahi/sipahi1.png',
  },
  {
    id: 5,
    title: 'Doğal Yaşam Villaları',
    location: 'Çiftlikköy, Yalova',
    slug: 'dogal-yasam-villalari',
    image: '/assets/dogal/dogal1.png',
  },
  {
    id: 6,
    title: 'Green Land Luxury Mansion',
    location: 'Erbil, Irak',
    slug: 'green-land-luxury-mansion',
    image: '/assets/green/green1.png',
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showButtons, setShowButtons] = useState(true);
  const pages = ['hero', 'projects'];

  useEffect(() => {
    // Sadece bir kez, 6 saniye sonra projeler sayfasına geç
    if (currentPage === 0) {
      const timer = setTimeout(() => {
        setCurrentPage(1);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  useEffect(() => {
    // Scroll pozisyonuna göre butonları göster/gizle
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Sadece ilk ekranda (hero alanında) butonları göster
      if (scrollPosition < windowHeight * 0.9) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    handleScroll(); // İlk yüklemede kontrol et
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Left Arrow - Go to Hero */}
      <AnimatePresence>
        {currentPage === 1 && showButtons && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            onClick={() => setCurrentPage(0)}
            className="fixed left-8 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
            aria-label="Önceki sayfa"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Right Arrow - Go to Projects */}
      <AnimatePresence>
        {currentPage === 0 && showButtons && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            onClick={() => setCurrentPage(1)}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
            aria-label="Sonraki sayfa"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {currentPage === 0 && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Page */}
            <section className="relative h-screen overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=900&fit=crop"
                alt="LAV Mimarlık"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/60" />

              <div className="absolute inset-0 flex items-center justify-center px-8">
                <div className="max-w-6xl mx-auto text-center">
                  {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-12"
                  >
                    <img 
                      src={logo} 
                      alt="LAV Mimarlık" 
                      className="h-40 md:h-52 lg:h-64 mx-auto drop-shadow-2xl"
                    />
                  </motion.div>

                  {/* Heading */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white leading-tight"
                  >
                    Estetik ve fonksiyonelliği bir araya getiren mimarlık.
                  </motion.h1>
                </div>
              </div>

              {/* Page Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`h-1 transition-all ${
                      index === currentPage ? 'bg-white w-12' : 'bg-white/50 w-8'
                    }`}
                    aria-label={`Sayfa ${index + 1}`}
                  />
                ))}
              </div>
            </section>
          </motion.div>
        )}

        {currentPage === 1 && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            {/* Projects Page */}
            <section className="relative h-screen overflow-hidden bg-black">
              <div className="max-w-7xl mx-auto px-8 pt-32 pb-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-16 text-center"
                >
                
                  <h3 className="text-5xl md:text-6xl font-display font-light text-white mb-6">
                    Seçili Çalışmalarımız
                  </h3>
                  <div className="w-24 h-1 bg-white mx-auto"></div>
                </motion.div>

                {/* Projects Grid - 3 columns, 2 rows = 6 projects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative aspect-[4/3] overflow-hidden bg-black"
                    >
                      <Link to={`/projeler/${project.slug}`} className="block w-full h-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-4">
                          <h4 className="text-lg font-display font-light text-white mb-1 group-hover:text-gray-200 transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-xs text-gray-400 font-body">{project.location}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* View All Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <Link
                    to="/projeler"
                    className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-900 hover:text-white border-2 border-white transition-all duration-300 text-sm font-body tracking-widest uppercase"
                  >
                    Tüm Projeleri Keşfet
                  </Link>
                </motion.div>
              </div>

              {/* Page Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`h-1 transition-all ${
                      index === currentPage ? 'bg-white w-12' : 'bg-white/50 w-8'
                    }`}
                    aria-label={`Sayfa ${index + 1}`}
                  />
                ))}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About & Services Section - Before Footer */}
      <section className="bg-black py-32 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-body">
              Hakkımızda
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-white mb-8">
              Modern Mimarlık Anlayışı
            </h3>
            <div className="w-24 h-px bg-white mx-auto mb-12"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-body">
              LAV Mimarlık olarak, estetik ve fonksiyonelliği bir araya getirerek,
              yaşam alanlarınıza değer katan projeler üretiyoruz. Deneyimimiz ve modern
              yaklaşımımızla, hayalinizdeki mekanları gerçeğe dönüştürüyoruz.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {[
              { number: '25+', label: 'Yıllık Deneyim', desc: 'Sektördeki tecrübemiz' },
              { number: '50+', label: 'Tamamlanan Proje', desc: 'Başarılı çalışmalarımız' },
              { number: '100+', label: 'Mutlu Müşteri', desc: 'Memnuniyet oranımız' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-gray-900 hover:border-gray-700 transition-colors"
              >
                <div className="text-6xl font-display font-light text-white mb-3">
                  {stat.number}
                </div>
                <div className="text-base text-white uppercase tracking-wider font-body mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 font-body">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-body">
              Uzmanlık Alanlarımız
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-white mb-8">
              Hizmetlerimiz
            </h3>
            <div className="w-24 h-px bg-white mx-auto mb-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: 'Mimari Proje',
                  desc: 'Estetik ve fonksiyonel mimari tasarımlar'
                },
                { 
                  title: 'İç Mimari',
                  desc: 'Yaşam alanlarınıza özel iç mekan çözümleri'
                },
                { 
                  title: 'Kentsel Dönüşüm',
                  desc: 'Şehir dokusuna uyumlu dönüşüm projeleri'
                },
                { 
                  title: 'Danışmanlık',
                  desc: 'Profesyonel mimarlık danışmanlık hizmetleri'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 border border-gray-900 hover:border-white transition-all duration-500"
                >
                  {/* Number */}
                  <div className="text-6xl font-display font-light text-gray-800 group-hover:text-gray-700 transition-colors mb-4">
                    0{index + 1}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-display font-light text-white mb-3 uppercase tracking-wider">
                    {service.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors font-body leading-relaxed">
                    {service.desc}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <Link
                to="/hizmetler"
                className="inline-block px-8 py-3 bg-transparent text-white hover:bg-white hover:text-black border border-white transition-all duration-300 text-sm font-body tracking-widest uppercase"
              >
                Tüm Hizmetleri Görüntüle
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

