import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-background pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-black text-primary mb-6">
            ABOUT
          </h1>
          <p className="text-xl text-secondary max-w-3xl">
            We are a radical creative company that generates love from questions, 
            based in the heart of Tokyo.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Our Philosophy
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                At LQVE, we believe that every question holds the potential to create love. 
                We transform curiosity into connection, problems into possibilities, 
                and ideas into experiences that touch hearts and minds.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                What We Do
              </h2>
              <ul className="space-y-3 text-lg text-secondary">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-4"></span>
                  Creative Direction & Strategy
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-4"></span>
                  Digital Experience Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-4"></span>
                  Brand Identity & Visual Systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-4"></span>
                  Interactive Media & Technology
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Our Approach
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                Every project begins with a question. We dive deep into understanding 
                not just what you need, but why you need it. This radical approach 
                to creativity ensures that every solution we craft resonates on 
                both rational and emotional levels.
              </p>
            </div>

            {/* Japanese Section */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">
                私たちのミッション
              </h3>
              <p className="text-lg text-secondary leading-relaxed">
                問いから愛を生み出すこと。それが私たちの使命です。
                クリエイティブの力で、人々の心に響く体験を創造し、
                新しい価値を世界に届けていきます。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white border border-gray-200 rounded-xl"
              >
                <div className="text-3xl font-black text-accent mb-2">150+</div>
                <div className="text-sm text-secondary">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white border border-gray-200 rounded-xl"
              >
                <div className="text-3xl font-black text-accent mb-2">50+</div>
                <div className="text-sm text-secondary">Happy Clients</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24"
        >
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-primary text-center mb-2">
                  Team Member {index}
                </h3>
                <p className="text-secondary text-center">
                  Creative Director
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;