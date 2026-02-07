import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../assets/lavlogoname.png';

const featuredProjects = [
  {
    id: 1,
    title: 'Marin Loft',
    slug: 'marin-loft',
    image: '/src/assets/marin/marinloft1.png',
    height: 'tall',
  },
  {
    id: 2,
    title: 'İlker Talu Villası',
    slug: 'ilker-talu-villasi',
    image: '/src/assets/ilker/ilk1.png',
    height: 'medium',
  },
  {
    id: 3,
    title: 'İmga Portall',
    slug: 'imga-portall',
    image: '/src/assets/imga/imga1.png',
    height: 'tall',
  },
  {
    id: 4,
    title: 'DKY Business Ofis',
    slug: 'dky-business-ofis',
    image: '/src/assets/dky/dky1.jpeg',
    height: 'medium',
  },
  {
    id: 5,
    title: 'White Residence',
    slug: 'white-residence',
    image: '/src/assets/white/white1.png',
    height: 'medium',
  },
  {
    id: 6,
    title: 'Sipahi Konutları',
    slug: 'sipahi-konutlari',
    image: '/src/assets/sipahi/sipahi1.png',
    height: 'tall',
  },
  {
    id: 7,
    title: 'Doğal Yaşam Villaları',
    slug: 'dogal-yasam-villalari',
    image: '/src/assets/dogal/dogal1.png',
    height: 'medium',
  },
  {
    id: 8,
    title: 'Onur Sertkaya Villası',
    slug: 'onur-sertkaya-villasi',
    image: '/src/assets/onur/onur1.png',
    height: 'tall',
  },
  {
    id: 9,
    title: 'Zinar Dağ Evi',
    slug: 'zinar-dag-evi',
    image: '/src/assets/zinar/zin1.png',
    height: 'medium',
  },
  {
    id: 10,
    title: 'Green Land Luxury Mansion',
    slug: 'green-land-luxury-mansion',
    image: '/src/assets/green/green1.png',
    height: 'medium',
  },
];

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Mouse wheel horizontal scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 620;
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
      className="bg-black min-h-screen"
    >
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen overflow-hidden -mt-16 pt-16">
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
                className="h-32 md:h-40 lg:h-48 mx-auto brightness-0 invert drop-shadow-2xl"
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
      </section>

      {/* Horizontal Scrolling Projects */}
      <section className="py-20 relative bg-black">
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-body">
              Öne Çıkan Projeler
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-white">
              Seçili Çalışmalarımız
            </h3>
          </motion.div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white hover:bg-gray-200 transition-colors"
          aria-label="Önceki projeler"
        >
          <ChevronLeft className="text-black" size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white hover:bg-gray-200 transition-colors"
          aria-label="Sonraki projeler"
        >
          <ChevronRight className="text-black" size={24} />
        </button>

        <div 
          ref={scrollContainerRef}
          className="overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-2 px-8 pb-4">
            {featuredProjects.map((project, index) => {
              const heightClass = 
                project.height === 'tall' ? 'h-[600px]' :
                project.height === 'medium' ? 'h-[450px]' :
                'h-[350px]';
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`flex-shrink-0 w-[500px] md:w-[600px] ${heightClass}`}
                >
                  <Link
                    to={`/projeler/${project.slug}`}
                    className="group block relative w-full h-full overflow-hidden bg-black"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-display font-light text-white">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-8 px-8">
          <p className="text-sm text-gray-500 font-body">
            Kaydırarak daha fazla proje keşfedin →
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8 font-body">
              Hakkımızda
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-light text-white mb-12">
              Modern Mimarlık Anlayışı
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed font-body">
              LAV Mimarlık olarak, estetik ve fonksiyonelliği bir araya getirerek,
              yaşam alanlarınıza değer katan projeler üretiyoruz. Deneyimimiz ve modern
              yaklaşımımızla, hayalinizdeki mekanları gerçeğe dönüştürüyoruz.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-12 mt-20 pt-12 border-t border-gray-900">
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
                className="text-center"
              >
                <div className="text-5xl font-display font-light text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* View All Projects CTA */}
      <section className="py-20 px-8 text-center border-t border-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/projeler"
            className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300 text-sm font-body tracking-wide"
          >
            Tüm Projeleri Görüntüle
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
