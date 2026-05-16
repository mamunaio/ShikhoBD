"use client";

import React, { useState } from 'react';
import { 
  Users, 
  Video, 
  DollarSign, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Upload,
  MessageSquare,
  Globe
} from 'lucide-react';
import Link from 'next/link';

const BecomeInstructorPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
            <div className="bg-primary/20 text-primary-light px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] border border-primary/20 w-fit mx-auto">Join Our Community</div>
            <h1 className="text-5xl md:text-8xl font-black bengali-text leading-[1.1]">আপনার জ্ঞান শেয়ার করুন <br /><span className="text-primary">পরিবর্তন আনুন</span> সবার জীবনে</h1>
            <p className="text-slate-400 text-xl md:text-2xl font-medium bengali-text max-w-3xl mx-auto leading-relaxed">
               ShikhoBD-এর সাথে আপনার ক্যারিয়ার গড়ে তুলুন। আমরা আপনাকে দিচ্ছি দেশের সবচেয়ে বড় লার্নিং প্ল্যাটফর্মে নিজের কোর্স লঞ্চ করার সুবর্ণ সুযোগ।
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
               <a href="#apply-form" className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg bengali-text hover:bg-primary-dark shadow-2xl shadow-primary/30 transition-all flex items-center gap-3 active:scale-95">
                  আবেদন করুন <ArrowRight size={24} />
               </a>
               <button className="bg-white/10 text-white border border-white/10 px-12 py-5 rounded-2xl font-black text-lg bengali-text hover:bg-white/20 transition-all">
                  কিভাবে শুরু করবেন?
               </button>
            </div>
         </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
         <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 bengali-text">কেন আমাদের সাথে শেখাবেন?</h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
               { title: 'উপার্জনের সুযোগ', desc: 'আপনার কোর্স থেকে লাইফটাইম প্যাসিভ ইনকাম করার সুযোগ পান।', icon: <DollarSign size={40} />, color: 'bg-emerald-50 text-emerald-600' },
               { title: 'বিশাল অডিয়েন্স', desc: 'দেশের ১ লক্ষেরও বেশি শিক্ষার্থীর কাছে আপনার জ্ঞান পৌঁছে দিন।', icon: <Globe size={40} />, color: 'bg-blue-50 text-blue-600' },
               { title: 'প্রিমিয়াম সাপোর্ট', desc: 'ভিডিও প্রোডাকশন থেকে শুরু করে মার্কেটিং—সব দায়িত্ব আমাদের।', icon: <Zap size={40} />, color: 'bg-amber-50 text-amber-600' }
            ].map((benefit, i) => (
              <div key={i} className="p-12 rounded-[48px] bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all group">
                 <div className={`w-20 h-20 ${benefit.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    {benefit.icon}
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 bengali-text mb-4">{benefit.title}</h3>
                 <p className="text-slate-500 font-medium bengali-text leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-form" className="py-32 bg-slate-50">
         <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-[56px] p-10 md:p-20 shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden">
               {isSubmitted ? (
                 <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                       <CheckCircle2 size={56} />
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-3xl font-black text-slate-900 bengali-text">আপনার আবেদন সফল হয়েছে!</h3>
                       <p className="text-slate-500 font-medium bengali-text text-lg">
                          আমাদের টিম আগামী ৪-৫ কার্যদিবসের মধ্যে আপনার সাথে যোগাযোগ করবে। ধৈর্য ধরার জন্য ধন্যবাদ।
                       </p>
                    </div>
                    <Link href="/" className="inline-block bg-primary text-white px-10 py-4 rounded-2xl font-black bengali-text hover:bg-primary-dark transition-all">হোমপেজে ফিরে যান</Link>
                 </div>
               ) : (
                 <div className="space-y-12">
                    <div className="space-y-4">
                       <h3 className="text-3xl md:text-5xl font-black text-slate-900 bengali-text">আবেদন ফর্ম পূরণ করুন</h3>
                       <p className="text-slate-500 font-medium bengali-text">নিচের তথ্যগুলো দিয়ে আপনার যাত্রা শুরু করুন।</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Full Name</label>
                             <input required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold" placeholder="আপনার নাম লিখুন" />
                          </div>
                          <div className="space-y-3">
                             <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Email Address</label>
                             <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold" placeholder="example@email.com" />
                          </div>
                       </div>
                       
                       <div className="space-y-3">
                          <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Your Expertise</label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold appearance-none">
                             <option>প্রোগ্রামিং ও ওয়েব ডেভেলপমেন্ট</option>
                             <option>গ্রাফিক ডিজাইন ও ইউআই/ইউএক্স</option>
                             <option>ডিজিটাল মার্কেটিং</option>
                             <option>অ্যাপ ডেভেলপমেন্ট</option>
                             <option>অন্যান্য</option>
                          </select>
                       </div>

                       <div className="space-y-3">
                          <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Brief Bio / Experience</label>
                          <textarea required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium h-40 bengali-text" placeholder="আপনার অভিজ্ঞতা সম্পর্কে সংক্ষেপে লিখুন..."></textarea>
                       </div>

                       <div className="p-8 border-2 border-dashed border-slate-200 rounded-[32px] text-center space-y-4 hover:border-primary transition-colors cursor-pointer group">
                          <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/10 group-hover:text-primary transition-all">
                             <Upload size={28} />
                          </div>
                          <div>
                             <p className="text-sm font-black text-slate-700">Upload CV / Portfolio</p>
                             <p className="text-xs text-slate-400">PDF, DOCX or ZIP (Max 10MB)</p>
                          </div>
                       </div>

                       <button type="submit" className="w-full bg-primary text-white py-6 rounded-2xl font-black text-xl bengali-text hover:bg-primary-dark shadow-2xl shadow-primary/30 transition-all active:scale-[0.98]">
                          আবেদন জমা দিন
                       </button>
                    </form>
                 </div>
               )}
            </div>
         </div>
      </section>

      {/* FAQ / Final CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 text-center space-y-12">
         <div className="bg-primary/5 p-12 md:p-24 rounded-[64px] border border-primary/10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 bengali-text">এখনও কোনো প্রশ্ন আছে?</h2>
            <p className="text-slate-500 text-xl bengali-text font-medium max-w-2xl mx-auto">
               আমাদের সাপোর্ট টিম সব সময় আপনার পাশে আছে। যেকোনো প্রয়োজনে সরাসরি আমাদের মেসেজ করুন।
            </p>
            <div className="flex justify-center">
               <button className="flex items-center gap-3 bg-white text-primary border-2 border-primary/20 px-10 py-5 rounded-2xl font-black text-lg bengali-text hover:bg-primary hover:text-white hover:border-primary transition-all shadow-xl">
                  <MessageSquare size={24} /> আমাদের সাথে কথা বলুন
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default BecomeInstructorPage;
