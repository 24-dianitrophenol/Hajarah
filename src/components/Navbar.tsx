import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Catalog', id: 'catalog' },
    { name: 'Services', id: 'services' },
    { name: 'Adverts', id: 'adverts' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Background Blur Overlay */}
      <AnimatePresence>
        {(isSearchOpen || isMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => {
              setIsSearchOpen(false);
              setIsMenuOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <motion.div 
              className="flex-shrink-0 flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setActiveSection('home')}
            >
              <div className="flex items-center space-x-3">
                <img
                  src="/images/logos/logo_2.png"
                  alt="Hajarah's Makeup and Henna"
                  className="h-16 w-auto"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation - Centered with reduced spacing */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative font-bold transition-all duration-300 px-4 py-2 rounded-full ${
                      activeSection === item.id 
                        ? 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right side icons with proper spacing */}
            <div className="flex items-center space-x-3 md:space-x-4">
              {/* Search Icon */}
              <motion.button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-3 rounded-full">
                  <Search className="h-6 w-6 text-white" />
                </div>
              </motion.button>

              {/* Mobile menu button with extra spacing */}
              <div className="md:hidden ml-2">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-gradient-to-r from-green-400 to-green-600 p-3 rounded-full">
                    {isMenuOpen ? (
                      <X className="h-6 w-6 text-white" />
                    ) : (
                      <Menu className="h-6 w-6 text-white" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer sliding from right with lake water glass effect */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-teal-50/30 backdrop-blur-3xl border-l border-white/30 shadow-2xl z-40 md:hidden"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(219, 234, 254, 0.15) 0%,
                  rgba(207, 250, 254, 0.1) 25%,
                  rgba(204, 251, 241, 0.15) 50%,
                  rgba(240, 253, 250, 0.1) 75%,
                  rgba(255, 255, 255, 0.05) 100%
                )
              `,
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            }}
          >
            {/* Lake water glass header */}
            <div className="bg-white/5 backdrop-blur-md p-6 border-b border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src="/images/logos/logo_2.png"
                    alt="Hajarah's Makeup and Henna"
                    className="h-12 w-auto"
                  />
                </div>
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/15 backdrop-blur-sm rounded-full hover:bg-white/25 transition-colors border border-white/30 shadow-lg"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </motion.button>
              </div>
            </div>

            {/* Navigation items with enhanced lake water glass effect */}
            <div className="pt-8 pb-4 space-y-2 px-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 font-bold backdrop-blur-sm border ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-green-400/70 to-green-600/70 text-white shadow-lg border-white/40'
                      : 'text-gray-700 hover:bg-white/25 hover:text-green-600 border-white/20 hover:border-white/40'
                  }`}
                  style={{
                    background: activeSection === item.id 
                      ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.7), rgba(22, 163, 74, 0.7))'
                      : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activeSection === item.id ? 'bg-white' : 'bg-gray-400'
                    }`} />
                    <span className="text-lg">{item.name}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Contact section with enhanced lake water glass effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-6 right-6 rounded-2xl p-6 border border-white/30 shadow-lg"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.15) 0%,
                    rgba(219, 234, 254, 0.1) 50%,
                    rgba(255, 255, 255, 0.05) 100%
                  )
                `,
                backdropFilter: 'blur(25px) saturate(150%)',
                WebkitBackdropFilter: 'blur(25px) saturate(150%)',
              }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <motion.a
                  href="https://wa.me/256755504221"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/30 transition-colors border border-white/25 shadow-sm"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                  }}
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-bold">W</span>
                  </div>
                  <span className="text-gray-700 font-medium">WhatsApp</span>
                </motion.a>
                <motion.a
                  href="tel:+256755504221"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/30 transition-colors border border-white/25 shadow-sm"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                  }}
                >
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-bold">📞</span>
                  </div>
                  <span className="text-gray-700 font-medium">Call Now</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Search Bar with blur effect */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-0 right-0 z-40 px-4"
          >
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-green-200"
              >
                <input
                  type="text"
                  placeholder="Search for makeup styles, henna designs..."
                  className="w-full px-6 py-4 text-lg rounded-xl border-2 border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                  autoFocus
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Bridal Makeup', 'Henna Designs', 'Party Look', 'Traditional'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-green-100/80 backdrop-blur-sm text-green-700 rounded-full text-sm cursor-pointer hover:bg-green-200/80 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;