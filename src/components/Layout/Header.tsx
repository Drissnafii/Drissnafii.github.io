import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuToggle: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMenuToggle = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    onMenuToggle(newMenuState);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Tokyo',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="text-2xl font-black tracking-tight text-primary group-hover:text-accent transition-colors duration-300"
          >
            Dendo
          </motion.div>
        </Link>

        {/* Timestamp */}
        <div className="hidden md:flex items-center space-x-2 text-sm text-secondary">
          <span>Tokyo,</span>
          <motion.span
            key={formatTime(time)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="font-mono"
          >
            {formatTime(time)}
          </motion.span>
        </div>

        {/* Menu Button */}
        <motion.button
          onClick={handleMenuToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-0.5 bg-primary group-hover:bg-accent transition-colors duration-300 origin-center"
          />
          <motion.span
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-0.5 bg-primary group-hover:bg-accent transition-colors duration-300"
          />
          <motion.span
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-0.5 bg-primary group-hover:bg-accent transition-colors duration-300 origin-center"
          />
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;