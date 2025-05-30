'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

interface MenuItem {
  name: string;
  href: string;
  dropdownItems?: {
    title: string;
    href: string;
    image: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    name: 'Protocol',
    href: '/protocol',
    dropdownItems: [
      {
        title: 'Overview',
        href: '/protocol',
        image: '/images/placeholder-1.jpg'
      },
      {
        title: 'Documentation',
        href: '/protocol/docs',
        image: '/images/placeholder-2.jpg'
      }
    ]
  },
  {
    name: 'Products',
    href: '/products',
    dropdownItems: [
      {
        title: 'Solutions',
        href: '/products',
        image: '/images/placeholder-3.jpg'
      },
      {
        title: 'Features',
        href: '/products/features',
        image: '/images/placeholder-4.jpg'
      }
    ]
  },
  {
    name: 'Ecosystem',
    href: '/ecosystem',
    dropdownItems: [
      {
        title: 'Partners',
        href: '/ecosystem/partners',
        image: '/images/placeholder-5.jpg'
      }
    ]
  }
];

const subLinks = [
  { name: 'Education', href: '/education' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' }
];

export default function Menu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div
      className={`fixed inset-0 z-50 ${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
    >
      <div className="relative h-full w-full bg-white">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-8 top-8 text-gray-800 hover:text-gray-600 transition-colors"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.965 1.47a.75.75 0 0 1 0 1.06L2.53 17.965a.75.75 0 1 1-1.06-1.06L16.903 1.47a.75.75 0 0 1 1.06 0Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.965 17.966a.75.75 0 0 1-1.06 0L1.468 2.53a.75.75 0 0 1 1.06-1.06l15.436 15.434a.75.75 0 0 1 0 1.06Z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* Menu content */}
        <div className="h-full overflow-y-auto py-20 px-8">
          <nav className="space-y-8">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className={`relative ${styles.menuItem}`}
                style={{ '--index': index } as React.CSSProperties}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button className="text-3xl font-medium text-gray-900 hover:text-gray-600 transition-colors">
                  {item.name}
                </button>
                
                {item.dropdownItems && hoveredItem === item.name && (
                  <div className={`absolute left-full ml-8 top-0 bg-white rounded-lg shadow-xl p-4 grid grid-cols-1 gap-4 min-w-[300px] ${styles.dropdownOpen}`}>
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className={`group relative overflow-hidden rounded-lg ${styles.dropdownItem}`}
                        style={{ '--index': idx } as React.CSSProperties}
                      >
                        <div className="aspect-w-16 aspect-h-9 relative">
                          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                            {dropdownItem.title}
                          </h3>
                          <div className="mt-2 flex items-center text-sm text-gray-600">
                            <span>Learn more</span>
                            <svg
                              className={`ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform ${styles.arrow}`}
                              fill="none"
                              viewBox="0 0 18 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.53 6.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.062-1.06l4.72-4.72h-8.69a.75.75 0 0 1 0-1.5h8.69l-4.72-4.72A.75.75 0 0 1 11.53.47l6 6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Sub links */}
          <div className={`mt-16 ${styles.subLinks}`}>
            <div className="grid grid-cols-2 gap-4">
              {subLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  style={{ '--row-index': Math.floor(index / 2) } as React.CSSProperties}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className={`mt-8 flex space-x-4 ${styles.socials}`}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.394 2.38C5.367 1.15 4.488.214 3.06.214 1.63.213.697 1.15.697 2.381c0 1.204.906 2.168 2.308 2.168h.027c1.456 0 2.362-.964 2.362-2.168Z"
                  fill="currentColor"
                />
                <path
                  d="M5.12 6.263H.944v12.547H5.12V6.262ZM15.372 5.968c2.747 0 4.808 1.794 4.808 5.648v7.194h-4.176v-6.713c0-1.686-.605-2.836-2.116-2.836-1.154 0-1.841.775-2.143 1.524-.11.269-.137.643-.137 1.018v7.007H7.43s.055-11.37 0-12.547h4.176V8.04c.555-.854 1.547-2.072 3.764-2.072Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.566 2.049c1.773 0 1.983.006 2.683.038 1.8.082 2.64.938 2.723 2.726.032.701.038.912.038 2.688 0 1.776-.007 1.986-.038 2.687-.083 1.787-.921 2.644-2.723 2.726-.7.032-.91.038-2.683.038-1.774 0-1.984-.006-2.684-.038-1.804-.083-2.64-.942-2.722-2.727-.032-.7-.039-.91-.039-2.687 0-1.776.007-1.986.039-2.687.082-1.788.92-2.644 2.722-2.726.7-.032.91-.038 2.684-.038Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 