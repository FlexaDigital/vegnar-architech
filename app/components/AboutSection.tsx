'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-[#2B4257]/5 to-transparent" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#2B4257]/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Images/about-us.jpg"
                alt="Modern architectural solutions showcase"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2B4257]/20 via-transparent to-transparent" />
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2B4257]/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#2B4257]/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Crafting Excellence in
              <span className="block text-[#2B4257]">Architectural Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over two decades of expertise, we've been at the forefront of architectural innovation, 
              delivering premium hardware solutions that transform spaces. Our commitment to quality and 
              attention to detail has made us a trusted partner for architects and designers worldwide.
            </p>

            {/* Statistics Row */}
            <div className="flex items-center gap-8 mb-8 p-6 bg-[#2B4257]/5 rounded-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#2B4257]">20+</div>
                <div className="text-sm sm:text-base text-gray-600">Years of Excellence</div>
              </motion.div>
              <div className="h-12 w-px bg-[#2B4257]/20" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#2B4257]">1000+</div>
                <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center group cursor-pointer"
            >
              <Link href="/about" className="flex items-center">
                <span className="text-[#2B4257] font-semibold mr-2 group-hover:mr-4 transition-all">
                  Learn More About Us
                </span>
                <svg
                  className="w-5 h-5 text-[#2B4257] transform group-hover:translate-x-2 transition-transform"
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
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}