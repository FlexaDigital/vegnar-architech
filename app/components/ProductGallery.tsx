'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const productImages = [
  { src: '/Images/Gallary/vg-lg-2.jpg', alt: 'Modern door handle' },
  { src: '/Images/Gallary/railing-1-lg.jpg', alt: 'Glass partition system' },
  { src: '/Images/Gallary/door-hardware-1.jpg', alt: 'Sliding door system' },
  { src: '/Images/Gallary/railing-3-lg.jpg', alt: 'Architectural hardware' },
  { src: '/Images/Gallary/railing-6-m.jpg', alt: 'Modern railing' },
  { src: '/Images/Gallary/Glass-hardware-4.jpg', alt: 'Door closer' },
];

const gridSpanClasses = [
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-2',
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
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
      <div className="relative z-10 flex-1 flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px] place-items-center">
          {productImages.map((image, index) => {
            const span = gridSpanClasses[index % gridSpanClasses.length];
            return (
              <div
                key={image.src}
                className={`relative overflow-hidden bg-[#2B4257]/5 rounded-xl ${span} w-full h-full flex items-center justify-center`}
                style={{ minWidth: 0, minHeight: 0 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-[#2B4257]/20 hover:bg-[#2B4257]/40 transition-colors duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
