'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Building, Globe, Store, TrendingUp, DollarSign, Target, Megaphone, BookOpen, BarChart, Package, CheckCircle, Gem } from 'lucide-react';

export default function PartnerClient() {
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
      formType: 'partner',
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

      toast.success('Form submitted successfully!');
      e.target.reset();
    } catch (err) {
      toast.error('Failed to submit the form.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <>
      <section className="bg-[#2B4257] text-white py-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Become a <span className="text-[#A7C7E7]">Vegnar Partner</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join India's leading architectural hardware brand. Exclusive distributorship and dealership opportunities available across Pan India and internationally.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center mt-8">
              <div>
                <div className="text-3xl font-bold">Pan India</div>
                <div className="text-gray-300">Distribution Network</div>
              </div>
              <div>
                <div className="text-3xl font-bold">25+</div>
                <div className="text-gray-300">International Markets</div>
              </div>
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Images/pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-[#2B4257]/10 rounded-full text-[#2B4257] text-sm font-medium">
                  🤝 Partnership Opportunities
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Join India's <span className="text-[#2B4257]">Leading</span> Hardware Brand
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Exclusive distributorship and dealership opportunities with comprehensive business support and premium product portfolio across India and international markets.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Available Partnership Types:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#2B4257] font-bold text-lg">•</span>
                    <div>
                      <strong className="text-gray-900">Pan India Distributorship:</strong>
                      <span className="text-gray-600 ml-1">State-wise or multi-state distribution rights</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2B4257] font-bold text-lg">•</span>
                    <div>
                      <strong className="text-gray-900">International Distribution:</strong>
                      <span className="text-gray-600 ml-1">Country-wise exclusive distribution opportunities</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2B4257] font-bold text-lg">•</span>
                    <div>
                      <strong className="text-gray-900">Regional Dealership:</strong>
                      <span className="text-gray-600 ml-1">City or district-wise authorized dealership</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2B4257] font-bold text-lg">•</span>
                    <div>
                      <strong className="text-gray-900">Retail Partnership:</strong>
                      <span className="text-gray-600 ml-1">Premium showroom and retail outlet opportunities</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Images/vegnararch-about-us.jpeg"
                  alt="Partnership Opportunities"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B4257]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ready to Partner?</h3>
                  <p className="text-white/90">Join our network of successful partners across India and internationally</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#2B4257] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                20+<br/><span className="text-xs">Years</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative">
        <div className="absolute inset-0 bg-[url('/Images/pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#2B4257]/10 rounded-full text-[#2B4257] text-sm font-medium mb-4">
              🚀 Partnership Benefits
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with Vegnar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support system designed to ensure your success as a Vegnar partner
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Building, 
                title: 'Pan India Distribution', 
                desc: 'State-wise exclusive distributorship opportunities with comprehensive territory protection and business development support',
                color: 'from-blue-500 to-blue-600'
              },
              { 
                icon: Globe, 
                title: 'International Distribution Rights', 
                desc: 'Country-wise single point distribution with export assistance and international marketing support',
                color: 'from-green-500 to-green-600'
              },
              { 
                icon: Store, 
                title: 'Authorized City Dealerships', 
                desc: 'City-wise dealership opportunities with exclusive territory rights and premium product portfolio access',
                color: 'from-purple-500 to-purple-600'
              },
              { 
                icon: TrendingUp, 
                title: 'High Growth Market Potential', 
                desc: 'Capitalize on India\'s booming construction industry with 15%+ annual growth in architectural hardware segment',
                color: 'from-orange-500 to-orange-600'
              },
              { 
                icon: DollarSign, 
                title: 'Attractive Business Margins', 
                desc: 'Competitive wholesale pricing structure with attractive dealer margins and flexible credit payment terms',
                color: 'from-emerald-500 to-emerald-600'
              },
              { 
                icon: Target, 
                title: 'Marketing Support', 
                desc: 'Complete marketing collaterals, digital assets, and advertising support for local market penetration',
                color: 'from-red-500 to-red-600'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#2B4257]/20 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-[#2B4257] rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2B4257] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.desc}
                </p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2B4257] to-[#A7C7E7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2B4257]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#2B4257]/10 rounded-full text-[#2B4257] text-sm font-medium mb-4">
              🤝 Comprehensive Support
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partner Benefits & Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end support system designed to ensure your success as a Vegnar partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Megaphone, 
                title: 'Marketing Support', 
                desc: 'Complete marketing collaterals, digital assets, and advertising support for local market penetration',
                gradient: 'from-pink-500 to-rose-500'
              },
              { 
                icon: BookOpen, 
                title: 'Technical Training', 
                desc: 'Comprehensive product training, installation guidance, and technical support for your team',
                gradient: 'from-indigo-500 to-purple-500'
              },
              { 
                icon: BarChart, 
                title: 'Business Development', 
                desc: 'Dedicated relationship manager and business development support for growth strategies',
                gradient: 'from-cyan-500 to-blue-500'
              },
              { 
                icon: Package, 
                title: 'Inventory Management', 
                desc: 'Flexible inventory solutions with just-in-time delivery and stock management support',
                gradient: 'from-amber-500 to-orange-500'
              },
              { 
                icon: CheckCircle, 
                title: 'Quality Assurance', 
                desc: 'ISO certified products with comprehensive quality control and warranty support',
                gradient: 'from-green-500 to-emerald-500'
              },
              { 
                icon: Gem, 
                title: 'Competitive Pricing', 
                desc: 'Attractive wholesale pricing with volume discounts and flexible payment terms',
                gradient: 'from-violet-500 to-purple-500'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#2B4257]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2B4257]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className={`relative inline-flex items-center justify-center w-14 h-14 bg-[#2B4257] rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-7 h-7" />
                </div>
                
                <h3 className="relative text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2B4257] transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply for Partnership</h2>
            <p className="text-lg text-gray-600">
              Fill out the application form below and our team will contact you within 24 hours
            </p>
          </motion.div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Partnership Application Form</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Full Name', type: 'text', name: 'fullName', placeholder: 'Enter your full name' },
                  { label: 'Company Name', type: 'text', name: 'companyName', placeholder: 'Enter your company name' },
                  { label: 'Email Address', type: 'email', name: 'email', placeholder: 'Enter your email address' },
                  { label: 'Phone Number', type: 'tel', name: 'phone', placeholder: 'Enter your phone number' },
                ].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                    <input
                      required
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B4257] focus:border-transparent"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Type</label>
                  <select
                    required
                    name="businessType"
                    defaultValue=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B4257] focus:border-transparent"
                  >
                    <option value="" disabled>Select partnership type</option>
                    <option value="Pan India Distributor">Pan India Distributor</option>
                    <option value="State Distributor">State Distributor</option>
                    <option value="International Distributor">International Distributor</option>
                    <option value="City Dealer">City Dealer</option>
                    <option value="Retailer">Retailer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                  <input
                    required
                    name="location"
                    type="text"
                    placeholder="City, State, Country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B4257] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Experience & Investment Capacity</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your business experience, current operations, investment capacity, and why you want to partner with Vegnar..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B4257] focus:border-transparent"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full bg-[#2B4257] text-white font-semibold py-4 rounded-lg hover:bg-[#1F3142] transition-colors disabled:opacity-50"
              >
                {loading ? 'Submitting Application...' : 'Submit Partnership Application'}
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}