import React from 'react';
import { CreditCard, Smartphone, ShieldCheck } from 'lucide-react';

const PaymentMethods = ({ selectedMethod, setSelectedMethod }) => {
  const methods = [
    { id: 'bkash', name: 'bKash', icon: <Smartphone />, color: 'bg-[#D12053]' },
    { id: 'nagad', name: 'Nagad', icon: <Smartphone />, color: 'bg-[#F7941D]' },
    { id: 'card', name: 'Credit / Debit Card', icon: <CreditCard />, color: 'bg-primary' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 space-y-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900 bengali-text">পেমেন্ট মেথড</h3>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">
           <ShieldCheck size={14} />
           SSL Secured
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all gap-3 ${
              selectedMethod === method.id 
                ? 'border-primary bg-accent/30' 
                : 'border-gray-50 hover:border-gray-200 bg-white'
            }`}
          >
            <div className={`w-12 h-12 ${method.color} text-white rounded-xl flex items-center justify-center shadow-lg shadow-gray-200`}>
               {method.icon}
            </div>
            <span className={`text-xs font-bold ${selectedMethod === method.id ? 'text-primary' : 'text-gray-500'}`}>
               {method.name}
            </span>
          </button>
        ))}
      </div>

      <p className="text-[10px] text-gray-400 text-center bg-gray-50 py-3 rounded-xl font-medium px-4">
        আপনার পেমেন্ট SSLCommerz-এর মাধ্যমে নিরাপদে প্রসেস করা হবে। আমরা আপনার কোনো কার্ড তথ্য সংরক্ষণ করি না।
      </p>
    </div>
  );
};

export default PaymentMethods;
