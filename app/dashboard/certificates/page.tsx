"use client";

import React from 'react';
import { 
  Award, 
  Download, 
  Share2, 
  ExternalLink, 
  CheckCircle2,
  Trophy,
  Search,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CertificatesPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  if (status === 'loading') return null;
  const certificates = [
    {
      id: 'CERT-UIUX-2024',
      course: 'UI/UX Design Masterclass',
      date: 'March 15, 2024',
      grade: 'A+',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'CERT-FE-2023',
      course: 'Advanced Frontend Development',
      date: 'December 10, 2023',
      grade: 'A',
      image: 'https://images.unsplash.com/photo-1606326666430-2c2666da246b?q=80&w=800&auto=format&fit=crop',
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6 font-inter">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-600 rounded-xl text-xs font-black uppercase tracking-widest">
                 <Trophy size={14} /> Achievements
              </div>
              <h1 className="text-4xl font-black text-gray-900 leading-tight">My Certificates</h1>
              <p className="text-gray-500 font-medium">Celebrate your success! Here are all the certificates you&apos;ve earned across your learning journey.</p>
           </div>
           
           <div className="flex items-center gap-3">
              <div className="bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                 <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center">
                    <Award size={20} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase">Total Earned</p>
                    <p className="text-lg font-black text-gray-900">02 Certificates</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           {certificates.map((cert, i) => (
             <motion.div 
               key={cert.id}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="group bg-white rounded-[48px] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-amber-900/5 transition-all duration-500"
             >
                <div className="aspect-[1.4/1] relative overflow-hidden bg-gray-100 p-8 flex items-center justify-center">
                   <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
                   <img 
                     src={cert.image} 
                     className="w-full h-full object-cover rounded-2xl shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-700" 
                     alt="" 
                   />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="p-4 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform">
                         <Download size={24} />
                      </button>
                      <button className="p-4 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform">
                         <Share2 size={24} />
                      </button>
                   </div>
                </div>

                <div className="p-10 space-y-8">
                   <div className="space-y-3">
                      <div className="flex items-center gap-2 text-amber-600 font-black text-[10px] uppercase tracking-widest">
                         <CheckCircle2 size={14} /> Verified Achievement
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 group-hover:text-amber-600 transition-colors leading-tight">
                         {cert.course}
                      </h3>
                      <div className="flex items-center gap-6 pt-2">
                         <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                            <Calendar size={14} /> {cert.date}
                         </div>
                         <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                            <Award size={14} /> Grade: {cert.grade}
                         </div>
                      </div>
                   </div>

                   <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                      <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">ID: {cert.id}</div>
                      <button className="flex items-center gap-2 text-amber-600 font-black text-sm hover:underline">
                         Verify Certificate <ExternalLink size={14} />
                      </button>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Learning Encouragement */}
        <div className="bg-gray-900 p-12 rounded-[64px] relative overflow-hidden text-center space-y-6">
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_-20%,#F59E0B,transparent_70%)]"></div>
           <h2 className="text-3xl font-black text-white relative z-10">Keep Learning, Keep Earning!</h2>
           <p className="text-gray-400 max-w-xl mx-auto relative z-10">Complete your ongoing courses to unlock more professional certificates and boost your career opportunities.</p>
           <Link href="/dashboard/courses" className="inline-flex items-center gap-2 px-10 py-4 bg-amber-500 text-white rounded-3xl font-black shadow-xl shadow-amber-500/20 hover:bg-amber-600 transition-all relative z-10">
              Continue Learning <ArrowRight size={20} />
           </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
