import React from 'react';
import { Award, Download } from 'lucide-react';

const CertificateCard = ({ certificate }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between gap-4 group hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
           <Award size={28} />
        </div>
        <div>
           <h4 className="font-bold text-gray-900 text-sm bengali-text leading-tight mb-1">{certificate.courseName}</h4>
           <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Issued: {certificate.issueDate}</p>
        </div>
      </div>
      
      <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-xs font-bold hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 bengali-text">
         <Download size={14} />
         ডাউনলোড
      </button>
    </div>
  );
};

export default CertificateCard;
