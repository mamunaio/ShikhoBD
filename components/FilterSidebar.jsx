import React from 'react';
import { Star } from 'lucide-react';

const FilterSidebar = ({ filters, setFilters, resetFilters }) => {
  const subjects = [
    { id: 'programming', label: 'Programming', count: 142 },
    { id: 'datascience', label: 'Data Science', count: 87 },
    { id: 'design', label: 'Design', count: 65 },
    { id: 'marketing', label: 'Marketing', count: 53 },
    { id: 'language', label: 'Language', count: 48 },
  ];

  const types = [
    { id: 'video', label: 'ভিডিও কোর্স' },
    { id: 'live', label: 'লাইভ ক্লাস' },
    { id: 'certificate', label: 'সার্টিফিকেট কোর্স' },
  ];

  const prices = [
    { id: 'free', label: 'ফ্রি' },
    { id: 'paid', label: 'পেইড' },
    { id: 'under500', label: '৳৫০০ এর নিচে' },
    { id: '500-2000', label: '৳৫০০–৳২০০০' },
  ];

  const ratings = [
    { id: '4.5', label: '৪.৫+', stars: 5 },
    { id: '4.0', label: '৪.০+', stars: 4 },
    { id: '3.0', label: '৩.০+', stars: 3 },
  ];

  const handleCheckboxChange = (category, id) => {
    const current = filters[category] || [];
    const updated = current.includes(id) 
      ? current.filter(item => item !== id)
      : [...current, id];
    setFilters({ ...filters, [category]: updated });
  };

  return (
    <aside className="w-[220px] flex-shrink-0 sticky top-24 h-[calc(100vh-120px)] overflow-y-auto no-scrollbar pr-4 pb-10">
      <div className="space-y-8">
        
        {/* Subject Filter */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4 bengali-text">বিষয়</h3>
          <div className="space-y-3">
            {subjects.map(sub => (
              <label key={sub.id} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                    checked={filters.subjects?.includes(sub.id)}
                    onChange={() => handleCheckboxChange('subjects', sub.id)}
                  />
                  <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">{sub.label}</span>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors bengali-text">
                  {sub.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4 bengali-text">কোর্স টাইপ</h3>
          <div className="space-y-3">
            {types.map(type => (
              <label key={type.id} className="flex items-center gap-2 group cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                  checked={filters.types?.includes(type.id)}
                  onChange={() => handleCheckboxChange('types', type.id)}
                />
                <span className="text-sm text-gray-600 group-hover:text-primary transition-colors bengali-text">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4 bengali-text">মূল্য</h3>
          <div className="space-y-3">
            {prices.map(price => (
              <label key={price.id} className="flex items-center gap-2 group cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                  checked={filters.prices?.includes(price.id)}
                  onChange={() => handleCheckboxChange('prices', price.id)}
                />
                <span className="text-sm text-gray-600 group-hover:text-primary transition-colors bengali-text">{price.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4 bengali-text">রেটিং</h3>
          <div className="space-y-3">
            {ratings.map(rate => (
              <label key={rate.id} className="flex items-center gap-2 group cursor-pointer">
                <input 
                  type="radio" 
                  name="rating"
                  className="w-4 h-4 border-gray-300 text-primary focus:ring-primary cursor-pointer"
                  checked={filters.rating === rate.id}
                  onChange={() => setFilters({ ...filters, rating: rate.id })}
                />
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < rate.stars ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-primary transition-colors bengali-text">{rate.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <button 
          onClick={resetFilters}
          className="w-full py-2.5 border border-gray-200 text-gray-500 rounded-lg text-sm font-medium hover:bg-gray-50 hover:text-primary hover:border-primary transition-all bengali-text active:scale-95"
        >
          ফিল্টার রিসেট করুন
        </button>
      </div>
    </aside>
  );
};

export default FilterSidebar;
