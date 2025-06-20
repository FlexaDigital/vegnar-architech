'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const collections = [
  {
    title: 'Glass Fittings',
    description: 'Premium glass hardware solutions for modern spaces',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    href: '/collections/glass-fittings'
  },
  {
    title: 'Door Hardware',
    description: 'Elegant handles and innovative door solutions',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    href: '/collections/door-hardware'
  },
  {
    title: 'Furniture Systems',
    description: 'Contemporary furniture fittings and accessories',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    href: '/collections/furniture-systems'
  },
  {
    title: 'Architectural Hardware',
    description: 'Specialized hardware for architectural applications',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: '/collections/architectural-hardware'
  }
];

export default function ProductCollections() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/collection-bg.jpg"
          alt="Background pattern"
          fill
          className="object-cover opacity-[0.2]"
          priority
        />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-[#2B4257]/5 to-transparent" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#2B4257]/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Product Collections
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover our comprehensive range of architectural solutions designed to elevate every space
          </motion.p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={collection.href}>
                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-300">
                  
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2B4257]/10 to-[#1a2834]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-[#2B4257] mb-4 group-hover:scale-110 transform transition-transform duration-300">
                      {collection.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2B4257] transition-colors duration-300 mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                      {collection.description}
                    </p>
                    <div className="flex items-center text-[#2B4257] font-semibold">
                      <span className="mr-2 group-hover:mr-4 transition-all duration-300 text-sm sm:text-base">
                        Explore Collection
                      </span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform duration-300"
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