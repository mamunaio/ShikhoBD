import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, Lock, CheckCircle2, Clock, Zap } from 'lucide-react';

const CourseAccordion = ({ modules }) => {
  const [openModuleIndex, setOpenModuleIndex] = useState(0);

  return (
    <div className="space-y-6">
      {modules.map((module, index) => {
        const isOpen = openModuleIndex === index;
        
        return (
          <div 
            key={index} 
            className={`group border transition-all duration-500 rounded-[32px] overflow-hidden ${
              isOpen 
                ? 'border-primary/30 bg-white shadow-2xl shadow-primary/5 scale-[1.01]' 
                : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-primary/20'
            }`}
          >
            {/* Module Header */}
            <button 
              onClick={() => setOpenModuleIndex(isOpen ? -1 : index)}
              className={`w-full px-8 py-7 flex items-center justify-between text-left transition-all ${
                isOpen ? 'bg-primary/[0.02]' : ''
              }`}
            >
              <div className="flex items-center gap-6">
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                   isOpen ? 'bg-primary text-white rotate-12' : 'bg-white text-slate-400 group-hover:text-primary shadow-sm'
                 }`}>
                    <span className="text-lg font-black">{index + 1}</span>
                 </div>
                 <div className="space-y-1.5">
                   <h4 className={`text-xl font-black bengali-text transition-colors ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                     {module.title}
                   </h4>
                   <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                     <span className="flex items-center gap-1.5"><PlayCircle size={14} /> {module.lessonCount} টি লেসন</span>
                     <span className="flex items-center gap-1.5"><Clock size={14} /> {module.duration} ঘণ্টা</span>
                   </div>
                 </div>
              </div>
              <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-300'}`}>
                <ChevronDown size={24} strokeWidth={3} />
              </div>
            </button>

            {/* Lesson List */}
            {isOpen && (
              <div className="px-8 pb-8 pt-2 animate-in slide-in-from-top-4 duration-500">
                <div className="relative space-y-2">
                  {/* Vertical line connecting lessons */}
                  <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-100"></div>
                  
                  {module.lessons.map((lesson, lIndex) => (
                    <div 
                      key={lIndex} 
                      className="relative pl-12 pr-6 py-4 rounded-2xl flex items-center justify-between hover:bg-slate-50 transition-all group/lesson cursor-pointer"
                    >
                      {/* Connection Dot */}
                      <div className="absolute left-[24px] w-2 h-2 rounded-full bg-slate-200 border-2 border-white group-hover/lesson:bg-primary group-hover/lesson:scale-150 transition-all z-10"></div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-slate-300 group-hover/lesson:text-primary transition-colors">
                          <PlayCircle size={20} />
                        </div>
                        <div>
                           <span className="text-[15px] font-bold text-slate-700 bengali-text group-hover/lesson:text-slate-900">{lesson.title}</span>
                           <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                             <Clock size={10} /> {lesson.duration}
                           </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {lesson.isFree ? (
                          <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-100 bengali-text animate-pulse">
                            <Zap size={10} fill="currentColor" /> ফ্রি প্রিভিউ
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 group-hover/lesson:bg-slate-200 transition-colors">
                             <Lock size={14} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CourseAccordion;
