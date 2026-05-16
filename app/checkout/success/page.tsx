"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Play, ArrowRight, Download, Share2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

const SuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get('courseId');
  const [orderId, setOrderId] = React.useState('');

  React.useEffect(() => {
    Promise.resolve().then(() => setOrderId(`SHBD-${Math.floor(Math.random() * 90000) + 10000}`));
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl w-full space-y-12 animate-in zoom-in duration-700">
        {/* Animated Check Icon */}
        <div className="relative mx-auto w-32 h-32">
           <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-20"></div>
           <div className="relative bg-emerald-500 text-white w-32 h-32 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-200">
              <CheckCircle2 size={64} strokeWidth={3} />
           </div>
        </div>

        <div className="space-y-4">
           <h1 className="text-4xl md:text-6xl font-black text-slate-900 bengali-text">অভিনন্দন!</h1>
           <p className="text-xl text-slate-500 bengali-text font-medium leading-relaxed">
             আপনার এনরোলমেন্ট সফল হয়েছে। এখন আপনি শিখতে শুরু করতে পারেন।
           </p>
        </div>

        <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 flex flex-col md:flex-row items-center gap-8 text-left">
           <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
              <Play size={32} fill="currentColor" />
           </div>
           <div className="flex-1 space-y-1">
              <p className="text-xs font-black text-primary uppercase tracking-widest">Selected Course</p>
              <h3 className="text-xl font-black text-slate-900 bengali-text">প্রফেশনাল ওয়েব ডেভেলপমেন্ট (MERN Stack)</h3>
              <p className="text-sm text-slate-400 font-bold">Order ID: #{orderId}</p>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <Link 
             href={`/learn/${courseId || 'mern-stack-01'}`}
             className="bg-primary text-white py-5 rounded-2xl font-black text-lg bengali-text hover:bg-primary-dark shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-2"
           >
             শিখতে শুরু করুন
             <ArrowRight size={20} />
           </Link>
           <Link 
             href="/dashboard/student"
             className="bg-slate-900 text-white py-5 rounded-2xl font-black text-lg bengali-text hover:bg-black transition-all flex items-center justify-center gap-2"
           >
             ড্যাশবোর্ডে যান
           </Link>
        </div>

        <div className="flex items-center justify-center gap-8 pt-8 border-t border-slate-100">
           <button 
             onClick={() => window.print()}
             className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest"
           >
              <Download size={16} /> Receipt
           </button>
           <button 
             onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'ShikhoBD Enrollment',
                    text: 'আমি এইমাত্র ShikhoBD থেকে প্রফেশনাল ওয়েব ডেভেলপমেন্ট কোর্সে এনরোল করেছি!',
                    url: window.location.href
                  });
                }
             }}
             className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest"
           >
              <Share2 size={16} /> Share
           </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
