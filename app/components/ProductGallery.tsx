'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projectImages = [
  { src: '/Images/project_images/project01.jpeg', alt: 'Vegnar Architecture Project' },
  { src: '/Images/project_images/project02.jpeg', alt: 'Vegnar Architecture Project' },
  { src: '/Images/project_images/project03.jpeg', alt: 'Vegnar Architecture Project' },
];

const gridSpanClasses = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
];

export default function ProductGallery() {
  return (
    <section className="relative w-full min-h-[70vh] py-16 bg-white flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #2B4257 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 flex-1 flex items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {projectImages.map((image, index) => {
            const span = gridSpanClasses[index];
            return (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden bg-[#2B4257]/5 rounded-xl ${span} w-full h-full group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B4257]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-lg font-semibold">{image.alt}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
