import React from 'react';
import { Edit2, Eye, Star } from 'lucide-react';

const CourseTable = ({ courses }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Published': return 'bg-green-50 text-green-800';
      case 'Draft': return 'bg-amber-50 text-amber-800';
      case 'Under Review': return 'bg-blue-50 text-blue-800';
      default: return 'bg-gray-50 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text">কোর্সের নাম</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text">ক্যাটাগরি</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text text-center">শিক্ষার্থী</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text text-center">রেটিং</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text text-right">আয়</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text text-center">স্ট্যাটাস</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text text-center">অ্যাকশন</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {courses.map((course, index) => (
            <tr key={index} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="font-bold text-gray-900 text-sm bengali-text line-clamp-1">{course.title}</div>
              </td>
              <td className="px-6 py-4 text-xs text-gray-500 font-medium">{course.category}</td>
              <td className="px-6 py-4 text-sm text-gray-700 font-bold text-center">{course.students.toLocaleString()}</td>
              <td className="px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-1 text-xs font-bold text-gray-700">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  {course.rating}
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="text-sm font-bold text-primary">৳{course.revenue.toLocaleString()}</div>
              </td>
              <td className="px-6 py-4 text-center">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${getStatusStyle(course.status)}`}>
                  {course.status}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                    <Edit2 size={16} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                    <Eye size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
