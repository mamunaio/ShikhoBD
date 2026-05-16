import React from 'react';
import { Calendar, User } from 'lucide-react';

const LiveClassRow = ({ liveClass }) => {
  const isToday = liveClass.isToday;

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative">
          <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
             <Calendar size={24} />
          </div>
          {isToday && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          )}
        </div>
        
        <div>
          <h5 className="font-bold text-gray-900 text-sm bengali-text">{liveClass.title}</h5>
          <div className="flex items-center gap-4 mt-1">
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
               <User size={12} className="text-primary" />
               <span className="bengali-text">{liveClass.instructor}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
               <Calendar size={12} className="text-primary" />
               <span className="bengali-text">{liveClass.dateTime}</span>
            </div>
          </div>
        </div>
      </div>

      <button className={`px-6 py-2 rounded-lg text-xs font-bold transition-all bengali-text whitespace-nowrap ${
        isToday 
          ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-100' 
          : 'bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
      }`}>
        {isToday ? 'Join করুন' : 'শিডিউল দেখুন'}
      </button>
    </div>
  );
};

export default LiveClassRow;
