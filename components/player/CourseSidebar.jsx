import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, CheckCircle2, 
  PlayCircle, Lock, Menu, X 
} from 'lucide-react';

const CourseSidebar = ({ modules, currentLessonId }) => {
  const [openModules, setOpenModules] = useState([0]);

  const toggleModule = (idx) => {
    setOpenModules(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="bg-white border-l border-gray-100 flex flex-col h-[calc(100vh-56px)] sticky top-14">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <Menu size={18} className="text-gray-400" />
            <h3 className="font-bold text-gray-900 text-sm bengali-text">কোর্সের বিষয়সূচি</h3>
         </div>
         <button className="lg:hidden text-gray-400"><X size={20} /></button>
      </div>

      {/* Progress Summary */}
      <div className="p-4 bg-gray-50/50 space-y-2">
         <div className="flex justify-between items-center text-[10px] font-bold">
            <span className="text-gray-400">COURSE PROGRESS</span>
            <span className="text-primary">25%</span>
         </div>
         <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: '25%' }} />
         </div>
      </div>

      {/* Module List */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-10">
         {modules.map((module, mIdx) => (
            <div key={mIdx} className="border-b border-gray-50">
               <button 
                 onClick={() => toggleModule(mIdx)}
                 className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
               >
                  <div className="flex-1 min-w-0 pr-4">
                     <h4 className="font-bold text-gray-900 text-xs bengali-text line-clamp-1">{module.title}</h4>
                     <p className="text-[10px] text-gray-400 font-medium">{module.lessons.length} লেসন • {module.completedCount}/{module.lessons.length} সম্পন্ন</p>
                  </div>
                  <div className="text-gray-300">
                     {openModules.includes(mIdx) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
               </button>

               {openModules.includes(mIdx) && (
                  <div className="bg-white">
                     {module.lessons.map((lesson, lIdx) => {
                        const isPlaying = lesson.id === currentLessonId;
                        return (
                           <div 
                             key={lIdx} 
                             className={`px-4 py-3 flex items-center justify-between cursor-pointer border-l-2 transition-all group ${
                               isPlaying 
                               ? 'bg-primary/5 border-primary' 
                               : 'border-transparent hover:bg-gray-50'
                             }`}
                           >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                 <div className="shrink-0">
                                    {lesson.isCompleted ? (
                                       <CheckCircle2 size={16} className="text-emerald-500" />
                                    ) : lesson.isLocked ? (
                                       <Lock size={16} className="text-gray-300" />
                                    ) : isPlaying ? (
                                       <PlayCircle size={16} className="text-primary animate-pulse" />
                                    ) : (
                                       <PlayCircle size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
                                    )}
                                 </div>
                                 <div className="min-w-0">
                                    <p className={`text-xs font-medium bengali-text truncate ${isPlaying ? 'text-primary' : 'text-gray-600'}`}>
                                       {lesson.title}
                                    </p>
                                    <span className="text-[9px] text-gray-400">{lesson.duration}</span>
                                 </div>
                              </div>
                              {lesson.isFree && !lesson.isCompleted && (
                                 <span className="bg-emerald-100 text-emerald-600 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">Free</span>
                              )}
                           </div>
                        );
                     })}
                  </div>
               )}
            </div>
         ))}
      </div>
    </div>
  );
};

export default CourseSidebar;
