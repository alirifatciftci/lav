import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import projects from original file
import projectsData from './ProjectsData';

const categories = ['Hepsi', 'Konut', 'Ticari', 'Villa', 'Ofis', 'Kamu'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Hepsi');

  const filteredProjects =
    activeCategory === 'Hepsi'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
          alt="Projects"
          className="w-full h-full object-cover opacity-20"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-yellow-400/20 backdrop-blur-sm text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-6 rounded-full border border-yellow-400/30">
                Portföy
              </span>
              <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6">
                Projelerimiz
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6" />
              <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto">
                Estetik ve fonksiyonelliği bir araya getiren projelerimizi keşfedin
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-4 text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gray-900 text-white shadow-xl scale-105'
                      : 'bg-white text-slate-600 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.5) }}
              >
                <Link
                  to={project.slug ? `/projeler/${project.slug}` : '#'}
                  className="block group bg-white overflow-hidden hover:shadow-2xl transition-all duration-700 border border-gray-100"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    <div className="absolute top-6 right-6">
                      <span className="inline-block px-5 py-2 text-xs font-bold bg-white text-gray-900 shadow-2xl uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                      <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-wide group-hover:text-yellow-400 transition-colors duration-500">
                        {project.title}
                      </h3>
                      <div className="space-y-3 text-sm text-white/95">
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
                      
                      <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="inline-flex items-center text-sm font-medium text-white pb-2 border-b-2 border-yellow-400">
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
    </motion.div>
  );
}
