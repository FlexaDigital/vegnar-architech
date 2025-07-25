'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ProductCategoriesPage from '../components/ProductCategoriesPage';

function ProductHero() {
  return (
    <div className="bg-gradient-to-br from-[#2B4257] via-[#1a2834] to-[#2B4257] text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/Images/pattern.svg')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6">
            🏗️ Premium Hardware Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-[#A7C7E7]">Products</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive range of premium architectural hardware solutions designed to elevate your spaces with style, functionality, and durability.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
              <div className="text-2xl font-bold">300+</div>
              <div className="text-white/80 text-sm">Products</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-white/80 text-sm">Categories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProductsClient() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ProductHero />
      <div className="flex-1">
        <ProductCategoriesPage />
      </div>
    </div>
  );
}