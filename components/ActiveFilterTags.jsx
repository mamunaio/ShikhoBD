import React from 'react';
import { X, ChevronDown } from 'lucide-react';

const ActiveFilterTags = ({ filters, removeFilter, sortOption, setSortOption }) => {
  const getFilterLabels = () => {
    const labels = [];
    
    if (filters.subjects) {
      filters.subjects.forEach(id => labels.push({ type: 'subjects', id, label: id.charAt(0).toUpperCase() + id.slice(1) }));
    }
    
    if (filters.types) {
      const typeLabels = { video: 'ভিডিও কোর্স', live: 'লাইভ ক্লাস', certificate: 'সার্টিফিকেট কোর্স' };
      filters.types.forEach(id => labels.push({ type: 'types', id, label: typeLabels[id] }));
    }

    if (filters.prices) {
      const priceLabels = { free: 'ফ্রি', paid: 'পেইড', under500: '৳৫০০ এর নিচে', '500-2000': '৳৫০০–৳২০০০' };
      filters.prices.forEach(id => labels.push({ type: 'prices', id, label: priceLabels[id] }));
    }

    if (filters.rating) {
      labels.push({ type: 'rating', id: filters.rating, label: `${filters.rating}+ রেটিং` });
    }

    return labels;
  };

  const activeTags = getFilterLabels();

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex flex-wrap items-center gap-2">
        {activeTags.map((tag, index) => (
          <div 
            key={`${tag.type}-${tag.id}`}
            className="flex items-center gap-1.5 bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold border border-primary/10 animate-in fade-in zoom-in duration-300"
          >
            <span className="bengali-text">{tag.label}</span>
            <button 
              onClick={() => removeFilter(tag.type, tag.id)}
              className="hover:bg-primary/20 p-0.5 rounded-full transition-colors"
            >
              <X size={12} />
            </button>
          </div>
        ))}
        {activeTags.length > 0 && (
          <button 
            onClick={() => removeFilter('all')}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors underline underline-offset-2 ml-2"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="relative group">
        <select 
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer bengali-text transition-all"
        >
          <option value="popularity">জনপ্রিয়তা অনুযায়ী</option>
          <option value="new">নতুন কোর্স</option>
          <option value="lowPrice">কম দামে</option>
          <option value="highRating">বেশি রেটিং</option>
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-primary transition-colors">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default ActiveFilterTags;
