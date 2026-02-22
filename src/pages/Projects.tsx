import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Marin Loft',
    location: 'Kartal, İstanbul',
    year: '2025',
    category: 'Konut',
    image: '/assets/marin/marinloft1.png',
    images: [
      '/assets/marin/marinloft1.png',
      '/assets/marin/marinloft2.png',
      '/assets/marin/marinloft3.png',
      '/assets/marin/marinloft4.png',
      '/assets/marin/marinloft5.png'
    ],
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
    images: [
      '/assets/hatay kumlu/hatay2.png',
      '/assets/hatay kumlu/hatay1.png',
      '/assets/hatay kumlu/hatay3.png',
      '/assets/hatay kumlu/hatay4.png',
      '/assets/hatay kumlu/hatay5.png'
    ],
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
    images: [
      '/assets/imga/imga1.png',
      '/assets/imga/imga2.png',
      '/assets/imga/imga3.png',
      '/assets/imga/imga4.png',
      '/assets/imga/imga5.png'
    ],
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
    images: [
      '/assets/dky/dky1.jpeg',
      '/assets/dky/dky2.png',
      '/assets/dky/dky3.png',
      '/assets/dky/dky4.png',
      '/assets/dky/dky5.png'
    ],
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
    images: [
      '/assets/white/white1.png',
      '/assets/white/white2.png',
      '/assets/white/white3.png'
    ],
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
    images: [
      '/assets/sipahi/sipahi1.png',
      '/assets/sipahi/sipahi2.png',
      '/assets/sipahi/sipahi3.png'
    ],
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
    images: [
      '/assets/ozhasar/oz1.png',
      '/assets/ozhasar/oz2.png',
      '/assets/ozhasar/oz3.png'
    ],
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
    images: [
      '/assets/murat/murat1.png',
      '/assets/murat/murat2.png',
      '/assets/murat/murat3.png'
    ],
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
    images: [
      '/assets/onur/onur1.png',
      '/assets/onur/onur2.png',
      '/assets/onur/onur3.png'
    ],
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
    images: [
      '/assets/kent/kent1.png',
      '/assets/kent/kent2.png',
      '/assets/kent/kent3.png'
    ],
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
    images: [
      '/assets/dogal/dogal1.png',
      '/assets/dogal/dogal2.png',
      '/assets/dogal/dogal3.png'
    ],
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
    images: [
      '/assets/cınar/cınar1.png',
      '/assets/cınar/cınar2.png',
      '/assets/cınar/cınar3.png'
    ],
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
    images: [
      '/assets/aydin/aydin1.png',
      '/assets/aydin/aydin2.png',
      '/assets/aydin/aydin3.png'
    ],
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
    images: [
      '/assets/bahar/bahar1.png',
      '/assets/bahar/bahar2.png',
      '/assets/bahar/bahar3.png',
      '/assets/bahar/bahar4.png',
      '/assets/bahar/bahar5.png'
    ],
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
    images: [
      '/assets/zinar/zin1.png',
      '/assets/zinar/zin2.png',
      '/assets/zinar/zin3.png'
    ],
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
    images: [
      '/assets/green/green1.png',
      '/assets/green/green2.png',
      '/assets/green/green3.png'
    ],
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
    images: [
      '/assets/mimoza/mim1.png',
      '/assets/mimoza/mim2.png',
      '/assets/mimoza/mim3.png',
      '/assets/mimoza/mim4.png',
      '/assets/mimoza/mim5.png'
    ],
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
    images: [
      '/assets/erbil/er1.png',
      '/assets/erbil/er2.png',
      '/assets/erbil/er3.png'
    ],
    slug: 'erbil-business-center',
    size: 'small',
  },
];

// Project Card Component
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [currentImage, setCurrentImage] = useState(project.image);

  const handleThumbnailClick = (e: React.MouseEvent, imagePath: string) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage(imagePath);
  };

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.03 }}
      className="group relative aspect-[4/3] overflow-visible bg-black border border-gray-900 hover:border-gray-700 transition-all duration-500"
    >
      <Link
        to={`/projeler/${project.slug}`}
        className="block w-full h-full"
      >
        {/* Image */}
        <div className="relative w-full h-full overflow-hidden">
          <motion.img
            key={currentImage}
            src={currentImage}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
          />
        </div>
        
        {/* Gradient Overlay - Subtle on the right side */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent pointer-events-none" />
        
        {/* Content - Positioned on the right */}
        <div className="absolute inset-0 flex flex-col justify-end items-end p-8 text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-display font-light text-white mb-4 group-hover:text-gray-200 transition-colors">
              {project.title}
            </h3>
            
            {/* Meta Info */}
            <div className="flex items-center justify-end gap-4 text-sm text-gray-300 font-body mb-4">
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
            
            {/* Thumbnail Gallery - Always Visible */}
            <div className="flex gap-2 mb-4 justify-end">
              {project.images.slice(0, 5).map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={(e) => handleThumbnailClick(e, img)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                  className={`relative w-12 h-12 flex-shrink-0 overflow-hidden border-2 transition-all duration-300 pointer-events-auto ${
                    currentImage === img 
                      ? 'border-white shadow-lg shadow-white/20' 
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center justify-end gap-2 text-white font-body text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300 pointer-events-none">
              <span>Detayları Görüntüle</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

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

      {/* Projects Grid - Enhanced Design with Thumbnails */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

