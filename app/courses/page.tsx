'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, SlidersHorizontal, BookOpen, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Link from 'next/link';
import axios from 'axios';

const CoursesPage = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popular');
  const [totalCourses, setTotalCourses] = useState(0);

  const fetchCourses = React.useCallback(async () => {
    // Defer setting loading state to avoid synchronous cascading renders
    Promise.resolve().then(() => setLoading(true));
    
    // Mock data to prevent 500 error from database
    const mockCourses = [
      {
        _id: 'mern-stack-01',
        slug: 'mern-stack-development',
        title: 'প্রফেশনাল ওয়েব ডেভেলপমেন্ট (MERN Stack)',
        price: 2500,
        originalPrice: 5000,
        level: 'Intermediate',
        thumbnailUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000',
        stats: { totalLessons: 150, avgRating: 4.8, totalReviews: 850, totalStudents: 1250 },
        instructorId: { name: 'Sumit Saha' }
      },
      {
        _id: 'nextjs-mastery',
        slug: 'nextjs-mastery-course',
        title: 'মাস্টারিং নেক্সট জেএস (Next.js 16)',
        price: 3200,
        originalPrice: 6000,
        level: 'Advanced',
        thumbnailUrl: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1000',
        stats: { totalLessons: 120, avgRating: 4.9, totalReviews: 420, totalStudents: 850 },
        instructorId: { name: 'Jhankar Mahbub' }
      },
      {
        _id: 'ui-ux-design',
        slug: 'ui-ux-design-basics',
        title: 'ইউআই/ইউএক্স ডিজাইন (Figma to Mastery)',
        price: 1800,
        originalPrice: 4000,
        level: 'Beginner',
        thumbnailUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000',
        stats: { totalLessons: 85, avgRating: 4.7, totalReviews: 210, totalStudents: 640 },
        instructorId: { name: 'Ayman Sadiq' }
      }
    ];

    setTimeout(() => {
      setCourses(mockCourses);
      setTotalCourses(mockCourses.length);
      setLoading(false);
    }, 800);
  }, [searchTerm, selectedLevels, sortBy]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleLevelChange = (level: string) => {
    setSelectedLevels(prev => 
      prev.includes(level) ? prev.filter(l => l !== level) : [level]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-4xl font-black text-gray-900 bengali-text">আমাদের সব <span className="text-primary">কোর্সসমূহ</span></h1>
          <p className="text-gray-500 font-medium bengali-text max-w-2xl">
            নিজের পছন্দের ক্যাটাগরি বেছে নিন এবং আজই শুরু করুন আপনার পছন্দের কোর্সটি। 
            আমরা দিচ্ছি আপনাকে সেরা মেন্টরদের সাথে শেখার সুযোগ।
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
             <div className="flex-1">
               <Input 
                 placeholder="কোর্স খুঁজুন (যেমন: React, UI Design...)"
                 icon={<Search size={20} />}
                 className="bg-gray-50 border-none shadow-sm h-14"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
               />
             </div>
             <Button className="h-14 px-10 gap-2" onClick={fetchCourses}>
               <Filter size={18} />
               খুঁজুন
             </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-8 shrink-0">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 bengali-text">ক্যাটাগরি</h3>
                <SlidersHorizontal size={14} className="text-gray-400" />
              </div>
              <div className="space-y-2">
                {['প্রোগ্রামিং', 'ডিজাইন', 'মার্কেটিং', 'ডেটা সায়েন্স', 'ল্যাঙ্গুয়েজ'].map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors bengali-text">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 bengali-text">লেভেল</h3>
              <div className="space-y-2">
                {['Beginner', 'Intermediate', 'Advanced'].map(lvl => (
                  <label key={lvl} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                      checked={selectedLevels.includes(lvl)}
                      onChange={() => handleLevelChange(lvl)}
                    />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">{lvl}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Course Grid */}
          <div className="flex-1">
             <div className="flex justify-between items-center mb-8">
               <p className="text-sm font-bold text-gray-500 bengali-text">মোট {totalCourses}টি কোর্স পাওয়া গেছে</p>
               <select 
                 className="bg-transparent border-none text-sm font-bold text-primary outline-none cursor-pointer"
                 value={sortBy}
                 onChange={(e) => setSortBy(e.target.value)}
               >
                 <option value="popular">জনপ্রিয়তা অনুযায়ী</option>
                 <option value="newest">নতুন কোর্স</option>
                 <option value="price_low">কম দাম থেকে বেশি</option>
               </select>
             </div>

             {loading ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="bg-gray-200 h-80 rounded-3xl"></div>
                 ))}
               </div>
             ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                  {courses.map(course => (
                    <Link 
                      href={`/courses/${course.slug}`} 
                      key={course._id} 
                      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={course.thumbnailUrl || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000'} 
                          alt={course.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-primary uppercase tracking-wider">
                          {course.level}
                        </div>
                      </div>
                      
                      <div className="p-6 space-y-4">
                         <div className="flex items-center justify-between text-xs font-bold text-gray-400">
                           <div className="flex items-center gap-1"><BookOpen size={14} /> {course.stats?.totalLessons || 0} পাঠ</div>
                           <div className="flex items-center gap-1 text-amber-500">
                             <Star size={14} fill="currentColor" /> {course.stats?.avgRating || 0} ({course.stats?.totalReviews || 0})
                           </div>
                         </div>
                         
                         <h3 className="text-lg font-black text-gray-900 leading-tight bengali-text group-hover:text-primary transition-colors">
                           {course.title}
                         </h3>
                         
                         <div className="flex items-center gap-2">
                           <img 
                             src={course.instructorId?.avatarUrl || `https://ui-avatars.com/api/?name=${course.instructorId?.name || 'Instructor'}`} 
                             className="w-6 h-6 rounded-full bg-gray-200"
                             alt=""
                           />
                           <span className="text-xs font-bold text-gray-500">{course.instructorId?.name}</span>
                         </div>
  
                         <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                           <div className="flex items-center gap-2">
                             <span className="text-xl font-black text-primary">৳{course.price}</span>
                             {course.originalPrice > course.price && (
                               <span className="text-sm font-bold text-gray-400 line-through">৳{course.originalPrice}</span>
                             )}
                           </div>
                           <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                              <Users size={12} /> {course.stats?.totalStudents || 0} Students
                           </div>
                         </div>
                      </div>
                    </Link>
                  ))}
               </div>
             )}

             <div className="mt-16 flex justify-center">
               <Button variant="outline" className="px-12 py-4">আরো লোড করুন</Button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
