import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  Star, 
  MessageCircle, 
  Phone, 
  ArrowRight,
  Award,
  Users,
  Clock,
  Palette,
  Play,
  Image as ImageIcon
} from 'lucide-react';

const Adverts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const flyerSlides = [
    {
      id: 1,
      title: "Bridal Makeup Special",
      subtitle: "Your Dream Wedding Look",
      description: "Complete bridal transformation with trial session included. Make your special day absolutely perfect.",
      image: "images/2.jpg",
      price: "Starting from $200",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 2,
      title: "Henna Artistry",
      subtitle: "Traditional & Modern Designs",
      description: "Intricate henna patterns for weddings, parties, and special occasions. Premium natural henna.",
      image: "images/h3.jpg",
      price: "Starting from $50",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      id: 3,
      title: "Party Glam",
      subtitle: "Stunning Party Looks",
      description: "Bold and beautiful makeup for parties, events, and celebrations. Stand out and shine bright.",
      image: "images/bridal 3.jpg",
      price: "Starting from $80",
      gradient: "from-green-500 to-green-700"
    },
    {
      id: 4,
      title: "Traditional Makeup",
      subtitle: "Cultural Beauty",
      description: "Authentic traditional makeup styles that celebrate your heritage and cultural beauty.",
      image: "images/3.jpg",
      price: "Starting from $100",
      gradient: "from-pink-500 to-pink-700"
    },
    {
      id: 5,
      title: "Combo Packages",
      subtitle: "Makeup + Henna",
      description: "Complete beauty transformation with both makeup and henna services. Perfect for special occasions.",
      image: "images/1.jpg",
      price: "Starting from $250",
      gradient: "from-green-600 to-pink-600"
    }
  ];

  // Image showcase data (replacing video showcase)
  const imageShowcase = [
    {
      id: 1,
      title: "Bridal Makeup Transformation",
      description: "Complete bridal makeup process showcasing elegant and timeless beauty",
      image: "images/2.jpg",
      category: "Bridal"
    },
    {
      id: 2,
      title: "Intricate Henna Design Process",
      description: "Beautiful henna patterns and traditional artistry techniques",
      image: "images/h3.jpg",
      category: "Henna"
    },
    {
      id: 3,
      title: "Party Glam Makeup Tutorial",
      description: "Bold and glamorous party makeup with stunning results",
      image: "images/bridal 3.jpg",
      category: "Party"
    },
    {
      id: 4,
      title: "Traditional Makeup Artistry",
      description: "Cultural beauty techniques and traditional styling methods",
      image: "images/3.jpg",
      category: "Traditional"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % flyerSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [flyerSlides.length]);

  const handleImageSelect = (index: number) => {
    setCurrentVideoIndex(index);
  };

  const handleBookService = () => {
    const message = "Hi! I saw your beauty showcase and I'm interested in booking a beauty service. Could you please provide more details about your services and availability?";
    const whatsappUrl = `https://wa.me/256755504221?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+256755504221';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Daily <span className="text-green-600">Adverts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our artistic transformations! Browse through our gallery of makeup artistry and henna designs.
          </p>
        </motion.div>

        {/* Image Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-6 md:p-8 bg-gradient-to-r from-green-50 to-pink-50 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    <span className="text-green-600">Beauty</span> Gallery
                  </h3>
                  <p className="text-gray-600">Explore our creative work and transformations</p>
                </div>
                <div className="bg-gradient-to-r from-green-400 to-green-600 p-3 rounded-full">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-8">
              {/* Main Image Display */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg aspect-video"
                >
                  {/* Main Image */}
                  <img
                    src={imageShowcase[currentVideoIndex].image}
                    alt={imageShowcase[currentVideoIndex].title}
                    className="w-full h-full object-cover"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold mb-1">
                            {imageShowcase[currentVideoIndex].title}
                          </h4>
                          <p className="text-white/90 text-sm">
                            {imageShowcase[currentVideoIndex].description}
                          </p>
                        </div>
                        <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {imageShowcase[currentVideoIndex].category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Image Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 p-6 bg-gradient-to-r from-green-50 to-pink-50 rounded-2xl"
                >
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {imageShowcase[currentVideoIndex].title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {imageShowcase[currentVideoIndex].description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      onClick={handleBookService}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-500 hover:to-green-700 transition-colors flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Book This Service</span>
                    </motion.button>
                    
                    <motion.button
                      onClick={handleCallNow}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-pink-400 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-500 hover:to-pink-700 transition-colors flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call Now</span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Image Gallery */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Gallery</h4>
                <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {imageShowcase.map((item, index) => (
                    <motion.div
                      key={item.id}
                      onClick={() => handleImageSelect(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all ${
                        index === currentVideoIndex 
                          ? 'ring-2 ring-green-400 bg-green-50' 
                          : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex space-x-3 p-3">
                        <div className="relative flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-14 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/10 rounded-lg flex items-center justify-center">
                            <ImageIcon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-sm text-gray-800 truncate">
                            {item.title}
                          </h5>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                            {item.description}
                          </p>
                          <span className="inline-block mt-2 bg-gradient-to-r from-green-400 to-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Original Flyer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16"
        >
          {/* Mobile: Slider first, then content */}
          <div className="block lg:hidden">
            {/* Mobile Slider */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    {/* Square Format Flyer Card */}
                    <div className={`bg-gradient-to-br ${flyerSlides[currentSlide].gradient} rounded-2xl p-6 text-white shadow-2xl aspect-square flex flex-col justify-between`}>
                      {/* Flyer Header */}
                      <div className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                          <Heart className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold mb-1">{flyerSlides[currentSlide].title}</h4>
                        <p className="text-white/90 text-sm font-medium">{flyerSlides[currentSlide].subtitle}</p>
                      </div>

                      {/* Square Flyer Image */}
                      <div className="relative mb-4 rounded-xl overflow-hidden aspect-square">
                        <img
                          src={flyerSlides[currentSlide].image}
                          alt={flyerSlides[currentSlide].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </div>

                      {/* Flyer Content */}
                      <div className="text-center space-y-3">
                        <p className="text-white/90 text-sm leading-relaxed">
                          {flyerSlides[currentSlide].description}
                        </p>
                        
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                          <div className="text-lg font-bold mb-1">{flyerSlides[currentSlide].price}</div>
                          <div className="flex items-center justify-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-yellow-300 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {flyerSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide 
                          ? 'bg-green-500 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Content */}
            <div className="p-8">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative mb-8 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="images/2.jpg"
                  alt="Beauty Arts Professional Services"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-full">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <span className="font-semibold">Professional Beauty Services</span>
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Transform Your Beauty with 
                    <span className="text-green-600"> Professional Services</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Experience the art of beauty transformation with our expert makeup artists and henna designers. 
                    We specialize in creating stunning looks that enhance your natural beauty and make you feel confident and radiant.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                    <div className="bg-green-500 p-2 rounded-full">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Certified Artists</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-xl">
                    <div className="bg-pink-500 p-2 rounded-full">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                    <div className="bg-green-500 p-2 rounded-full">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-xl">
                    <div className="bg-pink-500 p-2 rounded-full">
                      <Palette className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Premium Products</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 min-h-[600px]">
            {/* Left Side - Image and Text */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative mb-8 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Beauty Arts Professional Services"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-full">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <span className="font-semibold">Professional Beauty Services</span>
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Transform Your Beauty with 
                    <span className="text-green-600"> Professional Services</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Experience the art of beauty transformation with our expert makeup artists and henna designers. 
                    We specialize in creating stunning looks that enhance your natural beauty and make you feel confident and radiant.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                    <div className="bg-green-500 p-2 rounded-full">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Certified Artists</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-xl">
                    <div className="bg-pink-500 p-2 rounded-full">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                    <div className="bg-green-500 p-2 rounded-full">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-xl">
                    <div className="bg-pink-500 p-2 rounded-full">
                      <Palette className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Premium Products</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Square Format Flyer Slider */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    {/* Square Format Flyer Card */}
                    <div className={`bg-gradient-to-br ${flyerSlides[currentSlide].gradient} rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300 aspect-square flex flex-col justify-between`}>
                      {/* Flyer Header */}
                      <div className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <Heart className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold mb-2">{flyerSlides[currentSlide].title}</h4>
                        <p className="text-white/90 font-medium">{flyerSlides[currentSlide].subtitle}</p>
                      </div>

                      {/* Square Flyer Image */}
                      <div className="relative mb-6 rounded-xl overflow-hidden aspect-square">
                        <img
                          src={flyerSlides[currentSlide].image}
                          alt={flyerSlides[currentSlide].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </div>

                      {/* Flyer Content */}
                      <div className="text-center space-y-4">
                        <p className="text-white/90 leading-relaxed">
                          {flyerSlides[currentSlide].description}
                        </p>
                        
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <div className="text-2xl font-bold mb-2">{flyerSlides[currentSlide].price}</div>
                          <div className="flex items-center justify-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-300 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {flyerSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide 
                          ? 'bg-green-500 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '10+', label: 'Years Experience', color: 'from-green-400 to-green-600' },
            { number: '500+', label: 'Happy Clients', color: 'from-pink-400 to-pink-600' },
            { number: '100+', label: 'Unique Designs', color: 'from-green-500 to-green-700' },
            { number: '4.9', label: 'Average Rating', color: 'from-pink-500 to-pink-700' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className={`bg-gradient-to-r ${stat.color} text-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-white/90 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Adverts;