import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Marin Loft',
    location: 'Kartal, İstanbul',
    year: '2025',
    category: 'Konut',
    image: '/assets/marin/marinloft1.png',
    slug: 'marin-loft',
    size: 'large',
  },
  {
    id: 2,
    title: 'Hatay Köy Evleri',
    location: 'Kumlu, Hatay',
    year: '2025',
    category: 'Kamu',
    image: '/assets/hatay kumlu/hatay2.png',
    slug: 'hatay-koy-evleri',
    size: 'medium',
  },
  {
    id: 3,
    title: 'İmga Portall',
    location: 'Pendik, İstanbul',
    year: '2024',
    category: 'Ticari',
    image: '/assets/imga/imga1.png',
    slug: 'imga-portall',
    size: 'small',
  },
  {
    id: 4,
    title: 'DKY Business Ofis',
    location: 'Kartal, İstanbul',
    year: '2024',
    category: 'Ofis',
    image: '/assets/dky/dky1.jpeg',
    slug: 'dky-business-ofis',
    size: 'medium',
  },
  {
    id: 5,
    title: 'White Residence',
    location: 'Kartal, İstanbul',
    year: '2023',
    category: 'Konut',
    image: '/assets/white/white1.png',
    slug: 'white-residence',
    size: 'large',
  },
  {
    id: 6,
    title: 'Sipahi Konutları',
    location: 'Kuşadası, Aydın',
    year: '2023',
    category: 'Konut',
    image: '/assets/sipahi/sipahi1.png',
    slug: 'sipahi-konutlari',
    size: 'small',
  },
  {
    id: 7,
    title: 'Mehmet Özhasar Evi',
    location: 'Pütürge, Malatya',
    year: '2023',
    category: 'Villa',
    image: '/assets/ozhasar/oz1.png',
    slug: 'mehmet-ozhasar-evi',
    size: 'medium',
  },
  {
    id: 8,
    title: 'Murat Aydın Villası',
    location: 'Bodrum, Muğla',
    year: '2022',
    category: 'Villa',
    image: '/assets/murat/murat1.png',
    slug: 'murat-aydin-villasi',
    size: 'large',
  },
  {
    id: 9,
    title: 'Onur Sertkaya Villası',
    location: 'Söke, Aydın',
    year: '2022',
    category: 'Villa',
    image: '/assets/onur/onur1.png',
    slug: 'onur-sertkaya-villasi',
    size: 'small',
  },
  {
    id: 10,
    title: 'Kentsel Dönüşüm',
    location: 'Kuşadası, Aydın',
    year: '2022',
    category: 'Konut',
    image: '/assets/kent/kent1.png',
    slug: 'kentsel-donusum-kusadasi',
    size: 'medium',
  },
  {
    id: 11,
    title: 'Doğal Yaşam Villaları',
    location: 'Çiftlikköy, Yalova',
    year: '2021',
    category: 'Villa',
    image: '/assets/dogal/dogal1.png',
    slug: 'dogal-yasam-villalari',
    size: 'large',
  },
  {
    id: 12,
    title: 'Çınar Villası',
    location: 'Bodrum, Muğla',
    year: '2021',
    category: 'Villa',
    image: '/assets/cınar/cınar1.png',
    slug: 'cinar-villasi',
    size: 'small',
  },
  {
    id: 13,
    title: 'Aydın Doğan Evi',
    location: 'Erzincan',
    year: '2020',
    category: 'Villa',
    image: '/assets/aydin/aydin1.png',
    slug: 'aydin-dogan-evi',
    size: 'medium',
  },
  {
    id: 14,
    title: 'Bahar Apartmanı',
    location: 'Kadıköy, İstanbul',
    year: '2019',
    category: 'Konut',
    image: '/assets/bahar/bahar1.png',
    slug: 'bahar-apartmani',
    size: 'large',
  },
  {
    id: 15,
    title: 'Zinar Dağ Evi',
    location: 'Mardin',
    year: '2019',
    category: 'Villa',
    image: '/assets/zinar/zin1.png',
    slug: 'zinar-dag-evi',
    size: 'small',
  },
  {
    id: 16,
    title: 'Green Land Luxury Mansion',
    location: 'Erbil, Irak',
    year: '2013',
    category: 'Villa',
    image: '/assets/green/green1.png',
    slug: 'green-land-luxury-mansion',
    size: 'medium',
  },
  {
    id: 17,
    title: 'Mimoza Apartmanı',
    location: 'Kadıköy, İstanbul',
    year: '2018',
    category: 'Konut',
    image: '/assets/mimoza/mim1.png',
    slug: 'mimoza-apartmani',
    size: 'large',
  },
  {
    id: 18,
    title: 'Erbil Business Center',
    location: 'Erbil, Irak',
    year: '2014',
    category: 'Ticari',
    image: '/assets/erbil/er1.png',
    slug: 'erbil-business-center',
    size: 'small',
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen pt-16"
    >
      {/* Header */}
      <section className="py-20 px-8 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-light text-white mb-8"
          >
            Projeler
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl font-body"
          >
            Her proje, benzersiz bir hikaye anlatır. Tasarımlarımızı keşfedin.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid - Professional Layout with Badges */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group relative aspect-[4/3] overflow-hidden bg-black"
              >
                <Link
                  to={`/projeler/${project.slug}`}
                  className="block w-full h-full"
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-display font-light text-white mb-4 group-hover:text-gray-200 transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-300 font-body mb-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{project.year}</span>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="flex items-center gap-2 text-white font-body text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                        <span>Detayları Görüntüle</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

