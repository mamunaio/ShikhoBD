"use client";

import React, { useState } from 'react';
import { 
  Bell, 
  CheckCheck, 
  Trash2, 
  BookOpen, 
  CreditCard, 
  Award, 
  Search,
  MoreVertical,
  Filter,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const NotificationsPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      type: 'course', 
      title: 'New Course Added', 
      desc: 'Mastering Next.js 14 is now live! Enroll now to learn the latest features.', 
      time: '10 min ago', 
      unread: true,
      icon: <BookOpen size={20} />,
      color: 'text-primary bg-primary/10'
    },
    { 
      id: 2, 
      type: 'payment', 
      title: 'Payment Successful', 
      desc: 'Your payment of ৳২,৫০০ for "Professional Web Development" was successful.', 
      time: '2 hours ago', 
      unread: true,
      icon: <CreditCard size={20} />,
      color: 'text-teal-500 bg-teal-50'
    },
    { 
      id: 3, 
      type: 'award', 
      title: 'Course Completed', 
      desc: 'Congratulations! You have successfully completed the UI/UX Design Masterclass.', 
      time: '1 day ago', 
      unread: false,
      icon: <Award size={20} />,
      color: 'text-amber-500 bg-amber-50'
    },
    { 
      id: 4, 
      type: 'system', 
      title: 'Profile Updated', 
      desc: 'Your profile settings have been updated successfully.', 
      time: '3 days ago', 
      unread: false,
      icon: <CheckCheck size={20} />,
      color: 'text-blue-500 bg-blue-50'
    }
  ]);

  if (status === 'loading') return null;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredNotifications = activeTab === 'unread' 
    ? notifications.filter(n => n.unread) 
    : notifications;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6 font-inter">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                 <div className="p-3 bg-primary/10 rounded-2xl">
                    <Bell size={24} />
                 </div>
                 <h1 className="text-4xl font-black text-gray-900">Notifications</h1>
              </div>
              <p className="text-gray-500 font-medium max-w-md">Stay updated with your latest course activities, payments, and achievements.</p>
           </div>
           <div className="flex items-center gap-3">
              <button 
                onClick={markAllAsRead}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-gray-600 font-bold text-sm hover:shadow-md transition-all"
              >
                 <CheckCheck size={18} /> Mark all as read
              </button>
           </div>
        </div>

        {/* Filters & Actions */}
        <div className="bg-white p-4 rounded-[32px] border border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-4">
           <div className="flex bg-gray-50 p-1.5 rounded-[20px] gap-1">
              {['all', 'unread'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2.5 rounded-2xl text-sm font-black transition-all capitalize ${activeTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {tab}
                </button>
              ))}
           </div>
           <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                 <input className="pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-primary/20 w-64" placeholder="Search notifications..." />
              </div>
              <button className="p-2.5 bg-gray-50 rounded-2xl text-gray-400 hover:text-gray-600">
                 <Filter size={18} />
              </button>
           </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
           <AnimatePresence mode='popLayout'>
              {filteredNotifications.length > 0 ? filteredNotifications.map((n) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  key={n.id} 
                  className={`group bg-white p-6 md:p-8 rounded-[40px] border border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col md:flex-row items-start gap-6 relative ${n.unread ? 'border-l-4 border-l-primary' : ''}`}
                >
                   <div className={`w-14 h-14 rounded-[24px] flex items-center justify-center shrink-0 ${n.color} shadow-sm group-hover:scale-110 transition-transform`}>
                      {n.icon}
                   </div>
                   <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                         <h3 className="text-xl font-black text-gray-900">{n.title}</h3>
                         <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{n.time}</span>
                      </div>
                      <p className="text-gray-500 leading-relaxed font-medium">{n.desc}</p>
                      <div className="pt-4 flex items-center gap-4">
                         <Link href="/" className="text-primary font-black text-xs hover:underline flex items-center gap-1">
                            Take Action <ChevronRight size={14} />
                         </Link>
                      </div>
                   </div>
                   <div className="absolute top-6 right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => deleteNotification(n.id)}
                        className="p-2.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                      >
                         <Trash2 size={18} />
                      </button>
                      <button className="p-2.5 text-gray-300 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all">
                         <MoreVertical size={18} />
                      </button>
                   </div>
                </motion.div>
              )) : (
                <div className="py-24 text-center space-y-4 bg-white rounded-[48px] border border-dashed border-gray-200">
                   <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                      <Bell size={40} />
                   </div>
                   <h3 className="text-xl font-black text-gray-900">No notifications found</h3>
                   <p className="text-gray-400 font-medium">We&apos;ll notify you when something important happens.</p>
                </div>
              )}
           </AnimatePresence>
        </div>

        {/* Load More */}
        {filteredNotifications.length > 0 && (
           <div className="text-center pt-8">
              <button className="px-10 py-4 bg-gray-900 text-white rounded-3xl font-black hover:bg-primary transition-all shadow-xl shadow-gray-900/10">
                 Load older notifications
              </button>
           </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
