import React from 'react';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, 
  Tooltip, Legend, ResponsiveContainer, CartesianGrid 
} from 'recharts';

const GrowthChart = ({ data }) => {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#185FA5" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#185FA5" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorEn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1D9E75" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#1D9E75" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#64748b' }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#64748b' }}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
          />
          <Legend 
            verticalAlign="top" 
            align="right" 
            iconType="circle"
            wrapperStyle={{ paddingBottom: '20px', fontSize: '12px', fontWeight: 'bold' }}
          />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            name="মোট রেভিনিউ"
            stroke="#185FA5" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorRev)" 
          />
          <Area 
            type="monotone" 
            dataKey="enrollments" 
            name="নতুন এনরোলমেন্ট"
            stroke="#1D9E75" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorEn)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;
