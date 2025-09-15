import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { name: 'HOME', path: '/', japanese: 'ホーム' },
  { name: 'ABOUT', path: '/about', japanese: '私たちについて' },
  { name: 'PROJECT', path: '/projects', japanese: 'プロジェクト' },
  { name: 'CONTACT', path: '/contact', japanese: 'お問い合わせ' },
];

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Navigation Menu */}
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-primary">Menu</h2>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 flex items-center justify-center text-secondary hover:text-accent transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 p-6">
              <ul className="space-y-6">
                {navigationItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={handleLinkClick}
                        className="group block"
                      >
                        <div className="flex flex-col space-y-1">
                          <motion.span
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.2 }}
                            className={`text-2xl font-bold transition-colors duration-300 ${
                              isActive 
                                ? 'text-accent' 
                                : 'text-primary group-hover:text-accent'
                            }`}
                          >
                            {item.name}
                          </motion.span>
                          <span className="text-sm text-secondary group-hover:text-primary transition-colors duration-300">
                            {item.japanese}
                          </span>
                        </div>
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="w-8 h-0.5 bg-accent mt-2"
                            initial={false}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100">
              <div className="text-sm text-secondary space-y-2">
                <p className="font-medium">WE ARE MOST RADICAL</p>
                <p>CREATIVE COMPANY</p>
                <p>BASED IN TOKYO</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs">問いから愛を生み出そう。</p>
                </div>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default Navigation;