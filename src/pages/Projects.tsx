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
    image: '/assets/murat/gorsel-1.jpg',
    images: [
      '/assets/murat/gorsel-1.jpg',
      '/assets/murat/gorsel-2.jpg',
      '/assets/murat/gorsel-3.jpg',
      '/assets/murat/gorsel-4.jpg',
      '/assets/murat/gorsel-5.jpg',
      '/assets/murat/gorsel-6.jpg',
      '/assets/murat/gorsel-7.jpg',
      '/assets/murat/gorsel-8.jpg',
      '/assets/murat/gorsel-9.jpg',
      '/assets/murat/gorsel-12.jpg'
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
    image: '/assets/onur/gorsel-1.jpg',
    images: [
      '/assets/onur/gorsel-1.jpg',
      '/assets/onur/gorsel-2.jpg',
      '/assets/onur/gorsel-3.jpg',
      '/assets/onur/gorsel-4.jpg',
      '/assets/onur/gorsel-5.jpg',
      '/assets/onur/gorsel-6.jpg',
      '/assets/onur/gorsel-7.jpg',
      '/assets/onur/gorsel-8.jpg'
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
    image: '/assets/kent/gorsel-1.jpg',
    images: [
      '/assets/kent/gorsel-1.jpg',
      '/assets/kent/gorsel-2.jpg',
      '/assets/kent/gorsel-3.jpg',
      '/assets/kent/gorsel-4.jpg',
      '/assets/kent/gorsel-5.jpg',
      '/assets/kent/gorsel-6.jpg',
      '/assets/kent/gorsel-7.jpg',
      '/assets/kent/gorsel-8.jpg',
      '/assets/kent/gorsel-9.jpg',
      '/assets/kent/gorsel-10.jpg',
      '/assets/kent/gorsel-11.jpg',
      '/assets/kent/gorsel-12.jpg',
      '/assets/kent/gorsel-13.jpg'
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
    image: '/assets/dogal/gorsel-1.jpg',
    images: [
      '/assets/dogal/gorsel-1.jpg',
      '/assets/dogal/gorsel-2.jpg',
      '/assets/dogal/gorsel-3.jpg',
      '/assets/dogal/gorsel-4.jpg',
      '/assets/dogal/gorsel-5.jpg',
      '/assets/dogal/gorsel-6.jpg',
      '/assets/dogal/gorsel-7.jpg',
      '/assets/dogal/gorsel-8.jpg',
      '/assets/dogal/gorsel-9.jpg',
      '/assets/dogal/gorsel-10.jpg',
      '/assets/dogal/gorsel-11.jpg',
      '/assets/dogal/gorsel-12.jpg'
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
    image: '/assets/cınar/1.jpg',
    images: [
      '/assets/cınar/1.jpg',
      '/assets/cınar/2.jpg',
      '/assets/cınar/3.jpg',
      '/assets/cınar/4.jpg',
      '/assets/cınar/5.jpg',
      '/assets/cınar/6.jpg',
      '/assets/cınar/7.jpg',
      '/assets/cınar/8.jpg',
      '/assets/cınar/9.jpg'
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
    image: '/assets/aydindogan/görsel-1.jpg',
    images: [
      '/assets/aydindogan/görsel-1.jpg',
      '/assets/aydindogan/görsel-2.jpg',
      '/assets/aydindogan/görsel-3.jpg',
      '/assets/aydindogan/görsel-4.jpg',
      '/assets/aydindogan/görsel-5.jpg',
      '/assets/aydindogan/görsel-6.jpg',
      '/assets/aydindogan/görsel-7.jpg',
      '/assets/aydindogan/görsel-8.jpg',
      '/assets/aydindogan/görsel-9.jpg',
      '/assets/aydindogan/görsel-10.jpg',
      '/assets/aydindogan/görsel-11.jpg',
      '/assets/aydindogan/görsel-12.jpg',
      '/assets/aydindogan/görsel-13.jpg',
      '/assets/aydindogan/görsel-14.jpg',
      '/assets/aydindogan/görsel-15.jpg',
      '/assets/aydindogan/görsel-16.jpg',
      '/assets/aydindogan/görsel-17.jpg',
      '/assets/aydindogan/görsel-18.jpg',
      '/assets/aydindogan/görsel-19.jpg',
      '/assets/aydindogan/görsel-20.jpg'
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
    image: '/assets/zinar/mountain-house-1.jpg',
    images: [
      '/assets/zinar/mountain-house-1.jpg',
      '/assets/zinar/dgfg.png',
      '/assets/zinar/ergt.jpg',
      '/assets/zinar/gorsel-2.jpg',
      '/assets/zinar/gorsel-4.jpg',
      '/assets/zinar/img-1.jpg',
      '/assets/zinar/img-2.jpg',
      '/assets/zinar/yhju.jpg'
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
    image: '/assets/green/Resim4.jpeg',
    images: [
      '/assets/green/Resim4.jpeg',
      '/assets/green/Resim1.jpg',
      '/assets/green/Resim2.jpg',
      '/assets/green/Resim3.jpg'
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
    image: '/assets/mimoza/mimozaa.jpg',
    images: [
      '/assets/mimoza/mimozaa.jpg',
      '/assets/mimoza/banyo-1.jpg',
      '/assets/mimoza/banyo-2.jpg',
      '/assets/mimoza/koridor1.jpg',
      '/assets/mimoza/koridor2.jpg',
      '/assets/mimoza/koridor3.jpg',
      '/assets/mimoza/koridor4.jpg'
    ],
    slug: 'mimoza-apartmani',
    size: 'large',
  },
  {
    id: 19,
    title: 'Alışveriş Merkezi',
    location: 'Felluce, Irak',
    year: '2019',
    category: 'Ticari',
    image: '/assets/felluce2/GÖR-1.jpg',
    images: [
      '/assets/felluce2/GÖR-1.jpg',
      '/assets/felluce2/GÖR2.jpg',
      '/assets/felluce2/GÖR5.jpg',
      '/assets/felluce2/GÖR7.jpg',
      '/assets/felluce2/GÖRSEL-3.jpg',
      '/assets/felluce2/GÖRSEL-4.jpg',
      '/assets/felluce2/GÖRSEL-6.jpg',
      '/assets/felluce2/GÖRSEL-8.jpg'
    ],
    slug: 'alisveris-merkezi-felluce',
    size: 'medium',
  },
  {
    id: 20,
    title: 'Kartal Residence',
    location: 'Kartal, İstanbul',
    year: '2024',
    category: 'Konut',
    image: '/assets/kartal_residance/kartalresidance.jpg',
    images: [
      '/assets/kartal_residance/kartalresidance.jpg',
      '/assets/kartal_residance/cam001.jpg',
      '/assets/kartal_residance/cam002.jpg',
      '/assets/kartal_residance/edayatakodası_1-Photo.jpg',
      '/assets/kartal_residance/edayatakodası_2-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_3-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_4-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_5-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_6-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_7-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_8-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_9-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_10-Foto.jpg'
    ],
    slug: 'kartal-residence',
    size: 'large',
  },
  {
    id: 21,
    title: 'İlker Residence',
    location: 'İstanbul',
    year: '2023',
    category: 'Konut',
    image: '/assets/ilker2/GÖRSEL7.jpg',
    images: [
      '/assets/ilker2/GÖRSEL7.jpg',
      '/assets/ilker2/GÖRSEL1.jpg',
      '/assets/ilker2/GÖRSEL2.jpg',
      '/assets/ilker2/GÖRSEL3.jpg',
      '/assets/ilker2/GÖRSEL4.jpg',
      '/assets/ilker2/GÖRSEL5.jpg',
      '/assets/ilker2/GÖRSEL6.jpg',
      '/assets/ilker2/GÖRSEL8.jpg',
      '/assets/ilker2/GÖRSEL9.jpg',
      '/assets/ilker2/GÖRSEL10.jpg'
    ],
    slug: 'ilker-residence',
    size: 'medium',
  },
  {
    id: 28,
    title: 'Simge Residence',
    location: 'İstanbul',
    year: '2023',
    category: 'Konut',
    image: '/assets/simge/x-7-foto.jpg',
    images: [
      '/assets/simge/x-7-foto.jpg',
      '/assets/simge/as-1-photo.jpg',
      '/assets/simge/as-2-foto.jpg',
      '/assets/simge/as-3-foto.jpg',
      '/assets/simge/as-4-foto.jpg',
      '/assets/simge/as-5-foto.jpg',
      '/assets/simge/as-6-foto.jpg',
      '/assets/simge/balkon-1.jpg',
      '/assets/simge/balkon-2.jpg',
      '/assets/simge/balkon-3.jpg',
      '/assets/simge/balkon-4.jpg',
      '/assets/simge/balkon-5.jpg',
      '/assets/simge/görsel-1.jpg',
      '/assets/simge/görsel-2.jpg',
      '/assets/simge/görsel-3.jpg',
      '/assets/simge/görsel-5.jpg',
      '/assets/simge/görsel-8.jpg',
      '/assets/simge/h-1-photo.jpg',
      '/assets/simge/h-2-foto.jpg',
      '/assets/simge/h-3-foto.jpg',
      '/assets/simge/h-4-foto.jpg',
      '/assets/simge/h-5-foto.jpg'
    ],
    slug: 'simge-residence',
    size: 'large',
  },
  {
    id: 29,
    title: 'Zaho Residence',
    location: 'Zaho, Irak',
    year: '2023',
    category: 'Konut',
    image: '/assets/zaho/zaho-2.jpg',
    images: [
      '/assets/zaho/zaho-2.jpg',
      '/assets/zaho/zaho-1.jpg',
      '/assets/zaho/zaho-3.jpg',
      '/assets/zaho/zaho-gorsel-1.jpg',
      '/assets/zaho/zaho.jpg'
    ],
    slug: 'zaho-residence',
    size: 'medium',
  },
  {
    id: 30,
    title: 'İsar Mühendislik',
    location: 'İstanbul',
    year: '2023',
    category: 'Ofis',
    image: '/assets/ofis/giris-1.jpg',
    images: [
      '/assets/ofis/giris-1.jpg',
      '/assets/ofis/giris-2.jpg',
      '/assets/ofis/giris-3.jpg',
      '/assets/ofis/bina-girisi.jpg',
      '/assets/ofis/koridor.jpg',
      '/assets/ofis/mudur-odasi-1.jpg',
      '/assets/ofis/mudur-odasi-2.jpg',
      '/assets/ofis/mudur-odasi-3.jpg',
      '/assets/ofis/toplanti-odasi-1.jpg',
      '/assets/ofis/toplanti-odasi-2.jpg',
      '/assets/ofis/toplanti-odasi-7.jpg',
      '/assets/ofis/isa-oda-12.jpg',
      '/assets/ofis/isa-oda-13.jpg',
      '/assets/ofis/isa-oda-14.jpg',
      '/assets/ofis/muhasebe.jpg',
      '/assets/ofis/sekreter.jpg',
      '/assets/ofis/teknik-ofis.jpg',
      '/assets/ofis/teknik-ofis-muhasebe.jpg',
      '/assets/ofis/plan.jpg',
      '/assets/ofis/mmm.jpg',
      '/assets/ofis/sss.jpg',
      '/assets/ofis/o.jpg'
    ],
    slug: 'ofis-ic-mimari',
    size: 'large',
  },
  {
    id: 31,
    title: 'Arif Residence',
    location: 'İstanbul',
    year: '2023',
    category: 'Konut',
    image: '/assets/arif/discephe-2.jpg',
    images: [
      '/assets/arif/discephe-2.jpg',
      '/assets/arif/discephe-1.jpg',
      '/assets/arif/discephe-3.jpg',
      '/assets/arif/discephe-4.jpg',
      '/assets/arif/discephe-5.jpg',
      '/assets/arif/discephe-6.jpg',
      '/assets/arif/discephe-7.jpg',
      '/assets/arif/discephe-8.jpg',
      '/assets/arif/discephe-9.jpg',
      '/assets/arif/discephe-10.jpg',
      '/assets/arif/discephe-11.jpg',
      '/assets/arif/ic-gorsel-1.jpg',
      '/assets/arif/ic-gorsel-2.jpg',
      '/assets/arif/ic-gorsel-3.jpg',
      '/assets/arif/ic-gorsel-4.jpg',
      '/assets/arif/ic-gorsel-5.jpg',
      '/assets/arif/ic-gorsel-6.jpg',
      '/assets/arif/ic-gorsel-7.jpg',
      '/assets/arif/ic-gorsel-8.jpg',
      '/assets/arif/ic-gorsel-9.jpg',
      '/assets/arif/ic-gorsel-10.jpg',
      '/assets/arif/instagram-1.jpg'
    ],
    slug: 'arif-residence',
    size: 'large',
  },
  {
    id: 32,
    title: 'İlker Taştekin Evi',
    location: 'Foça, İzmir',
    year: '2015',
    category: 'Villa',
    image: '/assets/ilker/gorsel-1.jpg',
    images: [
      '/assets/ilker/gorsel-1.jpg',
      '/assets/ilker/gorsel-2.jpg',
      '/assets/ilker/gorsel-3.jpg',
      '/assets/ilker/gorsel-4.jpg',
      '/assets/ilker/gorsel-5.jpg',
      '/assets/ilker/gorsel-6.jpg',
      '/assets/ilker/gorsel-7.jpg',
      '/assets/ilker/gorsel-8.jpg',
      '/assets/ilker/gorsel-9.jpg',
      '/assets/ilker/gorsel-10.jpg',
      '/assets/ilker/gorsel-11.jpg',
      '/assets/ilker/gorsel-12.jpg',
      '/assets/ilker/gorsel-13.jpg',
      '/assets/ilker/gorsel-14.jpg',
      '/assets/ilker/gorsel-15.jpg',
      '/assets/ilker/gorsel-16.jpg',
      '/assets/ilker/gorsel-17.jpg',
      '/assets/ilker/gorsel-18.jpg',
      '/assets/ilker/gorsel-19.jpg',
      '/assets/ilker/gorsel-20.jpg',
      '/assets/ilker/gorsel-21.jpg',
      '/assets/ilker/insta.jpg',
      '/assets/ilker/instagram1.jpg'
    ],
    slug: 'ilker-tastekin-evi',
    size: 'large',
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
            loading="lazy"
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
                    loading="lazy"
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

