"use client";

import React, { useState, use, useEffect } from 'react';
import { 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  CheckCircle2, 
  Clock, 
  FileText, 
  MessageSquare, 
  Award,
  ArrowLeft,
  ChevronDown,
  Lock,
  PlayCircle,
  Download,
  Settings,
  Maximize2,
  Volume2,
  ListVideo,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LearnPage = ({ params }: { params: Promise<{ courseId: string }> }) => {
  const router = useRouter();
  const { courseId } = use(params);
  
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [expandedModule, setExpandedModule] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Hide global footer on this page
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';
    return () => {
      if (footer) footer.style.display = 'block';
    };
  }, []);

  const course = {
    title: 'প্রফেশনাল ওয়েব ডেভেলপমেন্ট (MERN Stack)',
    instructor: 'Sumit Saha',
    totalLessons: 150,
    completedLessons: 45,
    modules: [
      {
        title: 'Module 1: Introduction to Web Development',
        lessons: [
          { title: 'Welcome to the course', duration: '05:00', videoId: 'dQw4w9WgXcQ' },
          { title: 'How the web works', duration: '15:00', videoId: 'dQw4w9WgXcQ' },
          { title: 'Setting up environment', duration: '20:00', videoId: 'dQw4w9WgXcQ' }
        ]
      },
      {
        title: 'Module 2: Advanced React Patterns',
        lessons: [
          { title: 'Understanding Hooks', duration: '30:00', videoId: 'dQw4w9WgXcQ' },
          { title: 'Context API vs Redux', duration: '45:00', videoId: 'dQw4w9WgXcQ' }
        ]
      }
    ]
  };

  const handleNext = () => {
    const currentModuleObj = course.modules[activeModule];
    if (activeLesson < currentModuleObj.lessons.length - 1) {
      // Move to next lesson in same module
      setActiveLesson(activeLesson + 1);
    } else if (activeModule < course.modules.length - 1) {
      // Move to first lesson of next module
      setActiveModule(activeModule + 1);
      setActiveLesson(0);
      setExpandedModule(activeModule + 1);
    }
  };

  const currentLesson = course.modules[activeModule].lessons[activeLesson];

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-inter">
      {/* Sidebar - Masterclass Style */}
      <aside className={`transition-all duration-700 ease-in-out border-r border-slate-800/50 bg-[#020617] z-50 flex flex-col shadow-2xl ${showSidebar ? 'w-[420px]' : 'w-0 overflow-hidden'}`}>
         <div className="p-8 border-b border-slate-800/30 flex items-center justify-between shrink-0 bg-slate-900/20">
            <div className="flex items-center gap-3">
               <div 
                 onClick={() => router.push('/dashboard/student')}
                 className="w-10 h-10 bg-slate-800 hover:bg-primary hover:text-white rounded-xl flex items-center justify-center transition-all cursor-pointer"
               >
                  <ArrowLeft size={20} />
               </div>
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Course Content</span>
            </div>
         </div>
         
         <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-8">
            <div className="px-2 space-y-4">
               <h3 className="text-xl font-black bengali-text leading-tight text-white">{course.title}</h3>
               <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                     <span>Your Progress</span>
                     <span className="text-primary">45%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-primary w-[45%] transition-all duration-1000 shadow-[0_0_10px_rgba(24,95,165,0.5)]"></div>
                  </div>
               </div>
            </div>

            <div className="space-y-3">
               {course.modules.map((module, mIdx) => (
                 <div key={mIdx} className="space-y-1">
                    <button 
                      onClick={() => setExpandedModule(expandedModule === mIdx ? -1 : mIdx)}
                      className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all ${expandedModule === mIdx ? 'bg-slate-800/50 text-white border border-slate-700/50' : 'text-slate-400 hover:bg-slate-800/30 hover:text-slate-200 border border-transparent'}`}
                    >
                       <div className="flex items-center gap-4">
                          <span className="text-[10px] font-black text-slate-600">0{mIdx + 1}</span>
                          <span className="font-bold text-[15px] bengali-text">{module.title}</span>
                       </div>
                       <ChevronDown size={18} className={`transition-transform duration-500 ${expandedModule === mIdx ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {expandedModule === mIdx && (
                      <div className="space-y-1.5 py-2 animate-in fade-in slide-in-from-top-4 duration-500">
                         {module.lessons.map((lesson, lIdx) => {
                           const isActive = activeLesson === lIdx && activeModule === mIdx;
                           return (
                             <button 
                               key={lIdx}
                               onClick={() => {
                                 setActiveLesson(lIdx);
                                 setActiveModule(mIdx);
                               }}
                               className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all group ${isActive ? 'bg-primary/10 text-primary border border-primary/20' : 'hover:bg-slate-800/40 text-slate-500 hover:text-slate-300'}`}
                             >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${isActive ? 'bg-primary text-white shadow-lg' : 'bg-slate-800 group-hover:bg-slate-700'}`}>
                                   <Play size={14} fill={isActive ? "white" : "none"} />
                                </div>
                                <div className="flex-1 text-left">
                                   <p className={`text-sm font-bold bengali-text ${isActive ? 'text-white' : ''}`}>{lesson.title}</p>
                                   <p className="text-[10px] opacity-40 font-medium">{lesson.duration}</p>
                                </div>
                                {lIdx === 0 && <CheckCircle2 size={16} className="text-emerald-500" />}
                             </button>
                           );
                         })}
                      </div>
                    )}
                 </div>
               ))}
            </div>
         </div>
      </aside>

      {/* Main Content Area - Cinema Mode */}
      <div className="flex-1 flex flex-col min-w-0 relative">
         {/* Minimal Top Bar */}
         <header className="h-20 flex items-center justify-between px-8 bg-[#020617]/50 backdrop-blur-xl sticky top-0 z-40 border-b border-slate-800/30">
            <div className="flex items-center gap-6">
               <button 
                 onClick={() => setShowSidebar(!showSidebar)} 
                 className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all text-slate-400 hover:text-white"
               >
                  <ListVideo size={20} />
               </button>
               <div className="hidden lg:block">
                  <h1 className="text-sm font-black text-slate-300 uppercase tracking-widest flex items-center gap-2">
                     <span className="text-primary">•</span> {currentLesson.title}
                  </h1>
               </div>
            </div>
            
            <div className="flex items-center gap-4">
               <div 
                 onClick={() => setIsAutoPlay(!isAutoPlay)}
                 className="flex items-center gap-2 px-4 py-2 bg-slate-800/30 rounded-xl border border-slate-700/30 cursor-pointer hover:bg-slate-800/50 transition-all"
               >
                  <span className="text-[10px] font-black text-slate-500">Auto Play</span>
                  <div className={`w-8 h-4 rounded-full relative transition-all ${isAutoPlay ? 'bg-primary shadow-[0_0_10px_rgba(24,95,165,0.3)]' : 'bg-slate-700'}`}>
                    <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${isAutoPlay ? 'right-0.5' : 'left-0.5'}`}></div>
                  </div>
               </div>
               <button className="bg-slate-800 p-3 rounded-xl hover:text-primary transition-colors"><Settings size={18} /></button>
               <button 
                 onClick={handleNext}
                 className="bg-primary text-white px-6 py-3 rounded-xl font-black text-sm bengali-text hover:bg-primary-dark shadow-xl shadow-primary/20 transition-all flex items-center gap-2 active:scale-95"
               >
                  পরবর্তী <ChevronRight size={18} />
               </button>
            </div>
         </header>

         {/* Cinematic Video Player Area */}
         <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
            <div className="w-full bg-black relative flex items-center justify-center p-4 md:p-12">
               <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
               <div className="relative w-full max-w-6xl aspect-video rounded-[40px] overflow-hidden shadow-[0_0_150px_rgba(24,95,165,0.2)] border border-slate-800/50 group">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${currentLesson.videoId}?autoplay=1&modestbranding=1&showinfo=0&rel=0&theme=dark`}
                    title={currentLesson.title}
                    allowFullScreen
                  ></iframe>
               </div>
            </div>

            {/* Content Section - High End Aesthetic */}
            <div className="max-w-6xl mx-auto px-8 py-16 space-y-16 pb-32">
               <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-slate-800/50 pb-12">
                  <div className="space-y-6 flex-1">
                     <div className="flex items-center gap-4">
                        <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10">Cinema Mode</div>
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold"><Clock size={14} /> {currentLesson.duration}</div>
                     </div>
                     <h2 className="text-4xl md:text-7xl font-black text-white bengali-text leading-[1.05]">{currentLesson.title}</h2>
                     <div className="flex items-center gap-4 pt-2">
                        <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden"><img src="https://i.pravatar.cc/100?u=sumit" alt="" /></div>
                        <div className="space-y-0.5">
                           <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Instructor</div>
                           <div className="text-sm font-bold text-white">{course.instructor}</div>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                     <button className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-5 rounded-2xl font-black text-sm bengali-text transition-all flex items-center justify-center gap-3 backdrop-blur-md">
                        <Download size={20} /> রিসোর্স ডাউনলোড
                     </button>
                     <button className="flex-1 bg-emerald-500 text-white px-8 py-5 rounded-2xl font-black text-sm bengali-text hover:bg-emerald-600 shadow-2xl shadow-emerald-500/30 transition-all flex items-center justify-center gap-3">
                        <CheckCircle2 size={20} /> লেসন সম্পন্ন করুন
                     </button>
                  </div>
               </div>

               {/* Tabs Section */}
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-8 space-y-12">
                     <div className="flex gap-10">
                        {['overview', 'resources', 'discussion'].map(tab => (
                          <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-xs font-black uppercase tracking-[0.3em] transition-all relative pb-4 ${activeTab === tab ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
                          >
                             {tab}
                             {activeTab === tab && <div className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded-full shadow-[0_0_15px_rgba(24,95,165,0.8)]"></div>}
                          </button>
                        ))}
                     </div>

                     <div className="animate-in fade-in duration-700">
                        {activeTab === 'overview' && (
                          <div className="space-y-10">
                             <p className="text-slate-400 text-2xl bengali-text leading-[1.7] font-medium">
                                এই লেসনে আমরা শিখবো কিভাবে একটি রিয়েল-ওয়ার্ল্ড প্রজেক্টের জন্য সঠিক এনভায়রনমেন্ট সেটআপ করতে হয়। সঠিক টুলস আপনার ডেভেলপমেন্ট জার্নিকে করবে অনেক বেশি সহজ এবং আনন্দদায়ক।
                             </p>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-10 bg-slate-900/40 rounded-[40px] border border-slate-800/50 space-y-6 hover:border-primary/20 transition-all group">
                                   <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"><PlayCircle size={28} /></div>
                                   <h4 className="text-xl font-black text-white bengali-text">শিখনফল সমূহ:</h4>
                                   <ul className="space-y-4 text-slate-500 text-sm font-bold">
                                      <li className="flex items-center gap-3">• <span className="text-slate-300">Node.js</span> লেটেস্ট ভার্সন কনফিগারেশন</li>
                                      <li className="flex items-center gap-3">• <span className="text-slate-300">VS Code</span> প্রিমিয়াম থিম ও ফন্ট</li>
                                      <li className="flex items-center gap-3">• <span className="text-slate-300">Terminal</span> সেটআপ (Oh-My-Zsh)</li>
                                   </ul>
                                </div>
                                <div className="p-10 bg-slate-900/40 rounded-[40px] border border-slate-800/50 space-y-6 hover:border-primary/20 transition-all group">
                                   <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"><Zap size={28} /></div>
                                   <h4 className="text-xl font-black text-white bengali-text">প্রো টিপস:</h4>
                                   <p className="text-slate-400 text-[15px] leading-relaxed bengali-text font-medium">সবসময় LTS ভার্সন ব্যবহার করার চেষ্টা করবেন। এটি আপনার প্রজেক্টের স্ট্যাবিলিটি নিশ্চিত করবে। যেকোনো সমস্যায় সরাসরি ফোরামে কমেন্ট করুন।</p>
                                </div>
                             </div>
                          </div>
                        )}
                        {activeTab === 'resources' && (
                           <div className="space-y-4">
                              <div className="p-8 bg-slate-900/60 rounded-[40px] border border-slate-800/50 flex items-center justify-between group hover:border-primary/30 transition-all cursor-pointer">
                                 <div className="flex items-center gap-8">
                                    <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-[24px] flex items-center justify-center group-hover:scale-110 transition-transform"><FileText size={32} /></div>
                                    <div>
                                       <p className="text-lg font-black text-white">Starter Code Repo.zip</p>
                                       <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1">4.8 MB • Source Code</p>
                                    </div>
                                 </div>
                                 <button className="bg-slate-800 p-5 rounded-2xl hover:bg-primary transition-all shadow-xl"><Download size={24} /></button>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>

                  {/* Sidebar Info */}
                  <div className="lg:col-span-4 space-y-10">
                     <div className="p-10 bg-slate-900/40 rounded-[48px] border border-slate-800/50 space-y-10 shadow-2xl shadow-black/50">
                        <div className="space-y-6">
                           <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Upcoming Next</h4>
                           <div className="p-6 bg-slate-800/30 rounded-3xl border border-slate-700/30 group cursor-pointer hover:bg-slate-800/50 transition-all border-l-4 border-l-primary">
                              <p className="text-base font-black text-white bengali-text group-hover:text-primary transition-colors leading-snug">React 18: New Features & Concurrent Mode Deep Dive</p>
                              <div className="flex items-center gap-3 mt-4">
                                 <div className="w-6 h-6 rounded-full bg-slate-700 overflow-hidden"><img src="https://i.pravatar.cc/100?u=sumit" alt="" /></div>
                                 <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">45 mins left</p>
                              </div>
                           </div>
                        </div>
                        
                        <div className="space-y-6">
                           <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Quick Actions</h4>
                           <div className="grid grid-cols-2 gap-4">
                              <button className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:bg-primary/10 hover:border-primary/20 transition-all text-xs font-bold bengali-text">নোট নিন</button>
                              <button className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:bg-primary/10 hover:border-primary/20 transition-all text-xs font-bold bengali-text">হেল্প নিন</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default LearnPage;
