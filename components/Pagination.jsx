import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [1, 2, 3, '...', 18];

  return (
    <div className="flex items-center justify-center gap-2 py-12">
      <button 
        className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
      >
        <ChevronLeft size={20} />
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
            page === currentPage 
              ? 'bg-primary text-white shadow-lg shadow-primary/20' 
              : 'text-gray-600 hover:bg-gray-50'
          } ${page === '...' ? 'cursor-default' : ''}`}
        >
          {page}
        </button>
      ))}

      <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-primary hover:border-primary transition-all">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
