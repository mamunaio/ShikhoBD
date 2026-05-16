"use client";

import React from 'react';
import { 
  User, 
  Globe, 
  Send, 
  Star, 
  Users, 
  BookOpen, 
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Play,
  Share2,
  Mail,
  Award,
  TrendingUp
} from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

const InstructorProfilePage = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  // Mock data for instructors
  const instructorData: any = {
    'imtiaz-ahmed': {
      name: 'Imtiaz Ahmed',
      role: 'Full Stack MERN Developer',
      image: 'https://i.pravatar.cc/300?u=imtiaz',
      bio: 'একজন প্রফেশনাল MERN স্ট্যাক ডেভেলপার হিসেবে গত ৫ বছর ধরে ইন্ডাস্ট্রি লেভেলে কাজ করছি। আমি বিশ্বাস করি শেখার কোনো শেষ নেই এবং আমার জ্ঞান অন্যদের মাঝে ছড়িয়ে দিতে আমি ভালোবাসি।',
      expertise: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
      stats: { students: '১,২০০+', courses: 5, rating: 4.9, reviews: 450 },
      joined: 'January 2022'
    },
    'ismail-hossain': {
      name: 'Ismail Hossain',
      role: 'Backend Expert (PHP, Laravel)',
      image: 'https://i.pravatar.cc/300?u=ismail',
      bio: 'পিএইচপি এবং লারাভেল ফ্রেমওয়ার্ক ব্যবহার করে জটিল ওয়েব অ্যাপ্লিকেশন তৈরিতে আমি দক্ষ। আমি সহজ ভাষায় কঠিন জিনিস বোঝাতে পছন্দ করি।',
      expertise: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Docker'],
      stats: { students: '৮৫০+', courses: 3, rating: 4.8, reviews: 320 },
      joined: 'March 2022'
    },
    'shanto': {
      name: 'Shanto',
      role: 'Frontend Specialist (MERN)',
      image: 'https://i.pravatar.cc/300?u=shanto',
      bio: 'ইউজার ইন্টারফেস ডিজাইন এবং আধুনিক ফ্রন্টএন্ড টেকনোলজি নিয়ে কাজ করতে ভালোবাসি। আমার মূল লক্ষ্য হলো ইউজারদের সেরা এক্সপেরিয়েন্স দেওয়া।',
      expertise: ['React', 'Tailwind', 'Redux', 'Framer Motion'],
      stats: { students: '৬০০+', courses: 4, rating: 4.7, reviews: 210 },
      joined: 'June 2022'
    },
    'arafat': {
      name: 'Arafat',
      role: 'MERN Stack Engineer',
      image: 'https://i.pravatar.cc/300?u=arafat',
      bio: 'এন্টারপ্রাইজ লেভেল অ্যাপ্লিকেশন ডেভেলপমেন্ট এবং ক্লাউড ম্যানেজমেন্টে আমার বিশেষ অভিজ্ঞতা রয়েছে। আমি মডার্ন ওয়েব আর্কিটেকচার নিয়ে কাজ করতে পছন্দ করি।',
      expertise: ['Express', 'TypeScript', 'Auth', 'PostgreSQL'],
      stats: { students: '৯৫০+', courses: 2, rating: 4.9, reviews: 280 },
      joined: 'August 2022'
    }
  };

  const instructor = instructorData[slug] || instructorData['imtiaz-ahmed'];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-inter">
      {/* Cinematic Header Section */}
      <div className="relative h-[350px] md:h-[450px] bg-[#0F172A]">
         {/* Background Layer (Clipped) */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_-20%,#3B82F6,transparent_70%)]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 h-full relative z-10">
            {/* Top Navigation Row */}
            <div className="flex items-center justify-between py-8">
               <button 
                 onClick={() => router.back()} 
                 className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl text-white font-bold hover:bg-white/20 transition-all group"
               >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
                  <span className="bengali-text">ফিরে যান</span>
               </button>
               <div className="flex items-center gap-3">
                  <button className="p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl text-white hover:bg-white/20 transition-all">
                     <Share2 size={20} />
                  </button>
               </div>
            </div>

            {/* Profile Info Overlay (Bottom of Header) */}
            <div className="absolute bottom-0 left-6 right-6 translate-y-12 flex flex-col md:flex-row items-end gap-8 pb-4">
               <div className="relative group shrink-0">
                  <div className="absolute -inset-3 bg-white rounded-[48px] shadow-2xl shadow-blue-900/10"></div>
                  <img 
                    src={instructor.image} 
                    className="w-44 h-44 md:w-56 md:h-56 rounded-[40px] relative z-10 border-8 border-white object-cover shadow-xl" 
                    alt={instructor.name} 
                  />
                  <div className="absolute bottom-4 -right-4 bg-primary text-white p-3.5 rounded-2xl z-20 shadow-2xl border-4 border-white">
                     <CheckCircle2 size={24} />
                  </div>
               </div>
               
               <div className="flex-1 mb-20 space-y-3 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                     <h1 className="text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">
                        {instructor.name}
                     </h1>
                     <div className="flex items-center gap-2 bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-black shadow-lg shadow-amber-500/20">
                        <Star size={16} fill="currentColor" /> {instructor.stats.rating}
                     </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                     <p className="text-blue-400 font-black text-sm uppercase tracking-[0.2em]">{instructor.role}</p>
                     <div className="hidden md:flex items-center gap-2 text-white/60 text-sm font-bold">
                        <Calendar size={16} /> Joined {instructor.joined}
                     </div>
                  </div>
               </div>

               <div className="hidden lg:flex items-center gap-4 mb-16">
                  <button className="px-10 py-4 bg-primary text-white rounded-2xl font-black text-lg hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 active:scale-95 bengali-text">
                     মেসেজ পাঠান
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 pt-40 md:pt-48 pb-24">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Column (Left) */}
            <div className="lg:col-span-4 space-y-8">
               <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-10">
                  <div className="space-y-6">
                     <h3 className="text-xl font-black text-slate-900 bengali-text flex items-center gap-2">
                        <TrendingUp size={20} className="text-primary" /> পরিসংখ্যান
                     </h3>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-1 text-center">
                           <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Students</div>
                           <div className="text-2xl font-black text-slate-900">{instructor.stats.students}</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-1 text-center">
                           <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Courses</div>
                           <div className="text-2xl font-black text-slate-900">{instructor.stats.courses}</div>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <h3 className="text-xl font-black text-slate-900 bengali-text">বিশেষত্ব</h3>
                     <div className="flex flex-wrap gap-2">
                        {instructor.expertise.map((skill: string) => (
                          <span key={skill} className="bg-blue-50 text-primary px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-100/50">
                             {skill}
                          </span>
                        ))}
                     </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 flex justify-center gap-4">
                     <button className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-primary transition-all border border-slate-100 hover:bg-white hover:shadow-md"><User size={20} /></button>
                     <button className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all border border-slate-100 hover:bg-white hover:shadow-md"><Globe size={20} /></button>
                     <button className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all border border-slate-100 hover:bg-white hover:shadow-md"><Send size={20} /></button>
                  </div>
               </div>
            </div>

            {/* Main Content Column (Right) */}
            <div className="lg:col-span-8 space-y-16">
               <div className="bg-white p-10 md:p-12 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8">
                  <h2 className="text-3xl font-black text-slate-900 bengali-text flex items-center gap-3">
                     <div className="w-2 h-8 bg-primary rounded-full"></div> বায়োগ্রাফি
                  </h2>
                  <p className="text-slate-500 text-lg bengali-text leading-relaxed font-medium">
                     {instructor.bio}
                  </p>
               </div>

               <div className="space-y-8">
                  <div className="flex items-center justify-between px-2">
                     <h2 className="text-3xl font-black text-slate-900 bengali-text">আমার কোর্সসমূহ</h2>
                     <Link href="/courses" className="bg-white px-6 py-2.5 rounded-xl text-primary font-bold text-sm border border-slate-100 shadow-sm hover:shadow-md transition-all bengali-text">সবগুলো দেখুন</Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {[1, 2].map((i) => (
                       <div key={i} className="group bg-white rounded-[40px] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-700">
                          <div className="aspect-video relative overflow-hidden">
                             <img 
                               src={`https://images.unsplash.com/photo-${1500000000000 + i * 500000}?q=80&w=800&auto=format&fit=crop`} 
                               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                               alt="" 
                             />
                             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-primary uppercase tracking-widest border border-white/20">
                                Best Seller
                             </div>
                          </div>
                          <div className="p-8 space-y-5">
                             <h4 className="text-xl font-black text-slate-900 bengali-text group-hover:text-primary transition-colors leading-tight">প্রফেশনাল ওয়েব ডেভেলপমেন্ট (MERN Stack) - ব্যাচ {i}</h4>
                             <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                <div className="text-2xl font-black text-primary">৳২,৫০০</div>
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                   <Users size={16} /> ১২০+ স্টুডেন্ট
                                </div>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Achievements Grid */}
               <div className="space-y-8">
                  <h2 className="text-3xl font-black text-slate-900 bengali-text px-2">অ্যাচিভমেন্টস</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {[
                       { title: 'Top Mentor 2025', icon: <Award size={28} />, color: 'bg-amber-50 text-amber-600 border-amber-100' },
                       { title: '1M+ Watch Time', icon: <Play size={28} />, color: 'bg-blue-50 text-blue-600 border-blue-100' }
                     ].map((ach, i) => (
                       <div key={i} className={`flex items-center gap-6 p-8 ${ach.color} rounded-[32px] border transition-all hover:scale-[1.02] cursor-default`}>
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                             {ach.icon}
                          </div>
                          <h4 className="text-xl font-black bengali-text">{ach.title}</h4>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default InstructorProfilePage;
