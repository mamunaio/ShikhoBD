import React from 'react';
import { Star, BookOpen, Clock, Users, PlayCircle } from 'lucide-react';
import Link from 'next/link';

const CourseCard = ({ course, isBestseller, variant = 'default' }) => {
  const isFeatured = isBestseller; // Mapping bestseller to featured for border style

  if (variant === 'listing') {
    return (
      <Link href={`/courses/${course.id}`} className={`group block bg-white rounded-xl overflow-hidden transition-all duration-300 border ${isFeatured ? 'border-primary ring-1 ring-primary/20 shadow-lg shadow-primary/5' : 'border-gray-100 hover:border-primary/30 hover:shadow-md'}`}>
        {/* Thumbnail Area */}
        <div className="relative h-[120px] bg-accent/30 flex items-center justify-center overflow-hidden">
          <div className="text-primary/20 transform group-hover:scale-110 transition-transform duration-500">
            <BookOpen size={48} strokeWidth={1} />
          </div>
          
          {course.isBestseller && (
            <div className="absolute top-2 right-2 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
              Bestseller
            </div>
          )}
          
          <div className="absolute bottom-2 left-2">
            <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
              {course.category}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-3 space-y-2">
          <h3 className="text-sm font-medium text-gray-900 leading-tight bengali-text line-clamp-2 h-10 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
          <div className="flex items-center justify-between text-[11px] text-gray-500">
            <span className="truncate max-w-[100px]">{course.instructor}</span>
            <span className="flex items-center gap-1">
              <PlayCircle size={12} />
              {course.lessonCount} Lessons
            </span>
          </div>

          <div className="flex items-center gap-1">
            <div className="flex text-amber-400">
              <Star size={10} fill="currentColor" />
            </div>
            <span className="text-[11px] font-bold text-gray-700">{course.rating}</span>
            <span className="text-[10px] text-gray-400">({course.reviewCount})</span>
          </div>

          <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-bold text-primary">৳{course.price}</span>
              <span className="text-[10px] text-gray-400 line-through">৳{course.originalPrice}</span>
            </div>
            <button className="text-primary hover:bg-primary hover:text-white p-1 rounded transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>
          </div>
        </div>
      </Link>
    );
  }

  // Original Homepage Variant
  return (
    <Link href={`/courses/${course.id}`} className={`group block relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border ${isBestseller ? 'border-primary ring-1 ring-primary shadow-lg shadow-primary/10' : 'border-gray-100'}`}>
      <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity" />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded">
          {course.category}
        </div>
        {isBestseller && (
          <div className="absolute top-3 right-3 bg-amber-400 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow-sm">
            Bestseller
          </div>
        )}
        <div className="w-full h-full flex items-center justify-center text-gray-300">
           <div className="w-12 h-12 border-2 border-dashed border-gray-300 rounded-lg" />
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 bengali-text group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
          By <span className="font-semibold text-gray-700">{course.instructor}</span>
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < Math.floor(course.rating) ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-700">{course.rating}</span>
            <span className="text-xs text-gray-400">({course.reviews || course.reviewCount})</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
           <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{course.duration || '20h'}</span>
           </div>
           <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{course.students || '1k+'}</span>
           </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">৳{course.price}</span>
            <span className="text-sm text-gray-400 line-through">৳{course.originalPrice}</span>
          </div>
          <button className="p-2 bg-accent text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
