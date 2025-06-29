import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart, Share2, Download } from 'lucide-react';

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Bridal', 'Henna', 'Party', 'Traditional'];

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      title: 'Elegant Bridal Makeup',
      category: 'Bridal',
      description: 'Stunning bridal look with traditional elements'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      title: 'Intricate Henna Design',
      category: 'Henna',
      description: 'Beautiful traditional henna patterns'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      title: 'Glamorous Party Look',
      category: 'Party',
      description: 'Bold and beautiful party makeup'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      title: 'Natural Beauty Enhancement',
      category: 'Party',
      description: 'Subtle and elegant natural look'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      title: 'Traditional Cultural Style',
      category: 'Traditional',
      description: 'Authentic traditional makeup'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      title: 'Modern Bridal Style',
      category: 'Bridal',
      description: 'Contemporary bridal elegance'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      title: 'Festive Celebration Look',
      category: 'Traditional',
      description: 'Perfect for cultural celebrations'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      title: 'Artistic Henna Patterns',
      category: 'Henna',
      description: 'Creative and detailed henna art'
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 bg-black/50 backdrop-blur-md border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white">Beauty Arts Gallery</h2>
            <p className="text-white/70">Discover our stunning transformations</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <X className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 p-4 bg-black/30 backdrop-blur-md border-b border-white/10">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Image Display - Fixed Size Container */}
          <div className="flex-1 relative flex items-center justify-center p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Fixed Size Image Container */}
                <div className="w-[800px] h-[600px] max-w-[90vw] max-h-[70vh] bg-black/20 rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm border border-white/10">
                  <img
                    src={filteredImages[currentIndex]?.url}
                    alt={filteredImages[currentIndex]?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 rounded-b-lg backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {filteredImages[currentIndex]?.title}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {filteredImages[currentIndex]?.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {filteredImages[currentIndex]?.category}
                    </span>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Heart className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Share2 className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Download className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {filteredImages.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevImage}
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors shadow-lg"
                >
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextImage}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors shadow-lg"
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </>
            )}
          </div>

          {/* Thumbnail Sidebar */}
          <div className="w-80 bg-black/50 backdrop-blur-md p-4 overflow-y-auto border-l border-white/10">
            <h3 className="text-white font-semibold mb-4">
              {selectedCategory} Gallery ({filteredImages.length})
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative cursor-pointer rounded-lg overflow-hidden ${
                    index === currentIndex ? 'ring-2 ring-green-400' : ''
                  }`}
                >
                  {/* Fixed Size Thumbnails */}
                  <div className="w-full h-24 bg-black/20 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-green-400/20 backdrop-blur-sm" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center items-center p-4 bg-black/50 backdrop-blur-md border-t border-white/10">
          <div className="flex space-x-2">
            {filteredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-green-400 w-8' : 'bg-white/50 w-2'
                }`}
              />
            ))}
          </div>
          <div className="ml-6 text-white/70 text-sm">
            {currentIndex + 1} of {filteredImages.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Gallery;