"use client";

import React, { useEffect } from 'react';
import { 
  LogOut, 
  ArrowRight, 
  Home, 
  CheckCircle2,
  Moon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear login status
    localStorage.setItem('isLoggedIn', 'false');
    
    // Automatically redirect to home after 5 seconds
    const timer = setTimeout(() => {
      window.location.href = '/'; // Use window.location to ensure full refresh of Navbar state
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3B82F6,transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white/5 backdrop-blur-3xl p-12 rounded-[64px] border border-white/10 shadow-2xl text-center space-y-10 relative z-10"
      >
         <div className="relative inline-block">
            <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ type: 'spring', damping: 12, delay: 0.2 }}
               className="w-24 h-24 bg-primary rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-primary/40"
            >
               <LogOut size={40} className="rotate-180" />
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5 }}
               className="absolute -top-2 -right-2 bg-teal-500 text-white p-2 rounded-full border-4 border-[#0F172A] shadow-xl"
            >
               <CheckCircle2 size={20} />
            </motion.div>
         </div>

         <div className="space-y-4">
            <h1 className="text-4xl font-black text-white leading-tight">Safely Logged Out</h1>
            <p className="text-blue-200/60 font-medium leading-relaxed px-4">
               Thank you for spending time with ShikhoBD. We hope to see you back soon to continue your learning journey!
            </p>
         </div>

         <div className="space-y-4">
            <Link 
               href="/auth/login" 
               className="w-full flex items-center justify-center gap-3 py-4 bg-white text-gray-900 rounded-3xl font-black shadow-xl hover:bg-gray-100 transition-all active:scale-95"
            >
               Login Again <ArrowRight size={20} />
            </Link>
            <Link 
               href="/" 
               className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 text-white/60 border border-white/10 rounded-3xl font-bold hover:bg-white/10 transition-all"
            >
               <Home size={20} /> Go to Home
            </Link>
         </div>

         <div className="pt-4">
            <div className="flex items-center justify-center gap-2 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
               Redirecting to home in <span className="text-primary">5s</span>
            </div>
            <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '100%' }}
                 transition={{ duration: 5, ease: 'linear' }}
                 className="h-full bg-primary"
               />
            </div>
         </div>
      </motion.div>

      {/* Floating Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-10 text-white/5"
      >
         <Moon size={120} />
      </motion.div>
    </div>
  );
};

export default LogoutPage;
