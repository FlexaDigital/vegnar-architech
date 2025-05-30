'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Logo from './Logo';
import { useSection } from '../context/SectionContext';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentSection } = useSection();

  // Use vanilla JS for scroll handling
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <AnimatePresence>
      {currentSection === 0 && (
        <motion.header
          className="fixed top-0 left-0 right-0 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop - only show when scrolled or mobile menu is open */}
          <motion.div
            className="absolute inset-0 transition-all duration-300"
            animate={{
              backgroundColor: isMobileMenuOpen 
                ? 'rgba(43, 66, 87, 0.95)' 
                : isScrolled 
                  ? 'rgba(43, 66, 87, 0.8)' 
                  : 'rgba(43, 66, 87, 0)',
              backdropFilter: isMobileMenuOpen || isScrolled ? 'blur(12px)' : 'blur(0px)'
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Logo />

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white/90 hover:text-white font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300 border ${
                    isScrolled 
                      ? 'bg-[#2B4257] text-white hover:bg-[#1a2834] border-white/20' 
                      : 'bg-white/10 text-white hover:bg-white/20 border-white/30'
                  }`}
                >
                  Get Started
                </motion.button>
              </nav>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
                  <motion.span
                    className="w-6 h-0.5 bg-white block"
                    animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-white block"
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-white block"
                    animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  />
                </div>
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <motion.nav
              className="md:hidden"
              initial="closed"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { height: 'auto', opacity: 1, display: 'block' },
                closed: { height: 0, opacity: 0, transitionEnd: { display: 'none' } }
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: -20, opacity: 0 }
                    }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: { x: 0, opacity: 1 },
                    closed: { x: -20, opacity: 0 }
                  }}
                  transition={{ duration: 0.2, delay: menuItems.length * 0.1 }}
                >
                  <button className="w-full px-4 py-2 bg-[#2B4257] text-white rounded-lg font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:bg-[#1a2834] border border-white/20">
                    Get Started
                  </button>
                </motion.div>
              </div>
            </motion.nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
