import React from 'react';
import { MessageSquare, ThumbsUp } from 'lucide-react';

const QnABlock = () => {
  const threads = [
    {
      id: 1,
      author: "রাকিব হাসান",
      question: "Flex-basis আর Width এর মধ্যে প্রধান পার্থক্য কি?",
      time: "২ ঘণ্টা আগে",
      replies: [
        { author: "হাসিন হায়দার", role: "Instructor", text: "Flex-basis মেইন এক্সিস বরাবর স্পেস নির্ধারণ করে, আর width ফিক্সড সাইজ দেয়। ফ্লেক্স আইটেমের ক্ষেত্রে flex-basis বেশি ফ্লেক্সিবল।" }
      ],
      likes: 5
    },
    {
      id: 2,
      author: "নুসরাত জাহান",
      question: "Flex-wrap: wrap দিলে কি কলামে পরিবর্তন আসবে?",
      time: "৫ ঘণ্টা আগে",
      replies: [],
      likes: 2
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Ask Question Area */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
         <textarea 
           className="w-full bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-sm text-gray-700 bengali-text resize-none h-24 p-4"
           placeholder="আপনার প্রশ্ন লিখুন..."
         />
         <div className="flex justify-end pt-4">
            <button className="bg-primary text-white px-8 py-2.5 rounded-xl text-xs font-bold hover:bg-primary-dark transition-all bengali-text">
               প্রশ্ন করুন
            </button>
         </div>
      </div>

      {/* Threads List */}
      <div className="space-y-6">
         {threads.map(thread => (
            <div key={thread.id} className="space-y-4">
               <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400">
                     {thread.author.charAt(0)}
                  </div>
                  <div className="flex-1 space-y-1">
                     <div className="flex items-center justify-between">
                        <h5 className="font-bold text-gray-900 text-sm bengali-text">{thread.author}</h5>
                        <span className="text-[10px] text-gray-400">{thread.time}</span>
                     </div>
                     <p className="text-sm text-gray-600 leading-relaxed bengali-text">{thread.question}</p>
                     <div className="flex items-center gap-4 pt-2">
                        <button className="flex items-center gap-1.5 text-[10px] text-gray-400 hover:text-primary font-bold transition-colors">
                           <ThumbsUp size={12} /> {thread.likes}
                        </button>
                        <button className="flex items-center gap-1.5 text-[10px] text-gray-400 hover:text-primary font-bold transition-colors">
                           <MessageSquare size={12} /> Reply
                        </button>
                     </div>
                  </div>
               </div>

               {/* Instructor Replies */}
               {thread.replies.map((reply, rIdx) => (
                  <div key={rIdx} className="ml-14 pl-6 border-l-2 border-primary/20 bg-emerald-50/30 p-4 rounded-xl space-y-2">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <h6 className="font-bold text-gray-900 text-xs bengali-text">{reply.author}</h6>
                           <span className="bg-primary text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">Instructor</span>
                        </div>
                     </div>
                     <p className="text-xs text-gray-600 leading-relaxed bengali-text">{reply.text}</p>
                  </div>
               ))}
            </div>
         ))}
      </div>
    </div>
  );
};

export default QnABlock;
