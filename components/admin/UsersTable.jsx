import React from 'react';
import { Eye, Ban } from 'lucide-react';

const UsersTable = ({ users }) => {
  const getRoleStyle = (role) => {
    switch (role) {
      case 'Student': return 'bg-blue-50 text-blue-600';
      case 'Instructor': return 'bg-emerald-50 text-emerald-600';
      case 'Admin': return 'bg-purple-50 text-purple-600';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  const getStatusStyle = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text">নাম</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text">ইমেইল</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text text-center">রোল</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text text-center">যোগদানের তারিখ</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text text-center">স্ট্যাটাস</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider bengali-text text-center">অ্যাকশন</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 bg-white">
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                    {user.name.charAt(0)}
                  </div>
                  <span className="font-bold text-gray-900 text-sm bengali-text">{user.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-xs text-gray-500">{user.email}</td>
              <td className="px-6 py-4 text-center">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${getRoleStyle(user.role)}`}>
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4 text-xs text-gray-700 text-center">{user.date}</td>
              <td className="px-6 py-4 text-center">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${getStatusStyle(user.status)}`}>
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-primary transition-colors"><Eye size={16} /></button>
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Ban size={16} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
