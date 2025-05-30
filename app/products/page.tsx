'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductGrid from '../components/products/ProductGrid';
import { Tab } from '@headlessui/react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: 'door-hardware',
    name: 'Door Hardware',
    description: 'Premium door handles, locks, and hardware solutions',
    products: [
      {
        id: 1,
        name: 'Modern Handle Set',
        description: 'Sleek stainless steel handle set with minimalist design',
        price: '$129.99',
        image: '/images/products/door-hardware/handle-set-1.jpg',
      },
      {
        id: 2,
        name: 'Smart Lock Pro',
        description: 'Advanced biometric security lock system',
        price: '$299.99',
        image: '/images/products/door-hardware/smart-lock-1.jpg',
      },
      // Add more products...
    ],
  },
  {
    id: 'glass-fittings',
    name: 'Glass Fittings',
    description: 'Elegant glass door and partition solutions',
    products: [
      {
        id: 1,
        name: 'Glass Door Hinge',
        description: 'Heavy-duty glass door hinge with modern finish',
        price: '$89.99',
        image: '/images/products/glass-fittings/hinge-1.jpg',
      },
      // Add more products...
    ],
  },
  {
    id: 'railing-systems',
    name: 'Railing Systems',
    description: 'Modern railing solutions for stairs and balconies',
    products: [
      {
        id: 1,
        name: 'Glass Railing Kit',
        description: 'Complete glass railing system with stainless steel fixtures',
        price: '$599.99',
        image: '/images/products/railing-systems/glass-rail-1.jpg',
      },
      // Add more products...
    ],
  },
  {
    id: 'security-solutions',
    name: 'Security Solutions',
    description: 'Advanced security hardware for enhanced protection',
    products: [
      {
        id: 1,
        name: 'Access Control System',
        description: 'Integrated access control with mobile app support',
        price: '$449.99',
        image: '/images/products/security/access-control-1.jpg',
      },
      // Add more products...
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2B4257] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Discover our comprehensive range of architectural hardware solutions designed to elevate your spaces with style and functionality.
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-xl bg-white p-1 shadow-lg mb-8">
            {categories.map((category) => (
              <Tab
                key={category.id}
                className={({ selected }: { selected: boolean }) =>
                  `w-full rounded-lg py-3 px-4 text-sm font-medium leading-5
                  ${
                    selected
                      ? 'bg-[#2B4257] text-white shadow'
                      : 'text-gray-600 hover:bg-gray-100'
                  }
                  transition-all duration-200`
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <AnimatePresence mode="wait">
              {categories.map((category) => (
                <Tab.Panel
                  key={category.id}
                  className="rounded-xl bg-white p-8 shadow-lg"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {category.name}
                      </h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                    <ProductGrid products={category.products} />
                  </motion.div>
                </Tab.Panel>
              ))}
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
} 