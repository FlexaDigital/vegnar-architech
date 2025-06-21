'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative min-h-screen scroll-mt-20 flex flex-col justify-center overflow-hidden bg-[#1a2834] smooth-scroll"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B4257]/90 via-[#1a2834]/95 to-[#1a2834]/100" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl w-full text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Crafting Excellence in
              <span className="block text-[#A7C7E7]">
                Vegnar Architectural Solutions
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 leading-relaxed">
              Since incorporation, we&apos;ve been at the forefront of architectural innovation,
              delivering premium solutions that transform spaces and exceed expectations.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="px-6 py-3 sm:px-7 sm:py-3 bg-white text-[#2B4257] font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-[#A7C7E7] focus:outline-none focus:ring-2 focus:ring-[#A7C7E7] transition-all duration-200 text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full justify-center"
          >
            {[
              { number: '20+', label: 'Years of Excellence' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '50+', label: 'Expert Team Members' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center justify-center text-center p-4 sm:p-5 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-md"
              >
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-[#A7C7E7] mb-1 drop-shadow">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1 flex items-start justify-center">
          <div className="w-1.5 h-3 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
