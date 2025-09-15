import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
            CONTACT
          </h1>
          <p className="text-xl text-secondary max-w-3xl">
            Ready to create something extraordinary together? 
            Let's start a conversation and turn your questions into love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">
              Tell Us Your Story
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-300 bg-white"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-300 bg-white"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-300 bg-white"
                  placeholder="Your company name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-300 bg-white resize-none"
                  placeholder="Tell us about your project, ideas, or questions..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 0, 0, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto px-8 py-4 bg-accent text-white font-semibold border-2 border-accent hover:bg-white hover:text-accent transition-all duration-300"
                >
                  SEND MESSAGE
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-12"
          >
            {/* Office Info */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Visit Our Studio
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="text-primary font-semibold">Tokyo Office</p>
                    <p className="text-secondary">
                      Shibuya City, Tokyo<br />
                      Japan 150-0043
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-primary font-semibold">Email</p>
                    <p className="text-secondary">hello@lqve.jp</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-primary font-semibold">Phone</p>
                    <p className="text-secondary">+81 3-1234-5678</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-6">
                {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-secondary hover:text-accent transition-colors duration-300 font-semibold"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Japanese Contact */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-primary mb-4">
                日本語でのお問い合わせ
              </h3>
              <p className="text-secondary leading-relaxed">
                日本語でのご相談も承っております。
                お気軽にお問い合わせください。
                創造的なソリューションで、
                あなたのビジョンを実現いたします。
              </p>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Business Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-secondary">Monday - Friday</span>
                  <span className="text-primary font-semibold">9:00 - 18:00 JST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Saturday</span>
                  <span className="text-primary font-semibold">10:00 - 16:00 JST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Sunday</span>
                  <span className="text-primary font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;