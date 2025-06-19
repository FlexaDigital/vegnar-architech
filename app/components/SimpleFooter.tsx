'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaFacebook,
} from 'react-icons/fa';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/vegnar-architectural-products/',
    icon: <FaLinkedin className="w-6 h-6" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/vegnar_india/',
    icon: <FaInstagram className="w-6 h-6" />,
  },
  {
    name: 'Pinterest',
    href: 'https://pin.it/4vJbQFaLC',
    icon: <FaPinterest className="w-6 h-6" />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1BziGytwxh/',
    icon: <FaFacebook className="w-6 h-6" />,
  },
];


export default function SimpleFooter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of premium architectural hardware solutions, transforming spaces with innovation and excellence since 2003.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/catalogs" className="text-gray-400 hover:text-white">E-Catalog</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-3 text-sm">Get updates on our latest products and offers.</p>
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
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Vegnar Architectural. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="https://flexadigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              flexadigital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
