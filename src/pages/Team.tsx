import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'İbrahim ÇİFTÇİ', title: 'Mimar / Kurucu', description: 'Şirket kurucusu ve baş mimar' },
  { name: 'Servet ARMANİ', title: 'Mimar', description: 'Proje tasarım ve geliştirme' },
  { name: 'Yunus Abdullah GÖKER', title: 'Mimar', description: 'Mimari tasarım ve uygulama' },
  { name: 'Musa AKKOYUN', title: 'İnşaat Mühendisi', description: 'Yapı denetimi ve koordinasyon' },
  { name: 'İlyas ÇOBAN', title: 'Makine Mühendisi', description: 'Mekanik sistem tasarımı' },
  { name: 'Eda PEKBAY', title: 'Finans', description: 'Mali işler ve bütçe yönetimi' },
  { name: 'Onur AYDIN', title: 'İletişim', description: 'Müşteri ilişkileri ve iletişim' },
];

export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-light text-white mb-8 leading-tight">
              Tutkulu ve deneyimli<br />bir ekip.
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl font-body leading-relaxed">
              Alanında uzman, yaratıcı ve dinamik kadromuzla her projeye özgün çözümler üretiyoruz. 
              Mimarlıktan mühendisliğe, tasarımdan uygulamaya kadar tüm süreçlerde profesyonel hizmet sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-body">
              Ekibimiz
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Avatar Placeholder */}
                <div className="aspect-square bg-gray-900 mb-6 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-6xl font-display font-light text-gray-700">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-2xl font-display font-light text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-body mb-3">
                  {member.title}
                </p>
                <p className="text-gray-400 font-body text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-32 px-8 border-t border-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-8">
              Ekibimize katılın
            </h2>
            <p className="text-lg text-gray-400 font-body mb-12">
              Yetenekli ve tutkulu mimarlar, mühendisler arıyoruz.
            </p>
            <a
              href="/iletisim"
              className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300 text-sm font-body tracking-wide"
            >
              Başvuru Yapın
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
