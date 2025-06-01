'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSection } from '../context/SectionContext';

export default function PartnerCTA() {
  const { currentSection, totalSections } = useSection();
  const isLastSection = currentSection === totalSections - 1;
  const showFooter = currentSection === totalSections;

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with Pattern */}
      <div className="absolute inset-0 bg-[#2B4257]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        animate={{
          paddingBottom: showFooter ? "24rem" : "0",
          y: showFooter ? "-12rem" : "0"
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start lg:items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Become Our Partner in
              <span className="block mt-2">Architectural Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Join our network of trusted partners and be part of transformative architectural solutions that shape the future of spaces.
            </p>
            
            {/* Statistics Row */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-8 py-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">20+</div>
                <div className="text-sm sm:text-base text-white/70">Years of Excellence</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">1000+</div>
                <div className="text-sm sm:text-base text-white/70">Projects Completed</div>
              </motion.div>
            </div>
            
            <div className="space-y-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#2B4257] font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
              >
                Partner With Us
              </motion.button>
              <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/20 overflow-hidden"
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
                <p className="text-sm sm:text-base text-white/90 font-medium">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Fast-Track Partnership Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-3 sm:mt-4 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg text-white font-semibold">Fast-Track Partnership</h4>
                  <p className="text-sm text-white/70">Get started in less than 48 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 