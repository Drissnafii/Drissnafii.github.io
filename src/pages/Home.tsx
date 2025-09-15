import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from '../components/3D/Scene';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const aboutSection = useScrollAnimation();
  const servicesSection = useScrollAnimation();
  const { containerVariants, itemVariants } = useStaggeredAnimation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-background relative overflow-hidden"
    >
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Typography */}
          <div className="space-y-8">
            {/* Main Drissnafii Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <h1 className="hero-text text-hero font-black text-primary leading-none">
                Drissnafii
              </h1>
            </motion.div>

            {/* Subtitle English */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="space-y-2"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary">
                Portfolio under construction...
              </p>
            </motion.div>

            {/* Japanese Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="space-y-1"
            >
              <p className="text-base text-secondary font-medium">
                Coming Soon...
              </p>
              <p className="text-base text-secondary font-medium">
                Stay tuned for something amazing!
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-white font-semibold rounded-none border-2 border-accent hover:bg-white hover:text-accent transition-all duration-300"
              >
                VIEW MY WORK
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - 3D Character */}
          <div className="relative h-96 lg:h-full min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Scene3D className="rounded-3xl overflow-hidden" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <motion.section
        ref={aboutSection.ref}
        initial="hidden"
        animate={aboutSection.isInView ? "visible" : "hidden"}
        variants={aboutSection.variants}
        className="py-24 px-6 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-black text-primary leading-tight"
              >
                Creating Digital
                <br />
                <span className="text-accent">Experiences</span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-secondary leading-relaxed"
              >
                We believe in the power of design to transform ideas into meaningful digital experiences. 
                Our team combines creativity with cutting-edge technology to deliver solutions that inspire and engage.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex space-x-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-primary">50+</h3>
                  <p className="text-secondary">Projects</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">15+</h3>
                  <p className="text-secondary">Clients</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">5</h3>
                  <p className="text-secondary">Years</p>
                </div>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 mx-auto bg-gradient-to-br from-accent to-primary rounded-full opacity-10"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesSection.ref}
        initial="hidden"
        animate={servicesSection.isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black text-primary text-center mb-16"
          >
            Our <span className="text-accent">Services</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Modern, responsive websites built with cutting-edge technologies",
                icon: "🚀"
              },
              {
                title: "3D Design",
                description: "Immersive 3D experiences that captivate and engage users",
                icon: "🎨"
              },
              {
                title: "Brand Identity",
                description: "Comprehensive brand solutions that tell your unique story",
                icon: "✨"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-secondary leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-5"></div>
      </motion.div>
    </motion.div>
  );
};

export default Home;