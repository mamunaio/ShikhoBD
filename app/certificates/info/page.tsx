"use client";

import React, { useState } from 'react';
import { 
  Award, 
  Search, 
  CheckCircle2, 
  Share2, 
  Download, 
  ShieldCheck, 
  Zap,
  Briefcase,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const CertificatesInfoPage = () => {
  const router = useRouter();
  const [certId, setCertId] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId) return;
    setIsValidating(true);
    setTimeout(() => {
      setIsValidating(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Dynamic Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-amber-500 to-orange-600 text-white overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <Award size={600} className="absolute -top-20 -right-20 rotate-12" />
         </div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <button onClick={() => router.back()} className="p-3 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-all">
                  <ArrowLeft size={20} />
               </button>
               <h1 className="text-5xl md:text-7xl font-black bengali-text leading-[1.1]">আপনার পরিশ্রমের <br /><span className="text-amber-200">যথাযথ স্বীকৃতি</span></h1>
               <p className="text-amber-50 text-xl md:text-2xl bengali-text font-medium leading-relaxed max-w-xl">
                  ShikhoBD-এর ইন্ডাস্ট্রি ভেরিফাইড সার্টিফিকেট আপনার ক্যারিয়ারকে নিয়ে যাবে এক অনন্য উচ্চতায়।
               </p>
               <div className="flex gap-4">
                  <a href="#verify-section" className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-black text-lg bengali-text hover:shadow-2xl transition-all active:scale-95">
                     সার্টিফিকেট ভেরিফাই করুন
                  </a>
               </div>
            </div>
            
            <div className="relative group">
               <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-700"></div>
               <img 
                 src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000" 
                 alt="Certificate Preview" 
                 className="relative z-10 w-full rounded-[40px] shadow-2xl border-8 border-white/20 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"
               />
            </div>
         </div>
      </section>

      {/* Verification Section */}
      <section id="verify-section" className="py-32 bg-slate-50">
         <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-[56px] p-10 md:p-20 shadow-2xl shadow-slate-200 border border-slate-100 text-center space-y-12">
               <div className="space-y-4">
                  <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                     <ShieldCheck size={40} />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 bengali-text">সার্টিফিকেট ভেরিফিকেশন</h2>
                  <p className="text-slate-500 font-medium bengali-text">সার্টিফিকেটে থাকা ইউনিক আইডিটি নিচে দিয়ে অরিজিনালিটি চেক করুন।</p>
               </div>

               <form onSubmit={handleVerify} className="relative max-w-2xl mx-auto">
                  <input 
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl px-8 py-6 outline-none focus:border-amber-500 transition-all font-black text-xl text-center tracking-widest placeholder:text-slate-300 uppercase" 
                    placeholder="SBD-XXXX-XXXX" 
                  />
                  <button 
                    disabled={isValidating}
                    className="mt-6 w-full md:w-auto md:absolute md:mt-0 md:right-2 md:top-2 md:bottom-2 bg-amber-500 text-white px-10 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                     {isValidating ? 'Checking...' : 'Verify Now'} <ChevronRight size={18} />
                  </button>
               </form>

               {showResult && (
                 <div className="p-8 bg-emerald-50 rounded-[32px] border border-emerald-100 animate-in zoom-in duration-500">
                    <div className="flex items-center justify-center gap-4 text-emerald-600 mb-4">
                       <CheckCircle2 size={32} />
                       <span className="text-2xl font-black bengali-text">ভেরিফাইড সার্টিফিকেট!</span>
                    </div>
                    <p className="text-slate-600 font-medium bengali-text">এই আইডিটি আমাদের রেকর্ডের সাথে মিলেছে। এটি একটি অরিজিনাল সার্টিফিকেট।</p>
                 </div>
               )}
            </div>
         </div>
      </section>

      {/* How it Works */}
      <section className="py-32 max-w-7xl mx-auto px-6">
         <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 bengali-text">কিভাবে পাবেন?</h2>
            <div className="w-24 h-2 bg-amber-500 mx-auto rounded-full"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
               { step: '০১', title: 'এনরোল করুন', desc: 'আপনার পছন্দের কোর্সে আজই ভর্তি হোন।', icon: <Zap /> },
               { step: '০২', title: 'ক্লাস শেষ করুন', desc: 'সবগুলো ভিডিও লেসন মনোযোগ দিয়ে দেখুন।', icon: <ShieldCheck /> },
               { step: '০৩', title: 'কুইজ দিন', desc: 'ফাইনাল কুইজে অন্তত ৮০% নম্বর পান।', icon: <Award /> },
               { step: '০৪', title: 'সার্টিফিকেট নিন', desc: 'ইনস্ট্যান্ট ডাউনলোড করুন আপনার সার্টিফিকেট।', icon: <Download /> }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-[40px] border border-slate-100 hover:border-amber-500/30 hover:shadow-2xl transition-all group relative overflow-hidden">
                 <div className="text-7xl font-black text-slate-50 absolute -top-4 -right-4 group-hover:text-amber-50 transition-colors">{item.step}</div>
                 <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                       {item.icon}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 bengali-text">{item.title}</h3>
                    <p className="text-slate-500 text-sm bengali-text leading-relaxed font-medium">{item.desc}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Benefits */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-amber-500 rounded-full blur-[150px]"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <h2 className="text-4xl md:text-6xl font-black bengali-text leading-tight">সার্টিফিকেটের <span className="text-amber-400">গুরুত্ব</span> কেন বেশি?</h2>
               <div className="space-y-8">
                  {[
                     { title: 'লিঙ্কডইন ইন্টিগ্রেশন', desc: 'এক ক্লিকেই আপনার প্রফেশনাল প্রোফাইলে সার্টিফিকেট যোগ করুন।', icon: <Share2 /> },
                     { title: 'চাকরির বাজারে এগিয়ে', desc: 'ইন্ডাস্ট্রি ভেরিফাইড সার্টিফিকেট এমপ্লয়ারদের আস্থা বাড়ায়।', icon: <Briefcase /> },
                     { title: 'গ্লোবাল রিকগনিশন', desc: 'দেশি-বিদেশি বিভিন্ন কোম্পানিতে আমাদের সার্টিফিকেটের গ্রহণযোগ্যতা রয়েছে।', icon: <ShieldCheck /> }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                       <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors">
                          {benefit.icon}
                       </div>
                       <div className="space-y-2">
                          <h4 className="text-xl font-black bengali-text">{benefit.title}</h4>
                          <p className="text-slate-400 bengali-text leading-relaxed">{benefit.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[56px] border border-white/10 text-center space-y-8">
               <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-amber-500/20">
                  <Award size={48} />
               </div>
               <h3 className="text-3xl font-black bengali-text">আজই আপনার যাত্রা শুরু করুন</h3>
               <p className="text-slate-400 bengali-text max-w-sm mx-auto">হাজারো শিক্ষার্থী আমাদের সাথে তাদের ক্যারিয়ার বদলেছে। আপনি কেন পিছিয়ে থাকবেন?</p>
               <button className="w-full bg-white text-slate-900 py-5 rounded-2xl font-black text-lg bengali-text hover:bg-amber-50 transition-all">
                  সবগুলো কোর্স দেখুন
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default CertificatesInfoPage;
