import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
            {review.studentName.charAt(0)}
          </div>
          <div>
            <h5 className="font-bold text-gray-900 text-sm bengali-text leading-tight">{review.studentName}</h5>
            <p className="text-[10px] text-gray-400 font-medium bengali-text">{review.courseName}</p>
          </div>
        </div>
        <span className="text-[10px] text-gray-400 font-medium">{review.date}</span>
      </div>

      <div className="space-y-2">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} />
          ))}
        </div>
        <p className="text-gray-600 text-xs leading-relaxed bengali-text line-clamp-2">
          {review.text}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
