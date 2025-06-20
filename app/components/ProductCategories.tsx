'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  description: string;
  slug: string;
  parent: number;
}

interface ProductCategoriesProps {
  categories?: Category[];
}

const defaultCategories = [
  {
    id: 1,
    name: 'Aluminium Glass Railing System',
    description: 'A modern, durable railing solution featuring sleek aluminum profiles and clear tempered glass—ideal for balconies, staircases, and terraces, offering safety without compromising the view.',
    slug: 'door-hardware',
    parent: 0
  },
  {
    id: 2,
    name: 'Glass Hardware Fittings',
    description: 'Premium quality fittings designed for glass installations—ensuring secure, elegant mounting for doors, partitions, and balustrades.',
    slug: 'glass-fittings',
    parent: 0
  },
  {
    id: 3,
    name: 'Stainless Steel Railings',
    description: 'Strong, corrosion-resistant railings with a sleek, modern finish—perfect for indoor and outdoor applications, combining safety with style.',
    slug: 'railing-systems',
    parent: 0
  }
];

export default function ProductCategories({ categories = defaultCategories }: ProductCategoriesProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="min-h-screen w-full bg-white flex items-center justify-center py-20 relative overflow-hidden">
      {/* Parallax Background Image */}
      <motion.img
        src="/Images/catagory-bg.jpg"
        alt="Product background"
        style={{ y: smoothY }}
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-white/60 z-0" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center"
        >
          Our Product Categories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12"
        >
          Explore our comprehensive range of architectural solutions
        </motion.p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2B4257] transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#2B4257] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-base"
            >
              View All Products
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
