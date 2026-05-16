import React from 'react';
import { Radio, Calendar, User } from 'lucide-react';
import Link from 'next/link';

const LiveClassBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-emerald-600 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl shadow-emerald-200">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full -ml-24 -mb-24 blur-xl" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center animate-pulse">
               <Radio size={32} className="text-white" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                 <span className="bg-red-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Live Now</span>
                 <h2 className="text-xl md:text-2xl font-bold bengali-text">আজকের লাইভ ক্লাস: গ্রাফিক ডিজাইন মাস্টারক্লাস</h2>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-emerald-50 text-sm">
                <div className="flex items-center gap-1.5">
                   <Calendar size={14} />
                   <span>Today, 08:30 PM</span>
                </div>
                <div className="flex items-center gap-1.5">
                   <User size={14} />
                   <span>Instructor: আসিফ রহমান</span>
                </div>
              </div>
            </div>
          </div>

          <Link href="/live/graphic-design-masterclass">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-lg active:scale-95 bengali-text whitespace-nowrap">
              Join করুন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LiveClassBanner;
