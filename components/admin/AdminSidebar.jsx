import React from 'react';
import { useRouter } from 'next/router';
import { 
  LayoutDashboard, Users, BookOpen, CheckCircle, 
  Wallet, Video, Star, Tag, Settings, LogOut,
  ChevronRight, ShieldCheck
} from 'lucide-react';

const AdminSidebar = () => {
  const router = useRouter();
  
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} />, path: '/dashboard/admin' },
    { id: 'users', label: 'ব্যবহারকারী ম্যানেজমেন্ট', icon: <Users size={20} />, path: '#' },
    { id: 'courses', label: 'কোর্স ম্যানেজমেন্ট', icon: <BookOpen size={20} />, path: '#' },
    { id: 'approval', label: 'Instructor অনুমোদন', icon: <CheckCircle size={20} />, path: '#' },
    { id: 'payments', label: 'পেমেন্ট ও পেআউট', icon: <Wallet size={20} />, path: '#' },
    { id: 'live', label: 'Live Classes', icon: <Video size={20} />, path: '#' },
    { id: 'moderation', label: 'রিভিউ মডারেশন', icon: <Star size={20} />, path: '#' },
    { id: 'coupons', label: 'কুপন ম্যানেজমেন্ট', icon: <Tag size={20} />, path: '#' },
    { id: 'settings', label: 'সাইট সেটিংস', icon: <Settings size={20} />, path: '#' },
  ];

  return (
    <aside className="w-[240px] bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      
      {/* Brand Block */}
      <div className="p-6 border-b border-gray-50">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg text-white">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary tracking-tight">ShikhoBD</h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => {
          const isActive = router.pathname === item.path;
          return (
            <a
              key={item.id}
              href={item.path}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${
                isActive 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-primary'
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm font-semibold bengali-text">{item.label}</span>
              </div>
              {!isActive && <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
            </a>
          );
        })}
      </nav>

      {/* Bottom Profile */}
      <div className="p-4 border-t border-gray-50 space-y-4">
        <div className="flex items-center gap-3 px-2">
           <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">AD</div>
           <div>
              <p className="text-sm font-bold text-gray-900">Admin User</p>
              <p className="text-[10px] text-gray-400">Super Admin</p>
           </div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-red-100 text-red-500 rounded-xl text-sm font-bold hover:bg-red-50 transition-colors">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
