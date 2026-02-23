import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const teamMembers = [
  { name: 'İbrahim ÇİFTÇİ', title: 'Mimar / Kurucu', email: 'ibrahim@lavmimarlik.com' },
  { name: 'Servet ARMANİ', title: 'Mimar', email: 'servet@lavmimarlik.com' },
  { name: 'Yunus Abdullah GÖKER', title: 'Mimar', email: 'yunus@lavmimarlik.com' },
  { name: 'Musa AKKOYUN', title: 'İnşaat Mühendisi', email: 'musa@lavmimarlik.com' },
  { name: 'İlyas ÇOBAN', title: 'Makine Mühendisi', email: 'ilyas@lavmimarlik.com' },
  { name: 'Eda PEKBAY', title: 'Finans', email: 'eda@lavmimarlik.com' },
  { name: 'Onur AYDIN', title: 'İletişim', email: 'onur@lavmimarlik.com' },
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
      <section className="py-20 px-8 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-light text-white mb-8">
              Kadro
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl font-body leading-relaxed">
              Alanında uzman, yaratıcı ve dinamik kadromuzla her projeye özgün çözümler üretiyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team List */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-body">
              Ekibimiz
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-light text-white">
              Profesyonel Kadromuz
            </h3>
          </motion.div>

          {/* Team Members List */}
          <div className="space-y-1">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group border-b border-gray-900 hover:border-gray-700 transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 px-6 hover:bg-gray-900/30 transition-all duration-300">
                  {/* Name */}
                  <div className="md:col-span-3">
                    <h4 className="text-lg font-display font-light text-white group-hover:text-gray-300 transition-colors">
                      {member.name}
                    </h4>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-7">
                    <p className="text-base text-gray-400 font-body">
                      {member.title}
                    </p>
                  </div>

                  {/* Email Icon */}
                  <div className="md:col-span-2 flex justify-end items-center">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-white transition-colors duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: '15+', label: 'Uzman Kadro' },
              { number: '25+', label: 'Yıllık Deneyim' },
              { number: '50+', label: 'Tamamlanan Proje' },
              { number: '100%', label: 'Müşteri Memnuniyeti' }
            ].map((stat, index) => (
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
              Ekibimize Katılın
            </h2>
            <p className="text-lg text-gray-400 font-body mb-12 leading-relaxed">
              Yetenekli ve tutkulu mimarlar, mühendisler ve tasarımcılar arıyoruz. 
              Kariyerinizi LAV Mimarlık ile şekillendirin.
            </p>
            <a
              href="/iletisim"
              className="inline-block px-10 py-4 bg-transparent text-white hover:bg-white hover:text-black border border-white transition-all duration-300 text-sm font-body tracking-widest uppercase"
            >
              Başvuru Yapın
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
