import React from 'react';
import { ShieldCheck, RefreshCcw, Smartphone, Headset } from 'lucide-react';

const FooterTrustBar = () => {
  const features = [
    { icon: <ShieldCheck size={24} />, text: "Secure Payment" },
    { icon: <RefreshCcw size={24} />, text: "30-day Refund" },
    { icon: <Smartphone size={24} />, text: "Mobile App" },
    { icon: <Headset size={24} />, text: "24/7 Support" }
  ];

  return (
    <div className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 bg-accent text-primary rounded-full flex items-center justify-center transition-transform hover:scale-110">
                {item.icon}
              </div>
              <span className="font-semibold text-gray-700 tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
        
        {/* Simple Footer Links */}
        <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">ShikhoBD</span>
              <span className="text-sm text-gray-400">© 2026. All rights reserved.</span>
           </div>
           <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTrustBar;
