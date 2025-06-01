'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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

// Default categories if none are provided
const defaultCategories = [
  {
    id: 1,
    name: 'Door Hardware',
    description: 'Premium door handles, locks, and accessories for residential and commercial use.',
    slug: 'door-hardware',
    parent: 0
  },
  {
    id: 2,
    name: 'Glass Fittings',
    description: 'High-quality glass hardware solutions for modern architectural designs.',
    slug: 'glass-fittings',
    parent: 0
  },
  {
    id: 3,
    name: 'Railing Systems',
    description: 'Elegant and durable railing solutions for stairs, balconies, and more.',
    slug: 'railing-systems',
    parent: 0
  }
];

export default function ProductCategories({ categories = defaultCategories }: ProductCategoriesProps) {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <Link href={`/products/${category.slug}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-[#2B4257] opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2B4257] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center text-[#2B4257] font-medium">
                      <span className="mr-2 group-hover:mr-4 transition-all duration-300">
                        View Products
                      </span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 