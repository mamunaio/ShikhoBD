"use client";

import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  Camera, 
  Mail, 
  Globe, 
  Smartphone,
  Save,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SettingsPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  const [activeTab, setActiveTab] = useState('profile');
  const [saved, setSaved] = useState(false);

  if (status === 'loading') return null;

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'profile', label: 'Edit Profile', icon: <User size={18} /> },
    { id: 'security', label: 'Security', icon: <Lock size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'privacy', label: 'Privacy', icon: <Shield size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6 font-inter">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex items-center justify-between">
           <div className="space-y-1">
              <h1 className="text-4xl font-black text-gray-900">Settings</h1>
              <p className="text-gray-500 font-medium">Manage your account settings and preferences.</p>
           </div>
           <button 
             onClick={handleSave}
             className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-black shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95"
           >
              {saved ? <CheckCircle2 size={20} /> : <Save size={20} />}
              {saved ? 'Changes Saved' : 'Save Changes'}
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           
           {/* Sidebar Tabs */}
           <div className="lg:col-span-4 space-y-2">
              {tabs.map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 p-5 rounded-3xl transition-all font-black text-sm ${activeTab === tab.id ? 'bg-white text-primary shadow-xl shadow-blue-900/5' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
                >
                   <div className={`${activeTab === tab.id ? 'text-primary' : 'text-gray-300'}`}>
                      {tab.icon}
                   </div>
                   {tab.label}
                </button>
              ))}
           </div>

           {/* Main Content Area */}
           <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[48px] border border-gray-100 shadow-xl shadow-blue-900/5">
              <AnimatePresence mode='wait'>
                 {activeTab === 'profile' && (
                   <motion.div 
                     key="profile"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     className="space-y-10"
                   >
                      <div className="flex flex-col md:flex-row items-center gap-8 pb-10 border-b border-gray-50">
                         <div className="relative group">
                            <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center text-white font-black text-4xl shadow-xl shadow-primary/20 overflow-hidden relative group">
                               {session?.user?.image ? (
                                 <img src={session.user.image} alt="" className="w-full h-full object-cover" />
                               ) : (
                                 session?.user?.name?.charAt(0) || 'U'
                               )}
                               <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                  <Camera size={24} />
                               </div>
                            </div>
                         </div>
                         <div className="text-center md:text-left space-y-1">
                            <h3 className="text-xl font-black text-gray-900">Profile Photo</h3>
                            <p className="text-sm text-gray-400 font-medium">PNG, JPG or GIF. Max size of 2MB.</p>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Full Name</label>
                           <input 
                             type="text" 
                             defaultValue={session?.user?.name || 'User'} 
                             className="w-full p-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-primary/20 outline-none transition-all font-medium"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Email Address</label>
                           <input 
                             type="email" 
                             defaultValue={session?.user?.email || 'user@example.com'} 
                             className="w-full p-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-primary/20 outline-none transition-all font-medium"
                           />
                        </div>
                         <div className="md:col-span-2 space-y-3">
                            <label className="text-sm font-black text-gray-900 ml-1">Bio</label>
                            <textarea 
                              rows={4}
                              defaultValue="Passionate learner and web developer based in Dhaka, Bangladesh."
                              className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-primary/20 focus:bg-white transition-all font-bold text-gray-700 resize-none" 
                            />
                         </div>
                      </div>
                   </motion.div>
                 )}

                 {activeTab === 'security' && (
                   <motion.div 
                     key="security"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     className="space-y-10"
                   >
                      <h3 className="text-2xl font-black text-gray-900">Change Password</h3>
                      <div className="space-y-6">
                         <div className="space-y-3">
                            <label className="text-sm font-black text-gray-900 ml-1">Current Password</label>
                            <input 
                              type="password" 
                              className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-primary/20 focus:bg-white transition-all font-bold text-gray-700" 
                            />
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                               <label className="text-sm font-black text-gray-900 ml-1">New Password</label>
                               <input 
                                 type="password" 
                                 className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-primary/20 focus:bg-white transition-all font-bold text-gray-700" 
                               />
                            </div>
                            <div className="space-y-3">
                               <label className="text-sm font-black text-gray-900 ml-1">Confirm New Password</label>
                               <input 
                                 type="password" 
                                 className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-primary/20 focus:bg-white transition-all font-bold text-gray-700" 
                               />
                            </div>
                         </div>
                      </div>

                      <div className="pt-10 border-t border-gray-50 space-y-6">
                         <h3 className="text-xl font-black text-gray-900">Two-Factor Authentication</h3>
                         <div className="flex items-center justify-between p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                            <div className="flex items-center gap-4">
                               <div className="p-3 bg-white rounded-2xl text-primary shadow-sm">
                                  <Smartphone size={24} />
                               </div>
                               <div>
                                  <p className="font-black text-gray-900">SMS Authentication</p>
                                  <p className="text-xs text-gray-500 font-medium">Add an extra layer of security to your account.</p>
                               </div>
                            </div>
                            <button className="px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-black">Enable</button>
                         </div>
                      </div>
                   </motion.div>
                 )}

                 {activeTab === 'notifications' && (
                   <motion.div 
                     key="notifications"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     className="space-y-8"
                   >
                      <h3 className="text-2xl font-black text-gray-900">Notification Preferences</h3>
                      <div className="space-y-4">
                         {[
                           { title: 'Course Updates', desc: 'Get notified when a course you are enrolled in has new content.', defaultChecked: true },
                           { title: 'Marketing Emails', desc: 'Receive emails about new courses, features and discounts.', defaultChecked: false },
                           { title: 'Security Alerts', desc: 'Important notifications about your account security and activity.', defaultChecked: true },
                           { title: 'Learning Reminders', desc: 'Customized reminders to help you stay consistent with your learning.', defaultChecked: true },
                         ].map((notif, i) => (
                           <div key={i} className="flex items-center justify-between p-6 hover:bg-gray-50 rounded-3xl transition-all group">
                              <div className="space-y-1">
                                 <p className="font-black text-gray-900">{notif.title}</p>
                                 <p className="text-sm text-gray-400 font-medium max-w-xs md:max-w-md">{notif.desc}</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                 <input type="checkbox" defaultChecked={notif.defaultChecked} className="sr-only peer" />
                                 <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-6 after:transition-all peer-checked:bg-primary"></div>
                              </label>
                           </div>
                         ))}
                      </div>
                   </motion.div>
                 )}
              </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
