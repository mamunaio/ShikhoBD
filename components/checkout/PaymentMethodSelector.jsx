"use client";

import React from 'react';
import { CheckCircle2, CreditCard, Landmark } from 'lucide-react';

const PaymentMethodSelector = ({ activeMethod, setActiveMethod }) => {
  const methods = [
    {
      id: 'bkash',
      name: 'bKash',
      label: 'বিকাশ',
      bg: 'bg-[#E2136E]',
      logo: 'bKash',
      icon: null
    },
    {
      id: 'nagad',
      name: 'Nagad',
      label: 'নগদ',
      bg: 'bg-[#F4821F]',
      logo: 'Nagad',
      icon: null
    },
    {
      id: 'card',
      name: 'Card',
      label: 'ক্রেডিট/ডেবিট কার্ড',
      bg: 'bg-blue-600',
      logo: null,
      icon: <CreditCard className="text-white" size={24} />
    },
    {
      id: 'bank',
      name: 'Bank',
      label: 'ব্যাংক ট্রান্সফার',
      bg: 'bg-gray-500',
      logo: null,
      icon: <Landmark className="text-white" size={24} />
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900 bengali-text">পেমেন্ট পদ্ধতি বেছে নিন</h3>
      <div className="grid grid-cols-2 gap-4">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => setActiveMethod(method.id)}
            className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 group overflow-hidden ${
              activeMethod === method.id
                ? 'border-primary bg-blue-50/30'
                : 'border-gray-100 hover:border-gray-200 bg-white'
            }`}
          >
            {activeMethod === method.id && (
              <div className="absolute top-2 right-2 text-primary">
                <CheckCircle2 size={20} fill="currentColor" className="text-white fill-primary" />
              </div>
            )}
            
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-sm transition-transform group-hover:scale-110 ${method.bg}`}>
              {method.logo ? (
                <span className="text-white font-bold text-sm tracking-tight">{method.logo}</span>
              ) : (
                method.icon
              )}
            </div>
            
            <span className={`text-sm font-bold bengali-text ${activeMethod === method.id ? 'text-primary' : 'text-gray-700'}`}>
              {method.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
