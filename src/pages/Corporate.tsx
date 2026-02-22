import { motion } from 'framer-motion';
import { Building2, Target, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Vizyon',
    description: 'Mimarlıkta yenilikçi ve sürdürülebilir çözümlerle sektörde öncü olmak.',
  },
  {
    icon: Users,
    title: 'Misyon',
    description: 'Estetik ve fonksiyonelliği bir araya getirerek yaşam kalitesini artırmak.',
  },
  {
    icon: Award,
    title: 'Değerler',
    description: 'Kalite, güven, yenilikçilik ve müşteri memnuniyeti odaklı çalışmak.',
  },
  {
    icon: Building2,
    title: 'Deneyim',
    description: '25 yılı aşkın sektör deneyimi ile her ölçekte proje üretmek.',
  },
];

const stats = [
  { number: '25+', label: 'Yıllık Deneyim' },
  { number: '50+', label: 'Tamamlanan Proje' },
  { number: '100+', label: 'Mutlu Müşteri' },
  { number: '15+', label: 'Uzman Kadro' },
];

export default function Corporate() {
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
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
          alt="Corporate"
          className="w-full h-full object-cover grayscale"
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
                LAV Mimarlık
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body leading-relaxed">
                Tecrübe, Kalite ve Güvenin Adresi
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 px-8 border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-body">
              Hakkımızda
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-white mb-8">
              Kurumsal Tarihçemiz
            </h3>
            <div className="w-24 h-px bg-white mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-400 font-body leading-relaxed text-lg"
          >
            <p>
              LAV MİMARLIK, tecrübesini yurtiçi ve yurtdışı birçok projeye imza atan, şuan gerek kamu sektöründe anahtar teslim projelerde gerekse özel sektörde çözüm ortağı olduğu birçok projede üstün başarı sağlayan, oluşumu 1994'e dayanan aile şirketinden almaktadır.
            </p>
            <p>
              LAV MİMARLIK 2010-2018 yılları arasında yurtiçinde ve yurtdışında özellikle villa, ofis ve konut alanında birçok projenin tasarım ve inşai süreçlerine ortak olmuştur.
            </p>
            <p>
              Yıllar içerisinde müşterilerinde belirginleşen ihtiyaç ve beklenti kriterlerini dikkate alarak, kaliteli yaşam alanları oluşturma iddiasıyla İstanbul'da 2019 yılında <span className="text-white font-medium">LAV MİMARLIK İNŞAAT LTD. ŞTİ.</span> kurumsal adıyla kurulmuştur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-display font-light text-white mb-2">
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

      {/* Values with Images */}
      <section className="py-32 px-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-body">
              Değerlerimiz
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-white">
              Bizi biz yapan değerler
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="mb-6">
                    <Icon className="w-8 h-8 text-white group-hover:text-gray-400 transition-colors duration-300" strokeWidth={1} />
                  </div>
                  <h4 className="text-2xl font-display font-light text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 font-body leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section - Shortened */}
      {/* Solution Partners */}
      <section className="py-32 px-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-body">
              Çözüm Ortaklarımız
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-white">
              Güçlü iş birlikleri
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 font-body leading-relaxed"
          >
            <p className="mb-6">
              Projelerimizde başarıya ulaşmamızda, alanında uzman çözüm ortaklarımızla 
              kurduğumuz güçlü iş birlikleri önemli rol oynamaktadır. Mekanik tesisat, 
              elektrik, statik hesaplamalar ve diğer teknik disiplinlerde sektörün önde 
              gelen firmaları ile çalışarak, projelerimizin her aşamasında en yüksek 
              kalite standartlarını sağlıyoruz.
            </p>
            <p>
              İnşaat malzemeleri, mobilya tedariki ve özel imalatlarda güvenilir tedarikçilerimiz, 
              projelerimizin zamanında ve kaliteli bir şekilde tamamlanmasını garanti eder.
            </p>
          </motion.div>
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
              Ekibimizle tanışın
            </h2>
            <p className="text-lg text-gray-400 font-body mb-12">
              Deneyimli ve tutkulu kadromuz, projenizin her aşamasında yanınızda.
            </p>
            <a
              href="/ekip"
              className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300 text-sm font-body tracking-wide"
            >
              Kadromuzu Görüntüle
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
