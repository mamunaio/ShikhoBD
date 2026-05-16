"use client";

import React from 'react';
import { 
  Award, 
  ChevronLeft, 
  Star, 
  Target, 
  Zap, 
  Trophy,
  Download,
  Share2
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AchievementsPage = () => {
  const router = useRouter();

  const badges = [
    { name: 'Fast Learner', date: '১২ মে, ২০২৪', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100', description: '৫ ঘণ্টা একটানা পড়াশোনা করার জন্য অর্জিত।' },
    { name: 'Quiz Master', date: '১০ মে, ২০২৪', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100', description: 'সবগুলো কুইজে ১০০% মার্কস পাওয়ার জন্য অর্জিত।' },
    { name: 'Course Finisher', date: '০৫ মে, ২০২৪', color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100', description: 'প্রথম কোর্স সফলভাবে শেষ করার জন্য অর্জিত।' },
    { name: 'Early Bird', date: '০১ মে, ২০২৪', color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100', description: 'সকাল ৬টায় ক্লাস শুরু করার জন্য অর্জিত।' },
    { name: 'Code Ninja', date: '২৮ এপ্রিল, ২০২৪', color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-100', description: 'সবগুলো অ্যাসাইনমেন্ট সময়মতো জমা দেওয়ার জন্য।' },
    { name: 'Super Hero', date: '২৫ এপ্রিল, ২০২৪', color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100', description: 'কমিউনিটি ফোরামে ১০টি সঠিক উত্তর দেওয়ার জন্য।' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center gap-4">
           <button onClick={() => router.back()} className="p-3 bg-slate-100 rounded-2xl hover:bg-slate-200 transition-all text-slate-500">
              <ChevronLeft size={20} />
           </button>
           <h1 className="text-xl font-black text-slate-900">অ্যাচিভমেন্ট ও ব্যাজসমূহ</h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[40px] text-white space-y-4">
              <Trophy className="text-primary-light" size={40} />
              <div>
                 <div className="text-3xl font-black">১২টি</div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">মোট ব্যাজ অর্জিত</div>
              </div>
           </div>
           <div className="bg-white p-8 rounded-[40px] border border-slate-200 space-y-4 shadow-sm">
              <Star className="text-amber-500" size={40} />
              <div>
                 <div className="text-3xl font-black">৪৫০</div>
                 <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">লার্নিং পয়েন্ট</div>
              </div>
           </div>
           <div className="bg-white p-8 rounded-[40px] border border-slate-200 space-y-4 shadow-sm">
              <Target className="text-emerald-500" size={40} />
              <div>
                 <div className="text-3xl font-black">০৮টি</div>
                 <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">সার্টিফিকেট</div>
              </div>
           </div>
        </div>

        {/* Badges Grid */}
        <div className="space-y-8">
           <h2 className="text-2xl font-black text-slate-900 bengali-text">আপনার ব্যাজসমূহ</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {badges.map((badge, i) => (
                <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-200 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all group">
                   <div className={`w-20 h-20 ${badge.bg} rounded-[28px] border-2 ${badge.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Award size={40} className={badge.color} />
                   </div>
                   <div className="space-y-2">
                      <h3 className="text-xl font-black text-slate-900">{badge.name}</h3>
                      <p className="text-xs font-bold text-slate-400">{badge.date}</p>
                      <p className="text-sm text-slate-500 font-medium bengali-text pt-2 leading-relaxed">{badge.description}</p>
                   </div>
                   <div className="flex gap-4 pt-6">
                      <button className="flex-1 py-3 bg-slate-50 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                         <Share2 size={14} /> Share
                      </button>
                      <button className="flex-1 py-3 bg-slate-50 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                         <Download size={14} /> Details
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </main>
    </div>
  );
};

export default AchievementsPage;
