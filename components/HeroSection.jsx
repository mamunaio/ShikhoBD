import React from 'react';
import { Play, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-12 pb-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-accent text-primary rounded-full text-sm font-semibold bengali-text"
            >
              <CheckCircle size={16} />
              বাংলাদেশের #১ লার্নিং প্ল্যাটফর্ম
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight bengali-text"
            >
              দক্ষতা অর্জন করুন, <br />
              <span className="text-primary">ক্যারিয়ার গড়ুন</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-lg leading-relaxed"
            >
              Join 10,000+ students learning the most in-demand skills from industry experts. 
              Start your journey today with our curated courses and interactive live classes.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-primary py-3 px-8 text-lg bengali-text">কোর্স দেখুন</button>
              <button className="btn-outline py-3 px-8 text-lg flex items-center gap-2">
                <Play size={20} fill="currentColor" />
                Free Demo
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-gray-100"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 bengali-text">৫০০+</span>
                <span className="text-sm text-gray-500 bengali-text">কোর্স</span>
              </div>
              <div className="h-10 w-[1px] bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 bengali-text">১০,০০০+</span>
                <span className="text-sm text-gray-500 bengali-text">শিক্ষার্থী</span>
              </div>
              <div className="h-10 w-[1px] bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">২০০+</span>
                <span className="text-sm text-gray-500">Instructors</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content: Mini Course Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="aspect-video bg-gray-100 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                   <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-primary cursor-pointer hover:scale-110 transition-transform">
                      <Play size={32} fill="currentColor" />
                   </div>
                </div>
                <div className="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded">Live Class</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 bengali-text">ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট (MERN)</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">4.9 (1.2k reviews)</span>
                </div>

                <div className="space-y-4">
                   <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Course Progress</span>
                      <span className="text-primary font-bold">65%</span>
                   </div>
                   <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-full bg-primary"
                      />
                   </div>
                </div>

                <div className="mt-6 flex items-center gap-3 p-3 bg-accent rounded-xl">
                   <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle size={20} className="text-primary" />
                   </div>
                   <div>
                      <p className="text-xs text-gray-500">Next Lesson</p>
                      <p className="text-sm font-semibold text-gray-800 bengali-text">ডেটাবেস ডিজাইন কি?</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Float Floating elements */}
            <div className="absolute -top-6 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
               <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Star size={20} fill="currentColor" />
               </div>
               <div>
                  <p className="text-xs text-gray-500 font-medium">Earn Certificates</p>
                  <p className="text-sm font-bold">Verified Skills</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
