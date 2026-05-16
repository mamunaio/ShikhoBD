import React from 'react';

const NagadForm = () => {
  return (
    <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="bg-[#F4821F]/5 border border-[#F4821F]/10 rounded-2xl p-6">
        <h4 className="text-[#F4821F] font-bold mb-3 bengali-text">আপনার Nagad নম্বর থেকে পেমেন্ট করুন</h4>
        <ul className="space-y-2 text-sm text-gray-600 bengali-text">
          <li className="flex gap-2">
            <span className="font-bold text-[#F4821F]">ধাপ ১:</span>
            আপনার Nagad অ্যাপ খুলুন
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#F4821F]">ধাপ ২:</span>
            Send Money তে যান
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#F4821F]">ধাপ ৩:</span>
            নম্বরে পাঠান: <span className="font-bold font-mono text-gray-900">017XXXXXXXX</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#F4821F]">ধাপ ৪:</span>
            Transaction ID নিচে লিখুন
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 bengali-text">আপনার Nagad নম্বর</label>
          <input 
            type="text" 
            placeholder="01XXXXXXXXX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4821F] focus:ring-2 focus:ring-[#F4821F]/10 transition-all outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 bengali-text">Nagad Transaction ID লিখুন</label>
          <input 
            type="text" 
            placeholder="TRX123456"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4821F] focus:ring-2 focus:ring-[#F4821F]/10 transition-all outline-none uppercase"
          />
        </div>
      </div>
    </div>
  );
};

export default NagadForm;
