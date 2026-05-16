import React from 'react';
import { Check, X, User } from 'lucide-react';

const InstructorApproval = ({ pending, onAction }) => {
  return (
    <div className="space-y-4">
      {pending.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow last:border-b-0">
          <div className="flex items-center gap-4 flex-1">
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                {item.name.charAt(0)}
             </div>
             <div>
                <h5 className="font-bold text-gray-900 text-sm bengali-text">{item.name}</h5>
                <p className="text-[10px] text-gray-500 font-medium mb-1">{item.email} • Submitted: {item.date}</p>
                <p className="text-[11px] text-gray-400 bengali-text line-clamp-1">{item.bio}</p>
             </div>
          </div>

          <div className="flex gap-2 w-full md:w-auto">
             <button 
               onClick={() => onAction('approve', item.id)}
               className="flex-1 md:flex-none flex items-center justify-center gap-1.5 bg-emerald-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors bengali-text"
             >
                <Check size={14} /> অনুমোদন করুন
             </button>
             <button 
               onClick={() => onAction('reject', item.id)}
               className="flex-1 md:flex-none flex items-center justify-center gap-1.5 border border-red-100 text-red-500 px-4 py-2 rounded-lg text-xs font-bold hover:bg-red-50 transition-colors bengali-text"
             >
                <X size={14} /> প্রত্যাখ্যান
             </button>
          </div>
        </div>
      ))}
      {pending.length === 0 && (
        <p className="text-center py-6 text-gray-400 text-sm">কোনো পেন্ডিং রিকোয়েস্ট নেই।</p>
      )}
    </div>
  );
};

export default InstructorApproval;
