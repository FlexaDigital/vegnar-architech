'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSection } from '../context/SectionContext';

export default function PartnerCTA() {
  const { currentSection, totalSections } = useSection();
  const isLastSection = currentSection === totalSections - 1;
  const showFooter = currentSection === totalSections;

  return (
    <section className="relative h-screen flex items-center">
      {/* Background with Pattern */}
      <div className="absolute inset-0 bg-[#2B4257]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        animate={{
          paddingBottom: showFooter ? "24rem" : "0",
          y: showFooter ? "-12rem" : "0"
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Become Our Partner in
              <span className="block">Architectural Excellence</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Join our network of trusted partners and be part of transformative architectural solutions that shape the future of spaces.
            </p>
            
            <div className="space-y-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#2B4257] font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Partner With Us
              </motion.button>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden"
                    >
                      <Image
                        src={`/images/partners/partner-${index}.jpg`}
                        alt={`Partner ${index}`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-white/90 font-medium">
                  Join 200+ Partners
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Global Network',
                  description: 'Access to worldwide architectural opportunities'
                },
                {
                  title: 'Premium Support',
                  description: 'Dedicated assistance and technical expertise'
                },
                {
                  title: 'Innovation Access',
                  description: 'Early access to new products and solutions'
                },
                {
                  title: 'Growth Resources',
                  description: 'Training and business development tools'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Fast-Track Partnership Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Fast-Track Partnership</h4>
                  <p className="text-white/70 text-sm">Get started in less than 48 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 