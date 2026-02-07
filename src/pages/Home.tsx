import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../assets/lavlogoname.png';

const heroImages = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop',
];

const featuredProjects = [
  {
    id: 1,
    title: 'Marin Loft',
    slug: 'marin-loft',
    image: '/src/assets/marin/marinloft1.png',
  },
  {
    id: 2,
    title: 'Hatay Köy Evleri',
    slug: 'hatay-koy-evleri',
    image: '/src/assets/hatay kumlu/hatay2.png',
  },
  {
    id: 3,
    title: 'İmga Portall',
    slug: 'imga-portall',
    image: '/src/assets/imga/imga1.png',
  },
  {
    id: 4,
    title: 'DKY Business Ofis',
    slug: 'dky-business-ofis',
    image: '/src/assets/dky/dky1.jpeg',
  },
  {
    id: 5,
    title: 'White Residence',
    slug: 'white-residence',
    image: '/src/assets/white/white1.png',
  },
  {
    id: 6,
    title: 'Sipahi Konutları',
    slug: 'sipahi-konutlari',
    image: '/src/assets/sipahi/sipahi1.png',
  },
  {
    id: 7,
    title: 'Doğal Yaşam Villaları',
    slug: 'dogal-yasam-villalari',
    image: '/src/assets/dogal/dogal1.png',
  },
  {
    id: 8,
    title: 'Onur Sertkaya Villası',
    slug: 'onur-sertkaya-villasi',
    image: '/src/assets/onur/onur1.png',
  },
  {
    id: 9,
    title: 'Zinar Dağ Evi',
    slug: 'zinar-dag-evi',
    image: '/src/assets/zinar/zin1.png',
  },
  {
    id: 10,
    title: 'Green Land Luxury Mansion',
    slug: 'green-land-luxury-mansion',
    image: '/src/assets/green/green1.png',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollProjects = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 458; // width of card (450) + gap (8)
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src={logo} 
                alt="LAV Mimarlık" 
                className="h-32 md:h-40 mx-auto brightness-110 drop-shadow-2xl"
              />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-wide mb-6 leading-tight"
            >
              Estetik ve Fonksiyonun Uyumu
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"
            />
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl font-body font-light tracking-widest text-white/90 mb-10"
            >
              Proje | Uygulama | Danışmanlık
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link
                to="/projeler"
                className="inline-block px-12 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 text-sm tracking-widest font-semibold shadow-2xl shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105"
              >
                PROJELERİ KEŞFET
              </Link>
            </motion.div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all border border-white/30"
        >
          <ChevronLeft className="text-white" size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all border border-white/30"
        >
          <ChevronRight className="text-white" size={32} />
        </button>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-12' : 'bg-white/50 w-8'
              }`}
            />
          ))}
        </div>
      </div>

      <section className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-6 py-2 bg-yellow-400/20 text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-8 rounded-full border border-yellow-400/30">
              Hakkımızda
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-light text-white mb-8 tracking-tight">
              Modern Mimarlık Anlayışı
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-12" />
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-body font-light">
              LAV Mimarlık olarak, estetik ve fonksiyonelliği bir araya getirerek,
              yaşam alanlarınıza değer katan projeler üretiyoruz. Deneyimimiz ve modern
              yaklaşımımızla, hayalinizdeki mekanları gerçeğe dönüştürüyoruz.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-24">
            {[
              { number: '25+', label: 'Yıllık Deneyim' },
              { number: '50+', label: 'Tamamlanan Proje' },
              { number: '100+', label: 'Mutlu Müşteri' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-6xl md:text-7xl font-display font-light text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-base text-gray-400 uppercase tracking-widest font-body font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20 px-4"
          >
            <span className="inline-block px-6 py-2 bg-yellow-400/20 text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-8 rounded-full border border-yellow-400/30">
              Portföy
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-light text-white mb-6 tracking-tight">
              Öne Çıkan Projeler
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
          </motion.div>

          {/* Scrollable Projects Container */}
          <div className="relative group">
            {/* Left Arrow */}
            <button
              onClick={() => scrollProjects('left')}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 flex items-center justify-center transition-all duration-300 shadow-2xl shadow-yellow-400/30 hover:scale-110"
              aria-label="Önceki projeler"
            >
              <ChevronLeft className="text-gray-900" size={32} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollProjects('right')}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 flex items-center justify-center transition-all duration-300 shadow-2xl shadow-yellow-400/30 hover:scale-110"
              aria-label="Sonraki projeler"
            >
              <ChevronRight className="text-gray-900" size={32} />
            </button>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />

            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-8 scroll-smooth"
            >
              <div className="flex gap-8 px-8 md:px-16">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-[400px] md:w-[450px]"
                  >
                    <Link
                      to={`/projeler/${project.slug}`}
                      className="group/card block relative aspect-[4/3] overflow-hidden bg-gray-900 border-2 border-gray-800 hover:border-yellow-400 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/20"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                        <h3 className="text-3xl md:text-4xl font-display font-light text-white text-center px-8 transform scale-90 group-hover/card:scale-100 transition-transform duration-500">
                          {project.title}
                        </h3>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex items-center justify-center gap-3 text-gray-400 text-sm font-body mt-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-yellow-400" />
                <span>Kaydırarak daha fazla proje keşfedin</span>
                <div className="w-8 h-0.5 bg-yellow-400" />
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20 px-4"
          >
            <Link
              to="/projeler"
              className="group inline-flex items-center px-12 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 text-sm tracking-widest font-bold shadow-lg shadow-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-400/50 hover:scale-105"
            >
              <span className="relative z-10">TÜM PROJELERİ GÖRÜNTÜLE</span>
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
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
              className="text-4xl md:text-6xl font-display font-light tracking-wide mb-6"
            >
              Geleceği Birlikte İnşa Edelim
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
