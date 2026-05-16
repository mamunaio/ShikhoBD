'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  Menu, 
  X, 
  Bell, 
  User, 
  LogOut, 
  Settings, 
  CreditCard, 
  Award, 
  ChevronDown,
  LayoutDashboard
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const isLoggedIn = status === 'authenticated';
  const user = session?.user;
  
  // Refs for clicking outside
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/courses');
    }
  };

  const notifications = [
    { id: 1, title: 'New Course Added', desc: 'Mastering Next.js is now live!', time: '10 min ago', unread: true },
    { id: 2, title: 'Payment Successful', desc: 'Your enrollment has been confirmed.', time: '2 hours ago', unread: false },
    { id: 3, title: 'Certificate Awarded', desc: 'Congrats! You completed the course.', time: '1 day ago', unread: false },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2.5 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
              <BookOpen size={24} />
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">Shikho<span className="text-primary">BD</span></span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-12">
            <form onSubmit={handleSearch} className="relative w-full group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border-2 border-gray-100 rounded-2xl bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all bengali-text font-bold"
                placeholder="কোর্স খুঁজুন..."
              />
            </form>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Desktop Links */}
            <div className="flex items-center gap-6 mr-4 border-r border-gray-100 pr-8">
              <Link href="/courses" className="text-gray-600 hover:text-primary font-bold transition-colors bengali-text">কোর্সসমূহ</Link>
              <Link href="/instructors" className="text-gray-600 hover:text-primary font-bold transition-colors">Instructors</Link>
            </div>

            {isLoggedIn ? (
              <>
                {/* Notification Bell */}
                <div className="relative" ref={notificationRef}>
                   <button 
                     onClick={() => setShowNotifications(!showNotifications)}
                     className="p-3 bg-gray-50 rounded-2xl text-gray-600 hover:text-primary hover:bg-primary/5 transition-all relative"
                   >
                      <Bell size={22} />
                      <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
                   </button>

                   <AnimatePresence>
                      {showNotifications && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute right-0 mt-4 w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                           <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                              <h3 className="font-black text-gray-900 text-lg">Notifications</h3>
                              <button className="text-xs font-bold text-primary hover:underline">Mark all as read</button>
                           </div>
                           <div className="max-h-[400px] overflow-y-auto">
                              {notifications.map(n => (
                                <div key={n.id} className={`p-5 flex gap-4 hover:bg-gray-50 transition-colors border-b border-gray-50 cursor-pointer ${n.unread ? 'bg-blue-50/30' : ''}`}>
                                   <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${n.unread ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                                      <Bell size={18} />
                                   </div>
                                   <div className="space-y-1">
                                      <h4 className="font-bold text-gray-900 text-sm">{n.title}</h4>
                                      <p className="text-xs text-gray-500">{n.desc}</p>
                                      <p className="text-[10px] font-black text-gray-300 uppercase">{n.time}</p>
                                   </div>
                                </div>
                              ))}
                           </div>
                           <div className="p-4 text-center border-t border-gray-50">
                              <Link href="/notifications" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">View all notifications</Link>
                           </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>

                {/* Profile Menu */}
                <div className="relative" ref={profileRef}>
                   <button 
                     onClick={() => setShowProfileMenu(!showProfileMenu)}
                     className="flex items-center gap-3 p-1.5 pl-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all group"
                   >
                      <div className="text-right hidden lg:block">
                         <p className="text-xs font-black text-gray-900">{user?.name || 'User'}</p>
                         <p className="text-[10px] font-bold text-gray-400">Student</p>
                      </div>
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform overflow-hidden">
                         {user?.image ? <img src={user.image} alt="" className="w-full h-full object-cover" /> : (user?.name?.charAt(0) || 'U')}
                      </div>
                      <ChevronDown size={16} className={`text-gray-400 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                   </button>

                   <AnimatePresence>
                      {showProfileMenu && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute right-0 mt-4 w-64 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                           <div className="p-6 bg-gray-50/50 border-b border-gray-50">
                              <div className="flex items-center gap-3">
                                 <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-xl overflow-hidden">
                                    {user?.image ? <img src={user.image} alt="" className="w-full h-full object-cover" /> : (user?.name?.charAt(0) || 'U')}
                                 </div>
                                 <div>
                                    <p className="font-black text-gray-900 truncate max-w-[120px]">{user?.name || 'User'}</p>
                                    <p className="text-xs text-gray-500 truncate max-w-[120px]">{user?.email}</p>
                                 </div>
                              </div>
                           </div>
                           <div className="p-2">
                              {[
                                { icon: <LayoutDashboard size={18} />, label: 'Dashboard', link: '/dashboard/student' },
                                { icon: <BookOpen size={18} />, label: 'My Courses', link: '/dashboard/courses' },
                                { icon: <Award size={18} />, label: 'Certificates', link: '/dashboard/certificates' },
                                { icon: <CreditCard size={18} />, label: 'Payments', link: '/dashboard/payments' },
                                { icon: <Settings size={18} />, label: 'Settings', link: '/dashboard/settings' },
                              ].map((item, i) => (
                                <Link key={i} href={item.link} className="flex items-center gap-3 p-4 rounded-2xl text-gray-600 hover:bg-primary/5 hover:text-primary transition-all group">
                                   <div className="text-gray-400 group-hover:text-primary transition-colors">{item.icon}</div>
                                   <span className="font-bold text-sm">{item.label}</span>
                                </Link>
                              ))}
                           </div>
                           <div className="p-2 border-t border-gray-50">
                              <button 
                                onClick={() => {
                                  localStorage.removeItem('isLoggedIn'); // Cleanup old mock flag if exists
                                  signOut({ callbackUrl: '/' });
                                }}
                                className="w-full flex items-center gap-3 p-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all group text-left"
                              >
                                 <LogOut size={18} />
                                 <span className="font-black text-sm">Logout</span>
                              </button>
                           </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-3 ml-4">
                 <Link href="/auth/login" className="px-6 py-2.5 text-gray-600 font-bold hover:text-primary transition-all">Login</Link>
                 <Link href="/auth/register" className="px-8 py-3 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all bengali-text">শুরু করুন</Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button className="p-2 bg-gray-50 rounded-xl text-gray-400"><Bell size={22} /></button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-500 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="p-6 space-y-6 shadow-2xl">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-2xl bg-gray-50 font-bold bengali-text outline-none"
                  placeholder="কোর্স খুঁজুন..."
                />
              </form>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/courses" className="flex items-center justify-center py-4 bg-gray-50 rounded-2xl font-black text-gray-900 bengali-text">কোর্সসমূহ</Link>
                <Link href="/instructors" className="flex items-center justify-center py-4 bg-gray-50 rounded-2xl font-black text-gray-900">Instructors</Link>
              </div>
              <div className="pt-4 border-t border-gray-50 flex items-center gap-4">
                 <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-primary/20 overflow-hidden">
                    {user?.image ? <img src={user.image} alt="" className="w-full h-full object-cover" /> : (user?.name?.charAt(0) || 'U')}
                 </div>
                 <div>
                    <p className="font-black text-lg text-gray-900">{user?.name || 'User'}</p>
                    <p className="text-sm font-bold text-gray-400">{user?.email}</p>
                 </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                 <Link href="/dashboard/student" className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-center">Go to Dashboard</Link>
                  <button 
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="w-full py-4 bg-red-50 text-red-500 rounded-2xl font-black text-center"
                  >
                    Logout
                  </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
