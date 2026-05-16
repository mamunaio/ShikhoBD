"use client";

import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Award, 
  Clock, 
  TrendingUp, 
  Play, 
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const StudentDashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  if (status === 'loading') return null;
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6 font-inter">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                 Welcome back, <span className="text-primary">{session?.user?.name || 'Student'}!</span> 👋
              </h1>
              <p className="text-gray-500 font-medium">It&apos;s a great day to learn something new. You&apos;ve completed 74% of your weekly goal!</p>
           </div>
           <div className="flex items-center gap-3 bg-white p-3 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-2xl flex items-center justify-center">
                 <Calendar size={24} />
              </div>
              <div className="pr-4">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Today is</p>
                 <p className="font-bold text-gray-900">May 14, 2024</p>
              </div>
           </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: 'Courses Enrolled', value: '03', icon: <BookOpen size={24} />, color: 'bg-blue-50 text-blue-500' },
             { label: 'Lessons Finished', value: '81', icon: <CheckCircle2 size={24} />, color: 'bg-teal-50 text-teal-500' },
             { label: 'Certificates', value: '02', icon: <Award size={24} />, color: 'bg-amber-50 text-amber-500' },
             { label: 'Learning Hours', value: '124h', icon: <Clock size={24} />, color: 'bg-indigo-50 text-indigo-500' },
           ].map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
             >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${stat.color}`}>
                   {stat.icon}
                </div>
                <div className="space-y-1">
                   <p className="text-sm font-bold text-gray-400">{stat.label}</p>
                   <h3 className="text-3xl font-black text-gray-900">{stat.value}</h3>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           {/* Current Course (Left) */}
           <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center justify-between px-2">
                 <h2 className="text-2xl font-black text-gray-900">Continue Learning</h2>
                 <Link href="/dashboard/courses" className="text-primary font-black text-sm flex items-center gap-2 hover:underline">
                    View all courses <ArrowRight size={16} />
                 </Link>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-900 rounded-[56px] overflow-hidden relative group"
              >
                 <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_100%_0%,#3B82F6,transparent_60%)]"></div>
                 <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-12 space-y-8 relative z-10">
                       <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-white text-[10px] font-black uppercase tracking-widest border border-white/10">
                          <TrendingUp size={14} className="text-blue-400" /> Current Progress: 65%
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-3xl font-black text-white leading-tight">Next.js 14 Mastery: Zero to Hero</h3>
                          <p className="text-blue-100/60 font-medium">Current Lesson: Advanced Server Components and Server Actions.</p>
                       </div>
                       <div className="flex items-center gap-4 pt-4">
                          <Link href="/learn/nextjs-mastery" className="flex items-center gap-3 px-10 py-4 bg-white text-gray-900 rounded-3xl font-black hover:bg-blue-50 transition-all shadow-2xl active:scale-95">
                             <Play size={20} fill="currentColor" /> Resume Lesson
                          </Link>
                       </div>
                    </div>
                    <div className="relative h-64 md:h-auto overflow-hidden">
                       <img 
                         src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop" 
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                         alt="" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
                    </div>
                 </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm space-y-6">
                    <h3 className="text-xl font-black text-gray-900">Weekly Goal</h3>
                    <div className="space-y-4">
                       <div className="flex items-center justify-between text-sm font-bold">
                          <span className="text-gray-500">Goal: 10 Hours / Week</span>
                          <span className="text-primary">7.4h done</span>
                       </div>
                       <div className="h-4 bg-gray-50 rounded-full overflow-hidden border border-gray-100 p-1">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '74%' }}
                            transition={{ duration: 1.5 }}
                            className="h-full bg-primary rounded-full shadow-lg shadow-primary/30"
                          />
                       </div>
                    </div>
                 </div>
                 <div className="p-8 bg-blue-600 rounded-[40px] shadow-xl shadow-blue-600/20 flex items-center justify-between text-white relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <div className="space-y-4 relative z-10">
                       <h3 className="text-xl font-black">Support Group</h3>
                       <p className="text-blue-100/70 text-sm font-medium">Connect with fellow students and mentors.</p>
                       <button className="flex items-center gap-2 text-xs font-black bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all">
                          Join Community <ArrowRight size={14} />
                       </button>
                    </div>
                    <div className="relative z-10 text-white/20 -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                       <MessageSquare size={80} />
                    </div>
                 </div>
              </div>
           </div>

           {/* Recent Activity (Right) */}
           <div className="lg:col-span-4 space-y-8">
              <h2 className="text-2xl font-black text-gray-900 px-2">Activity Feed</h2>
              <div className="space-y-4">
                 {[
                   { title: 'Lesson Completed', desc: 'API Routes in Next.js', time: '2 hours ago', icon: <CheckCircle2 size={16} />, color: 'bg-teal-500' },
                   { title: 'Quiz Passed', desc: 'React Hooks Basics', time: '5 hours ago', icon: <TrendingUp size={16} />, color: 'bg-primary' },
                   { title: 'New Message', desc: 'Mentor replied to your query', time: '1 day ago', icon: <MessageSquare size={16} />, color: 'bg-amber-500' },
                   { title: 'Enrolled', desc: 'MERN Stack Development', time: '2 days ago', icon: <BookOpen size={16} />, color: 'bg-indigo-500' },
                 ].map((activity, i) => (
                   <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg ${activity.color}`}>
                         {activity.icon}
                      </div>
                      <div className="space-y-1">
                         <h4 className="font-bold text-gray-900 text-sm">{activity.title}</h4>
                         <p className="text-xs text-gray-400 font-medium">{activity.desc}</p>
                         <p className="text-[10px] font-black text-gray-300 uppercase pt-1">{activity.time}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;
