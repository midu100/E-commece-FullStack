"use client";
import React from 'react';

const DashboardCard = ({ title, value, icon, gradient }) => {
  return (
    <div className="bg-[#1e293b] rounded-2xl p-6 shadow-xl border border-slate-700/50 hover:shadow-2xl hover:border-slate-600 transition-all relative overflow-hidden group">
      {/* Background Gradient accent */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl ${gradient} transition-transform group-hover:scale-125`}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-[13px] font-bold text-slate-400 mb-1 tracking-wider uppercase">{title}</p>
          <h3 className="text-3xl font-extrabold text-white tracking-tight">{value}</h3>
          <p className="text-xs font-bold text-emerald-400 mt-2 flex items-center gap-1.5 bg-emerald-500/10 w-fit px-2 py-1 rounded-lg outline outline-1 outline-emerald-500/30">
            <span>↑ 12%</span> <span className="text-emerald-500/70 font-medium">vs last month</span>
          </p>
        </div>
        
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${gradient} outline outline-offset-2 outline-slate-700/50 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
