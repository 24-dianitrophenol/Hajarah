import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Eye, Star, Award, Users, Clock, Sparkles, Heart, Zap } from 'lucide-react';
import Gallery from './Gallery';
import ServiceModal from './ServiceModal';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Elegant Bridal Makeup',
      category: 'Bridal'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Traditional Henna Art',
      category: 'Henna'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Glamorous Party Look',
      category: 'Party'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Natural Beauty Enhancement',
      category: 'Natural'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Cultural Traditional Style',
      category: 'Traditional'
    }
  ];

  const features = [
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Only the finest products and expert techniques for your special day'
    },
    {
      icon: Award,
      title: 'Certified Artists',
      description: 'Professional makeup artists with years of industry experience'
    },
    {
      icon: Users,
      title: 'Trusted by 500+',
      description: 'Hundreds of satisfied brides and beauty enthusiasts'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and consultation'
    }
  ];

  const services = [
    {
      icon: Sparkles,
      title: 'Bridal Makeup',
      description: 'Complete bridal transformation with trial sessions',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      fullDescription: 'Our premium bridal makeup service is designed to make your wedding day absolutely perfect. We understand that your wedding is one of the most important days of your life, and we are committed to creating a look that reflects your unique style while enhancing your natural beauty. Our experienced artists use only the finest, long-lasting products to ensure you look flawless from the ceremony through the reception.',
      duration: '6-8 hours',
      price: 'From $200',
      rating: 4.9,
      features: [
        'Pre-wedding makeup trial',
        'Wedding day makeup application',
        'Professional hair styling',
        'Touch-up kit for the day',
        'False eyelashes included',
        'Photography-ready finish',
        'Waterproof & long-lasting',
        'Complimentary consultation'
      ],
      process: [
        'Initial consultation to discuss your vision and preferences',
        'Pre-wedding trial session to perfect your look',
        'Wedding day preparation at your chosen location',
        'Final touch-ups and photography session',
        'Provision of touch-up kit for the reception'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
      ],
      testimonial: {
        text: 'Beauty Arts made my wedding day absolutely magical! The makeup was flawless and lasted all day. I felt like a princess!',
        author: 'Sarah M.',
        rating: 5
      }
    },
    {
      icon: Heart,
      title: 'Henna Artistry',
      description: 'Traditional and modern henna designs',
      image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      fullDescription: 'Experience the ancient art of henna with our skilled artists who create intricate, beautiful designs that celebrate tradition while embracing modern aesthetics. We use only premium, natural henna paste that creates rich, long-lasting stains. Whether you prefer traditional patterns or contemporary designs, we customize each piece to reflect your personal style and the significance of your special occasion.',
      duration: '2-4 hours',
      price: 'From $50',
      rating: 4.8,
      features: [
        'Premium natural henna paste',
        'Custom design consultation',
        'Traditional & modern patterns',
        'Bridal henna packages',
        'Quick-dry formula',
        'Aftercare instructions',
        'Touch-up service available',
        'Group booking discounts'
      ],
      process: [
        'Design consultation and pattern selection',
        'Skin preparation and cleaning',
        'Careful application of henna designs',
        'Drying and setting process',
        'Aftercare instructions and tips'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
      ],
      testimonial: {
        text: 'The henna designs were absolutely stunning! So intricate and beautiful. The color lasted for weeks and I received so many compliments.',
        author: 'Amina K.',
        rating: 5
      }
    },
    {
      icon: Zap,
      title: 'Party Makeup',
      description: 'Glamorous looks for special occasions',
      image: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      fullDescription: 'Transform yourself for any special occasion with our glamorous party makeup service. Whether it\'s a birthday celebration, anniversary, graduation, or any festive event, we create bold, beautiful looks that make you the center of attention. Our artists are skilled in creating everything from subtle elegance to dramatic glamour, ensuring you feel confident and stunning at your event.',
      duration: '2-3 hours',
      price: 'From $80',
      rating: 4.7,
      features: [
        'Event-specific makeup design',
        'Bold & glamorous looks',
        'Professional contouring',
        'False eyelashes included',
        'Long-lasting formula',
        'Photography-ready finish',
        'Color coordination with outfit',
        'Quick touch-up service'
      ],
      process: [
        'Event discussion and look planning',
        'Skin preparation and priming',
        'Professional makeup application',
        'Final styling and photography',
        'Touch-up tips and product recommendations'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
      ],
      testimonial: {
        text: 'I felt like a movie star! The makeup was perfect for my graduation party. Everyone kept asking who did my makeup!',
        author: 'Jessica L.',
        rating: 5
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  return (
    <>
      {/* Full Screen Image Slider */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={galleryImages[currentImageIndex].url}
              alt={galleryImages[currentImageIndex].title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Welcome Text and Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white px-6">
          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Welcome to <span className="text-green-400">Beauty Arts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transform your beauty with our professional makeup and henna services
            </p>
          </motion.div>

          {/* Glass Effect Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsGalleryOpen(true)}
              className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/30"
            >
              <Eye className="h-6 w-6" />
              <span>View Gallery</span>
            </motion.button>
            
            <motion.a
              href="https://wa.me/256755504221"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/30"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Book Us</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Image Info */}
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-20 left-8 text-white z-10"
        >
          <h3 className="text-2xl font-bold mb-1">{galleryImages[currentImageIndex].title}</h3>
          <span className="text-green-300 font-medium text-lg">{galleryImages[currentImageIndex].category}</span>
        </motion.div>
      </section>

      {/* Gallery Modal */}
      <Gallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />

      {/* Service Detail Modal */}
      <ServiceModal 
        isOpen={isServiceModalOpen} 
        onClose={() => setIsServiceModalOpen(false)} 
        service={selectedService} 
      />

      {/* Content Sections After Slider */}
      <div className="bg-gradient-to-br from-green-50 via-white to-pink-50">
        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '500+', label: 'Happy Clients' },
                { number: '100+', label: 'Unique Designs' },
                { number: '4.9', label: 'Average Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Why Choose <span className="text-green-600">Beauty Arts</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-200 text-center"
                >
                  <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Our <span className="text-green-600">Signature Services</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional beauty services that bring out your natural radiance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-200"
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-full">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <motion.button
                      onClick={() => handleLearnMore(service)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-500 hover:to-green-700 transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg border-2 border-green-100"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Ready to Transform Your Look?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Book your consultation today and let our expert team create the perfect look for your special occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/256755504221"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-500 hover:to-green-700 transition-colors shadow-lg"
                >
                  Book Consultation
                </motion.a>
                <motion.button
                  onClick={() => setIsGalleryOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-500 hover:to-pink-700 transition-colors shadow-lg"
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;