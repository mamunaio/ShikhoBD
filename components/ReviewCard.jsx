import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <div className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all hover:shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
          {review.author.charAt(0)}
        </div>
        <div>
          <h5 className="font-bold text-gray-900 bengali-text">{review.author}</h5>
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed bengali-text">
        {review.comment}
      </p>
    </div>
  );
};

export default ReviewCard;
