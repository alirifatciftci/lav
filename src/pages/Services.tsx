import { motion } from 'framer-motion';
import { Compass, Home, Trees, FileText, ClipboardCheck, Users2, Wrench, Sofa, Hammer } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Master Plan',
    description: 'Kapsamlı alan planlaması ve kentsel tasarım çözümleri',
  },
  {
    icon: Home,
    title: 'İç Mimari Planlama',
    description: 'Fonksiyonel ve estetik iç mekan tasarımları',
  },
  {
    icon: Trees,
    title: 'Peysaj Planlama',
    description: 'Doğa ile uyumlu dış mekan düzenlemeleri',
  },
  {
    icon: FileText,
    title: 'Uygulama Projesi',
    description: 'Detaylı teknik çizimler ve uygulama dokümanları',
  },
  {
    icon: ClipboardCheck,
    title: 'Fizibilite Çalışmaları',
    description: 'Proje değerlendirme ve analiz hizmetleri',
  },
  {
    icon: Users2,
    title: 'Kontrollük Hizmetleri',
    description: 'Şantiye denetimi ve kalite kontrol süreçleri',
  },
  {
    icon: Wrench,
    title: 'Teknik Koordinasyon',
    description: 'Mekanik, elektrik ve diğer teknik disiplinlerle koordinasyon',
  },
  {
    icon: Sofa,
    title: 'Mobilya Tasarımı',
    description: 'Özel mobilya tasarımları ve seçimleri',
  },
  {
    icon: Hammer,
    title: 'Mimari Uygulama-Taahhüt',
    description: 'Anahtar teslim inşaat ve uygulama hizmetleri',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Konsept',
    description: 'Projenin temel fikirlerini ve vizyonunu belirliyoruz',
  },
  {
    number: '02',
    title: 'Tasarım',
    description: 'Detaylı mimari ve teknik çözümler geliştiriyoruz',
  },
  {
    number: '03',
    title: 'Uygulama',
    description: 'Projeyi sahada titizlikle hayata geçiriyoruz',
  },
  {
    number: '04',
    title: 'Teslim',
    description: 'Anahtar teslim olarak projenizi tamamlıyoruz',
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=900&fit=crop"
          alt="Services"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-light tracking-wide mb-6"
            >
              Hizmetlerimiz
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"
            />
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl font-body font-light text-gray-200 leading-relaxed"
            >
              Konsept aşamasından itibaren başlayan mimari proje sürecini, ruhsat alımı ve uygulama evreleriyle anahtar teslimine varan süreci deneyimli teknik kadromuz ve uygulama ekiplerimizle sağlamaktayız.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-6 py-2 bg-yellow-400/20 text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-8 rounded-full border border-yellow-400/30">
              Uzmanlık Alanlarımız
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-6 tracking-tight">
              Kapsamlı Mimarlık Çözümleri
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-900/50 backdrop-blur-sm p-8 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 border border-gray-800 hover:border-yellow-400/50 hover:-translate-y-2"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 flex items-center justify-center border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-400/30">
                      <Icon className="text-yellow-400 group-hover:text-yellow-300 transition-colors" size={28} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-light text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-body leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-6 py-2 bg-yellow-400/20 text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-8 rounded-full border border-yellow-400/30">
              Çalışma Sürecimiz
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-6 tracking-tight">
              Konseptten Teslime
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body font-light leading-relaxed">
              Her projede aynı titizlikle çalışıyor, baştan sona profesyonel destek sağlıyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-800 hover:border-yellow-400/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-yellow-400/20">
                  <div className="text-7xl font-display font-light text-yellow-400/20 group-hover:text-yellow-400/40 transition-colors mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-display font-light text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-body leading-relaxed group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-yellow-400/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-16 text-center border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 shadow-2xl hover:shadow-yellow-400/10"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
              Projeniz İçin Birlikte Çalışalım
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-body font-light leading-relaxed">
              Her proje bizim için özeldir. İhtiyaçlarınızı dinliyor ve sizin için en uygun çözümleri üretiyoruz.
            </p>
            <a
              href="/iletisim"
              className="inline-block px-12 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 text-sm tracking-widest font-bold shadow-lg shadow-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-400/50 hover:scale-105"
            >
              İLETİŞİME GEÇİN
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
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
