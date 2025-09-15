import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Header from './components/Layout/Header';
import Navigation from './components/Layout/Navigation';
import MusicPlayer from './components/Audio/MusicPlayer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header onMenuToggle={handleMenuToggle} />
        <Navigation isOpen={isMenuOpen} onClose={handleMenuClose} />
        <MusicPlayer />
        
        <main className="relative pt-16">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;