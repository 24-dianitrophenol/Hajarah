import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <img
              src="/src/assets/logo-white.svg"
              alt="Hajarah Makeup"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              Transform your beauty with our professional makeup and henna services.
              Book your appointment today and let us enhance your natural beauty.
            </p>
            <motion.div className="flex space-x-4 p-4">
              <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="#"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-white hover:bg-pink-400 transition-colors"
              >
              <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="#"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-white hover:bg-pink-400 transition-colors"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13.5c-.28 0-.5-.22-.5-.5v-2.5c0-.28.22-.5.5-.5h1.5v-2h-1.5c-.28 0-.5-.22-.5-.5V8c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v6c0 .28-.22.5-.5.5h-2zm-5.5 0c-.28 0-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v6c0 .28-.22.5-.5.5h-2zm-5.5 0c-.28 0-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v6c0 .28-.22.5-.5.5h-2z" />
              </svg>
              </motion.a>
              <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="mailto:hajarahmakeup@gmail.com"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-white hover:bg-pink-400 transition-colors"
              >
              <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-pink-500" />
                <span className="text-gray-400">Kasokoso, Kireka</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-500" />
                <a href="tel:+256755504221" className="text-gray-400 hover:text-white">
                  +256 755 504221
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-500" />
                <a href="mailto:hajarahmakeup@gmail.com" className="text-gray-400 hover:text-white">
                  hajarahmakeup@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hajarah Makeup and Henna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;