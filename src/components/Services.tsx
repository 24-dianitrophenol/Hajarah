import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, Clock, Award } from 'lucide-react';

const services = [
  {
    title: "Premium Bridal Package",
    description: "Complete bridal transformation including makeup trial, wedding day makeup, hair styling, and touch-up kit",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "6-8 hours",
    rating: 4.9,
    features: ["Makeup Trial", "Wedding Day Service", "Hair Styling", "Touch-up Kit", "Photography Ready"]
  },
  {
    title: "Traditional Henna Artistry",
    description: "Intricate henna designs ranging from simple patterns to elaborate bridal mehndi with natural, premium quality henna",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "2-4 hours",
    rating: 4.8,
    features: ["Premium Henna", "Custom Designs", "Aftercare Kit", "Design Consultation", "Quick Dry Formula"]
  },
  {
    title: "Glamour Party Makeup",
    description: "Bold and beautiful party-ready looks perfect for special events, photoshoots, and celebrations",
    image: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "2-3 hours",
    rating: 4.7,
    features: ["Event Makeup", "False Lashes", "Contouring", "Long-lasting Formula", "Photo Ready"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-green-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional beauty services tailored to make you look and feel absolutely stunning. 
            Each service includes premium products and expert techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-200"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{service.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-1 text-green-500" />
                    Includes:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/256755504221"
                    className="flex-1 bg-gradient-to-r from-green-400 to-green-600 text-white py-3 px-4 rounded-xl flex items-center justify-center space-x-2 hover:from-green-500 hover:to-green-700 transition-colors font-semibold"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+256755504221"
                    className="flex-1 bg-gradient-to-r from-pink-400 to-pink-600 text-white py-3 px-4 rounded-xl flex items-center justify-center space-x-2 hover:from-pink-500 hover:to-pink-700 transition-colors font-semibold"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white rounded-2xl p-8 text-center border-2 border-pink-100"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Need Something Custom?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer personalized beauty packages tailored to your specific needs and preferences. 
            Contact us to discuss your requirements and get a custom quote.
          </p>
          <motion.a
            href="https://wa.me/256755504221"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-500 hover:to-green-700 transition-colors inline-block"
          >
            Get Custom Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;