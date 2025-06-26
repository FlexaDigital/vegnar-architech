'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const formDataRaw = new FormData(e.currentTarget);
  const formData = {
    fullName: formDataRaw.get('name') as string,
    email: formDataRaw.get('email') as string,
    subject: formDataRaw.get('subject') as string,
    message: formDataRaw.get('message') as string,
    formType: 'contact',
  };

  try {
    await fetch(
      'https://script.google.com/macros/s/AKfycbwCPsJZ_I5V10QkQb9vqzAcG-iESxdB39bk5d78-aJuAlj_my2Q8MdSqqOzxitl_j_k/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        mode: 'no-cors',
      }
    );

    toast.success('Message sent successfully!');
    e.currentTarget.reset();
  } catch (err) {
    toast.error('Failed to send message.');
    console.error(err);
  }

  setLoading(false);
};


  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      {/* Hero Section */}
      <div className="bg-[#2B4257] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
    <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="bg-white rounded-lg shadow-lg p-8"
>
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* India Office */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">India Office</h3>
      <p className="text-gray-600">
        256,Jasal Complex Nanavati Chowk,<br />
        150 Feet Ring Rd, above Axis bank<br />
        Rajkot, Gujarat 360007
      </p>
      <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Contact Information</h3>
      <p className="text-gray-600">
        Email: sales@vegnar.com<br />
        Phone: +91 9998040416
      </p>
      <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Business Hours (IST)</h3>
      <p className="text-gray-600">
        Monday - Friday: 9:00 AM - 6:00 PM<br />
        Saturday: 10:00 AM - 4:00 PM<br />
        Sunday: Closed
      </p>
    </div>
  </div>
</motion.div>



          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2B4257] text-white py-3 px-6 rounded-md hover:bg-[#2B4150] transition-colors duration-300"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 