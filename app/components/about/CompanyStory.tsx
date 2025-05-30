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
    year: '2018',
    title: 'Global Recognition',
    description: 'Received international recognition for our sustainable architectural solutions.'
  },
  {
    year: '2023',
    title: 'Digital Transformation',
    description: 'Embraced cutting-edge technology to enhance customer experience and product design.'
  }
];

export default function CompanyStory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Journey of Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Two decades of innovation, quality, and dedication in architectural hardware solutions
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about/company-story.jpg"
              alt="Company story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4257]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Built on Trust</h3>
              <p className="text-white/90">
                Our commitment to excellence has earned us the trust of countless clients worldwide
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
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
                <div className="text-sm font-semibold text-[#2B4257] mb-1">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Our Mission',
              description: 'To provide innovative and sustainable architectural hardware solutions that enhance the functionality and aesthetics of spaces while exceeding client expectations.'
            },
            {
              title: 'Our Vision',
              description: 'To be the global leader in architectural hardware solutions, setting industry standards for quality, innovation, and customer satisfaction.'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-[#2B4257] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 