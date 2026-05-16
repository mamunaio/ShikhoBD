import React from 'react';
import { Check, X, Eye } from 'lucide-react';

const CourseModerationRow = ({ pending, onAction }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {pending.map((course, index) => (
        <div key={index} className="p-5 bg-white border border-gray-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 flex-1">
             <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-primary font-bold">
                {course.title.charAt(0)}
             </div>
             <div className="space-y-1">
                <h5 className="font-bold text-gray-900 text-sm bengali-text">{course.title}</h5>
                <p className="text-[10px] text-gray-500 font-medium">By: {course.instructor} • {course.date}</p>
                <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                   {course.category}
                </span>
             </div>
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
             <button 
               onClick={() => onAction('approve', course.id)}
               className="flex-1 md:flex-none bg-emerald-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors bengali-text"
             >
                অনুমোদন করুন
             </button>
             <button 
               onClick={() => onAction('reject', course.id)}
               className="flex-1 md:flex-none border border-red-100 text-red-500 px-4 py-2 rounded-lg text-xs font-bold hover:bg-red-50 transition-colors bengali-text"
             >
                রিজেক্ট করুন
             </button>
             <button className="flex-1 md:flex-none border border-primary/20 text-primary px-4 py-2 rounded-lg text-xs font-bold hover:bg-accent transition-colors bengali-text">
                প্রিভিউ
             </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseModerationRow;
