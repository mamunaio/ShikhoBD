'use client';

import React, { useState, use } from 'react';
import { 
  Play, Clock, Users, Star, Award, ShieldCheck, Share2, 
  Heart, BookOpen, ChevronRight, CheckCircle2, Info, 
  ChevronDown, MessageCircle, BarChart3, Globe, ArrowRight, X,
  FileText, Download, Zap
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CourseAccordion from '@/components/CourseAccordion';

const CourseDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const router = useRouter();
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  const [showVideo, setShowVideo] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showCartSuccess, setShowCartSuccess] = useState(false);

  // Mock course data
  const course = {
    id: 'mern-stack-01',
    title: 'প্রফেশনাল ওয়েব ডেভেলপমেন্ট (MERN Stack) — জিরো থেকে ক্যারিয়ার গাইডলাইন',
    description: 'শিখুন MongoDB, Express.js, React এবং Node.js। সম্পূর্ণ প্রজেক্ট ভিত্তিক লার্নিং যা আপনাকে ইন্ডাস্ট্রি রেডি ডেভেলপার হিসেবে তৈরি করবে।',
    category: 'Web Development',
    subcategory: 'Full Stack',
    price: 2500,
    originalPrice: 5000,
    rating: 4.8,
    reviewCount: 120,
    studentCount: 1500,
    duration: '৪০+ ঘণ্টা',
    lessonCount: 150,
    introVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Sumit Saha',
      role: 'Software Engineer & Mentor',
      bio: 'একজন অভিজ্ঞ ফুল স্ট্যাক ডেভেলপার যিনি গত ১০ বছর ধরে ইন্ডাস্ট্রি লেভেলে কাজ করছেন। তিনি লার্ন উইথ সুমিতের প্রতিষ্ঠাতা।',
      image: 'https://i.pravatar.cc/150?u=sumit'
    },
    modules: [
      {
        title: 'Module 1: Introduction to MERN Stack',
        lessonCount: 12,
        duration: '2.5',
        lessons: [
          { title: 'Course Overview & Roadmap', duration: '08:00', isFree: true },
          { title: 'Setting up Node.js & NPM', duration: '15:00', isFree: false },
          { title: 'First Express Server', duration: '20:00', isFree: true }
        ]
      },
      {
        title: 'Module 2: Deep Dive into React 18',
        lessonCount: 18,
        duration: '6.5',
        lessons: [
          { title: 'Functional Components vs Class', duration: '30:00', isFree: false },
          { title: 'Understanding Virtual DOM', duration: '25:00', isFree: false }
        ]
      }
    ],
    highlights: [
      '১২টি প্রফেশনাল প্রজেক্ট যা আপনার পোর্টফোলিওকে সমৃদ্ধ করবে।',
      'ইন্ডাস্ট্রি স্ট্যান্ডার্ড বেস্ট প্র্যাকটিস এবং ক্লিন কোডিং।',
      'সরাসরি মেন্টরশিপ এবং ডেডিকেটেড সাপোর্ট গ্রুপ।',
      'কোর্স শেষে রিজিউম বিল্ডিং এবং ইন্টারভিউ প্রস্তুতি।'
    ],
    faqs: [
      { q: "এই কোর্সের জন্য কি কোনো পূর্ব অভিজ্ঞতা প্রয়োজন?", a: "না, আমরা একদম স্ক্র্যাচ থেকে শেখাবো। তবে বেসিক কম্পিউটার জ্ঞান থাকা ভালো।" },
      { q: "আমি কি আজীবন এক্সেস পাবো?", a: "হ্যাঁ, একবার এনরোল করলে আপনি আজীবন এই কোর্সের ভিডিও এবং আপডেট পাবেন।" },
      { q: "সার্টিফিকেট কি ভেরিফাইড?", a: "হ্যাঁ, সফলভাবে কোর্স শেষ করার পর আপনি একটি কিউআর কোড ভেরিফাইড সার্টিফিকেট পাবেন।" }
    ]
  };

  const handleEnroll = () => {
    router.push(`/checkout/${course.id}`);
  };

  const handleAddToCart = () => {
    setShowCartSuccess(true);
    setTimeout(() => setShowCartSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-inter pb-24">
      {/* Video Modal Overlay */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
           <button onClick={() => setShowVideo(false)} className="absolute top-10 right-10 text-white hover:text-primary transition-colors z-10"><X size={40} /></button>
           <div className="relative w-full max-w-5xl aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
              <iframe className="w-full h-full" src={`${course.introVideoUrl}?autoplay=1`} title="Course Preview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           </div>
        </div>
      )}

      {/* Cart Success Toast */}
      {showCartSuccess && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-10 duration-500">
           <CheckCircle2 size={24} />
           <span className="font-bold bengali-text">কোর্সটি কার্টে যুক্ত করা হয়েছে!</span>
        </div>
      )}

      {/* Header / Hero Area */}
      <div className="relative bg-[#0F172A] text-white pt-24 pb-32 md:pb-48 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-blue-500/10 blur-[100px] rounded-full -translate-x-1/2 -z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-3 text-xs font-bold text-primary tracking-widest uppercase bg-primary/5 w-fit px-4 py-2 rounded-full border border-primary/10">
              <Link href="/courses" className="hover:text-white transition-colors">Courses</Link> 
              <ChevronRight size={14} /> 
              <Link href={`/courses?category=${course.category}`} className="hover:text-white transition-colors">{course.category}</Link>
            </div>

            <h1 className="text-4xl md:text-6xl font-black bengali-text leading-[1.15]">{course.title}</h1>
            <p className="text-slate-400 text-xl bengali-text leading-relaxed max-w-3xl">{course.description}</p>
            
            <div className="flex flex-wrap items-center gap-8 text-sm font-bold">
               <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700/50">
                 <div className="flex text-amber-500">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />)}</div>
                 <span className="text-amber-500">{course.rating}</span>
                 <span className="text-slate-500">({course.reviewCount} টি রিভিউ)</span>
               </div>
               <div className="flex items-center gap-2 text-slate-300"><Users size={18} className="text-primary" /><span>{course.studentCount} শিক্ষার্থী</span></div>
               <div className="flex items-center gap-2 text-slate-300"><Globe size={18} className="text-primary" /><span className="bengali-text">বাংলা ভাষায়</span></div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-[32px] border border-slate-700/50 w-fit backdrop-blur-md">
               <div className="w-14 h-14 rounded-2xl bg-slate-700 overflow-hidden border-2 border-primary/20">
                  <img src={course.instructor.image} alt={course.instructor.name} className="w-full h-full object-cover" />
               </div>
               <div>
                 <p className="text-[10px] text-primary font-black uppercase tracking-widest">Instructor</p>
                 <p className="text-xl font-black text-white">{course.instructor.name}</p>
                 <p className="text-xs text-slate-500 font-bold">{course.instructor.role}</p>
               </div>
            </div>
          </div>
          <div className="hidden md:block w-[420px] shrink-0"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 md:-mt-32 relative z-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-12">
            
            {/* What you'll learn */}
            <section className="bg-white p-8 md:p-12 rounded-[48px] shadow-xl shadow-slate-200 border border-slate-100 space-y-8">
               <h2 className="text-3xl font-black text-slate-900 bengali-text flex items-center gap-3">
                 <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center"><CheckCircle2 size={24} /></div>
                 এই কোর্স থেকে যা শিখবেন
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.highlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-colors group">
                       <div className="mt-1 flex-shrink-0 text-emerald-500 group-hover:scale-110 transition-transform"><CheckCircle2 size={20} /></div>
                       <p className="text-slate-600 font-medium bengali-text leading-relaxed">{item}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* Course Curriculum */}
            <section className="space-y-8">
               <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-black text-slate-900 bengali-text">কোর্স কারিকুলাম</h2>
                  <div className="text-sm font-bold text-slate-500 bengali-text">{course.modules.length} টি মডিউল • {course.lessonCount} টি লেসন</div>
               </div>
               <CourseAccordion modules={course.modules} />
            </section>

            {/* Instructor Bio */}
            <section className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm space-y-8">
               <h2 className="text-2xl font-black text-slate-900 bengali-text">ইন্সট্রাক্টর পরিচিতি</h2>
               <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-32 h-32 rounded-[32px] bg-slate-100 overflow-hidden border-4 border-white shadow-xl rotate-3"><img src={course.instructor.image} className="w-full h-full object-cover" alt="" /></div>
                  <div className="space-y-4 flex-1 text-center md:text-left">
                     <h4 className="text-2xl font-black text-slate-900">{course.instructor.name}</h4>
                     <p className="text-primary font-bold uppercase tracking-widest text-xs">{course.instructor.role}</p>
                     <p className="text-slate-500 bengali-text leading-relaxed">{course.instructor.bio}</p>
                     <div className="flex justify-center md:justify-start gap-4">
                        <Link href={`/mentors/${course.instructor.name}`} className="p-3 rounded-2xl bg-slate-50 hover:bg-primary hover:text-white transition-all"><Users size={18} /></Link>
                        <button className="p-3 rounded-2xl bg-slate-50 hover:bg-primary hover:text-white transition-all"><MessageCircle size={18} /></button>
                     </div>
                  </div>
               </div>
            </section>

            {/* FAQs */}
            <section className="space-y-8">
               <h2 className="text-3xl font-black text-slate-900 bengali-text text-center mb-10">সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
               <div className="space-y-4 max-w-3xl mx-auto">
                  {course.faqs.map((faq, i) => (
                    <div key={i} className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
                       <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-50 transition-all">
                          <span className="font-bold text-slate-900 bengali-text">{faq.q}</span>
                          <ChevronDown size={20} className={`text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                       </button>
                       {activeFaq === i && <div className="p-6 pt-0 text-slate-500 bengali-text leading-relaxed animate-in slide-in-from-top-2">{faq.a}</div>}
                    </div>
                  ))}
               </div>
            </section>
          </div>

          {/* Right Side: Sticky Purchase Card */}
          <div className="w-full md:w-[420px] shrink-0">
             <div className="bg-white rounded-[48px] overflow-hidden shadow-2xl shadow-slate-300 border border-white sticky top-28">
                <div className="relative group aspect-video cursor-pointer" onClick={() => setShowVideo(true)}>
                   <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Course Preview" />
                   <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center backdrop-blur-[2px]"><div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl animate-pulse"><Play size={32} fill="currentColor" /></div></div>
                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest text-primary shadow-lg border border-white/20">Free Preview</div>
                </div>

                <div className="p-10 space-y-10">
                   <div className="flex items-center gap-6">
                      <div className="space-y-1">
                         <div className="text-4xl font-black text-slate-900">৳{course.price}</div>
                         <div className="flex items-center gap-2"><span className="text-slate-400 line-through font-bold">৳{course.originalPrice}</span><span className="text-rose-500 text-xs font-black bg-rose-50 px-2 py-1 rounded-lg">50% OFF</span></div>
                      </div>
                      <div className="flex-1 text-right">
                         <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Time Left</div>
                         <div className="text-rose-600 font-bold animate-pulse">০৫:২০:১২</div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <button onClick={handleEnroll} className="w-full py-6 bg-primary text-white rounded-3xl font-black text-xl bengali-text hover:bg-primary-dark shadow-2xl shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3">এনরোল করুন<ArrowRight size={22} /></button>
                      <button onClick={handleAddToCart} className="w-full py-6 bg-slate-50 text-slate-900 rounded-3xl font-black text-xl bengali-text hover:bg-slate-100 transition-all border-2 border-slate-100">কার্টে যুক্ত করুন</button>
                   </div>

                   <div className="space-y-6 pt-10 border-t border-slate-50">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">এই কোর্সে যা আছে:</h4>
                      <div className="grid grid-cols-1 gap-5">
                         {[
                           { icon: <BookOpen />, text: '১৫০+ ভিডিও লেসন' },
                           { icon: <ShieldCheck />, text: 'লাইফটাইম এক্সেস' },
                           { icon: <Award />, text: 'সার্টিফিকেশন' },
                           { icon: <Zap />, text: 'ডেডিকেটেড সাপোর্ট' },
                           { icon: <BarChart3 />, text: 'ক্যারিয়ার গাইডলাইন' }
                         ].map((item, i) => (
                           <div key={i} className="flex items-center gap-4 text-slate-600 font-bold group">
                              <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">{React.cloneElement(item.icon as React.ReactElement, { size: 18 })}</div>
                              <span className="bengali-text text-sm">{item.text}</span>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="flex gap-4">
                      <button className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl border border-slate-100 text-slate-500 font-bold text-xs hover:bg-slate-50 transition-all uppercase tracking-widest"><Share2 size={16} /> Share</button>
                      <button onClick={() => setIsWishlisted(!isWishlisted)} className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl border border-slate-100 font-bold text-xs transition-all uppercase tracking-widest ${isWishlisted ? 'bg-rose-50 text-rose-500' : 'text-slate-500 hover:bg-rose-50 hover:text-rose-500'}`}><Heart size={16} fill={isWishlisted ? "currentColor" : "none"} /> Wishlist</button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
