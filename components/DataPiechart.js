"use client"
import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import { Users } from 'lucide-react';

const data = [
  { name: 'Total', count: 100, fill: '04A777' },
  { name: 'Girls', count: 45, fill: '#FAE27C' }, 
  { name: 'Boys', count: 55, fill: '#C3EBFA' },  
  
];

export default function RoleRadialChart() {
  return (
    <div className="bg-white p-4 rounded-xl w-full h-full flex flex-col justify-between shadow-sm border border-gray-100">
      
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-800">Students</h1>
        <span className="text-gray-400 cursor-pointer text-xl font-bold">•••</span>
      </div>

      
      <div className="relative w-full h-[220px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={24}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              background={{ fill: '#F3F4F6' }} 
              dataKey="count"
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        
      
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Users className="w-8 h-8 text-sky-500" />
        </div>
      </div>

   
      <div className="flex justify-center gap-12 pt-2 border-t border-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-[#C3EBFA] mb-1" />
          <h2 className="text-sm font-bold text-gray-800">1,234</h2>
          <p className="text-xs text-gray-400">Boys (55%)</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-[#FAE27C] mb-1" />
          <h2 className="text-sm font-bold text-gray-800">1,010</h2>
          <p className="text-xs text-gray-400">Girls (45%)</p>
        </div>
      </div>
    </div>
  );
}