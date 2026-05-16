import React from 'react';
import { useRouter } from 'next/router';
import { 
  LayoutDashboard, BookOpen, Video, 
  ClipboardList, Award, Settings, LogOut,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const router = useRouter();
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard/student' },
    { id: 'courses', label: 'আমার কোর্সসমূহ', icon: <BookOpen size={20} />, path: '#' },
    { id: 'live', label: 'Live Classes', icon: <Video size={20} />, path: '#' },
    { id: 'quiz', label: 'Quiz & Assignments', icon: <ClipboardList size={20} />, path: '#' },
    { id: 'certificate', label: 'সার্টিফিকেট', icon: <Award size={20} />, path: '#' },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} />, path: '#' },
  ];

  return (
    <aside className="w-[220px] bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      
      {/* User Profile Block */}
      <div className="p-6 border-b border-gray-50">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mb-3 shadow-lg shadow-primary/20">
            RA
          </div>
          <h3 className="font-bold text-gray-900 bengali-text">Rana Ahmed</h3>
          <p className="text-[10px] text-gray-400 mb-2">rana@email.com</p>
          <button className="text-[10px] font-bold text-primary hover:underline uppercase tracking-wider">
            My Profile
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1">
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

      {/* Logout */}
      <div className="p-4">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-red-100 text-red-500 rounded-xl text-sm font-bold hover:bg-red-50 transition-colors">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
