import { motion } from 'framer-motion';
import { Compass, Home, Trees, FileText, ClipboardCheck, Users2, Wrench, Sofa, Hammer } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Master Plan',
    description: 'Arazi analizi, kentsel tasarım ve kapsamlı alan planlaması çalışmaları. Projenizin genel konseptini ve yerleşim düzenini belirleriz.',
  },
  {
    icon: Home,
    title: 'İç Mimari Planlama',
    description: 'Fonksiyonel ve estetik iç mekan tasarımları. Yaşam alanlarınızı konforlu ve şık bir şekilde düzenleriz.',
  },
  {
    icon: Trees,
    title: 'Peysaj Planlama',
    description: 'Doğa ile uyumlu dış mekan düzenlemeleri. Bahçe tasarımı, bitkilendirme ve peyzaj mimarisi hizmetleri.',
  },
  {
    icon: FileText,
    title: 'Uygulama Projesi',
    description: 'Detaylı teknik çizimler ve uygulama dokümanları. Ruhsat alımı ve inşaat sürecinde kullanılacak tüm projeler.',
  },
  {
    icon: ClipboardCheck,
    title: 'Fizibilite Çalışmaları',
    description: 'Proje değerlendirme ve analiz hizmetleri. Yatırımınızın karlılığını ve uygulanabilirliğini inceleriz.',
  },
  {
    icon: Users2,
    title: 'Kontrollük Hizmetleri',
    description: 'Şantiye denetimi ve kalite kontrol süreçleri. Projenizin standartlara uygun şekilde ilerlemesini sağlarız.',
  },
  {
    icon: Wrench,
    title: 'Teknik Koordinasyon',
    description: 'Mekanik, elektrik ve diğer teknik disiplinlerle koordinasyon. Tüm sistemlerin uyumlu çalışmasını organize ederiz.',
  },
  {
    icon: Sofa,
    title: 'Mobilya Tasarımı',
    description: 'Özel mobilya tasarımları ve seçimleri. Mekanınıza özel, fonksiyonel ve estetik mobilya çözümleri.',
  },
  {
    icon: Hammer,
    title: 'Mimari Uygulama-Taahhüt',
    description: 'Anahtar teslim inşaat ve uygulama hizmetleri. Tasarımdan teslime kadar tüm süreçleri yönetiriz.',
  },
];

const process = [
  {
    number: '01',
    title: 'Konsept',
    description: 'Fikir geliştirme ve konsept tasarım aşaması',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
  },
  {
    number: '02',
    title: 'Tasarım',
    description: 'Detaylı mimari tasarım ve proje geliştirme',
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=800&h=600&fit=crop',
  },
  {
    number: '03',
    title: 'Uygulama',
    description: 'Şantiye yönetimi ve inşaat süreci',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
  },
  {
    number: '04',
    title: 'Teslim',
    description: 'Anahtar teslim ve son kontroller',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen pt-16"
    >
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-light text-white mb-8 leading-tight">
                Konsepten anahtar teslime,<br />her aşamada yanınızdayız.
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto font-body leading-relaxed">
                LAV Mimarlık olarak, projenizin her aşamasında profesyonel hizmet sunuyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-body">
              Hizmetlerimiz
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="mb-6">
                    <Icon className="w-8 h-8 text-white group-hover:text-gray-400 transition-colors duration-300" strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-display font-light text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-body leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section with Images */}
      <section className="py-32 px-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-body">
              Süreç
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-white">
              Dört aşamada mükemmellik
            </h3>
          </motion.div>

          <div className="space-y-24">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] bg-gray-900 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-6xl md:text-8xl font-display font-light text-gray-800 mb-6">
                    {step.number}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-display font-light text-white mb-4">
                    {step.title}
                  </h4>
                  <p className="text-lg text-gray-400 font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 border-t border-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-8">
              Projenizi konuşalım
            </h2>
            <p className="text-lg text-gray-400 font-body mb-12">
              Hayalinizdeki mekanı birlikte tasarlayalım.
            </p>
            <a
              href="/iletisim"
              className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300 text-sm font-body tracking-wide"
            >
              İletişime Geçin
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
