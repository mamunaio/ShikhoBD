import React, { useState } from 'react';
import { 
  Play, Pause, Volume2, Maximize, 
  Settings, ChevronLeft, ChevronRight, 
  Bookmark, Edit3 
} from 'lucide-react';

const VideoPlayer = ({ lessonTitle, moduleTitle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  return (
    <div className="space-y-6">
      {/* Video Container */}
      <div className="relative aspect-video bg-black rounded-3xl overflow-hidden group shadow-2xl">
         {/* Mock Video Content */}
         <div className="absolute inset-0 flex items-center justify-center">
            {!isPlaying && (
              <button 
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95"
              >
                <Play size={40} fill="currentColor" />
              </button>
            )}
         </div>

         {/* Bottom Control Bar */}
         <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity space-y-4">
            <input 
              type="range" 
              className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer accent-primary" 
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            />
            <div className="flex items-center justify-between text-white">
               <div className="flex items-center gap-6">
                  <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                  </button>
                  <div className="flex items-center gap-2">
                    <Volume2 size={20} />
                    <span className="text-xs font-medium">12:45 / 45:20</span>
                  </div>
               </div>
               <div className="flex items-center gap-6">
                  <select className="bg-transparent text-xs font-bold focus:outline-none cursor-pointer">
                    <option className="text-black">0.75x</option>
                    <option className="text-black" selected>1.0x</option>
                    <option className="text-black">1.25x</option>
                    <option className="text-black">1.5x</option>
                    <option className="text-black">2.0x</option>
                  </select>
                  <Maximize size={20} className="cursor-pointer" />
               </div>
            </div>
         </div>
      </div>

      {/* Lesson Info Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-2">
         <div className="space-y-1">
            <p className="text-[10px] text-primary font-bold uppercase tracking-widest bengali-text">{moduleTitle}</p>
            <h3 className="text-xl font-bold text-gray-900 bengali-text">{lessonTitle}</h3>
         </div>
         <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
               <button className="p-2 text-gray-400 hover:text-primary transition-colors"><ChevronLeft size={20} /></button>
               <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary-dark transition-all bengali-text">
                  পরবর্তী লেসন
                  <ChevronRight size={16} />
               </button>
            </div>
            <div className="h-10 w-[1px] bg-gray-100 mx-1" />
            <div className="flex items-center gap-2">
               <button className="p-2.5 bg-gray-50 text-gray-400 rounded-xl hover:text-primary hover:bg-accent border border-gray-100 transition-all">
                  <Bookmark size={18} />
               </button>
               <button className="flex items-center gap-2 text-primary font-bold text-xs hover:underline bengali-text px-2">
                  <Edit3 size={16} />
                  নোট যোগ করুন
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
