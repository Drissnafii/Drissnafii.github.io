import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Digital Love Campaign",
      category: "Branding & Digital",
      year: "2024",
      description: "A revolutionary approach to connecting hearts through technology",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Tokyo Future Experience",
      category: "Interactive Installation",
      year: "2024",
      description: "Immersive 3D experience showcasing Tokyo's technological future",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Radical Beauty Platform",
      category: "E-commerce & UX",
      year: "2023",
      description: "Redefining beauty standards through inclusive digital experiences",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Question-Love Installation",
      category: "Art & Technology",
      year: "2023",
      description: "Interactive art piece that transforms questions into visual poetry",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Creative Company Rebrand",
      category: "Brand Identity",
      year: "2023",
      description: "Complete visual identity transformation for a tech startup",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Emotion Engine",
      category: "AI & Design",
      year: "2022",
      description: "AI-powered design tool that creates based on emotional input",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-background pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-black text-primary mb-6">
            PROJECT
          </h1>
          <p className="text-xl text-secondary max-w-3xl">
            Explore our portfolio of radical creative solutions that transform 
            questions into meaningful experiences.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4">
            {['All', 'Branding', 'Digital', 'Interactive', 'Art'].map((filter, index) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 0 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-100 text-secondary hover:bg-gray-200'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3]">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{project.id}</span>
                    </div>
                    <p className="text-secondary text-sm">Project Image</p>
                  </div>
                </motion.div>
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-accent/90 flex items-center justify-center"
                >
                  <span className="text-white font-semibold">View Project</span>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">{project.category}</span>
                  <span className="text-sm text-secondary">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            LOAD MORE PROJECTS
          </motion.button>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-24 text-center"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Let's transform your questions into love. 
            Tell us about your vision and we'll bring it to life.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-white font-semibold border-2 border-accent hover:bg-white hover:text-accent transition-all duration-300"
          >
            START A PROJECT
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;