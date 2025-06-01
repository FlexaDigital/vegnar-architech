'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2B4257] via-[#1a2834] to-[#0f1922]" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-[#2B4257]/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-[#1a2834]/40 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
        <motion.h1 
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block mb-2">Innovative Architectural Solutions</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white">
            for Modern Spaces
          </span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg lg:text-2xl text-white/80 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Discover our comprehensive range of premium architectural hardware, glass fittings, furniture accessories, and more—crafted to elevate every facet of your design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#2B4257] font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
          >
            Explore Products
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
} 