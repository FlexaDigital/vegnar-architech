'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Define the product category structure
type SubCategory = {
  title: string;
  description?: string;
  image?: string;
};

type Category = {
  title: string;
  image: string;
  description: string;
  subCategories: SubCategory[];
};

const productCategories: Category[] = [
  {
    title: 'Hardware Products',
    image: '/images/categories/hardware-main.jpg',
    description: 'Premium architectural hardware solutions for modern spaces',
    subCategories: [
      { title: 'Mortice Handles (MH)' },
      { title: 'MH Rectangle Caps, Plates & Escutcheons' },
      { title: 'Mortice Locks' },
      { title: 'Mortice Pin Cylinder' },
      { title: 'Night Latch' },
      { title: 'Pull Handles' },
      { title: 'Kich PR Door Handle' },
      { title: 'Door & Window Hinges' },
      { title: 'Door Closers, Door Stops & Stoppers' },
      { title: 'Door Viewer' },
      { title: 'Tower Bolts & Window Casement Stay' },
      { title: 'Kich PR Door Accessories' }
    ]
  },
  {
    title: 'Glass Fittings',
    image: '/images/categories/glass-main.jpg',
    description: 'Innovative glass hardware solutions for contemporary spaces',
    subCategories: [
      { title: 'Floor Springs' },
      { title: 'Patch Fittings' },
      { title: 'Glass Connectors' },
      { title: 'Shower Hinges' },
      { title: 'Shower Cubic Accessories' },
      { title: 'Bathroom Mirrors & Sign Plates' },
      { title: 'Floor Drains' },
      { title: 'Shower Floor Drain' },
      { title: 'BA-1' },
      { title: 'BA-2' },
      { title: 'BA-3' }
    ]
  },
  {
    title: 'Railing Systems',
    image: '/images/categories/railing-main.jpg',
    description: 'Elegant and secure railing solutions for every application',
    subCategories: [
      { title: 'Railing System With Glass' },
      { title: 'Railing System With Horizontal Members' },
      { title: 'Aluminum Railing System' },
      { title: 'Modular Railing Systems' },
      { title: 'Handrail' },
      { title: 'Horizontal Members' },
      { title: 'Baluster' },
      { title: 'Railing System With Tailor Made Solutions' },
      { title: 'Handrail Accessories (Knock Down Fixing System)' }
    ]
  }
];

export default function ProductCategories() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Product Categories
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore our comprehensive range of architectural solutions
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categories Menu */}
          <div className="lg:col-span-1 bg-gray-50 rounded-xl p-6">
            {productCategories.map((category) => (
              <div key={category.title} className="mb-4">
                <button
                  onClick={() => {
                    setExpandedCategory(
                      expandedCategory === category.title ? null : category.title
                    );
                    setSelectedSubCategory(null);
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#2B4257]/5 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{category.title}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      expandedCategory === category.title ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {expandedCategory === category.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 py-2 space-y-2">
                        {category.subCategories.map((subCategory) => (
                          <button
                            key={subCategory.title}
                            onClick={() => setSelectedSubCategory(subCategory.title)}
                            className={`w-full text-left p-2 rounded-lg text-sm hover:bg-[#2B4257]/5 transition-colors ${
                              selectedSubCategory === subCategory.title
                                ? 'bg-[#2B4257]/10 text-[#2B4257]'
                                : 'text-gray-600'
                            }`}
                          >
                            {subCategory.title}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-gray-50 rounded-xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {expandedCategory && (
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  {/* Image */}
                  <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
                    <Image
                      src={productCategories.find(c => c.title === expandedCategory)?.image || ''}
                      alt={expandedCategory}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-2xl font-bold">{expandedCategory}</h3>
                        <p className="text-white/80 mt-2">
                          {productCategories.find(c => c.title === expandedCategory)?.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {selectedSubCategory || 'Select a subcategory'}
                    </h3>
                    <p className="text-gray-600">
                      {selectedSubCategory
                        ? `Explore our ${selectedSubCategory.toLowerCase()} collection designed for modern architectural applications.`
                        : 'Choose a subcategory from the menu to view detailed information about our products.'}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 