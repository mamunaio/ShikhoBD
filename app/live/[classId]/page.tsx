"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  MessageSquare, 
  Share2, 
  Heart, 
  Send, 
  ChevronRight,
  ArrowLeft,
  Bell,
  MoreVertical
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const LiveClassPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { user: 'Rahat', text: 'ভাইয়া, নেক্সট জেএস ১৬ এর আপডেটগুলো কি আজকে দেখাবেন?' },
    { user: 'Sultana', text: 'চমৎকার ক্লাস হচ্ছে!' },
    { user: 'Kamal', text: 'সাউন্ড ক্লিয়ার আছে।' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { user: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="h-screen bg-[#020617] text-slate-200 flex flex-col overflow-hidden font-inter">
      {/* Live Header */}
      <header className="h-20 border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-xl px-6 flex items-center justify-between z-50">
         <div className="flex items-center gap-6">
            <button onClick={() => router.back()} className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all">
               <ArrowLeft size={20} />
            </button>
            <div className="flex flex-col">
               <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-red-500 rounded-md animate-pulse">
                     <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-white">Live</span>
                  </div>
                  <h1 className="text-lg font-black text-white bengali-text">গ্রাফিক ডিজাইন মাস্টারক্লাস: লেসন-০৫</h1>
               </div>
               <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                     <Users size={12} /> ১২৫০ জন দেখছেন
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                     ইন্সট্রাক্টর: আসিফ রহমান
                  </div>
               </div>
            </div>
         </div>
         
         <div className="flex items-center gap-3">
            <button className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all text-slate-400 hover:text-primary"><Share2 size={20} /></button>
            <button className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all text-slate-400 hover:text-amber-500"><Bell size={20} /></button>
            <button className="px-6 py-3 bg-red-600 text-white rounded-xl font-black text-sm bengali-text hover:bg-red-700 shadow-xl shadow-red-600/20 transition-all">সেশন ত্যাগ করুন</button>
         </div>
      </header>

      {/* Main Content Layout */}
      <div className="flex-1 flex overflow-hidden">
         {/* Video Area */}
         <div className="flex-1 relative bg-black flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-50"></div>
            <div className="w-full max-w-6xl aspect-video rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.1)] border border-slate-800/50 relative group">
               <iframe 
                 className="w-full h-full"
                 src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&modestbranding=1&showinfo=0&rel=0"
                 title="Live Stream"
                 allowFullScreen
               ></iframe>
               
               {/* Video Overlay Info */}
               <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                     <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                     <span className="text-[10px] font-bold text-white uppercase tracking-widest">1080p High Quality</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Chat Sidebar */}
         <aside className="w-[400px] border-l border-slate-800/50 flex flex-col bg-[#020617]">
            <div className="p-6 border-b border-slate-800/30 flex items-center justify-between shrink-0">
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                  <MessageSquare size={16} /> Live Discussion
               </h3>
               <button className="text-slate-500 hover:text-white"><MoreVertical size={18} /></button>
            </div>
            
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
               {messages.map((msg, i) => (
                 <div key={i} className={`flex flex-col gap-1.5 animate-in slide-in-from-bottom-2 duration-300 ${msg.user === 'You' ? 'items-end' : 'items-start'}`}>
                    <div className="flex items-center gap-2">
                       <span className={`text-[10px] font-black uppercase tracking-widest ${msg.user === 'You' ? 'text-primary' : 'text-slate-500'}`}>{msg.user}</span>
                       <span className="text-[8px] text-slate-700 font-bold">10:45 PM</span>
                    </div>
                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm font-medium bengali-text ${msg.user === 'You' ? 'bg-primary text-white rounded-tr-none' : 'bg-slate-800/50 text-slate-300 rounded-tl-none border border-slate-700/30'}`}>
                       {msg.text}
                    </div>
                 </div>
               ))}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-slate-800/30">
               <form onSubmit={handleSendMessage} className="relative">
                  <input 
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl pl-6 pr-14 py-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none bengali-text placeholder:text-slate-600"
                    placeholder="কিছু লিখুন..."
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                  >
                     <Send size={18} />
                  </button>
               </form>
               <div className="flex items-center gap-4 mt-4 justify-center">
                  <button className="flex items-center gap-1.5 text-[10px] font-black text-slate-500 hover:text-red-500 transition-colors uppercase tracking-widest">
                     <Heart size={14} /> 120 Likes
                  </button>
                  <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                  <button className="flex items-center gap-1.5 text-[10px] font-black text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">
                     Share Session
                  </button>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
};

export default LiveClassPage;
