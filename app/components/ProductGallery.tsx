'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  {
    title: 'Modern Glass Door Handle',
    category: 'Door Hardware',
    image: '/images/products/handle-1.jpg',
    size: 'large' // This will take 2x2 grid space
  },
  {
    title: 'Minimalist Cabinet Pull',
    category: 'Furniture Systems',
    image: '/images/products/handle-2.jpg',
    size: 'small' // This will take 1x1 grid space
  },
  {
    title: 'Glass Partition System',
    category: 'Glass Fittings',
    image: '/images/products/glass-1.jpg',
    size: 'medium' // This will take 2x1 grid space
  },
  {
    title: 'Sliding Door System',
    category: 'Architectural Hardware',
    image: '/images/products/door-1.jpg',
    size: 'small'
  },
  {
    title: 'Glass Corner Connector',
    category: 'Glass Fittings',
    image: '/images/products/glass-2.jpg',
    size: 'medium'
  },
  {
    title: 'Door Closer System',
    category: 'Door Hardware',
    image: '/images/products/door-2.jpg',
    size: 'small'
  },
  {
    title: 'Modular Shelf Bracket',
    category: 'Furniture Systems',
    image: '/images/products/shelf-1.jpg',
    size: 'large'
  },
  {
    title: 'Glass Balustrade Fitting',
    category: 'Glass Fittings',
    image: '/images/products/glass-3.jpg',
    size: 'small'
  }
];

export default function ProductGallery() {
  return (
    <section className="relative py-16 bg-gray-50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Product Showcase
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-gray-600 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Explore our diverse range of architectural hardware solutions in action
        </motion.p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={`relative group cursor-pointer rounded-xl overflow-hidden ${
                item.size === 'large' 
                  ? 'col-span-2 row-span-2' 
                  : item.size === 'medium'
                  ? 'col-span-2'
                  : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`relative ${
                item.size === 'large' 
                  ? 'h-[400px]' 
                  : item.size === 'medium'
                  ? 'h-[200px]'
                  : 'h-[200px]'
              }`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={
                    item.size === 'large'
                      ? '(max-width: 768px) 100vw, 50vw'
                      : item.size === 'medium'
                      ? '(max-width: 768px) 100vw, 33vw'
                      : '(max-width: 768px) 50vw, 25vw'
                  }
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white/70 text-sm mb-1">{item.category}</p>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 