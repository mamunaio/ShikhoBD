'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Play, Users, Star, Award, TrendingUp, 
  CheckCircle, BookOpen, Clock, Globe, ShieldCheck, 
  Smartphone, Mail, MessageCircle, HelpCircle, ChevronDown, X
} from 'lucide-react';
import CategoryChips from '@/components/CategoryChips';
import LiveClassBanner from '@/components/LiveClassBanner';
import CTABlocks from '@/components/CTABlocks';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showVideo, setShowVideo] = useState(false);

  const faqs = [
    {
      q: "আমি কি কোর্সগুলো অফলাইনে দেখতে পারবো?",
      a: "হ্যাঁ, আমাদের মোবাইল অ্যাপ ব্যবহার করে আপনি কোর্সগুলো ডাউনলোড করে অফলাইনে দেখতে পারবেন।"
    },
    {
      q: "কোর্স শেষে কি সার্টিফিকেট পাওয়া যাবে?",
      a: "অবশ্যই! প্রতিটি কোর্স সফলভাবে সম্পন্ন করার পর আপনি একটি ইন্ডাস্ট্রি ভেরিফাইড সার্টিফিকেট পাবেন।"
    },
    {
      q: "আমি কি মেন্টরের সাথে সরাসরি কথা বলতে পারবো?",
      a: "হ্যাঁ, প্রতিটি কোর্সের জন্য আলাদা সাপোর্ট গ্রুপ আছে এবং সপ্তাহে একদিন সরাসরি লাইভ সাপোর্ট সেশন থাকে।"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Video Modal Overlay */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
           <button 
             onClick={() => setShowVideo(false)}
             className="absolute top-10 right-10 text-white hover:text-primary transition-colors z-10"
           >
             <X size={40} />
           </button>
           <div className="relative w-full max-w-5xl aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Free Trial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
           </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
            <TrendingUp size={14} />
            বাংলাদেশের সেরা লার্নিং প্ল্যাটফর্ম
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] bengali-text">
            দক্ষতা অর্জন করুন, <span className="text-primary">ভবিষ্যৎ গড়ুন</span> নিজের মতো করে।
          </h1>
          <p className="text-lg text-gray-500 font-medium bengali-text max-w-lg leading-relaxed">
            শিখুন সেরা মেন্টরদের থেকে, আধুনিক সব স্কিল যা আপনাকে এগিয়ে রাখবে প্রতিযোগিতামূলক বিশ্বে। আমাদের সাথে আপনার স্বপ্নের ক্যারিয়ার শুরু করুন আজই।
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/courses" className="bg-primary text-white px-8 py-5 rounded-2xl font-black text-lg bengali-text flex items-center justify-center gap-2 hover:bg-primary-dark shadow-2xl shadow-primary/30 transition-all active:scale-95">
              কোর্স শুরু করুন
              <ArrowRight size={20} />
            </Link>
            <button 
              onClick={() => setShowVideo(true)}
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all border-2 border-gray-100"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Play size={18} fill="currentColor" />
              </div>
              <span className="bengali-text">ফ্রি ট্রায়াল দেখুন</span>
            </button>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                 </div>
               ))}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-amber-500">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs font-bold text-gray-500 bengali-text">৫০,০০০+ শিক্ষার্থী আমাদের সাথে শিখছেন</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-3xl -z-10"></div>
          <Link href="/courses/professional-web-development" className="block">
            <div className="bg-white p-4 rounded-[40px] shadow-2xl border border-gray-100 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
                alt="Learning" 
                className="rounded-[32px] w-full h-[500px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl space-y-4 group-hover:translate-y-[-10px] transition-transform duration-500">
                <div className="flex justify-between items-center">
                   <div className="bg-teal/10 text-teal px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Trending Course</div>
                   <div className="text-primary font-bold">৳২,৫০০</div>
                </div>
                <h3 className="text-xl font-bold bengali-text leading-tight group-hover:text-primary transition-colors">প্রফেশনাল ওয়েব ডেভেলপমেন্ট (MERN Stack)</h3>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                  <div className="flex items-center gap-1"><Users size={14} /> ১২০০+ স্টুডেন্ট</div>
                  <div className="flex items-center gap-1"><Award size={14} /> সার্টিফিকেট</div>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Floating badge */}
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 animate-bounce">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center text-white">
                 <Award size={20} />
               </div>
               <div>
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Top Rated</p>
                 <p className="text-sm font-bold bengali-text">প্লাটিনাম মেন্টরশিপ</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-gray-50 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-8" alt="Google" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" className="h-8" alt="IBM" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="h-8" alt="Netflix" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-8" alt="Microsoft" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" className="h-8" alt="Slack" />
        </div>
      </section>

      {/* Live Class Banner */}
      <LiveClassBanner />

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 pt-20">
         <div className="flex items-center justify-between mb-10">
           <div className="space-y-2">
             <h2 className="text-3xl font-black text-gray-900 bengali-text">ক্যাটাগরি অনুযায়ী শিখুন</h2>
             <p className="text-gray-500 font-medium bengali-text">আপনার পছন্দের বিষয় বেছে নিন এবং শেখা শুরু করুন</p>
           </div>
           <Link href="/courses" className="text-primary font-bold flex items-center gap-1 hover:underline bengali-text">
             সব ক্যাটাগরি <ArrowRight size={18} />
           </Link>
         </div>
         <CategoryChips />
      </div>

      {/* Featured Courses */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
             <div className="space-y-4">
               <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest w-fit">
                 Featured Courses
               </div>
               <h2 className="text-4xl font-black text-gray-900 bengali-text">জনপ্রিয় সব <span className="text-primary">কোর্সসমূহ</span></h2>
             </div>
             <p className="text-gray-500 font-medium bengali-text max-w-md">
               সেরা মেন্টরদের দ্বারা পরিচালিত আমাদের সব হাই-ডিমান্ড কোর্সগুলো আপনার ক্যারিয়ারকে করবে আরও শক্তিশালী।
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'মাস্টারিং নেক্সট জেএস (Next.js 14)',
                  instructor: 'Jhankar Mahbub',
                  price: 1800,
                  rating: 4.9,
                  students: '১,২০০+',
                  image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=800'
                },
                {
                  title: 'প্রফেশনাল ওয়েব ডেভেলপমেন্ট (MERN)',
                  instructor: 'Sumit Saha',
                  price: 2500,
                  rating: 4.8,
                  students: '২,৫০০+',
                  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800'
                },
                {
                  title: 'ইউআই/ইউএক্স ডিজাইন মাস্টারক্লাস',
                  instructor: 'Faysal Ahmed',
                  price: 1500,
                  rating: 4.7,
                  students: '৮০০+',
                  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800'
                }
              ].map((course, i) => (
                <div key={i} className="bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all group overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img src={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-400">
                      <div className="flex items-center gap-1"><BookOpen size={14} /> ৪টি মডিউল</div>
                      <div className="flex items-center gap-1 text-amber-500"><Star size={14} fill="currentColor" /> {course.rating}</div>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 bengali-text group-hover:text-primary transition-colors">{course.title}</h3>
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                       <span className="text-xs font-bold text-gray-500">{course.instructor}</span>
                    </div>
                    <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                       <div className="text-2xl font-black text-primary">৳{course.price}</div>
                       <Link href="/courses" className="bg-gray-900 text-white p-3 rounded-2xl hover:bg-primary transition-colors">
                          <ArrowRight size={18} />
                       </Link>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Blocks */}
      <CTABlocks />

      {/* Meet Our Mentors */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-black text-gray-900 bengali-text">আমাদের সেরা <span className="text-primary">মেন্টরবৃন্দ</span></h2>
              <p className="text-gray-500 font-medium bengali-text max-w-xl mx-auto">ইন্ডাস্ট্রি এক্সপার্টদের থেকে শিখুন যারা রিয়েল ওয়ার্ল্ড প্রজেক্টে কাজ করছেন।</p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Imtiaz Ahmed', role: 'MERN', image: 'https://i.pravatar.cc/150?u=imtiaz' },
                { name: 'Ismail Hossain', role: 'PHP, Laravel', image: 'https://i.pravatar.cc/150?u=ismail' },
                { name: 'Shanto', role: 'MERN', image: 'https://i.pravatar.cc/150?u=shanto' },
                { name: 'Arafat', role: 'MERN', image: 'https://i.pravatar.cc/150?u=arafat' }
              ].map((mentor, i) => (
                <div key={i} className="bg-white p-6 rounded-[32px] text-center space-y-4 border border-gray-100 hover:shadow-xl transition-all">
                   <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-primary/10">
                      <img src={mentor.image} className="w-full h-full object-cover" alt="" />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900">{mentor.name}</h4>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{mentor.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal rounded-full blur-[120px]"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
               <div className="space-y-10">
                  <div className="space-y-4">
                     <h2 className="text-4xl md:text-5xl font-black bengali-text leading-tight">কেন <span className="text-primary">ShikhoBD</span> সবার সেরা?</h2>
                     <p className="text-gray-400 font-medium bengali-text">আমরা শুধুমাত্র শেখাই না, আমরা আপনার ক্যারিয়ার গড়তে সাহায্য করি।</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     {[
                       { icon: <Users size={24} />, title: '৫০০০+ শিক্ষার্থী', desc: 'সফলভাবে শিখছে' },
                       { icon: <Award size={24} />, title: 'প্রফেশনাল সার্টিফিকেট', desc: 'যা ক্যারিয়ারে কাজে লাগে' },
                       { icon: <Clock size={24} />, title: 'লাইফটাইম এক্সেস', desc: 'যখন খুশি শিখুন' },
                       { icon: <Globe size={24} />, title: '২৪/৭ সাপোর্ট', desc: 'মেন্টরদের সরাসরি সাহায্য' }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-4">
                          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                             {item.icon}
                          </div>
                          <div className="space-y-1">
                             <h4 className="font-bold bengali-text">{item.title}</h4>
                             <p className="text-xs text-gray-500 bengali-text">{item.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               
               <div className="relative">
                  <div className="bg-white/5 p-8 rounded-[48px] border border-white/10 backdrop-blur-md space-y-8">
                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-3xl border border-white/5">
                        <div className="w-12 h-12 rounded-2xl bg-teal/20 text-teal flex items-center justify-center">
                           <CheckCircle size={24} />
                        </div>
                        <div className="flex-1">
                           <h4 className="font-bold bengali-text">লাইভ সাপোর্ট সেশন</h4>
                           <p className="text-xs text-gray-500 bengali-text">প্রতিদিন রাত ৯টা থেকে ১১টা</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-3xl border border-white/5">
                        <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center">
                           <CheckCircle size={24} />
                        </div>
                        <div className="flex-1">
                           <h4 className="font-bold bengali-text">জব প্লেসমেন্ট সুবিধা</h4>
                           <p className="text-xs text-gray-500 bengali-text">সেরা শিক্ষার্থীদের জন্য সরাসরি সুযোগ</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-black text-gray-900 bengali-text">আমাদের শিক্ষার্থীদের <span className="text-primary">সাফল্যের গল্প</span></h2>
              <p className="text-gray-500 font-medium bengali-text">দেখুন কিভাবে ShikhoBD থেকে শিখে তারা তাদের ক্যারিয়ার বদলে ফেলেছে।</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'মো: রায়হান', role: 'Software Engineer', text: 'ShikhoBD এর MERN স্ট্যাক কোর্সটি আমার জীবনের সেরা ইনভেস্টমেন্ট। এখন আমি একটি মাল্টিন্যাশনাল কোম্পানিতে কাজ করছি।', image: 'https://i.pravatar.cc/100?u=rayhan' },
                { name: 'সাদিয়া আক্তার', role: 'UI/UX Designer', text: 'এখানকার মেন্টররা অনেক হেল্পফুল। প্রতিটি টপিক খুব সহজভাবে বোঝানো হয়। আমি এখন ফ্রিল্যান্সিং করছি।', image: 'https://i.pravatar.cc/100?u=sadia' },
                { name: 'আরিফ হোসেন', role: 'Web Developer', text: 'লাইভ সাপোর্ট সেশনগুলো অনেক কাজের। যেকোনো সমস্যায় পড়লে সাথে সাথে সমাধান পাওয়া যায়।', image: 'https://i.pravatar.cc/100?u=arif' }
              ].map((story, i) => (
                <div key={i} className="p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all space-y-6">
                   <div className="flex items-center gap-4">
                      <img src={story.image} className="w-12 h-12 rounded-full" alt="" />
                      <div>
                         <h4 className="font-bold text-gray-900 bengali-text">{story.name}</h4>
                         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{story.role}</p>
                      </div>
                   </div>
                   <p className="text-gray-600 italic bengali-text leading-relaxed">&quot;{story.text}&quot;</p>
                   <div className="flex text-amber-400">
                      {[1,2,3,4,5].map(j => <Star key={j} size={14} fill="currentColor" />)}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* App Promo */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gray-900 rounded-[60px] p-12 md:p-24 overflow-hidden relative">
               <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div className="space-y-8">
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                        <Smartphone size={14} /> Mobile App Available
                     </div>
                     <h2 className="text-4xl md:text-6xl font-black text-white bengali-text leading-tight">শিখুন যখন খুশি, <span className="text-primary">যেখানে খুশি</span>।</h2>
                     <p className="text-gray-400 font-medium bengali-text max-w-md">আমাদের মোবাইল অ্যাপ দিয়ে কোর্সগুলো ডাউনলোড করে অফলাইনেও দেখতে পারবেন। এখনই ডাউনলোড করুন!</p>
                     <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-black px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-primary hover:text-white transition-all">
                           <Play size={20} fill="currentColor" /> App Store
                        </button>
                        <button className="bg-white/10 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-white hover:text-black transition-all border border-white/20">
                           <Play size={20} fill="currentColor" /> Play Store
                        </button>
                     </div>
                  </div>
                  <div className="relative">
                     <div className="absolute inset-0 bg-primary/20 blur-[100px]"></div>
                     <img 
                       src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800" 
                       className="relative z-10 rounded-3xl rotate-6 shadow-2xl" 
                       alt="App Mockup" 
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
           <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-black text-gray-900 bengali-text">সচরাচর <span className="text-primary">জিজ্ঞাসিত প্রশ্ন</span></h2>
              <p className="text-gray-500 font-medium bengali-text">আপনার মনে কোনো প্রশ্ন আছে? নিচের উত্তরগুলো দেখুন।</p>
           </div>

           <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-3xl overflow-hidden">
                   <button 
                     onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                     className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-all"
                   >
                      <span className="font-bold text-gray-900 bengali-text">{faq.q}</span>
                      <ChevronDown size={20} className={`text-gray-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                   </button>
                   {activeFaq === i && (
                     <div className="p-6 pt-0 text-gray-500 bengali-text leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
                        {faq.a}
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-white p-12 md:p-20 rounded-[60px] shadow-xl shadow-blue-900/5 text-center space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 p-12 opacity-[0.03] rotate-12">
                 <Mail size={200} />
              </div>
              <div className="space-y-4 relative z-10">
                 <h2 className="text-4xl font-black text-gray-900 bengali-text">নতুন কোর্স এবং অফার পেতে সাবস্ক্রাইব করুন</h2>
                 <p className="text-gray-500 font-medium bengali-text">আমরা আপনার ইনবক্সে সেরা শেখার টিপস এবং অফার পাঠাব। স্প্যাম করব না!</p>
              </div>
              <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
                 <input 
                   type="email" 
                   placeholder="আপনার ইমেইল দিন..." 
                   className="flex-1 px-8 py-5 rounded-2xl border-2 border-gray-100 focus:border-primary outline-none font-medium"
                   required
                 />
                 <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black bengali-text hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 active:scale-95">
                    সাবস্ক্রাইব করুন
                 </button>
              </form>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-primary rounded-[60px] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
               
               <div className="relative space-y-6 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-black bengali-text leading-tight">আজই শুরু করুন আপনার পছন্দের যাত্রা</h2>
                  <p className="text-lg text-blue-100 font-medium bengali-text">৫০০০+ শিক্ষার্থীর সাথে আপনিও হয়ে উঠুন দক্ষ। কোনো ক্রেডিট কার্ড প্রয়োজন নেই।</p>
               </div>
               <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link href="/auth/register" className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl bengali-text hover:bg-blue-50 transition-all shadow-2xl shadow-black/20">
                    নিবন্ধন করুন (ফ্রি)
                  </Link>
                  <Link href="/courses" className="text-white font-bold flex items-center gap-2 hover:underline bengali-text">
                    সব কোর্স দেখুন <ArrowRight size={20} />
                  </Link>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
