import React from 'react';
import { PlayCircle, BookOpen } from 'lucide-react';

const CourseProgressCard = ({ course }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-primary/20 transition-all group shrink-0 w-[300px]">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 bg-accent/30 rounded-xl flex items-center justify-center text-primary transform group-hover:scale-110 transition-transform">
          <BookOpen size={28} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 text-sm bengali-text line-clamp-2 h-10 leading-tight">
            {course.title}
          </h4>
          <p className="text-[10px] text-gray-400 mt-1">{course.instructor}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center text-[10px] font-bold">
           <span className="text-gray-400 uppercase">Progress</span>
           <span className="text-primary">{course.progress}%</span>
        </div>
        <div className="h-1.5 bg-gray-50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-1000" 
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <button className="w-full mt-5 bg-primary text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors bengali-text">
        <PlayCircle size={16} />
        চালিয়ে যান
      </button>
    </div>
  );
};

export default CourseProgressCard;
