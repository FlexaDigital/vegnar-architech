'use client';

import { motion } from 'framer-motion';

export default function MissionVision() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4"> {/* Fullscreen center */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-6xl">
        {[
          {
            title: 'Our Mission',
            quote:
              'To provide exceptional value to our customers through meticulously crafted architectural hardware and dependable services, prioritizing quality and sustainability.',
          },
          {
            title: 'Our Vision',
            quote:
              'To be the leading, most trusted name in premium architectural hardware, consistently surpassing customer expectations and setting new benchmarks for innovation and excellence in the industry.',
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 flex flex-col justify-between"
          >
            <h3 className="text-2xl font-bold text-[#2B4257] mb-4 text-center">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-center italic">
              &ldquo;{item.quote}&rdquo;
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
