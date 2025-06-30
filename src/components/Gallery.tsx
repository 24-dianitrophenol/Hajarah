import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart, Share2, Download, Filter } from 'lucide-react';

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success'>('idle');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  // Handle like functionality
  const handleLike = () => {
    setIsLiked(!isLiked);
    // You can add analytics or save to favorites here
    if (!isLiked) {
      // Show a brief success message or animation
      console.log('Added to favorites:', filteredImages[currentIndex].title);
    }
  };

  // Handle share functionality
  const handleShare = async () => {
    const currentImage = filteredImages[currentIndex];
    
    if (navigator.share) {
      // Use native share API if available (mobile devices)
      try {
        await navigator.share({
          title: `${currentImage.title} - Hajarah's Beauty Arts`,
          text: `Check out this beautiful ${currentImage.category.toLowerCase()} look: ${currentImage.description}`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback to custom share menu
      setShowShareMenu(true);
    }
  };

  // Handle download functionality
  const handleDownload = async () => {
    const currentImage = filteredImages[currentIndex];
    setDownloadStatus('downloading');
    
    try {
      const response = await fetch(currentImage.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${currentImage.title.replace(/\s+/g, '_')}_Hajarahs_Beauty_Arts.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
      setDownloadStatus('success');
      
      // Reset status after 2 seconds
      setTimeout(() => setDownloadStatus('idle'), 2000);
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('idle');
    }
  };

  // Share to specific platforms
  const shareToSocial = (platform: string) => {
    const currentImage = filteredImages[currentIndex];
    const text = `Check out this beautiful ${currentImage.category.toLowerCase()} look: ${currentImage.description}`;
    const url = window.location.href;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setShowShareMenu(false);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
      setShowShareMenu(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          onClose();
          break;
        case ' ':
          e.preventDefault();
          handleLike();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, filteredImages.length]);

  // Auto-scroll to current image in thumbnail strip
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const thumbnailWidth = 80; // 64px + 16px margin
      const scrollPosition = currentIndex * thumbnailWidth - container.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col"
      >
        {/* Enhanced Header with Better Visibility */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center p-4 md:p-6 bg-black/80 backdrop-blur-md border-b border-white/20 flex-shrink-0 relative z-20"
        >
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl font-bold text-white">Hajarah's Gallery</h2>
            <p className="text-white/80 text-sm md:text-base">Discover our stunning transformations</p>
          </div>
          
          {/* Top Action Buttons - Always Visible */}
          <div className="flex items-center space-x-3 ml-4">
            {/* Filter Toggle for Mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors shadow-lg border border-white/30"
            >
              <Filter className="h-5 w-5" />
            </motion.button>

            {/* Share Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShare}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors shadow-lg border border-white/30 relative"
            >
              <Share2 className="h-5 w-5" />
              {showShareMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl p-2 min-w-[200px] z-30"
                >
                  <button
                    onClick={() => shareToSocial('whatsapp')}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-gray-800 flex items-center space-x-2"
                  >
                    <span className="text-green-500">📱</span>
                    <span>Share on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => shareToSocial('facebook')}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-gray-800 flex items-center space-x-2"
                  >
                    <span className="text-blue-500">📘</span>
                    <span>Share on Facebook</span>
                  </button>
                  <button
                    onClick={() => shareToSocial('twitter')}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-gray-800 flex items-center space-x-2"
                  >
                    <span className="text-blue-400">🐦</span>
                    <span>Share on Twitter</span>
                  </button>
                  <button
                    onClick={() => shareToSocial('copy')}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-gray-800 flex items-center space-x-2"
                  >
                    <span>📋</span>
                    <span>Copy Link</span>
                  </button>
                </motion.div>
              )}
            </motion.button>

            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDownload}
              disabled={downloadStatus === 'downloading'}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors shadow-lg border border-white/30 relative"
            >
              {downloadStatus === 'downloading' ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : downloadStatus === 'success' ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="h-5 w-5 text-green-400"
                >
                  ✓
                </motion.div>
              ) : (
                <Download className="h-5 w-5" />
              )}
            </motion.button>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-3 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-600/80 transition-colors shadow-lg border border-white/30"
            >
              <X className="h-6 w-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Category Filter - Enhanced Visibility */}
        <AnimatePresence>
          {(showFilters || window.innerWidth >= 768) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-black/70 backdrop-blur-md border-b border-white/20 flex-shrink-0 relative z-20"
            >
              <div className="flex justify-start space-x-2 p-4 overflow-x-auto">
                <div className="flex space-x-2 min-w-max">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentIndex(0);
                        setShowFilters(false);
                      }}
                      className={`px-4 py-2 rounded-full font-semibold transition-all text-sm whitespace-nowrap border ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg border-green-400'
                          : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Area - Scrollable */}
        <div className="flex-1 flex flex-col min-h-0 relative">
          {/* Image Display Area */}
          <div className="flex-1 relative flex items-center justify-center p-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-5xl h-full flex items-center justify-center"
              >
                {/* Responsive Image Container */}
                <div className="relative w-full bg-black/30 rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                  {/* Responsive aspect ratio */}
                  <div className="aspect-square sm:aspect-[4/3] lg:aspect-[16/10] max-h-[70vh] relative">
                    <img
                      src={filteredImages[currentIndex]?.url}
                      alt={filteredImages[currentIndex]?.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Image Overlay with Info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    
                    {/* Top Right Actions - Always Visible */}
                    <div className="absolute top-4 right-4 flex space-x-2 z-10">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleLike}
                        className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors shadow-lg border border-white/30"
                      >
                        <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      </motion.button>
                    </div>

                    {/* Bottom Info - Always Visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                          {filteredImages[currentIndex]?.title}
                        </h3>
                        <p className="text-white/90 mb-3 text-sm md:text-base">
                          {filteredImages[currentIndex]?.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                            {filteredImages[currentIndex]?.category}
                          </span>
                          <div className="text-white/70 text-sm">
                            {currentIndex + 1} of {filteredImages.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation Arrows - Always Visible */}
            {filteredImages.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevImage}
                  className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 p-4 md:p-5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-all shadow-2xl z-20 border border-white/30"
                >
                  <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextImage}
                  className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 p-4 md:p-5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-all shadow-2xl z-20 border border-white/30"
                >
                  <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                </motion.button>
              </>
            )}
          </div>

          {/* Desktop Sidebar - Scrollable */}
          <div className="hidden xl:block absolute top-0 right-0 w-80 h-full bg-black/60 backdrop-blur-md border-l border-white/20 overflow-hidden">
            <div className="p-4 border-b border-white/20">
              <h3 className="text-white font-semibold">
                {selectedCategory} Gallery ({filteredImages.length})
              </h3>
            </div>
            <div className="p-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              <div className="grid grid-cols-2 gap-3">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative cursor-pointer rounded-lg overflow-hidden transition-all ${
                      index === currentIndex ? 'ring-2 ring-green-400 shadow-lg' : 'hover:ring-1 hover:ring-white/50'
                    }`}
                  >
                    <div className="w-full h-24 bg-black/20 overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute inset-0 transition-colors ${
                      index === currentIndex ? 'bg-green-400/20' : 'bg-black/20 hover:bg-black/10'
                    }`} />
                    {index === currentIndex && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Mobile Thumbnails - Horizontal Scrollable */}
        <div className="xl:hidden bg-black/70 backdrop-blur-md border-t border-white/20 p-3 flex-shrink-0">
          <div 
            ref={scrollContainerRef}
            className="flex space-x-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
            style={{ scrollbarWidth: 'thin' }}
          >
            {filteredImages.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex ? 'ring-2 ring-green-400 scale-110' : 'hover:ring-1 hover:ring-white/50'
                }`}
                whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Pagination */}
        <div className="flex justify-between items-center p-4 bg-black/70 backdrop-blur-md border-t border-white/20 flex-shrink-0">
          {/* Pagination Dots */}
          <div className="flex space-x-2">
            {filteredImages.slice(0, Math.min(8, filteredImages.length)).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-green-400 w-8' : 'bg-white/50 w-2 hover:bg-white/70'
                }`}
              />
            ))}
            {filteredImages.length > 8 && (
              <span className="text-white/70 text-xs self-center">...</span>
            )}
          </div>
          
          {/* Enhanced Counter and Navigation */}
          <div className="flex items-center space-x-4">
            <div className="text-white/90 text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
              {currentIndex + 1} / {filteredImages.length}
            </div>
            <div className="flex space-x-2">
              <motion.button
                onClick={prevImage}
                disabled={currentIndex === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.button>
              <motion.button
                onClick={nextImage}
                disabled={currentIndex === filteredImages.length - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Click outside to close share menu */}
        {showShareMenu && (
          <div 
            className="fixed inset-0 z-20" 
            onClick={() => setShowShareMenu(false)}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Gallery;