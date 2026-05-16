'use client';

import React, { useActionState } from 'react';
import Link from 'next/link';
import { authenticate } from '@/actions/auth';
import { Mail, Lock, Loader2, ArrowRight } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [error, dispatch, isPending] = useActionState(authenticate, undefined);

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: '/dashboard/student' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    // Use next-auth signIn for credentials
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard/student',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-inter">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-blue-900/5 p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-3xl mx-auto mb-4 shadow-lg shadow-primary/20">S</div>
          <h1 className="text-2xl font-black text-gray-900 bengali-text">লগইন করুন</h1>
          <p className="text-gray-500 text-sm mt-2 bengali-text">ShikhoBD-তে আপনার শিখার যাত্রা চালিয়ে যান</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 bengali-text">ইমেইল এড্রেস</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                name="email"
                type="email"
                placeholder="example@mail.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-gray-700 bengali-text">পাসওয়ার্ড</label>
              <Link href="/auth/forgot-password" size="sm" className="text-xs text-primary font-bold hover:underline bengali-text">
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>
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

          {error && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm font-bold bengali-text text-center">
              {error.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold bengali-text transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95"
          >
            {isPending ? <Loader2 size={20} className="animate-spin" /> : 'লগইন করুন'}
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-gray-400 font-bold bengali-text">অথবা</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border-2 border-gray-100 hover:border-gray-200 bg-white text-gray-700 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-3 active:scale-95 mb-6"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          <span className="bengali-text">Google দিয়ে লগইন করুন</span>
        </button>

        <div className="text-center text-sm">
          <span className="text-gray-500 bengali-text">নতুন অ্যাকাউন্ট? </span>
          <Link href="/auth/register" className="text-primary font-bold hover:underline bengali-text">
            নিবন্ধন করুন
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
