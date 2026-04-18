"use client";
import React from 'react';
import { MdAccountBalanceWallet, MdTrendingUp, MdAttachMoney, MdGetApp } from 'react-icons/md';

const Finance = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-[22px] font-bold text-slate-800">Finance Overview</h2>
          <p className="text-[13px] text-slate-500 font-medium mt-1">Manage revenue, payouts, and financial health.</p>
        </div>
        <button className="bg-white hover:bg-slate-50 text-slate-700 px-5 py-2.5 flex items-center gap-2 rounded-lg border border-slate-200 transition-colors font-bold text-sm shadow-sm">
          <MdGetApp size={18} /> Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Total Balance</p>
            <h3 className="text-2xl font-bold text-slate-800">$45,230.00</h3>
            <p className="text-[11px] text-emerald-500 font-bold mt-2">+12.5% from last month</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <MdAccountBalanceWallet size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Monthly Revenue</p>
            <h3 className="text-2xl font-bold text-slate-800">$12,450.00</h3>
            <p className="text-[11px] text-emerald-500 font-bold mt-2">+5.2% from last month</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <MdTrendingUp size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Pending Payouts</p>
            <h3 className="text-2xl font-bold text-slate-800">$3,200.00</h3>
            <p className="text-[11px] text-slate-400 font-medium mt-2">Processing next week</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
            <MdAttachMoney size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-6">Recent Transactions</h3>
        <div className="overflow-x-auto w-full">
           <table className="w-full text-left text-sm">
             <thead>
               <tr className="border-b border-slate-100 bg-slate-50 text-slate-500 font-medium">
                 <th className="py-4 px-6 font-semibold">Transaction ID</th>
                 <th className="py-4 px-6 font-semibold">Date</th>
                 <th className="py-4 px-6 font-semibold">Amount</th>
                 <th className="py-4 px-6 font-semibold">Status</th>
               </tr>
             </thead>
             <tbody>
               {[1, 2, 3, 4].map(idx => (
                 <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                   <td className="py-4 px-6 font-bold text-slate-800 text-[13px]">#TRX-89{idx}2</td>
                   <td className="py-4 px-6 text-slate-600 font-medium text-[13px]">May 2{idx}, 2023</td>
                   <td className="py-4 px-6 font-semibold text-slate-800 text-[13px]">${(Math.random() * 500).toFixed(2)}</td>
                   <td className="py-4 px-6">
                      <span className="inline-flex px-3 py-1 bg-emerald-50 text-emerald-600 rounded text-[11px] font-bold uppercase">Completed</span>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
};

export default Finance;
