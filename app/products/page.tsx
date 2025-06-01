'use client';

import ProductCategoriesPage from '../components/ProductCategoriesPage';
import FullscreenLayout from '../components/FullscreenLayout';
import { motion } from 'framer-motion';

function ProductHero() {
  return (
    <div className="h-screen w-full bg-[#2B4257] text-white relative flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Our Products
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
        >
          Discover our comprehensive range of architectural hardware solutions designed to elevate your spaces with style and functionality.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start p-1">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full mx-auto"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

const sections = [
  {
    id: 'hero',
    component: <ProductHero />
  },
  {
    id: 'categories',
    component: <ProductCategoriesPage />
  }
];

export default function ProductsPage() {
  return <FullscreenLayout sections={sections} />;
} 