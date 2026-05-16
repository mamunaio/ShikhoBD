import React from 'react';
import { Star } from 'lucide-react';

const RatingBreakdown = ({ ratings }) => {
  // dummy default if not provided
  const data = ratings || [
    { stars: 5, percentage: 85, count: 420 },
    { stars: 4, percentage: 12, count: 65 },
    { stars: 3, percentage: 3, count: 15 },
  ];

  return (
    <div className="space-y-3 flex-1">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="flex items-center gap-1 w-12 shrink-0">
            <span className="text-sm font-bold text-gray-600">{item.stars}</span>
            <Star size={12} className="text-amber-400 fill-amber-400" />
          </div>
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-amber-400 rounded-full transition-all duration-1000"
              style={{ width: `${item.percentage}%` }}
            />
          </div>
          <span className="text-xs text-gray-400 w-8 text-right">{item.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default RatingBreakdown;
