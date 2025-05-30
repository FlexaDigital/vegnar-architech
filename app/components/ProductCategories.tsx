'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Door Hardware',
    description: 'Premium handles, locks, and door control systems',
    image: '/images/categories/door-hardware.jpg',
    href: '/products/door-hardware',
    color: 'bg-[#2B4257]'
  },
  {
    id: 2,
    name: 'Glass Fittings',
    description: 'Sophisticated glass door and partition solutions',
    image: '/images/categories/glass-fittings.jpg',
    href: '/products/glass-fittings',
    color: 'bg-[#1a2834]'
  },
  {
    id: 3,
    name: 'Railing Systems',
    description: 'Modern balustrades and handrail solutions',
    image: '/images/categories/railing-systems.jpg',
    href: '/products/railing-systems',
    color: 'bg-[#2B4257]'
  },
  {
    id: 4,
    name: 'Security Solutions',
    description: 'Advanced access control and security hardware',
    image: '/images/categories/security-solutions.jpg',
    href: '/products/security',
    color: 'bg-[#1a2834]'
  }
];

export default function ProductCategories() {
  return (
    <section className="relative h-screen flex items-center bg-white">
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
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
            Product Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our comprehensive range of architectural hardware solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={category.href} className="block group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10" />
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/90">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-white">
                      <span className="text-sm font-medium">Explore Products</span>
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
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 