import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Share2, Eye, Star, Download, MessageCircle, Phone } from 'lucide-react';

const categories = ['All', 'Bridal', 'Party', 'Traditional', 'Henna'];

const catalogItems = [
  {
    id: 1,
    title: 'Elegant Bridal Look',
    category: 'Bridal',
    image: 'images/bridal 1.jpg',
    featured: true,
    new: false,
    rating: 4.9,
    description: 'Complete bridal makeup with traditional elements'
  },
  {
    id: 2,
    title: 'Intricate Henna Design',
    category: 'Henna',
    image: 'images/h1.jpg',
    featured: true,
    new: true,
    rating: 4.8,
    description: 'Traditional henna patterns for special occasions'
  },
  {
    id: 3,
    title: 'Glamorous Party Makeup',
    category: 'Party',
    image: 'images/bridal 2.jpg',
    featured: false,
    new: true,
    rating: 4.7,
    description: 'Bold and beautiful party-ready look'
  },
  {
    id: 4,
    title: 'Natural Glow Makeup',
    category: 'Party',
    image: 'images/bridal 3.jpg',
    featured: false,
    new: false,
    rating: 4.6,
    description: 'Subtle enhancement for everyday elegance'
  },
  {
    id: 5,
    title: 'Traditional Cultural Look',
    category: 'Traditional',
    image: 'images/3.jpg',
    featured: true,
    new: false,
    rating: 4.8,
    description: 'Authentic traditional makeup styles'
  },
  {
    id: 6,
    title: 'Modern Bridal Style',
    category: 'Bridal',
    image: 'images/2.jpg',
    featured: true,
    new: true,
    rating: 4.9,
    description: 'Contemporary bridal look with classic touches'
  },
  {
    id: 7,
    title: 'Festive Celebration Look',
    category: 'Traditional',
    image: 'images/1.jpg',
    featured: false,
    new: false,
    rating: 4.7,
    description: 'Perfect for cultural celebrations and festivals'
  },
  {
    id: 8,
    title: 'Artistic Henna Patterns',
    category: 'Henna',
    image: 'images/h3.jpg',
    featured: false,
    new: true,
    rating: 4.8,
    description: 'Creative and detailed henna artistry'
  }
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleBookNow = (item: any) => {
    const message = `Hi! I'm interested in booking the "${item.title}" service. Could you please provide more details about availability and pricing?`;
    const whatsappUrl = `https://wa.me/256755504221?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+256755504221';
  };

  const filteredItems = selectedCategory === 'All' 
    ? catalogItems 
    : catalogItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Beauty <span className="text-green-600">Catalog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exquisite collection of makeup styles and henna designs. 
            Each piece is carefully curated to make your special day absolutely perfect.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:from-green-500 hover:to-green-700 transition-colors shadow-lg"
          >
            <Download className="h-5 w-5" />
            <span>Download Lookbook</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCall}
            className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:from-pink-500 hover:to-pink-700 transition-colors shadow-lg"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </motion.button>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Responsive Grid - 2 columns on mobile, 3 on desktop */}
        <motion.div 
          layout
          className="grid gap-6 grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-200"
              >
                <div className="relative overflow-hidden">
                  {/* Square aspect ratio for mobile, maintain original for desktop */}
                  <div className="aspect-square lg:aspect-[4/5]">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-1">
                    {item.new && (
                      <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        New
                      </span>
                    )}
                    {item.featured && (
                      <span className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-semibold">{item.rating}</span>
                  </div>

                  {/* Overlay Actions */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-3"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Heart className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Share2 className="h-4 w-4" />
                    </motion.button>
                  </motion.div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">{item.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Action Buttons - Stacked on mobile */}
                  <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
                    <motion.button
                      onClick={() => handleBookNow(item)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-pink-400 to-pink-600 text-white px-3 py-2 rounded-lg font-semibold hover:from-pink-500 hover:to-pink-700 transition-colors flex items-center justify-center space-x-1 text-sm"
                    >
                      <MessageCircle className="h-3 w-3" />
                      <span>Book</span>
                    </motion.button>
                    
                    <motion.button
                      onClick={handleCall}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-2 rounded-lg font-semibold hover:from-green-500 hover:to-green-700 transition-colors flex items-center justify-center space-x-1 text-sm"
                    >
                      <Phone className="h-3 w-3" />
                      <span>Call</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalog;