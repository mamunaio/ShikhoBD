'use client';

import React, { useActionState, useState } from 'react';
import Link from 'next/link';
import { registerUser } from '@/actions/auth';
import { User, Mail, Lock, Loader2, ShieldCheck, GraduationCap, Laptop } from 'lucide-react';

const RegisterPage = () => {
  const [state, dispatch, isPending] = useActionState(registerUser, undefined);
  const [role, setRole] = useState('student');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-inter py-12">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl shadow-blue-900/5 p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-gray-900 bengali-text">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className="text-gray-500 text-sm mt-2 bengali-text">ShikhoBD-র সাথে শিখুন এবং শিখান</p>
        </div>

        <form action={dispatch} className="space-y-5">
          <input type="hidden" name="role" value={role} />
          
          {/* Role Selector */}
          <div className="flex p-1 bg-gray-100 rounded-2xl mb-6">
             <button
               type="button"
               onClick={() => setRole('student')}
               className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${role === 'student' ? 'bg-white text-primary shadow-sm' : 'text-gray-500'}`}
             >
               <GraduationCap size={18} />
               <span className="bengali-text">শিক্ষার্থী</span>
             </button>
             <button
               type="button"
               onClick={() => setRole('instructor')}
               className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${role === 'instructor' ? 'bg-white text-[#F4821F] shadow-sm' : 'text-gray-500'}`}
             >
               <Laptop size={18} />
               <span className="bengali-text">Instructor</span>
             </button>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 bengali-text">
              {role === 'student' ? 'পূর্ণ নাম' : 'ইন্সট্রাক্টরের পূর্ণ নাম'}
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                name="name"
                type="text"
                placeholder={role === 'student' ? "যেমন: মোঃ সাকিব হাসান" : "যেমন: সুমিত সাহা"}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none font-medium"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 bengali-text">ইমেইল এড্রেস</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                name="email"
                type="email"
                placeholder={role === 'student' ? "example@mail.com" : "instructor@example.com"}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none font-medium"
                required
              />
            </div>
          </div>

          {role === 'instructor' && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <label className="text-sm font-bold text-gray-700 bengali-text">আপনার দক্ষতা (Expertise)</label>
              <div className="relative">
                <Laptop className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  name="expertise"
                  type="text"
                  placeholder="যেমন: Web Development, Graphics Design"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none font-medium"
                  required={role === 'instructor'}
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 bengali-text">পাসওয়ার্ড</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 bengali-text">নিশ্চিত করুন</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer group py-2">
            <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
            <span className="text-xs text-gray-600 bengali-text leading-relaxed select-none">
              আমি ShikhoBD-এর <span className="text-primary hover:underline">ব্যবহারের শর্তাবলী</span> ও <span className="text-primary hover:underline">গোপনীয়তা নীতিতে</span> সম্মত।
            </span>
          </label>

          {state?.error && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm font-bold bengali-text text-center">
              {state.error}
            </div>
          )}

          {state?.success && (
            <div className="p-3 bg-green-50 border border-green-100 rounded-lg text-green-600 text-sm font-bold bengali-text text-center flex items-center justify-center gap-2">
              <ShieldCheck size={18} />
              {state.success}
            </div>
          )}

          <button
            disabled={isPending}
            className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold bengali-text transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95"
          >
            {isPending ? <Loader2 size={20} className="animate-spin" /> : 'নিবন্ধন করুন'}
          </button>
        </form>

        <div className="text-center mt-8 text-sm">
          <span className="text-gray-500 bengali-text">ইতিমধ্যে অ্যাকাউন্ট আছে? </span>
          <Link href="/auth/login" className="text-primary font-bold hover:underline bengali-text">
            লগইন করুন
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
