import React from 'react';
import { BookOpen, Infinity, Award, Smartphone, RefreshCcw, ShieldCheck, Star } from 'lucide-react';

const OrderSummary = ({ course, discountAmount = 0, couponDiscount = 0 }) => {
  const originalPrice = 2500;
  const baseDiscount = 1300;
  const subtotal = originalPrice - baseDiscount;
  const finalTotal = subtotal - couponDiscount;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h3 className="text-xl font-bold text-gray-900 bengali-text">অর্ডার সারসংক্ষেপ</h3>
        </div>
        
        <div className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
               <BookOpen size={32} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 bengali-text leading-tight mb-1">
                {course?.title || 'প্রফেশনাল ওয়েব ডেভেলপমেন্ট (MERN Stack)'}
              </h4>
              <p className="text-xs text-gray-500 font-medium mb-2">Instructor: {course?.instructor || 'Sumit Saha'}</p>
              <div className="flex items-center gap-1">
                 {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#FACC15" className="text-[#FACC15]" />)}
                 <span className="text-[10px] text-gray-400 ml-1 font-bold">(4.8/5)</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-dashed border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 bengali-text">কোর্সের মূল্য:</span>
              <span className="font-bold text-gray-900 font-mono">৳{originalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-green-600">
              <span className="bengali-text">ছাড় (৫২%):</span>
              <span className="font-bold font-mono">- ৳{baseDiscount.toLocaleString()}</span>
            </div>
            {couponDiscount > 0 && (
              <div className="flex justify-between text-sm text-blue-600 animate-in slide-in-from-right-4 duration-300">
                <span className="bengali-text">কুপন ছাড়:</span>
                <span className="font-bold font-mono">- ৳{couponDiscount.toLocaleString()}</span>
              </div>
            )}
            
            <div className="pt-4 border-t border-gray-100 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900 bengali-text">সর্বমোট:</span>
                <span className="text-2xl font-black text-primary font-mono">৳{finalTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100/50">
        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">কোর্সের মধ্যে যা আছে</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
              <Infinity size={16} />
            </div>
            <span className="text-xs font-bold bengali-text">আজীবন অ্যাক্সেস</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
              <Award size={16} />
            </div>
            <span className="text-xs font-bold bengali-text">সার্টিফিকেট</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
              <Smartphone size={16} />
            </div>
            <span className="text-xs font-bold bengali-text">মোবাইল অ্যাক্সেস</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
              <RefreshCcw size={16} />
            </div>
            <span className="text-xs font-bold bengali-text">৩০ দিনের রিফান্ড</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 py-2 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
         <div className="px-3 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-500 flex items-center gap-1 border border-gray-200">
           <ShieldCheck size={12} /> SSL Secured
         </div>
         <div className="px-3 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-500 flex items-center gap-1 border border-gray-200">
           <ShieldCheck size={12} /> 256-bit Encrypted
         </div>
         <div className="px-3 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-500 border border-gray-200">
           PCI Compliant
         </div>
      </div>
    </div>
  );
};

export default OrderSummary;
