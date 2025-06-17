'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSection } from '../context/SectionContext';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  }
];

export default function Footer() {
  const { currentSection, totalSections, setCurrentSection } = useSection();
  const isVisible = currentSection === totalSections;
  const [email, setEmail] = useState('');

  const handleGoToTop = () => {
    setCurrentSection(0);
  };

  const handleSubscribe = () => {
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.footer
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white z-40"
        >
          {/* Go to Top Button */}
          <motion.button
            onClick={handleGoToTop}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#2B4257] text-white px-6 py-3 rounded-t-lg shadow-lg hover:bg-[#1a2834] transition-colors duration-300 flex items-center gap-2"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </motion.button>

          {/* Main Footer */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Left: Social + Text */}
              <div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Leading provider of premium architectural hardware solutions, transforming spaces with innovation and excellence since 2003.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="sr-only">{item.name}</span>
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Center: Navigation */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                  <li><Link href="/e-catalog" className="text-gray-400 hover:text-white">E-Catalog</Link></li>
                </ul>
              </div>

              {/* Right: Subscribe */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                <p className="text-gray-400 mb-3 text-sm">Get updates on our latest collections and offers.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="px-4 py-2 bg-[#2B4257] hover:bg-[#1a2834] rounded text-white transition-colors"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Vegnar Architectural. All rights reserved.</p>
              <p>
                Developed by{' '}
                <a
                  href="https://flexadigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  Flexa Digital
                </a>
              </p>
            </div>
          </div>
        </motion.footer>
      )}
    </AnimatePresence>
  );
}
