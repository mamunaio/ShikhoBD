import React from 'react';
import { Star } from 'lucide-react';

const TopCoursesTable = ({ courses }) => {
  const getRankStyle = (rank) => {
    switch (rank) {
      case 1: return 'bg-[#BA7517] text-white'; // Gold
      case 2: return 'bg-[#888780] text-white'; // Silver
      case 3: return 'bg-[#993C1D] text-white'; // Bronze
      default: return 'bg-gray-100 text-gray-500';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="border-b border-gray-50">
          <tr>
            <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">র্যাংক</th>
            <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest bengali-text">কোর্সের নাম</th>
            <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest bengali-text">Instructor</th>
            <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">এনরোলমেন্ট</th>
            <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">রেভিনিউ</th>
            <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">রেটিং</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {courses.map((course, index) => {
            const rank = index + 1;
            return (
              <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-4 py-4 text-center">
                  <div className={`w-6 h-6 rounded-full mx-auto flex items-center justify-center text-[10px] font-bold ${getRankStyle(rank)}`}>
                    {rank}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="font-bold text-gray-900 text-sm bengali-text line-clamp-1">{course.title}</span>
                </td>
                <td className="px-4 py-4 text-xs text-gray-500">{course.instructor}</td>
                <td className="px-4 py-4 text-sm font-bold text-gray-700 text-center">{course.enrollments.toLocaleString()}</td>
                <td className="px-4 py-4 text-sm font-bold text-primary text-right">৳{course.revenue.toLocaleString()}</td>
                <td className="px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-gray-700">
                    <Star size={10} className="text-amber-400 fill-amber-400" />
                    {course.rating}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TopCoursesTable;
