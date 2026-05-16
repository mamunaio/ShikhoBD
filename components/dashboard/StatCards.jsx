import React from 'react';
import { BookOpen, CheckCircle, Award, Clock } from 'lucide-react';

const StatCards = ({ stats }) => {
  const cards = [
    { label: 'ভর্তি হওয়া কোর্স', value: stats.enrolled, icon: <BookOpen className="text-blue-500" />, bg: 'bg-blue-50' },
    { label: 'সম্পন্ন কোর্স', value: stats.completed, icon: <CheckCircle className="text-emerald-500" />, bg: 'bg-emerald-50' },
    { label: 'অর্জিত সার্টিফিকেট', value: stats.certificates, icon: <Award className="text-amber-500" />, bg: 'bg-amber-50' },
    { label: 'মোট শেখার সময়', value: `${stats.learningHours} ঘণ্টা`, icon: <Clock className="text-purple-500" />, bg: 'bg-purple-50' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
          <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center`}>
            {card.icon}
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900 bengali-text">{card.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{card.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
