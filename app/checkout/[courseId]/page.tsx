"use client";

import React, { useState, use } from 'react';
import { ShieldCheck, Lock, ChevronRight, ArrowRight } from 'lucide-react';
import StepIndicator from '@/components/checkout/StepIndicator';
import PaymentMethodSelector from '@/components/checkout/PaymentMethodSelector';
import OrderSummary from '@/components/checkout/OrderSummary';
import CouponInput from '@/components/checkout/CouponInput';
import { useRouter } from 'next/navigation';

const CheckoutPage = ({ params }: { params: Promise<{ courseId: string }> }) => {
  const router = useRouter();
  const { courseId } = use(params);
  const [activeMethod, setActiveMethod] = useState('bkash');
  const [couponDiscount, setCouponDiscount] = useState(0);

  const handleApplyCoupon = (code: string, discount: number) => {
    // 2500 - 1300 = 1200 is the subtotal
    const subtotal = 1200;
    const discountAmount = (subtotal * discount) / 100;
    setCouponDiscount(discountAmount);
  };

  const handlePayment = () => {
    // Simple redirect to success for demo
    router.push(`/checkout/success?courseId=${courseId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Slim Navbar */}
      <nav className="bg-white border-b border-slate-100 h-20 flex items-center px-6 sticky top-0 z-50 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="font-black text-2xl tracking-tight cursor-pointer" onClick={() => router.push('/')}>
            Shikho<span className="text-primary">BD</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-bold text-sm bengali-text bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
            <Lock size={16} className="text-emerald-500" /> 
            নিরাপদ চেকআউট
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Form */}
          <div className="flex-1 space-y-12">
            <StepIndicator currentStep={2} />

            <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 space-y-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-slate-900 bengali-text">যোগাযোগের তথ্য</h2>
                <p className="text-slate-400 font-medium bengali-text">আপনার অ্যাকাউন্টের তথ্যের সাথে এটি মিল থাকা জরুরি</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                  <input className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl px-6 py-5 focus:bg-white focus:border-primary outline-none transition-all font-bold text-slate-700" placeholder="আপনার নাম লিখুন" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                  <input className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl px-6 py-5 focus:bg-white focus:border-primary outline-none transition-all font-bold text-slate-700" placeholder="example@mail.com" />
                </div>
              </div>
            </section>

            <section className="space-y-8 bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
              <h2 className="text-3xl font-black text-slate-900 bengali-text">পেমেন্ট পদ্ধতি</h2>
              <PaymentMethodSelector activeMethod={activeMethod} setActiveMethod={setActiveMethod} />
            </section>
            
            <button 
              onClick={handlePayment}
              className="w-full py-7 bg-primary text-white rounded-[32px] font-black text-2xl bengali-text hover:bg-primary-dark shadow-2xl shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-4 group"
            >
              পেমেন্ট সম্পন্ন করুন 
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[420px] space-y-8">
            <div className="sticky top-28 space-y-8">
              <OrderSummary couponDiscount={couponDiscount} />
              <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
                <CouponInput onApplySuccess={handleApplyCoupon} />
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                <ShieldCheck className="text-emerald-500 shrink-0 mt-1" size={24} />
                <p className="text-xs font-bold text-emerald-700 leading-relaxed bengali-text">
                  আপনার পেমেন্ট সম্পূর্ণ নিরাপদ। আমরা SSLCommerz এবং SSL এনক্রিপশন ব্যবহার করি। কোনো তথ্য আমরা সংরক্ষণ করি না।
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
