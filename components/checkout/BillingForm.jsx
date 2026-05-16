import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

const BillingForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 space-y-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 bengali-text">বিলিং ডিটেইলস</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
           <label className="text-xs font-bold text-gray-400 uppercase tracking-widest bengali-text px-1">আপনার নাম</label>
           <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                 <User size={18} />
              </div>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border-none rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-primary/20 transition-all bengali-text"
                placeholder="নাম লিখুন"
              />
           </div>
        </div>

        <div className="space-y-2">
           <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Email Address</label>
           <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                 <Mail size={18} />
              </div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border-none rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="email@example.com"
              />
           </div>
        </div>

        <div className="space-y-2">
           <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Phone Number</label>
           <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                 <Phone size={18} />
              </div>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border-none rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="01XXXXXXXXX"
              />
           </div>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
