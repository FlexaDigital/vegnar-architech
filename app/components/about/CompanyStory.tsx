'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const timeline = [
  {
    year: '2003',
    title: 'Foundation',
    description: 'Started our journey with a vision to revolutionize architectural hardware solutions.'
  },
  {
    year: '2008',
    title: 'Market Expansion',
    description: 'Expanded operations across multiple regions, establishing a strong market presence.'
  },
  {
    year: '2013',
    title: 'Innovation Hub',
    description: 'Launched our state-of-the-art innovation center for product development and testing.'
  },
  {
    year: '2023',
    title: 'Digital Transformation',
    description: 'Embraced cutting-edge technology to enhance customer experience and product design.'
  }
];

export default function CompanyStory() {
  return (
    <section
      id="company-story"
      className="relative py-16 sm:py-20 bg-gray-50 scroll-mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Journey of Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Two decades of innovation, quality, and dedication in architectural hardware solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[280px] sm:h-[380px] md:h-[440px] lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/collection-bg.jpg"
              alt="Company story"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4257]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Built on Trust</h3>
              <p className="text-sm sm:text-base text-white/90">
                Our commitment to excellence has earned us the trust of countless clients worldwide.
              </p>
            </div>
          </motion.div>

          {/* Timeline Column */}
          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-[#2B4257]/20"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#2B4257]" />
                <div className="text-sm sm:text-base font-semibold text-[#2B4257] mb-1">
                  {item.year}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
