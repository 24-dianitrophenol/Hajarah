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
  Palette
} from 'lucide-react';

const Adverts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const flyerSlides = [
    {
      id: 1,
      title: "Bridal Makeup Special",
      subtitle: "Your Dream Wedding Look",
      description: "Complete bridal transformation with trial session included. Make your special day absolutely perfect.",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      price: "Starting from $200",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 2,
      title: "Henna Artistry",
      subtitle: "Traditional & Modern Designs",
      description: "Intricate henna patterns for weddings, parties, and special occasions. Premium natural henna.",
      image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      price: "Starting from $50",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      id: 3,
      title: "Party Glam",
      subtitle: "Stunning Party Looks",
      description: "Bold and beautiful makeup for parties, events, and celebrations. Stand out and shine bright.",
      image: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      price: "Starting from $80",
      gradient: "from-green-500 to-green-700"
    },
    {
      id: 4,
      title: "Traditional Makeup",
      subtitle: "Cultural Beauty",
      description: "Authentic traditional makeup styles that celebrate your heritage and cultural beauty.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      price: "Starting from $100",
      gradient: "from-pink-500 to-pink-700"
    },
    {
      id: 5,
      title: "Combo Packages",
      subtitle: "Makeup + Henna",
      description: "Complete beauty transformation with both makeup and henna services. Perfect for special occasions.",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      price: "Starting from $250",
      gradient: "from-green-600 to-pink-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % flyerSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [flyerSlides.length]);

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
            Beauty <span className="text-green-600">Adverts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exclusive beauty services and special offers. Transform your look with our professional makeup and henna artistry.
          </p>
        </motion.div>

        {/* Main Container - No border stroke */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
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