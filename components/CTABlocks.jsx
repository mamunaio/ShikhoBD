import React from 'react';
import { Users, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTABlocks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Instructor Recruitment Block */}
        <div className="group bg-primary rounded-3xl p-8 text-white relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
           <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />
           <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <Users size={24} />
                 </div>
                 <h3 className="text-2xl font-bold mb-4 bengali-text">Instructor হতে চান?</h3>
                 <p className="text-blue-100 mb-8 leading-relaxed">
                   আপনার জ্ঞান অন্যদের সাথে শেয়ার করুন এবং গড়ে তুলুন একটি সফল অনলাইন ক্যারিয়ার। আমরা আপনাকে সব ধরনের সাপোর্ট দিব।
                 </p>
              </div>
              <Link href="/instructors/apply">
                <button className="inline-flex items-center gap-2 text-white font-bold group/btn">
                   Apply Now 
                   <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </Link>
           </div>
        </div>

        {/* Certificate Promotion Block */}
        <div className="group bg-amber-500 rounded-3xl p-8 text-white relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
           <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />
           <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <Award size={24} />
                 </div>
                 <h3 className="text-2xl font-bold mb-4 bengali-text">Certificate পান</h3>
                 <p className="text-amber-50 mb-8 leading-relaxed">
                   প্রতিটি কোর্স সফলভাবে শেষ করে অর্জন করুন ইন্ডাস্ট্রি ভেরিফাইড সার্টিফিকেট এবং আপনার রেজুমে শক্তিশালী করুন।
                 </p>
              </div>
              <Link href="/certificates/info">
                <button className="inline-flex items-center gap-2 text-white font-bold group/btn">
                   Learn More 
                   <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default CTABlocks;
