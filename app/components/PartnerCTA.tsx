'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PartnerCTA() {
  return (
    <section className="relative py-20 bg-[#2B4257] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Become Our Partner in
              <span className="block mt-2">Architectural Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Join our network of trusted partners and be part of transformative architectural solutions that shape the future of spaces.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-white/70 text-sm">Years of Excellence</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-white/70 text-sm">Projects Completed</div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4">
              <Link href="/partner">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#2B4257] font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-[#A7C7E7] transition-all duration-200"
                >
                  Request for Quote
                </motion.button>
              </Link>
              <p className="mt-4 text-sm text-white/80">Join 70+ Partners</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Global Network',
                description: 'Access to worldwide architectural opportunities',
              },
              {
                title: 'Premium Support',
                description: 'Dedicated assistance and technical expertise',
              },
              {
                title: 'Innovation Access',
                description: 'Early access to new products and solutions',
              },
              {
                title: 'Growth Resources',
                description: 'Training and business development tools',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white/10 backdrop-blur-md rounded-xl p-5 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}

            {/* Fast Track Card */}
            <motion.div
              className="sm:col-span-2 bg-white/10 backdrop-blur-lg rounded-xl p-5 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base">Fast-Track Partnership</h4>
                  <p className="text-white/70 text-sm">Get started in less than 48 hours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
