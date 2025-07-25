'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe, Truck, Shield, Award, MapPin, Users, Package, CheckCircle } from 'lucide-react';

const countries = [
  { name: 'United States', flag: '🇺🇸' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'UAE', flag: '🇦🇪' },
  { name: 'Singapore', flag: '🇸🇬' },
];

const exportProducts = [
  {
    name: 'Aluminum Glass Railings',
    description: 'Premium quality railings for international projects',
    image: '/Images/Gallary/railing-1-lg.jpg'
  },
  {
    name: 'Stainless Steel Hardware',
    description: 'Corrosion-resistant hardware for global climates',
    image: '/Images/Gallary/Hardware-1.jpg'
  },
  {
    name: 'Glass Fittings',
    description: 'Precision-engineered glass mounting solutions',
    image: '/Images/Gallary/glass-fitting-1.jpg'
  }
];

export default function ExportsClient() {
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
            <Globe className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Exporting Excellence Worldwide
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Vegnar Architectural delivers premium hardware solutions to over 25 countries, 
              bringing Indian craftsmanship and innovation to global markets.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">7+</div>
                <div className="text-white/80">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Export Capabilities */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Export Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From design to delivery, we ensure seamless international shipping with quality assurance at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Package, title: 'Custom Packaging', desc: 'Secure packaging for international shipping' },
              { icon: Shield, title: 'Quality Assurance', desc: 'ISO certified manufacturing processes' },
              { icon: Truck, title: 'Global Logistics', desc: 'Worldwide shipping and delivery' },
              { icon: Award, title: 'Export Compliance', desc: 'All international standards met' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[#2B4257]" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Countries We Export To */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Presence</h2>
            <p className="text-lg text-gray-600">
              Our products are trusted by architects and builders worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-2">{country.flag}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{country.name}</h3>

              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Products */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Export Product Range</h2>
            <p className="text-lg text-gray-600">
              Premium architectural hardware designed for global markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exportProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Vegnar for Exports */}
      <div className="py-16 bg-[#2B4257] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Vegnar for Architectural Hardware?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We combine Indian manufacturing excellence with international quality standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'ISO 9001:2015 Certified Manufacturing',
              'Competitive Export Pricing',
              'Custom Design Capabilities',
              'Timely International Delivery',
              'Comprehensive Export Documentation',
              '24/7 Customer Support'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white/90">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact for Exports */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Export Worldwide?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our export team to discuss your international project requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#2B4257] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a2834] transition-colors"
              >
                Contact Export Team
              </a>
              <a
                href="mailto:exports@vegnar.com"
                className="border border-[#2B4257] text-[#2B4257] px-8 py-3 rounded-lg font-semibold hover:bg-[#2B4257] hover:text-white transition-colors"
              >
                exports@vegnar.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}