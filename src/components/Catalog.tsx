import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Share2, Eye, Star, Download, MessageCircle, Phone } from 'lucide-react';

const categories = ['All', 'Bridal', 'Party', 'Traditional', 'Henna'];

const catalogItems = [
  {
    id: 1,
    title: 'Elegant Bridal Look',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: true,
    new: false,
    rating: 4.9,
    description: 'Complete bridal makeup with traditional elements'
  },
  {
    id: 2,
    title: 'Intricate Henna Design',
    category: 'Henna',
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: true,
    new: true,
    rating: 4.8,
    description: 'Traditional henna patterns for special occasions'
  },
  {
    id: 3,
    title: 'Glamorous Party Makeup',
    category: 'Party',
    image: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: false,
    new: true,
    rating: 4.7,
    description: 'Bold and beautiful party-ready look'
  },
  {
    id: 4,
    title: 'Natural Glow Makeup',
    category: 'Party',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: false,
    new: false,
    rating: 4.6,
    description: 'Subtle enhancement for everyday elegance'
  },
  {
    id: 5,
    title: 'Traditional Cultural Look',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: true,
    new: false,
    rating: 4.8,
    description: 'Authentic traditional makeup styles'
  },
  {
    id: 6,
    title: 'Modern Bridal Style',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: true,
    new: true,
    rating: 4.9,
    description: 'Contemporary bridal look with classic touches'
  },
  {
    id: 7,
    title: 'Festive Celebration Look',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: false,
    new: false,
    rating: 4.7,
    description: 'Perfect for cultural celebrations and festivals'
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

        <motion.div 
          layout
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
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
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {item.new && (
                      <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        New
                      </span>
                    )}
                    {item.featured && (
                      <span className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>

                  {/* Overlay Actions */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Eye className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Heart className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Share2 className="h-5 w-5" />
                    </motion.button>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      onClick={() => handleBookNow(item)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-pink-400 to-pink-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-pink-500 hover:to-pink-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Book Now</span>
                    </motion.button>
                    
                    <motion.button
                      onClick={handleCall}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-green-500 hover:to-green-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Phone className="h-4 w-4" />
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