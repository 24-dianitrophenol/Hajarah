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
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

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

  // Search content data
  const searchableContent = [
    // Services
    { type: 'service', title: 'Bridal Makeup', section: 'services', keywords: ['bridal', 'wedding', 'makeup', 'bride', 'ceremony'] },
    { type: 'service', title: 'Henna Artistry', section: 'services', keywords: ['henna', 'mehndi', 'traditional', 'patterns', 'design'] },
    { type: 'service', title: 'Party Makeup', section: 'services', keywords: ['party', 'glamour', 'event', 'celebration', 'bold'] },
    { type: 'service', title: 'Traditional Makeup', section: 'services', keywords: ['traditional', 'cultural', 'authentic', 'heritage'] },
    
    // Catalog items
    { type: 'catalog', title: 'Elegant Bridal Look', section: 'catalog', keywords: ['elegant', 'bridal', 'sophisticated', 'classic'] },
    { type: 'catalog', title: 'Intricate Henna Design', section: 'catalog', keywords: ['intricate', 'henna', 'detailed', 'artistic'] },
    { type: 'catalog', title: 'Glamorous Party Makeup', section: 'catalog', keywords: ['glamorous', 'party', 'bold', 'stunning'] },
    { type: 'catalog', title: 'Natural Glow Makeup', section: 'catalog', keywords: ['natural', 'glow', 'subtle', 'everyday'] },
    
    // About content
    { type: 'info', title: 'About Beauty Arts', section: 'about', keywords: ['about', 'story', 'founder', 'experience', 'mission'] },
    { type: 'info', title: 'Our Team', section: 'about', keywords: ['team', 'artists', 'certified', 'professional'] },
    { type: 'info', title: 'Our Values', section: 'about', keywords: ['values', 'quality', 'excellence', 'customer'] },
    
    // Contact
    { type: 'contact', title: 'Contact Information', section: 'contact', keywords: ['contact', 'phone', 'whatsapp', 'email', 'location'] },
    { type: 'contact', title: 'Book Consultation', section: 'contact', keywords: ['book', 'consultation', 'appointment', 'schedule'] },
    
    // Video content
    { type: 'video', title: 'Makeup Transformation Videos', section: 'adverts', keywords: ['video', 'transformation', 'tutorial', 'process'] },
    { type: 'video', title: 'Henna Design Process', section: 'adverts', keywords: ['henna', 'process', 'video', 'tutorial'] }
  ];

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = searchableContent.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(results.slice(0, 8)); // Limit to 8 results
  };

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchResults.length > 0) {
      // Navigate to the first result's section
      setActiveSection(searchResults[0].section);
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Handle search result click
  const handleResultClick = (result: any) => {
    setActiveSection(result.section);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Handle search input key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e as any);
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

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
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-teal-50/30 backdrop-blur-3xl border-l border-white/30 shadow-2xl z-40 md:hidden flex flex-col"
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
            <div className="bg-white/5 backdrop-blur-md p-6 border-b border-white/20 flex-shrink-0">
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

            {/* Navigation items with enhanced lake water glass effect and proper spacing */}
            <div className="flex-1 overflow-y-auto">
              <div className="pt-6 pb-6 space-y-3 px-6">
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
            </div>

            {/* Contact section with enhanced lake water glass effect - Fixed positioning with proper spacing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.6,
                type: "spring",
                damping: 20,
                stiffness: 300
              }}
              className="flex-shrink-0 p-6 border-t border-white/20"
            >
              <div 
                className="rounded-2xl p-6 border border-white/30 shadow-lg"
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
                    whileTap={{ scale: 0.98 }}
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
                    whileTap={{ scale: 0.98 }}
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Search Bar with Results */}
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
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-green-200 overflow-hidden"
              >
                {/* Search Input */}
                <form onSubmit={handleSearchSubmit} className="p-6">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Search for makeup styles, henna designs, services..."
                    className="w-full px-6 py-4 text-lg rounded-xl border-2 border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                    autoFocus
                  />
                  
                  {/* Quick Search Tags */}
                  {searchQuery === '' && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Bridal Makeup', 'Henna Designs', 'Party Look', 'Traditional', 'About Us', 'Contact'].map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleSearch(tag)}
                          className="px-3 py-1 bg-green-100/80 backdrop-blur-sm text-green-700 rounded-full text-sm cursor-pointer hover:bg-green-200/80 transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}
                </form>

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="border-t border-gray-200 max-h-80 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleResultClick(result)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="w-full text-left px-6 py-4 hover:bg-green-50/80 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-800">{result.title}</h4>
                            <p className="text-sm text-gray-600 capitalize">{result.type} • {result.section}</p>
                          </div>
                          <div className="text-green-600">
                            <Search className="h-4 w-4" />
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* No Results */}
                {searchQuery !== '' && searchResults.length === 0 && (
                  <div className="border-t border-gray-200 p-6 text-center text-gray-500">
                    <p>No results found for "{searchQuery}"</p>
                    <p className="text-sm mt-2">Try searching for "bridal", "henna", "party", or "contact"</p>
                  </div>
                )}

                {/* Search Instructions */}
                {searchQuery !== '' && (
                  <div className="border-t border-gray-200 p-4 bg-green-50/50">
                    <p className="text-sm text-gray-600 text-center">
                      Press <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Enter</kbd> to go to first result or click on any result
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;