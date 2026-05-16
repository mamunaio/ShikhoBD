import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

const LiveClassCard = ({ liveClass }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 flex-1">
        <div className="w-14 h-14 bg-accent text-primary rounded-xl flex items-center justify-center">
           <Calendar size={28} />
        </div>
        <div className="space-y-1">
          <h5 className="font-bold text-gray-900 text-sm bengali-text line-clamp-1">{liveClass.title}</h5>
          <p className="text-[10px] text-gray-500 font-medium bengali-text">{liveClass.courseName}</p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold">
               <Clock size={12} className="text-primary" />
               {liveClass.time} ({liveClass.duration})
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold">
               <Users size={12} className="text-primary" />
               {liveClass.enrolledCount} Students
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 w-full md:w-auto">
        {liveClass.isReady ? (
          <button className="flex-1 md:flex-none bg-green-600 text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-green-700 transition-colors bengali-text">
            Start Class
          </button>
        ) : (
          <button className="flex-1 md:flex-none border border-gray-200 text-gray-600 px-6 py-2 rounded-lg text-xs font-bold hover:border-primary hover:text-primary transition-all bengali-text">
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default LiveClassCard;
