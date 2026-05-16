import React from 'react';

const ActivityFeed = ({ activities }) => {
  const getDotColor = (type) => {
    switch (type) {
      case 'enroll': return 'bg-emerald-500';
      case 'course': return 'bg-blue-500';
      case 'payout': return 'bg-amber-500';
      case 'refund': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-100">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start gap-4 relative pl-6">
          <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10 ${getDotColor(activity.type)}`} />
          <div className="space-y-1">
            <p className="text-sm text-gray-700 bengali-text leading-tight">{activity.text}</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
