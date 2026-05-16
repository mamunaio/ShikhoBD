"use client";

import React, { useState } from 'react';
import { Tag, CheckCircle2, AlertCircle } from 'lucide-react';

const CouponInput = ({ onApplySuccess, onClear }) => {
  const [couponCode, setCouponCode] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [discountPercent, setDiscountPercent] = useState(0);

  const validCoupons = {
    'SHIKHON20': 20,
    'LEARN10': 10,
    'WELCOME15': 15
  };

  const handleApply = () => {
    const code = couponCode.toUpperCase().trim();
    if (validCoupons[code]) {
      const discount = validCoupons[code];
      setDiscountPercent(discount);
      setStatus('success');
      onApplySuccess(code, discount);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900 bengali-text">কুপন কোড</h3>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="কুপন কোড লিখুন"
            className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all outline-none uppercase font-bold tracking-wider ${
              status === 'success' ? 'border-green-500 bg-green-50/30' : 
              status === 'error' ? 'border-red-500 bg-red-50/30' : 
              'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
            }`}
          />
        </div>
        <button 
          onClick={handleApply}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold bengali-text transition-all active:scale-95 whitespace-nowrap shadow-md shadow-primary/20"
        >
          প্রয়োগ করুন
        </button>
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-100 animate-zoom-in">
          <CheckCircle2 size={18} />
          <p className="text-sm font-bold bengali-text">
            {couponCode.toUpperCase()} প্রয়োগ হয়েছে! {discountPercent}% ছাড় পেয়েছেন
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 animate-shake">
          <AlertCircle size={18} />
          <p className="text-sm font-bold bengali-text">কুপন কোডটি বৈধ নয়</p>
        </div>
      )}
    </div>
  );
};

export default CouponInput;
