'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative min-h-screen scroll-mt-20 flex flex-col justify-center overflow-hidden bg-[#1a2834] smooth-scroll"
    >

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
              Leading Architectural Hardware
              <span className="block text-[#A7C7E7]">
                Manufacturer from India
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 leading-relaxed">
              Since incorporation, we&apos;ve been manufacturing premium architectural hardware, bathroom accessories, pull handles, mortice locks, glass fittings, railing systems, and digital safes that transform spaces across India and globally.
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
