import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 space-y-8">
             <div className="flex items-center gap-2">
               <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-2xl">S</div>
               <span className="font-bold text-2xl tracking-tight">Shikho<span className="text-primary">BD</span></span>
             </div>
             <p className="text-gray-500 font-medium bengali-text max-w-sm leading-relaxed">
                বাংলাদেশের সেরা ই-লার্নিং প্ল্যাটফর্ম। আমরা আপনাকে দক্ষ করে তুলতে এবং আপনার ক্যারিয়ার গড়তে প্রতিশ্রুতিবদ্ধ।
             </p>
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-primary">
                   <ShieldCheck size={20} />
                   <span className="text-xs font-black uppercase tracking-widest">Verified Platform</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                   <MessageCircle size={20} />
                   <span className="text-xs font-black uppercase tracking-widest">24/7 Support</span>
                </div>
             </div>
          </div>
          <div className="space-y-6">
             <h4 className="font-black text-gray-900 bengali-text uppercase tracking-widest text-sm">Quick Links</h4>
             <div className="flex flex-col gap-4 text-sm font-bold text-gray-500 bengali-text">
                <Link href="/courses" className="hover:text-primary transition-colors">সব কোর্সসমূহ</Link>
                <Link href="/mentors" className="hover:text-primary transition-colors">আমাদের মেন্টররা</Link>
                <Link href="/about" className="hover:text-primary transition-colors">আমাদের সম্পর্কে</Link>
                <Link href="/contact" className="hover:text-primary transition-colors">যোগাযোগ</Link>
             </div>
          </div>
          <div className="space-y-6">
             <h4 className="font-black text-gray-900 bengali-text uppercase tracking-widest text-sm">Follow Us</h4>
             <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl hover:bg-primary hover:text-white transition-all cursor-pointer flex items-center justify-center">
                   <span className="font-bold text-sm">fb</span>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-2xl hover:bg-primary hover:text-white transition-all cursor-pointer flex items-center justify-center">
                   <span className="font-bold text-sm">in</span>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-2xl hover:bg-primary hover:text-white transition-all cursor-pointer flex items-center justify-center">
                   <span className="font-bold text-sm">yt</span>
                </div>
             </div>
          </div>
       </div>
       <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
          <span>© 2026 ShikhoBD. All Rights Reserved.</span>
          <div className="flex gap-8">
             <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
       </div>
    </footer>
  );
};

export default Footer;
