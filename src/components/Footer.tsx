import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <img
                src="/images/logos/logo_2.png"
                alt="Hajarah's Makeup and Henna"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
              Transform your beauty with our professional makeup and henna services. 
              We specialize in creating stunning looks that enhance your natural beauty 
              while celebrating your unique style.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="https://wa.me/256755504221"
                className="p-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full hover:shadow-lg transition-all"
              >
                <MessageCircle className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="#"
                className="p-3 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full hover:shadow-lg transition-all"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="mailto:hajarahmakeup@gmail.com"
                className="p-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:shadow-lg transition-all"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold mb-6 text-green-400">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Catalog', href: '#catalog' },
                { name: 'Services', href: '#services' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center justify-center md:justify-start space-x-2"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold mb-6 text-green-400">Contact Info</h3>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} className="flex items-center justify-center md:justify-start space-x-3">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <MapPin className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-gray-400 text-sm">Kireka, Kampala - Uganda</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center justify-center md:justify-start space-x-3">
                <div className="bg-pink-500/20 p-2 rounded-full">
                  <Phone className="h-4 w-4 text-pink-400" />
                </div>
                <a href="tel:+256755504221" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +256 755 504221
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center justify-center md:justify-start space-x-3">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <Mail className="h-4 w-4 text-green-400" />
                </div>
                <a href="mailto:hajarahmakeup@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  hajarahmakeup@gmail.com
                </a>
              </motion.li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-green-400 mb-3">Business Hours</h4>
              <div className="text-gray-400 text-sm space-y-1 text-center md:text-left">
                <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center justify-center space-x-2 mb-4 md:mb-0"
            >
              <span>&copy; {new Date().getFullYear()} Hajarah's Makeup and Henna. All rights reserved.</span>

            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
            >
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;