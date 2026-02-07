import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const teamMembers = [
  { name: 'İbrahim ÇİFTÇİ', title: 'Mimar / Kurucu' },
  { name: 'Servet ARMANİ', title: 'Mimar' },
  { name: 'Yunus Abdullah GÖKER', title: 'Mimar' },
  { name: 'Musa AKKOYUN', title: 'İnşaat Mühendisi' },
  { name: 'İlyas ÇOBAN', title: 'Makine Mühendisi' },
  { name: 'Eda PEKBAY', title: 'Finans' },
  { name: 'Onur AYDIN', title: 'İletişim' },
];

export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[50vh] bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop"
          alt="Team"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">
              Kadro
            </h1>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto" />
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">
              Profesyonel Ekibimiz
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Alanında uzman, deneyimli ve dinamik kadromuzla projelerinize değer
              katıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-800/50 p-8 text-center hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 border border-gray-700 hover:border-yellow-400/50"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400/20 rounded-full mb-4 border border-yellow-400/30">
                  <User className="text-yellow-400" size={32} />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 p-12 text-center border border-gray-700">
            <h2 className="text-3xl font-light text-white mb-6">
              Ekibimize Katılın
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              LAV Mimarlık ailesi olarak, alanında uzman, yenilikçi ve tutkulu
              profesyonellerle çalışmayı seviyoruz. Kariyer fırsatları için bizimle
              iletişime geçin.
            </p>
            <a
              href="/iletisim"
              className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 font-bold shadow-lg shadow-yellow-400/30"
            >
              İletişime Geçin
            </a>
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
