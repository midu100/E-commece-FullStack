"use client";
import React from 'react';
import { MdLocalShipping, MdMap, MdWatchLater } from 'react-icons/md';

const Shipping = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-[22px] font-bold text-slate-800">Shipping & Logistics</h2>
          <p className="text-[13px] text-slate-500 font-medium mt-1">Manage deliveries, couriers, and shipping zones.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">142</h3>
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mt-1">Active Shipments</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <MdLocalShipping size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">12</h3>
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mt-1">Pending Dispatches</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
            <MdWatchLater size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">3</h3>
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mt-1">Active Zones</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <MdMap size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-6">Recent Deliveries</h3>
        <div className="overflow-x-auto w-full">
           <table className="w-full text-left text-sm">
             <thead>
               <tr className="border-b border-slate-100 bg-slate-50 text-slate-500 font-medium">
                 <th className="py-4 px-6 font-semibold">Tracking ID</th>
                 <th className="py-4 px-6 font-semibold">Destination</th>
                 <th className="py-4 px-6 font-semibold">Courier Provider</th>
                 <th className="py-4 px-6 font-semibold">Status</th>
               </tr>
             </thead>
             <tbody>
               {[1, 2, 3, 4].map(idx => (
                 <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                   <td className="py-4 px-6 font-bold text-slate-800 text-[13px]">#TRK-FDX0{idx}</td>
                   <td className="py-4 px-6 text-slate-600 font-medium text-[13px]">Dhaka, BD</td>
                   <td className="py-4 px-6 font-semibold text-slate-800 text-[13px]">Pathao Courier</td>
                   <td className="py-4 px-6">
                      <span className="inline-flex px-3 py-1 bg-blue-50 text-blue-600 rounded text-[11px] font-bold uppercase">In Transit</span>
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

export default Shipping;
