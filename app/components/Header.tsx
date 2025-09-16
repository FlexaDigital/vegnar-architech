'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Logo from './Logo';
import { useSection } from '../context/SectionContext';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { 
    name: 'Company', 
    href: '#',
    dropdown: [
      { name: 'About', href: '/about' },
      { name: 'Mission & Vision', href: '/our-mission-vision' },
      { name: 'Exports', href: '/exports' }
    ]
  },
  { name: 'Partner', href: '/partner' },
  { name: 'Insights', href: '/insights' },
  { name: 'E-Catalogs', href: '/catalogs' }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { currentSection } = useSection();
  const pathname = usePathname();

  // Setup scroll listener once and set initial state
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll(); // initialize on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';

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
                : (isHome ? (isScrolled ? 'rgba(43, 66, 87, 0.8)' : 'rgba(43, 66, 87, 0)') : 'rgba(43, 66, 87, 0.95)'),
              backdropFilter: isMobileMenuOpen || isScrolled || !isHome ? 'blur(12px)' : 'blur(0px)'
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
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <div
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                        className="relative"
                      >
                        <button className="text-white/90 hover:text-white font-medium transition-colors flex items-center gap-1">
                          {item.name}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openDropdown === item.name && (
                          <div 
                            className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                            onMouseEnter={() => setOpenDropdown(item.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            {item.dropdown.map((dropItem) => (
                              <Link
                                key={dropItem.name}
                                href={dropItem.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                              >
                                {dropItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <motion.div
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
                    )}
                  </div>
                ))}
                <Link href="/contact" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300 border ${
                      (isHome ? isScrolled : true)
                        ? 'bg-[#2B4257] text-white hover:bg-[#1a2834] border-white/20'
                        : 'bg-white/10 text-white hover:bg-white/20 border-white/30'
                    }`}
                  >
                    Contact Us
                  </motion.button>
                </Link>
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
                    {item.dropdown ? (
                      <div>
                        <div className="px-4 py-2 text-white/90 font-medium">{item.name}</div>
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block px-8 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <Link href="/contact" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300 border ${
                      (isHome ? isScrolled : true)
                        ? 'bg-[#2B4257] text-white hover:bg-[#1a2834] border-white/20'
                        : 'bg-white/10 text-white hover:bg-white/20 border-white/30'
                    }`}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
