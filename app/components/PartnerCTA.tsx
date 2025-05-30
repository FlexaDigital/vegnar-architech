'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PartnerCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Pattern */}
      <div className="absolute inset-0 bg-[#2B4257]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Become Our Partner in
              <span className="block">Architectural Excellence</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join our network of trusted partners and be part of transformative architectural solutions that shape the future of spaces.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
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

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-6 mt-12">
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
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/partner-showcase.jpg"
              alt="Partner Showcase"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4257] to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Fast-Track Partnership</h4>
                    <p className="text-white/70 text-sm">Get started in less than 48 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 