"use client";

import React from 'react';
import { 
  CreditCard, 
  Download, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Search,
  ExternalLink,
  Wallet,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const PaymentsPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  if (status === 'loading') return null;
  const transactions = [
    {
      id: 'TRX-982341',
      course: 'Next.js 14 Mastery: Zero to Hero',
      date: 'May 12, 2024',
      amount: '৳২,৫০০',
      method: 'bKash',
      status: 'success'
    },
    {
      id: 'TRX-871220',
      course: 'Professional Web Development (MERN)',
      date: 'April 28, 2024',
      amount: '৳৩,০০০',
      method: 'Nagad',
      status: 'success'
    },
    {
      id: 'TRX-765112',
      course: 'UI/UX Design Masterclass',
      date: 'March 15, 2024',
      amount: '৳১,৮০০',
      method: 'Visa Card',
      status: 'success'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6 font-inter">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl text-primary text-xs font-black uppercase tracking-widest">
                 <Wallet size={14} /> Billing & Finance
              </div>
              <h1 className="text-4xl font-black text-gray-900">Payment History</h1>
              <p className="text-gray-500 font-medium">Manage your billing information, track transactions, and download invoices.</p>
           </div>
           
           <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-gray-600 font-bold text-sm hover:shadow-md transition-all">
                 <FileText size={18} /> Tax Reports
              </button>
           </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
                 <CreditCard size={24} />
              </div>
              <div>
                 <p className="text-sm font-bold text-gray-400">Total Spent</p>
                 <h3 className="text-3xl font-black text-gray-900">৳৭,৩০০</h3>
              </div>
           </div>
           <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-teal-50 text-teal-500 rounded-2xl flex items-center justify-center">
                 <CheckCircle2 size={24} />
              </div>
              <div>
                 <p className="text-sm font-bold text-gray-400">Active Courses</p>
                 <h3 className="text-3xl font-black text-gray-900">০৩</h3>
              </div>
           </div>
           <div className="bg-primary p-8 rounded-[40px] shadow-xl shadow-primary/20 space-y-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                 <ArrowUpRight size={24} />
              </div>
              <div>
                 <p className="text-sm font-bold opacity-80">Last Payment</p>
                 <h3 className="text-3xl font-black">৳২,৫০০</h3>
              </div>
           </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-[48px] border border-gray-100 shadow-xl shadow-blue-900/5 overflow-hidden">
           <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h2 className="text-xl font-black text-gray-900">All Transactions</h2>
              <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                 <input 
                   className="pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-primary/20 w-full md:w-64" 
                   placeholder="Search ID, Course..." 
                 />
              </div>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full">
                 <thead>
                    <tr className="bg-gray-50/50 text-left">
                       <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Transaction ID</th>
                       <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Course Name</th>
                       <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Date</th>
                       <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Amount</th>
                       <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                       <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Action</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-50">
                    {transactions.map((trx, i) => (
                      <motion.tr 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={trx.id} 
                        className="hover:bg-gray-50/50 transition-colors group"
                      >
                         <td className="px-8 py-6">
                            <span className="font-black text-xs text-gray-400 group-hover:text-primary transition-colors">{trx.id}</span>
                         </td>
                         <td className="px-8 py-6">
                            <div className="space-y-0.5">
                               <p className="font-black text-gray-900 text-sm">{trx.course}</p>
                               <p className="text-[10px] font-bold text-gray-400">Via {trx.method}</p>
                            </div>
                         </td>
                         <td className="px-8 py-6 text-sm font-bold text-gray-500">{trx.date}</td>
                         <td className="px-8 py-6">
                            <span className="font-black text-gray-900">{trx.amount}</span>
                         </td>
                         <td className="px-8 py-6">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-black uppercase">
                               <CheckCircle2 size={12} /> {trx.status}
                            </div>
                         </td>
                         <td className="px-8 py-6 text-right">
                            <button className="p-2.5 bg-gray-50 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                               <Download size={18} />
                            </button>
                         </td>
                      </motion.tr>
                    ))}
                 </tbody>
              </table>
           </div>
           
           <div className="p-8 bg-gray-50/30 border-t border-gray-50 text-center">
              <button className="text-sm font-black text-gray-400 hover:text-primary transition-colors flex items-center gap-2 mx-auto">
                 View full transaction history <ExternalLink size={14} />
              </button>
           </div>
        </div>

        {/* Support Section */}
        <div className="p-10 bg-white rounded-[48px] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-black text-gray-900">Having trouble with payments?</h3>
              <p className="text-gray-500 font-medium">Our support team is ready to help you with any billing issues.</p>
           </div>
           <button className="px-10 py-4 bg-gray-900 text-white rounded-3xl font-black hover:bg-primary transition-all shadow-xl shadow-gray-900/10">
              Contact Support
           </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
