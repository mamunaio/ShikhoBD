'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

const AuthErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const errorMessages: Record<string, string> = {
    'Configuration': 'সার্ভার কনফিগারেশন সমস্যা। অনুগ্রহ করে পরে চেষ্টা করুন।',
    'AccessDenied': 'অ্যাক্সেস অস্বীকার করা হয়েছে। আপনার অনুমতি নেই।',
    'Verification': 'ভেরিফিকেশন লিংকটি অকেজো হয়ে গেছে। অনুগ্রহ করে নতুন করে চেষ্টা করুন।',
    'OAuthAccountNotLinked': 'এই ইমেইলটি অন্য একটি লগইন পদ্ধতির সাথে যুক্ত। অনুগ্রহ করে সঠিক পদ্ধতি ব্যবহার করুন।',
    'Default': 'লগইন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।'
  };

  const message = errorMessages[error || 'Default'];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-inter">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-red-900/5 p-10 border border-red-50 text-center">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mx-auto mb-6">
          <AlertTriangle size={40} />
        </div>
        
        <h1 className="text-2xl font-black text-gray-900 bengali-text mb-2">সমস্যা হয়েছে!</h1>
        <p className="text-gray-500 font-medium bengali-text mb-8">{message}</p>
        
        <div className="space-y-3">
          <Link href="/auth/login" className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold bengali-text transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
             <ArrowLeft size={18} />
             লগইন পেজে ফিরে যান
          </Link>
          <Link href="/" className="text-sm font-bold text-gray-400 hover:text-gray-600 bengali-text">
             হোমপেজে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorPage;
