import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import image1 from '../assets/images/2.jpg';
import image2 from '../assets/images/p1.jpg';
import image3 from '../assets/images/h3.jpg';

const services = [
  {
    title: "Bridal Makeup",
    description: "Complete bridal makeup package including trials and touch-ups",
    image: image1,
  },
  {
    title: "Traditional Henna",
    description: "Intricate henna designs for special occasions",
    image: image2,
  },
  {
    title: "Party Makeup",
    description: "Glamorous makeup for any special event",
    image: image3,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/1234567890"
                    className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+1234567890"
                    className="flex-1 bg-pink-500 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-pink-600 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;