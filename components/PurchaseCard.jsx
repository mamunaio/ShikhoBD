import React from 'react';
import { Infinity, Smartphone, Award, RefreshCcw, Tag, Star, Users, BookOpen } from 'lucide-react';

const PurchaseCard = ({ course }) => {
  return (
    <div className="space-y-6" style={{ position: 'sticky', top: '100px' }}>
      
      {/* Main Purchase Card */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
        <div className="p-6 space-y-6">
          
          {/* Price Block */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900 bengali-text">৳{course.price}</span>
              <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full bengali-text">
                {course.discount}% ছাড়
              </span>
            </div>
            <p className="text-gray-400 line-through text-sm bengali-text">৳{course.originalPrice}</p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button className="btn-primary w-full py-4 text-lg bengali-text font-bold">
              এখনই ভর্তি হন
            </button>
            <button className="btn-outline w-full py-3 bengali-text font-semibold">
              Cart এ যোগ করুন
            </button>
          </div>

          {/* Includes List */}
          <div className="space-y-4 pt-4 border-t border-gray-50">
             <h4 className="font-bold text-gray-900 text-sm bengali-text">এই কোর্সে যা থাকছে:</h4>
             <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <Infinity size={18} className="text-primary" />
                  <span className="bengali-text">আজীবন অ্যাক্সেস</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <Smartphone size={18} className="text-primary" />
                  <span className="bengali-text">মোবাইলে দেখা যাবে</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <Award size={18} className="text-primary" />
                  <span className="bengali-text">সার্টিফিকেট পাবেন</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <RefreshCcw size={18} className="text-primary" />
                  <span className="bengali-text">৩০ দিনের রিফান্ড গ্যারান্টি</span>
                </li>
             </ul>
          </div>

          {/* Coupon Code Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
             <div className="flex items-center gap-2 text-amber-700 mb-1">
                <Tag size={16} />
                <span className="text-xs font-bold bengali-text">কুপন কোড আছে?</span>
             </div>
             <p className="text-sm font-mono font-bold text-amber-800 tracking-wider">
               SHIKHON20
             </p>
          </div>
        </div>
      </div>

      {/* Instructor Mini Card */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
         <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center text-primary font-bold">
               {course.instructor.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
               <h4 className="font-bold text-gray-900 bengali-text">{course.instructor.name}</h4>
               <p className="text-xs text-gray-500 bengali-text">{course.instructor.role}</p>
            </div>
         </div>
         <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-50">
            <div className="text-center">
               <div className="flex items-center justify-center gap-1 text-xs font-bold text-gray-700">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  {course.instructor.rating}
               </div>
               <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Rating</p>
            </div>
            <div className="text-center border-x border-gray-50 px-2">
               <div className="flex items-center justify-center gap-1 text-xs font-bold text-gray-700">
                  <Users size={12} className="text-primary" />
                  {course.instructor.students}
               </div>
               <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Students</p>
            </div>
            <div className="text-center">
               <div className="flex items-center justify-center gap-1 text-xs font-bold text-gray-700">
                  <BookOpen size={12} className="text-emerald-500" />
                  {course.instructor.courses}
               </div>
               <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Courses</p>
            </div>
         </div>
      </div>

    </div>
  );
};

export default PurchaseCard;
