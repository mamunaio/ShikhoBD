import React from 'react';

const EnrollmentRow = ({ enrollment }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
          {enrollment.studentName.charAt(0)}
        </div>
        <div className="space-y-0.5">
           <h5 className="font-bold text-gray-900 text-sm bengali-text">{enrollment.studentName}</h5>
           <p className="text-[10px] text-gray-400 font-medium bengali-text line-clamp-1">{enrollment.courseName}</p>
        </div>
      </div>

      <div className="text-right space-y-0.5">
        <div className="text-sm font-bold text-gray-900">৳{enrollment.amount}</div>
        <div className="text-[10px] text-gray-400 font-medium">{enrollment.date}</div>
      </div>
    </div>
  );
};

export default EnrollmentRow;
