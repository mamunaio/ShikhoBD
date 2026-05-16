import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState('');

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  return (
    <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="space-y-2 relative">
        <label className="text-sm font-bold text-gray-700 bengali-text">কার্ড নম্বর</label>
        <div className="relative">
          <input 
            type="text" 
            value={cardNumber}
            onChange={handleCardChange}
            placeholder="XXXX XXXX XXXX XXXX"
            maxLength={19}
            className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none font-mono"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 bengali-text">মেয়াদ শেষ হওয়ার তারিখ</label>
          <input 
            type="text" 
            placeholder="MM / YY"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none font-mono"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 bengali-text">CVV</label>
          <input 
            type="password" 
            placeholder="XXX"
            maxLength={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none font-mono"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 bengali-text">কার্ডধারীর নাম</label>
        <input 
          type="text" 
          placeholder="যেমন: মোঃ করিম উল্লাহ"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
        />
      </div>
    </div>
  );
};

export default CardForm;
