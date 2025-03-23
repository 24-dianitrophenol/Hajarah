import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Star, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To enhance natural beauty and boost confidence through expert makeup artistry and traditional henna designs.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To become the leading beauty service provider, known for innovation, quality, and customer satisfaction.'
    },
    {
      icon: Star,
      title: 'Our Values',
      description: 'Excellence in service, creativity in design, and dedication to customer happiness guide everything we do.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A passionate team of certified makeup artists and henna experts with years of industry experience.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over a decade of experience in the beauty industry, we specialize in creating stunning looks
            that enhance your natural beauty while celebrating your unique style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-2 border-pink-200 hover:border-pink-500"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-pink-500" />
                <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '5000+', label: 'Happy Clients' },
            { number: '100+', label: 'Unique Designs' },
            { number: '4.9', label: 'Average Rating' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-2 border-pink-200 rounded-xl p-6 hover:border-pink-500 transition-colors"
            >
              <div className="text-3xl font-bold text-pink-500 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;