"use client";

import React, { useState } from 'react';
import { 
  BookOpen, 
  Play, 
  Clock, 
  Award, 
  Search,
  ChevronRight,
  TrendingUp,
  LayoutGrid,
  List
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const MyCoursesPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  const [activeTab, setActiveTab] = useState('active');

  if (status === 'loading') return null;

  const myCourses = [
    {
      id: 'nextjs-mastery',
      title: 'Next.js 14 Mastery: From Zero to Hero',
      instructor: 'Imtiaz Ahmed',
      progress: 65,
      totalLessons: 48,
      completedLessons: 31,
      lastAccessed: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
      status: 'active'
    },
    {
      id: 'mern-stack',
      title: 'Professional Web Development (MERN)',
      instructor: 'Arafat',
      progress: 42,
      totalLessons: 120,
      completedLessons: 50,
      lastAccessed: '1 day ago',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
      status: 'active'
    },
    {
      id: 'ui-ux-design',
      title: 'Modern UI/UX Design Fundamentals',
      instructor: 'Shanto',
      progress: 100,
      totalLessons: 25,
      completedLessons: 25,
      lastAccessed: '1 week ago',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=800&auto=format&fit=crop',
      status: 'completed'
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? myCourses 
    : myCourses.filter(c => c.status === activeTab);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6 font-inter">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl text-primary text-xs font-black uppercase tracking-widest">
                 <LayoutGrid size={14} /> Student Dashboard
              </div>
              <h1 className="text-5xl font-black text-gray-900 leading-tight">My Courses</h1>
              <p className="text-gray-500 font-medium max-w-xl">Manage your learning journey, track your progress, and continue from where you left off.</p>
           </div>
           
           <div className="flex bg-white p-2 rounded-[24px] shadow-sm border border-gray-100">
              {[
                { id: 'active', label: 'In Progress' },
                { id: 'completed', label: 'Completed' },
                { id: 'all', label: 'All Courses' }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-2xl text-sm font-black transition-all ${activeTab === tab.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {tab.label}
                </button>
              ))}
           </div>
        </div>

        {/* Search and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           <div className="lg:col-span-3">
              <div className="relative group">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                 <input 
                   className="w-full pl-16 pr-8 py-5 bg-white border-2 border-transparent rounded-[32px] shadow-sm outline-none focus:border-primary/20 focus:bg-white transition-all text-gray-700 font-bold"
                   placeholder="Search your courses..."
                 />
              </div>
           </div>
           <div className="bg-primary p-6 rounded-[32px] shadow-xl shadow-primary/20 flex items-center justify-between text-white">
              <div className="space-y-1">
                 <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Overall Progress</p>
                 <h3 className="text-3xl font-black">74%</h3>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                 <TrendingUp size={32} />
              </div>
           </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {filteredCourses.map((course, i) => (
             <motion.div 
               key={course.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="group bg-white rounded-[48px] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
             >
                <div className="aspect-video relative overflow-hidden">
                   <img src={course.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Link href={`/learn/${course.id}`} className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl hover:scale-110 transition-transform">
                         <Play size={24} fill="currentColor" />
                      </Link>
                   </div>
                   {course.status === 'completed' && (
                     <div className="absolute top-6 right-6 bg-teal-500 text-white p-2.5 rounded-2xl shadow-lg border-4 border-white">
                        <Award size={20} />
                     </div>
                   )}
                </div>

                <div className="p-8 space-y-6">
                   <div className="space-y-3">
                      <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                         <Clock size={14} /> Last watched {course.lastAccessed}
                      </div>
                      <h3 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                         {course.title}
                      </h3>
                      <p className="text-sm font-bold text-gray-400">By {course.instructor}</p>
                   </div>

                   <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm font-black">
                         <span className="text-gray-900">{course.progress}% Complete</span>
                         <span className="text-gray-400">{course.completedLessons}/{course.totalLessons} Lessons</span>
                      </div>
                      <div className="h-3 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${course.progress}%` }}
                           transition={{ duration: 1, delay: 0.5 }}
                           className={`h-full rounded-full ${course.status === 'completed' ? 'bg-teal-500' : 'bg-primary'}`}
                         />
                      </div>
                   </div>

                   <div className="pt-4 flex items-center gap-4">
                      <Link 
                        href={`/learn/${course.id}`}
                        className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-sm transition-all ${course.status === 'completed' ? 'bg-teal-50 text-teal-600 hover:bg-teal-100' : 'bg-primary text-white hover:bg-primary-dark shadow-xl shadow-primary/10'}`}
                      >
                         {course.status === 'completed' ? 'Review Course' : 'Continue Lesson'}
                         <ChevronRight size={18} />
                      </Link>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Empty State if no courses */}
        {filteredCourses.length === 0 && (
           <div className="py-24 text-center space-y-6 bg-white rounded-[64px] border border-dashed border-gray-200">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                 <BookOpen size={48} />
              </div>
              <div className="space-y-2">
                 <h3 className="text-2xl font-black text-gray-900">No courses found</h3>
                 <p className="text-gray-400 font-medium max-w-xs mx-auto">You haven&apos;t {activeTab === 'completed' ? 'completed any courses yet' : 'enrolled in any courses yet'}.</p>
              </div>
              <Link href="/courses" className="inline-flex px-10 py-4 bg-primary text-white rounded-3xl font-black shadow-xl shadow-primary/10">Browse Courses</Link>
           </div>
        )}
      </div>
    </div>
  );
};

export default MyCoursesPage;
