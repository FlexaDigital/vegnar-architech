'use client';

import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

const catalogs = [
  {
    title: 'Aluminium Glass Railing System',
    description: 'Complete aluminum and glass railing solutions.',
    fileUrl: '/download/Vegnar-Aluminium-Railing.pdf',
    previewImg: '/download/vegnar-aluminium-railing-system.png'
  },
  {
    title: 'Glass Hardware Fittings',
    description: 'Specialized catalog for all glass hardware fittings.',
    fileUrl: '/download/Glass-Hardware-Fittings.pdf',
    previewImg: '/download/Glass-Hardware-Fittings.jpeg'
  },
  {
    title: 'Stainless Steel Railings Systems',
    description: 'High-grade stainless steel railing systems.',
    fileUrl: '/catalogs/railing-systems.pdf',
    previewImg: '/download/SS-Railing.jpg'
  }
];

export default function ECatalogPage() {
  return (
    <>
    
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#1a2834] text-white text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B4257]/90 via-[#1a2834]/95 to-[#1a2834]/100 z-0" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            Explore Our E-Catalogs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/80"
          >
            Download or view our complete range of architectural solutions.
          </motion.p>
        </div>
      </section>

      
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Download Our E-Catalogs</h2>
            <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
              Access our beautifully designed catalogs to explore detailed product ranges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogs.map((catalog, index) => (
             <motion.div
  key={catalog.title}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="bg-[#F7F9FB] rounded-xl shadow-md overflow-hidden flex flex-col"
>

  <div className="relative w-full h-72">
    <Image
      src={catalog.previewImg}
      alt={`${catalog.title} preview`}
      fill
      className="object-contain object-center p-4"
    />
  </div>

  <div className="p-6 flex flex-col flex-grow justify-between">
    <div>
      <h3 className="text-xl font-semibold text-[#2B4257] mb-2">{catalog.title}</h3>
      <p className="text-sm text-gray-600">{catalog.description}</p>
    </div>
    <div className="flex gap-4 mt-6">
      <Link
        href={catalog.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#2B4257] text-white rounded-lg text-sm hover:bg-[#1a2834] transition"
      >
        <Eye className="w-4 h-4 mr-2" />
        View
      </Link>
      <a
        href={catalog.fileUrl}
        download
        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-[#2B4257] border border-[#2B4257] rounded-lg text-sm hover:bg-gray-100 transition"
      >
        <Download className="w-4 h-4 mr-2" />
        Download
      </a>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>
      </section>
    </>
  );
}
