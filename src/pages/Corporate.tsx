import { motion } from 'framer-motion';
import { Building2, Target, Users, Award, Lightbulb, TrendingUp } from 'lucide-react';

export default function Corporate() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
          alt="Corporate"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-6 py-2 bg-yellow-400/20 backdrop-blur-sm text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-6 rounded-full border border-yellow-400/30">
                Kurumsal
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-light tracking-wide mb-6">
                Hakkımızda
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Story Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
                Hikayemiz
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-8 md:p-12 space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg font-body text-justify">
                <span className="text-yellow-400 font-semibold text-2xl">LAV MİMARLIK</span>, tecrübesini yurtiçi ve yurtdışı birçok projeye imza atan, şuan gerek kamu sektöründe anahtar teslim projelerde gerekse özel sektörde çözüm ortağı olduğu birçok projede üstün başarı sağlayan, oluşumu <span className="text-yellow-400 font-semibold">1994'e</span> dayanan aile şirketinden almaktadır.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg font-body text-justify">
                LAV MİMARLIK <span className="text-yellow-400 font-semibold">2010-2018</span> yılları arasında yurtiçinde ve yurtdışında özellikle villa, ofis ve konut alanında birçok projenin tasarım ve inşai süreçlerine ortak olmuştur.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg font-body text-justify">
                Yıllar içerisinde müşterilerinde belirginleşen ihtiyaç ve beklenti kriterlerini dikkate alarak, kaliteli yaşam alanları oluşturma iddiasıyla İstanbul'da <span className="text-yellow-400 font-semibold">2019</span> yılında <span className="text-yellow-400 font-semibold">LAV MİMARLIK İNŞAAT LTD. ŞTİ.</span> kurumsal adıyla kurulmuştur.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg font-body text-justify">
                Alanında tecrübe kazanmış, genç, dinamik ve çalışkan teknik kadrosuyla müşteri odaklı çalışan, sürdürülebilir bir başarıyla geleceğin modern yapılarında söz sahibi olmayı hedefleyen LAV ekibi mimari ve mekanik tesisat alanlarında projelendirme ve uygulama hizmeti vermektedir.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
                Değerlerimiz
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: 'Deneyim',
                  description: "1994'ten bu yana biriken köklü mimarlık deneyimi ile sektörde güvenilir çözüm ortağınız."
                },
                {
                  icon: Target,
                  title: 'Vizyon',
                  description: 'Geleceğin modern yapılarında öncü olmak ve sürdürülebilir başarı sağlamak.'
                },
                {
                  icon: Users,
                  title: 'Ekip',
                  description: 'Genç, dinamik ve deneyimli profesyonel kadro ile müşteri odaklı hizmet.'
                },
                {
                  icon: Award,
                  title: 'Kalite',
                  description: 'Yurtiçi ve yurtdışı projelerde üstün başarı ve kalite standartları.'
                },
                {
                  icon: Lightbulb,
                  title: 'İnovasyon',
                  description: 'Modern mimari anlayış ve yenilikçi çözümlerle fark yaratmak.'
                },
                {
                  icon: TrendingUp,
                  title: 'Sürdürülebilirlik',
                  description: 'Çevre dostu ve sürdürülebilir yapı tasarımları ile geleceğe yatırım.'
                }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-8 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-400/30">
                      <Icon className="text-gray-900" size={28} />
                    </div>
                    <h3 className="text-xl font-display font-medium text-white mb-3">{value.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-body">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
                Kilometre Taşlarımız
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
            </div>

            <div className="space-y-8">
              {[
                {
                  year: '1994',
                  title: 'Kuruluş',
                  description: 'Aile şirketi olarak mimarlık sektöründe ilk adımlar.'
                },
                {
                  year: '2010-2018',
                  title: 'Büyüme ve Gelişim',
                  description: 'Yurtiçi ve yurtdışında villa, ofis ve konut projelerinde aktif rol.'
                },
                {
                  year: '2019',
                  title: 'Kurumsal Yapılanma',
                  description: 'LAV MİMARLIK İNŞAAT LTD. ŞTİ. kurumsal kimliği ile İstanbul\'da faaliyete başladı.'
                },
                {
                  year: '2025',
                  title: 'Günümüz',
                  description: 'Kamu ve özel sektörde anahtar teslim projelerle çözüm ortağı.'
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 group"
                >
                  <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-display font-bold text-gray-900">{milestone.year}</span>
                  </div>
                  <div className="flex-1 bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-6 group-hover:border-yellow-400/50 transition-all duration-300">
                    <h3 className="text-xl font-display font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 font-body leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
