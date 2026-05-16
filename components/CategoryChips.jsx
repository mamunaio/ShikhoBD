import React from 'react';
import Link from 'next/link';

const categories = [
  "Programming", "Data Science", "Design", 
  "Marketing", "App Dev", "Finance", "Language",
  "Business"
];

const CategoryChips = () => {
  return (
    <div className="bg-gray-50 py-8 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          <Link href="/courses">
            <div className="flex-shrink-0 bg-primary text-white px-6 py-2.5 rounded-full font-black text-sm shadow-lg shadow-primary/20 cursor-pointer hover:bg-primary-dark transition-all">
              All Categories
            </div>
          </Link>
          {categories.map((category, index) => (
            <Link key={index} href={`/courses?category=${category.toLowerCase()}`}>
              <div 
                className="flex-shrink-0 bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full font-bold text-sm hover:border-primary hover:text-primary transition-all cursor-pointer whitespace-nowrap active:scale-95 hover:shadow-md"
              >
                {category}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CategoryChips;
