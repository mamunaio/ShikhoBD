import React from 'react';

const BkashForm = () => {
  return (
    <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="bg-[#E2136E]/5 border border-[#E2136E]/10 rounded-2xl p-6">
        <h4 className="text-[#E2136E] font-bold mb-3 bengali-text">আপনার bKash নম্বর থেকে পেমেন্ট করুন</h4>
        <ul className="space-y-2 text-sm text-gray-600 bengali-text">
          <li className="flex gap-2">
            <span className="font-bold text-[#E2136E]">ধাপ ১:</span>
            আপনার bKash অ্যাপ খুলুন
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#E2136E]">ধাপ ২:</span>
            Send Money তে যান
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#E2136E]">ধাপ ৩:</span>
            নম্বরে পাঠান: <span className="font-bold font-mono text-gray-900">017XXXXXXXX</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#E2136E]">ধাপ ৪:</span>
            Transaction ID নিচে লিখুন
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 bengali-text">আপনার bKash নম্বর</label>
          <input 
            type="text" 
            placeholder="01XXXXXXXXX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 bengali-text">bKash Transaction ID লিখুন</label>
          <input 
            type="text" 
            placeholder="TRX123456"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none uppercase"
          />
        </div>
      </div>
    </div>
  );
};

export default BkashForm;
