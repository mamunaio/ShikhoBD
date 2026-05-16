import React from 'react';
import { ArrowLeft, BookOpen, Award, StickyNote, User } from 'lucide-react';
import Link from 'next/link';

const PlayerHeader = ({ courseTitle, completedCount, totalCount }) => {
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <header className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 sticky top-0 z-50 shadow-sm">
      {/* Left: Branding & Course Title */}
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <Link href="/dashboard/student" className="text-gray-400 hover:text-primary transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div className="flex items-center gap-2 border-l border-gray-100 pl-4">
           <div className="bg-primary p-1.5 rounded-lg text-white">
              <BookOpen size={16} />
           </div>
           <h1 className="font-bold text-primary tracking-tight text-lg hidden sm:block">ShikhoBD</h1>
           <span className="text-gray-400 mx-2 hidden sm:block">|</span>
           <h2 className="text-sm font-medium text-gray-500 truncate bengali-text max-w-[300px]">
             {courseTitle}
           </h2>
        </div>
      </div>

      {/* Center: Progress Bar */}
      <div className="hidden md:flex flex-col items-center flex-1 px-8 gap-1.5">
         <div className="w-full max-w-md h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: `${progressPercent}%` }} />
         </div>
         <span className="text-[10px] font-bold text-primary uppercase tracking-widest bengali-text">
            {completedCount}/{totalCount} লেসন সম্পন্ন ({progressPercent}%)
         </span>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-2">
         <div className="flex items-center gap-1">
            <button className="p-2 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-lg transition-all relative group">
               <StickyNote size={20} />
               <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">নোট লিখুন</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-lg transition-all relative group">
               <Award size={20} />
               <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">সার্টিফিকেট</span>
            </button>
         </div>
         <div className="h-8 w-[1px] bg-gray-100 mx-2" />
         <div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white shadow-md">
            RA
         </div>
      </div>
    </header>
  );
};

export default PlayerHeader;
