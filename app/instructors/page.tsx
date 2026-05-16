"use client";

import React, { useState } from 'react';
import { 
  Search, 
  User, 
  Star, 
  Users, 
  BookOpen,
  ArrowRight,
  Globe,
  Award,
  Send
} from 'lucide-react';
import Link from 'next/link';

const InstructorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const instructors = [
    {
      slug: 'imtiaz-ahmed',
      name: 'Imtiaz Ahmed',
      role: 'Full Stack MERN Developer',
      expertise: ['React', 'Node.js', 'MongoDB'],
      rating: 4.9,
      students: '১,২০০+',
      courses: 5,
      image: 'https://i.pravatar.cc/300?u=imtiaz',
      bio: 'একজন প্রফেশনাল MERN স্ট্যাক ডেভেলপার হিসেবে গত ৫ বছর ধরে ইন্ডাস্ট্রি লেভেলে কাজ করছি।'
    },
    {
      slug: 'ismail-hossain',
      name: 'Ismail Hossain',
      role: 'Backend Expert (PHP, Laravel)',
      expertise: ['Laravel', 'MySQL', 'System Design'],
      rating: 4.8,
      students: '৮৫০+',
      courses: 3,
      image: 'https://i.pravatar.cc/300?u=ismail',
      bio: 'পিএইচপি এবং লারাভেল ফ্রেমওয়ার্ক ব্যবহার করে জটিল ওয়েব অ্যাপ্লিকেশন তৈরিতে আমি দক্ষ।'
    },
    {
      slug: 'shanto',
      name: 'Shanto',
      role: 'Frontend Specialist (MERN)',
      expertise: ['Next.js', 'Tailwind', 'Redux'],
      rating: 4.7,
      students: '৬০০+',
      courses: 4,
      image: 'https://i.pravatar.cc/300?u=shanto',
      bio: 'ইউজার ইন্টারফেস ডিজাইন এবং আধুনিক ফ্রন্টএন্ড টেকনোলজি নিয়ে কাজ করতে ভালোবাসি।'
    },
    {
      slug: 'arafat',
      name: 'Arafat',
      role: 'MERN Stack Engineer',
      expertise: ['Express', 'Auth', 'Deployment'],
      rating: 4.9,
      students: '৯৫০+',
      courses: 2,
      image: 'https://i.pravatar.cc/300?u=arafat',
      bio: 'এন্টারপ্রাইজ লেভেল অ্যাপ্লিকেশন ডেভেলপমেন্ট এবং ক্লাউড ম্যানেজমেন্টে আমার বিশেষ অভিজ্ঞতা রয়েছে।'
    }
  ];

  const filteredInstructors = instructors.filter(inst => 
    inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inst.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50/50 font-inter">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
           <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] w-fit mx-auto">Our World-Class Mentors</div>
           <h1 className="text-4xl md:text-7xl font-black text-gray-900 bengali-text leading-[1.1]">দেশের সেরা মেন্টরদের <br />থেকে <span className="text-primary">শিখুন</span></h1>
           <p className="text-gray-500 font-medium bengali-text max-w-2xl mx-auto leading-relaxed text-lg">
             ইন্ডাস্ট্রি এক্সপার্টদের সাথে সরাসরি কাজ করার সুযোগ এবং তাদের রিয়েল-ওয়ার্ল্ড এক্সপেরিয়েন্স থেকে নিজেকে গড়ে তুলুন আগামীর জন্য।
           </p>
           
           <div className="max-w-2xl mx-auto pt-8 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-3xl pl-16 pr-8 py-5 outline-none focus:border-primary transition-all font-bold bengali-text shadow-sm" 
                placeholder="আপনার মেন্টরকে খুঁজুন..." 
              />
           </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <main className="max-w-7xl mx-auto px-6 py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {filteredInstructors.map((inst, i) => (
              <div key={i} className="bg-white rounded-[48px] p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group flex flex-col md:flex-row gap-10">
                 <div className="shrink-0 space-y-6 text-center">
                    <div className="relative">
                       <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-blue-400 rounded-[40px] opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
                       <Link href={`/instructors/${inst.slug}`}>
                          <img src={inst.image} className="w-40 h-40 md:w-48 md:h-48 rounded-[40px] object-cover relative z-10 border-4 border-white shadow-xl cursor-pointer hover:scale-[1.02] transition-transform" alt={inst.name} />
                       </Link>
                    </div>
                    <div className="flex justify-center gap-3">
                       <Link href={`/instructors/${inst.slug}`} className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-primary transition-colors"><User size={18} /></Link>
                       <Link href={`/instructors/${inst.slug}`} className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-gray-900 transition-colors"><Globe size={18} /></Link>
                       <Link href={`/instructors/${inst.slug}`} className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-blue-400 transition-colors"><Send size={18} /></Link>
                    </div>
                 </div>

                 <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                       <div className="flex items-center justify-between">
                          <Link href={`/instructors/${inst.slug}`}>
                             <h2 className="text-3xl font-black text-gray-900 hover:text-primary transition-colors cursor-pointer">{inst.name}</h2>
                          </Link>
                          <div className="flex items-center gap-1 text-amber-500 font-black"><Star size={18} fill="currentColor" /> {inst.rating}</div>
                       </div>
                       <p className="text-primary font-black text-sm uppercase tracking-widest">{inst.role}</p>
                    </div>

                    <p className="text-gray-500 bengali-text leading-relaxed font-medium">
                       {inst.bio}
                    </p>

                    <div className="flex flex-wrap gap-2">
                       {inst.expertise.map(tag => (
                         <span key={tag} className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{tag}</span>
                       ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                       <div className="bg-gray-50 p-4 rounded-3xl border border-gray-100">
                          <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
                             <Users size={14} /> Students
                          </div>
                          <div className="text-xl font-black text-gray-900">{inst.students}</div>
                       </div>
                       <div className="bg-gray-50 p-4 rounded-3xl border border-gray-100">
                          <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
                             <BookOpen size={14} /> Courses
                          </div>
                          <div className="text-xl font-black text-gray-900">{inst.courses}</div>
                       </div>
                    </div>

                    <Link href={`/instructors/${inst.slug}`} className="block">
                       <button className="w-full py-5 bg-gray-900 text-white rounded-[24px] font-black text-sm bengali-text hover:bg-primary transition-all flex items-center justify-center gap-2 group/btn">
                          প্রোফাইল দেখুন <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                       </button>
                    </Link>
                 </div>
              </div>
            ))}
         </div>
      </main>

      {/* Become an Instructor CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6">
         <div className="bg-slate-900 rounded-[64px] p-12 md:p-24 text-center space-y-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
               <h2 className="text-4xl md:text-6xl font-black text-white bengali-text leading-tight">ইন্সট্রাক্টর হয়ে <span className="text-primary">ক্যারিয়ার</span> গড়তে চান?</h2>
               <p className="text-slate-400 text-lg bengali-text leading-relaxed">আপনার জ্ঞান অন্যদের সাথে শেয়ার করুন এবং গড়ে তুলুন একটি সফল অনলাইন ক্যারিয়ার। আমরা আপনাকে দিব সব ধরনের টেকনিক্যাল সাপোর্ট।</p>
               <Link href="/instructors/apply" className="inline-block bg-white text-slate-900 px-12 py-5 rounded-[24px] font-black text-lg bengali-text hover:bg-primary hover:text-white transition-all shadow-2xl shadow-black/20">
                  আবেদন করুন <ArrowRight size={24} className="inline-block" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default InstructorsPage;
