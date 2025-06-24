'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function PartnerPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      fullName: e.target.fullName.value,
      companyName: e.target.companyName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      businessType: e.target.businessType.value,
      message: e.target.message.value,
    };

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwuygLUi027jkjzJu8hKeNoEFMlY7OF5ljWAwOK8v4CPAFJIG-0Eu5xheliWKzGg7XmPA/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
          mode: 'no-cors', // for Google Apps Script
        }
      );

      toast.success('Form submitted successfully!');
      e.target.reset();
    } catch (err) {
      toast.error('Failed to submit the form.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section className="bg-[#2B4257] text-white py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto mt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Partner with <span className="text-[#A7C7E7]">Vegnar</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join our global community of architectural innovators. Collaborate, grow, and deliver excellence through sustainable and visionary solutions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Benefits */}
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Partner With Us?</h3>
              <p className="text-gray-300 text-base">
                At Vegnar Greens, partnerships are more than just transactions—they’re strategic collaborations built on mutual success, innovation, and sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-100">
              {[
                { icon: '🌍', title: 'Global Network', desc: 'Access to international opportunities and customers' },
                { icon: '💡', title: 'Innovation Access', desc: 'Priority to new product lines and designs' },
                { icon: '🛠', title: 'Premium Support', desc: 'Priority assistance from our technical teams' },
                { icon: '📈', title: 'Growth Resources', desc: 'Marketing tools and training for growth' },
                { icon: '⚡', title: 'Fast Onboarding', desc: 'Start selling within 48 hours' },
              ].map((item, i) => (
                <div key={i} className="bg-[#3B556E] p-4 rounded-lg">
                  {item.icon} <strong>{item.title}</strong>
                  <br />
                  {item.desc}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-6 text-center">Partner With Us</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              {[
                { label: 'Full Name', type: 'text', name: 'fullName', placeholder: 'Enter your name' },
                { label: 'Company Name', type: 'text', name: 'companyName', placeholder: 'Enter your company' },
                { label: 'Email Address', type: 'email', name: 'email', placeholder: 'Enter your email' },
                { label: 'Phone Number', type: 'tel', name: 'phone', placeholder: 'Enter your phone' },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium mb-1">{field.label}</label>
                  <input
                    required
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B4257]"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium mb-1">Business Type</label>
                <select
                  required
                  name="businessType"
                  defaultValue=""
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B4257]"
                >
                  <option value="" disabled>Select business type</option>
                  <option value="Importer">Importer</option>
                  <option value="Architect">Architect</option>
                  <option value="Wholesaler">Wholesaler</option>
                  <option value="Retailer">Retailer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us how you'd like to partner"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B4257]"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="w-full bg-[#2B4257] text-white font-semibold py-3 rounded-lg hover:bg-[#1F3142] transition-colors"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
