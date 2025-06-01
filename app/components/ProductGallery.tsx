'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Sample product images array - replace with your actual product images
const productImages = [
  {
    src: '/images/products/product-1.jpg',
    alt: 'Modern door handle',
    size: 'large'
  },
  {
    src: '/images/products/product-2.jpg',
    alt: 'Glass partition system',
    size: 'medium'
  },
  {
    src: '/images/products/product-3.jpg',
    alt: 'Sliding door system',
    size: 'small'
  },
  {
    src: '/images/products/product-4.jpg',
    alt: 'Architectural hardware',
    size: 'medium'
  },
  {
    src: '/images/products/product-5.jpg',
    alt: 'Modern railing',
    size: 'large'
  },
  {
    src: '/images/products/product-6.jpg',
    alt: 'Door closer',
    size: 'small'
  }
];

export default function ProductGallery() {
  const [shuffledImages, setShuffledImages] = useState(productImages);

  // Function to shuffle the images array
  const shuffleImages = () => {
    const newImages = [...shuffledImages];
    for (let i = newImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newImages[i], newImages[j]] = [newImages[j], newImages[i]];
    }
    setShuffledImages(newImages);
  };

  // Shuffle images every 5 seconds
  useEffect(() => {
    const interval = setInterval(shuffleImages, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-white py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #2B4257 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gallery Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
          layout
          transition={{ duration: 0.6 }}
        >
          {shuffledImages.map((image, index) => (
            <motion.div
              key={image.src}
              className={`relative rounded-xl overflow-hidden ${
                image.size === 'large' 
                  ? 'col-span-2 row-span-2' 
                  : image.size === 'medium'
                  ? 'col-span-1 row-span-2'
                  : 'col-span-1 row-span-1'
              } bg-[#2B4257]/5`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                layout: { duration: 0.6 }
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 group">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#2B4257]/20 group-hover:bg-[#2B4257]/40 transition-colors duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 