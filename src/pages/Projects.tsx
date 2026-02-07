import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Marin Loft',
    location: 'Kartal, İstanbul',
    year: '2025',
    category: 'Konut',
    scope: 'Mimari Proje, Ruhsat',
    image: '/src/assets/marin/marinloft1.png',
    slug: 'marin-loft',
  },
  {
    id: 2,
    title: 'Hatay Köy Evleri',
    location: 'Kumlu, Hatay',
    year: '2025',
    category: 'Kamu',
    scope: '299 Adet Köy Evi - Anahtar Teslim',
    image: '/src/assets/hatay kumlu/hatay2.png',
    slug: 'hatay-koy-evleri',
  },
  {
    id: 3,
    title: 'İmga Portall',
    location: 'Pendik, İstanbul',
    year: '2024',
    category: 'Ticari',
    scope: 'Otel & Ofis Danışmanlığı',
    image: '/src/assets/imga/imga1.png',
    slug: 'imga-portall',
  },
  {
    id: 4,
    title: 'DKY Business Ofis',
    location: 'Kartal, İstanbul',
    year: '2024',
    category: 'Ofis',
    scope: 'Tasarım ve Uygulama',
    image: '/src/assets/dky/dky1.jpeg',
    slug: 'dky-business-ofis',
  },
  {
    id: 5,
    title: 'White Residence',
    location: 'Kartal, İstanbul',
    year: '2023',
    category: 'Konut',
    scope: 'Mimari Proje',
    image: '/src/assets/white/white1.png',
    slug: 'white-residence',
  },
  {
    id: 6,
    title: 'Sipahi Konutları',
    location: 'Kuşadası, Aydın',
    year: '2023',
    category: 'Konut',
    scope: 'Tasarım ve Uygulama',
    image: '/src/assets/sipahi/sipahi1.png',
    slug: 'sipahi-konutlari',
  },
  {
    id: 7,
    title: 'Mehmet Özhasar Evi',
    location: 'Pütürge, Malatya',
    year: '2023',
    category: 'Villa',
    scope: 'Tasarım ve Danışmanlık',
    image: '/src/assets/ozhasar/oz1.png',
    slug: 'mehmet-ozhasar-evi',
  },
  {
    id: 8,
    title: 'Murat Aydın Villası',
    location: 'Bodrum, Muğla',
    year: '2022',
    category: 'Villa',
    scope: 'Tasarım ve Taahhüt',
    image: '/src/assets/murat/murat1.png',
    slug: 'murat-aydin-villasi',
  },
  {
    id: 9,
    title: 'Onur Sertkaya Villası',
    location: 'Söke, Aydın',
    year: '2022',
    category: 'Villa',
    scope: 'Tasarım ve Proje',
    image: '/src/assets/onur/onur1.png',
    slug: 'onur-sertkaya-villasi',
  },
  {
    id: 10,
    title: 'Kentsel Dönüşüm 130 Konut',
    location: 'Kuşadası, Aydın',
    year: '2021',
    category: 'Konut',
    scope: 'Kentsel Dönüşüm Projesi',
    image: '/src/assets/kent/kent1.png',
    slug: 'kentsel-donusum-kusadasi',
  },
  {
    id: 11,
    title: 'Doğal Yaşam Villaları',
    location: 'Çiftlikköy, Yalova',
    year: '2021',
    category: 'Villa',
    scope: 'Tasarım ve Proje',
    image: '/src/assets/dogal/dogal1.png',
    slug: 'dogal-yasam-villalari',
  },
  {
    id: 12,
    title: 'Ofis İç Dizayn Proje ve Uygulama',
    location: 'Tuzla, İstanbul',
    year: '2021',
    category: 'Ofis',
    scope: 'İç Dizayn ve Uygulama',
    image: '/src/assets/ofis/ofis5.png',
    slug: 'ofis-ic-dizayn-tuzla',
  },
  {
    id: 13,
    title: 'İlker Talu Villası',
    location: 'Foça, İzmir',
    year: '2021',
    category: 'Villa',
    scope: 'Tasarım ve Danışmanlık',
    image: '/src/assets/ilker/ilk1.png',
    slug: 'ilker-talu-villasi',
  },
  {
    id: 14,
    title: 'Villa İç Dizayn Yenileme',
    location: 'Yalıkavak, Bodrum',
    year: '2020',
    category: 'Villa',
    scope: 'İç Dizayn Yenileme',
    image: '/src/assets/villa/vil1.png',
    slug: 'villa-ic-dizayn-yalikavak',
  },
  {
    id: 15,
    title: 'Mall of Felluce',
    location: 'Felluce, Irak',
    year: '2019',
    category: 'Ticari',
    scope: 'Tasarım ve Proje, Uygulama Detay Çizimleri, Danışmanlık',
    image: '/src/assets/felluce/fel1.png',
    slug: 'mall-of-felluce',
    client: 'İkon Tasarım',
  },
  {
    id: 16,
    title: 'Aydın Doğan Evi',
    location: 'Erzincan',
    year: '2020',
    category: 'Villa',
    scope: 'Tasarım ve Proje, Uygulama Detay Çizimleri, Taahhüt',
    image: '/src/assets/aydin/aydin1.png',
    slug: 'aydin-dogan-evi',
    client: 'Aydın Doğan',
  },
  {
    id: 17,
    title: 'Alışveriş Merkezi',
    location: 'Felluce, Irak',
    year: '2019',
    category: 'Ticari',
    scope: 'Tasarım ve Proje, Uygulama Detay Çizimleri, Danışmanlık',
    image: '/src/assets/felluce2/felluce1.png',
    slug: 'alisveris-merkezi-felluce',
    client: 'İkon Tasarım',
  },
  {
    id: 18,
    title: 'Mehmet Say Köy Evi',
    location: 'Erzincan',
    year: '2019',
    category: 'Villa',
    scope: 'Tasarım ve Proje, Taahhüt',
    image: '/src/assets/mehmetsay/mehmet1.png',
    slug: 'mehmet-say-koy-evi',
    client: 'Mehmet Say',
  },
  {
    id: 19,
    title: 'Ofis Binası Cephe ve İç Dizayn Yenileme',
    location: 'Mutlu Sanayi Sitesi, Tuzla, İstanbul',
    year: '2019',
    category: 'Ofis',
    scope: 'Tasarım ve Proje, Taahhüt',
    image: '/src/assets/ic/ic1.png',
    slug: 'ofis-binasi-cephe-ic-dizayn',
    client: 'Simge Endüstriyel Mühendislik',
  },
  {
    id: 20,
    title: 'Ofis Dış Mekan Dinlenme Alanı Tasarımı',
    location: 'Mutlu Sanayi Sitesi, Tuzla, İstanbul',
    year: '2019',
    category: 'Ofis',
    scope: 'Tasarım ve Proje, Taahhüt',
    image: '/src/assets/off/off1.png',
    slug: 'ofis-dis-mekan-dinlenme-alani',
    client: 'İsar Mühendislik A.Ş.',
  },
  {
    id: 21,
    title: 'Bahar Apartmanı',
    location: 'Kadıköy, İstanbul',
    year: '2019',
    category: 'Konut',
    scope: 'Tasarım ve Proje, Uygulama Detay Çizimleri, Taahhüt Hizmeti',
    image: '/src/assets/bahar/bahar1.png',
    slug: 'bahar-apartmani',
    client: 'Artos A.Ş.',
  },
  {
    id: 22,
    title: 'Zinar Dağ Evi',
    location: 'Mardin',
    year: '2019',
    category: 'Villa',
    scope: 'Tasarım ve Proje, Uygulama Detay Çizimleri, Taahhüt Hizmeti',
    image: '/src/assets/zinar/zin1.png',
    slug: 'zinar-dag-evi',
    client: 'Özel',
  },
  {
    id: 23,
    title: 'Arif Karabıyık Evi',
    location: 'Kemalpaşa, İzmir',
    year: '2019',
    category: 'Villa',
    scope: 'Tasarım ve Proje, Taahhüt',
    image: '/src/assets/servet/servet1.png',
    slug: 'arif-karabiyik-evi',
    client: 'Arif Karabıyık',
  },
  {
    id: 24,
    title: 'Atlas Rezidans',
    location: 'Kartal, İstanbul',
    year: '2018',
    category: 'Konut',
    scope: 'Tasarım ve Proje, Taahhüt',
    image: '/src/assets/ina/ina.jpeg',
    slug: 'atlas-rezidans',
    client: 'Artos İnşaat A.Ş.',
  },
  {
    id: 25,
    title: 'İlker Taştekin Evi',
    location: 'Foça, İzmir',
    year: '2015',
    category: 'Villa',
    scope: 'Tasarım ve Proje, Taahhüt',
    image: '/src/assets/tastekin/tas1.png',
    slug: 'ilker-tastekin-evi',
    client: 'İlker Taştekin',
  },
  {
    id: 26,
    title: 'Erbil Business Center',
    location: 'Erbil, Irak',
    year: '2014',
    category: 'Ticari',
    scope: 'Mimari Projelendirme, İnşai İmalatların Yapılması, Mekanik ve Elektrik İmalatlarının Projelendirilmesi ve Yapılması',
    image: '/src/assets/erbil/er1.png',
    slug: 'erbil-business-center',
    client: 'Serbest Dizayee - Artos Group',
    area: '8.550 m²',
  },
  {
    id: 27,
    title: 'Mimoza Apartmanı',
    location: 'Kadıköy, İstanbul',
    year: '2018',
    category: 'Konut',
    scope: 'Tasarım ve Proje, Taahhüt',
    image: '/src/assets/mimoza/mim1.png',
    slug: 'mimoza-apartmani',
    client: 'Artos İnşaat A.Ş.',
  },
  {
    id: 28,
    title: 'Green Land Luxury Mansion',
    location: 'Khanzad, Erbil / Irak',
    year: '2013',
    category: 'Villa',
    scope: 'Mimari Uygulama ve Mekanik Uygulama - 105 Adet Villa',
    image: '/src/assets/green/green1.png',
    slug: 'green-land-luxury-mansion',
    client: 'Rekan Group',
    units: '105 Adet Villa',
  },
  {
    id: 29,
    title: 'Kemer Country / Kemerburgaz Villaları',
    location: 'Göktürk, İstanbul',
    year: '2018',
    category: 'Villa',
    scope: 'Güneş Enerjisi Sistemi Projelendirme ve Uygulama, Isıtma Soğutma Sistemi Yenileme, İç Dekorasyon Yenileme, Genel Alt Yapı Yenileme',
    image: '/src/assets/cınar/cınar1.png',
    slug: 'kemer-country-kemerburgaz',
    client: 'Murat Erkan',
  },
];

const categories = ['Hepsi', 'Konut', 'Ticari', 'Villa', 'Ofis', 'Kamu'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Hepsi');

  const filteredProjects =
    activeCategory === 'Hepsi'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        </div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
          alt="Projects"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-light tracking-wide mb-4"
            >
              Projeler
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-1 bg-yellow-400 mx-auto"
            />
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 shadow-lg shadow-yellow-400/30 scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-yellow-400/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={project.slug ? `/projeler/${project.slug}` : '#'}
                  className="block group bg-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 border border-gray-700"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-90 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute top-6 right-6">
                      <span className="inline-block px-5 py-2 text-xs font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 shadow-xl uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="space-y-2.5 text-sm text-white/95">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-3 flex-shrink-0 text-yellow-400" />
                          <span className="font-light">{project.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-3 flex-shrink-0 text-yellow-400" />
                          <span className="font-light">{project.year}</span>
                        </div>
                        <div className="flex items-start">
                          <Briefcase size={16} className="mr-3 flex-shrink-0 text-yellow-400 mt-0.5" />
                          <span className="font-light">{project.scope}</span>
                        </div>
                      </div>
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        <span className="inline-flex items-center text-sm font-medium text-white border-b-2 border-yellow-400 pb-1">
                          Detayları Görüntüle
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
