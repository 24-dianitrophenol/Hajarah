import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Star, Check, MessageCircle, Phone, Calendar, Award, Users, Heart } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  duration: string;
  price: string;
  rating: number;
  features: string[];
  process: string[];
  gallery: string[];
  testimonial: {
    text: string;
    author: string;
    rating: number;
  };
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  const handleWhatsAppBooking = () => {
    const message = `Hi! I'm interested in booking the ${service?.title} service. Could you please provide more details about availability and pricing?`;
    const whatsappUrl = `https://wa.me/256755504221?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+256755504221';
  };

  const handleConsultation = () => {
    const message = `Hi! I'd like to schedule a consultation for the ${service?.title} service. When would be a good time to discuss my requirements?`;
    const whatsappUrl = `https://wa.me/256755504221?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen || !service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <div className="h-80 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors shadow-lg"
            >
              <X className="h-6 w-6" />
            </motion.button>

            {/* Service Icon */}
            <div className="absolute top-6 left-6 bg-gradient-to-r from-pink-400 to-pink-600 p-4 rounded-full shadow-lg">
              <service.icon className="h-8 w-8 text-white" />
            </div>

            {/* Title and Rating */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{service.rating}</span>
                </div>
              </div>
              <p className="text-xl text-white/90">{service.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[calc(90vh-320px)] overflow-y-auto">
            <div className="p-8">
              {/* Service Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">About This Service</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{service.fullDescription}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">What's Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 p-3 bg-pink-50 rounded-xl"
                        >
                          <div className="bg-pink-500 p-1 rounded-full">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Process</h3>
                    <div className="space-y-4">
                      {service.process.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
                        >
                          <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 flex-1">{step}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Gallery */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {service.gallery.map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        >
                          <img
                            src={image}
                            alt={`${service.title} ${index + 1}`}
                            className="w-full h-32 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Pricing Card */}
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border-2 border-pink-100">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-800 mb-2">{service.price}</div>
                      <div className="flex items-center justify-center space-x-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    {/* Booking Buttons */}
                    <div className="space-y-3">
                      <motion.button
                        onClick={handleWhatsAppBooking}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-pink-500 hover:to-pink-700 transition-colors shadow-lg"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>Book via WhatsApp</span>
                      </motion.button>
                      
                      <motion.button
                        onClick={handlePhoneCall}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-green-500 hover:to-green-700 transition-colors shadow-lg"
                      >
                        <Phone className="h-5 w-5" />
                        <span>Call Now</span>
                      </motion.button>

                      <motion.button
                        onClick={handleConsultation}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white border-2 border-pink-300 text-pink-600 py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-pink-50 transition-colors"
                      >
                        <Calendar className="h-5 w-5" />
                        <span>Schedule Consultation</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-4">Service Stats</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-pink-500" />
                          <span className="text-gray-600">Experience</span>
                        </div>
                        <span className="font-semibold text-gray-800">10+ Years</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-green-500" />
                          <span className="text-gray-600">Happy Clients</span>
                        </div>
                        <span className="font-semibold text-gray-800">500+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Star className="h-5 w-5 text-yellow-500" />
                          <span className="text-gray-600">Rating</span>
                        </div>
                        <span className="font-semibold text-gray-800">{service.rating}/5.0</span>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border-2 border-pink-100">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < service.testimonial.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-3">"{service.testimonial.text}"</p>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-pink-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-800">
                        {service.testimonial.author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;