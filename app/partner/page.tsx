'use client';

import { motion } from 'framer-motion';
import SimpleFooter from '../components/SimpleFooter';

export default function PartnerPage() {
  return (
    <>
    <section className="bg-[#2B4257] text-white py-20 px-4 sm:px-8 md:px-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 mt-20">
        {/* Left Side: Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">Become Our Partner in</span><br />
            Architectural Excellence
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Join our network of trusted partners and be part of transformative architectural
            solutions that shape the future of spaces.
          </p>

      

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-100">
            <div className="bg-[#3B556E] p-4 rounded-lg">
              🌍 <strong>Global Network</strong><br />
              Access to architectural opportunities
            </div>
            <div className="bg-[#3B556E] p-4 rounded-lg">
              💡 <strong>Innovation Access</strong><br />
              Early access to new products
            </div>
            <div className="bg-[#3B556E] p-4 rounded-lg">
              🛠 <strong>Premium Support</strong><br />
              Dedicated technical assistance
            </div>
            <div className="bg-[#3B556E] p-4 rounded-lg">
              📈 <strong>Growth Resources</strong><br />
              Business development tools
            </div>
            <div className="bg-[#556B84] sm:col-span-2 p-4 rounded-lg">
              ⚡ <strong>Fast-Track Partnership</strong><br />
              Get started in less than 48 hours
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mt-10 lg:mt-0">
          <h3 className="text-2xl font-semibold mb-6">Partner With Us</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B4257]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B4257]"
                placeholder="Enter your company"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B4257]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B4257]"
                placeholder="Enter your phone"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B4257]"
                placeholder="Tell us how you'd like to partner"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-[#2B4257] text-white font-semibold py-3 rounded-lg hover:bg-[#1F3142] transition-colors"
            >
              Submit Application
            </motion.button>
          </form>
        </div>
      </div>
      
    </section>
    </>
  );
}
