'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';

export default function MissionVisionClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2B4257] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Driving innovation in architectural hardware with a commitment to excellence, 
              quality, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-[#2B4257] mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To deliver premium architectural hardware solutions that combine innovative design, 
                superior quality, and exceptional functionality. We are committed to empowering 
                architects, builders, and homeowners with products that enhance both the aesthetic 
                appeal and structural integrity of their spaces.
              </p>
              <div className="space-y-4">
                {[
                  'Deliver exceptional quality products',
                  'Provide innovative design solutions',
                  'Ensure customer satisfaction',
                  'Maintain sustainable practices'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#2B4257] rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Award className="w-8 h-8 text-[#2B4257] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Quality</h3>
                  <p className="text-sm text-gray-600">ISO certified processes</p>
                </div>
                <div className="text-center">
                  <Lightbulb className="w-8 h-8 text-[#2B4257] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Innovation</h3>
                  <p className="text-sm text-gray-600">Cutting-edge designs</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-[#2B4257] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Service</h3>
                  <p className="text-sm text-gray-600">Customer-focused approach</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-[#2B4257] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Passion</h3>
                  <p className="text-sm text-gray-600">Dedicated craftsmanship</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-[#2B4257] text-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-white/80 mr-2">•</span>
                    <span>Leading innovation in architectural hardware design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/80 mr-2">•</span>
                    <span>Expanding global presence while maintaining quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/80 mr-2">•</span>
                    <span>Sustainable manufacturing practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/80 mr-2">•</span>
                    <span>Continuous improvement and customer satisfaction</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-[#2B4257] mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To be the global leader in architectural hardware solutions, recognized for our 
                innovation, quality, and commitment to excellence. We envision a future where 
                Vegnar products are the preferred choice for architects and builders worldwide, 
                setting new standards in design, functionality, and sustainability.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2B4257]">
                <h4 className="font-semibold text-gray-900 mb-2">2030 Goals</h4>
                <p className="text-gray-600">
                  Expand to 15+ countries, achieve carbon-neutral manufacturing, 
                  and become the most trusted name in architectural hardware globally.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every product we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for perfection in every product and service we deliver',
                icon: Award
              },
              {
                title: 'Innovation',
                description: 'We continuously push boundaries to create cutting-edge solutions',
                icon: Lightbulb
              },
              {
                title: 'Integrity',
                description: 'We conduct business with honesty, transparency, and ethical practices',
                icon: Heart
              },
              {
                title: 'Customer Focus',
                description: 'We prioritize our customers\' needs and exceed their expectations',
                icon: Users
              },
              {
                title: 'Sustainability',
                description: 'We are committed to environmentally responsible manufacturing',
                icon: Target
              },
              {
                title: 'Teamwork',
                description: 'We believe in collaboration and collective success',
                icon: Users
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-[#2B4257]" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#2B4257] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of our mission to transform architectural hardware worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="bg-white text-[#2B4257] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More About Us
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2B4257] transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}