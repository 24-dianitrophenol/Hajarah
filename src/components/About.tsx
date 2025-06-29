import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Star, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To enhance natural beauty and boost confidence through expert makeup artistry and traditional henna designs, creating unforgettable experiences for every client.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To become the leading beauty service provider, known for innovation, quality, and customer satisfaction while preserving traditional artistry.'
    },
    {
      icon: Star,
      title: 'Our Values',
      description: 'Excellence in service, creativity in design, authenticity in tradition, and unwavering dedication to customer happiness guide everything we do.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A passionate team of certified makeup artists and henna experts with years of industry experience and continuous training in latest techniques.'
    }
  ];

  const achievements = [
    { icon: Award, title: 'Certified Artists', description: 'All our artists are professionally certified' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer service' },
    { icon: Star, title: 'Premium Quality', description: 'Only the finest products and techniques' }
  ];

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-green-600">Beauty Arts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beauty Arts has been the premier destination for brides and beauty enthusiasts, 
            representing more than just a business - it's a passion project born from a deep love for fashion, 
            culture, and the magic of special moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-200">
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Beauty Arts Founder"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Meet Our Founder</h3>
                <p className="text-white/90">Passionate about beauty and tradition</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6">
              Meet <span className="text-green-600">Our Story</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to celebrate beauty in all its forms, Beauty Arts represents more than just 
              a business - it's a passion project born from a deep love for fashion, culture, and the magic of 
              special moments. With over a decade of experience in the fashion industry, we recognized the need 
              for a space that truly understands the significance of weddings and traditional ceremonies.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              What started as a small boutique has grown into the premier destination for bridal and traditional 
              beauty services. Our commitment to quality, authenticity, and exceptional service has made us the 
              trusted choice for hundreds of brides and families.
            </p>
            <div className="flex items-center space-x-2 text-green-600 font-semibold">
              <Star className="h-5 w-5 fill-current" />
              <span>Trusted by 500+ Brides</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100 hover:border-pink-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-100 to-green-200 p-3 rounded-full">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16 border-2 border-pink-100"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Why Choose Beauty Arts?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '500+', label: 'Happy Clients' },
            { number: '100+', label: 'Unique Designs' },
            { number: '4.9', label: 'Average Rating' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;