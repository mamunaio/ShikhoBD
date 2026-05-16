import React from 'react';
import { ChevronRight } from 'lucide-react';

const QuizResultRow = ({ result }) => {
  const isHigh = result.score >= 80;

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors group">
      <div className="flex items-center gap-4">
        <div className="space-y-1">
           <h5 className="font-bold text-gray-900 text-sm bengali-text">{result.name}</h5>
           <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">{result.date}</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className={`px-3 py-1 rounded-full text-[10px] font-bold ${
          isHigh ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
        }`}>
          Score: {result.score}%
        </div>
        <button className="flex items-center gap-1 text-[10px] font-bold text-primary hover:underline uppercase tracking-wider">
           Details
           <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default QuizResultRow;
