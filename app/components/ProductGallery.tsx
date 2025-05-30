'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Modern Door Handle Set',
    category: 'Door Hardware',
    image: '/images/products/door-handle-1.jpg',
  },
  {
    id: 2,
    name: 'Glass Partition System',
    category: 'Glass Fittings',
    image: '/images/products/glass-partition-1.jpg',
  },
  {
    id: 3,
    name: 'Stainless Steel Railing',
    category: 'Railing Systems',
    image: '/images/products/railing-1.jpg',
  },
  {
    id: 4,
    name: 'Digital Door Lock',
    category: 'Security Solutions',
    image: '/images/products/security-1.jpg',
  },
  {
    id: 5,
    name: 'Glass Door Hinge',
    category: 'Glass Fittings',
    image: '/images/products/glass-hinge-1.jpg',
  },
  {
    id: 6,
    name: 'Premium Door Closer',
    category: 'Door Hardware',
    image: '/images/products/door-closer-1.jpg',
  }
];

export default function ProductGallery() {
  return (
    <section className="relative h-screen flex items-center bg-white">
      <div className="absolute inset-0 bg-[#2B4257]/5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(43,66,87,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our collection of premium architectural hardware
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <span className="text-white/80 text-sm font-medium">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {product.name}
                    </h3>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="mt-4 flex items-center text-white"
                  >
                    <span className="text-sm font-medium">View Details</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-8 py-3 bg-[#2B4257] text-white rounded-lg shadow-lg hover:bg-[#1a2834] transition-colors duration-300">
            <span className="font-medium">View All Products</span>
            <svg
              className="w-5 h-5 ml-2"
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
          </button>
        </motion.div>
      </div>
    </section>
  );
} 