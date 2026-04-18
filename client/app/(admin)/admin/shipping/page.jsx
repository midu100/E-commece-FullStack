"use client";
import React, { useState } from 'react';
import DataTable from '@/components/admin/DataTable';
import { MdEdit, MdLocationOn } from 'react-icons/md';

const deliveryCharges = [
  { id: 1, area: 'Inside Dhaka', time: '1-2 Days', charge: '৳60', status: 'Active' },
  { id: 2, area: 'Outside Dhaka', time: '3-5 Days', charge: '৳120', status: 'Active' },
  { id: 3, area: 'Sub Area (Savar, Keraniganj)', time: '2-3 Days', charge: '৳80', status: 'Active' },
];

const Shipping = () => {
  const [showEditCode, setShowEditCode] = useState(false);

  const columns = [
    { label: 'Area / Zone', render: (row) => (
      <div className="flex items-center gap-3 font-bold text-slate-200 tracking-wide">
        <MdLocationOn className="text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)] bg-blue-500/10 rounded-full p-1" size={24} /> {row.area}
      </div>
    )},
    { label: 'Estimated Delivery', render: (row) => <span className="font-medium text-slate-400">{row.time}</span> },
    { label: 'Charge (BDT)', render: (row) => <span className="font-extrabold text-blue-400 tracking-wider text-lg">{row.charge}</span> },
    { label: 'Status', render: (row) => (
      <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider">{row.status}</span>
    )},
  ];

  const actions = (row) => (
    <button 
      onClick={() => setShowEditCode(true)}
      className="text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20 border border-transparent p-2.5 rounded-xl transition-colors flex items-center justify-center mx-auto"
    >
      <MdEdit size={20} />
    </button>
  );

  return (
    <div className="space-y-6">
      <div className="bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700/50 mb-6">
        <h2 className="text-2xl font-bold text-white tracking-wide">Shipping & Delivery Configuration</h2>
        <p className="text-[13px] text-slate-400 mt-1 font-medium tracking-wide">Configure delivery charges for Inside/Outside Dhaka.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DataTable columns={columns} data={deliveryCharges} actions={actions} />
          
          <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-slate-700/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full"></div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide relative z-10">Courier Integration Status</h3>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between p-5 border border-slate-700/50 rounded-2xl bg-[#0f172a] hover:border-blue-500/30 transition-colors group">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center font-black text-2xl text-red-500 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">P</div>
                  <div>
                    <h4 className="font-bold text-slate-200 tracking-wide">Pathao Courier</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 uppercase tracking-widest font-bold">Not connected</p>
                  </div>
                </div>
                <button className="px-5 py-2.5 border border-slate-600 rounded-xl text-[12px] font-bold uppercase tracking-widest text-slate-300 hover:bg-slate-800 transition-colors">Connect API</button>
              </div>
              <div className="flex items-center justify-between p-5 border border-slate-700/50 rounded-2xl bg-[#0f172a] hover:border-blue-500/30 transition-colors group">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center font-black text-2xl text-orange-500 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.2)]">S</div>
                  <div>
                    <h4 className="font-bold text-slate-200 tracking-wide">Steadfast Courier</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 uppercase tracking-widest font-bold">Not connected</p>
                  </div>
                </div>
                <button className="px-5 py-2.5 border border-slate-600 rounded-xl text-[12px] font-bold uppercase tracking-widest text-slate-300 hover:bg-slate-800 transition-colors">Connect API</button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          {showEditCode ? (
            <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-slate-700/50 sticky top-28 isolate">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl pointer-events-none rounded-full"></div>
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Update Charge</h3>
              <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); setShowEditCode(false); }}>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Area Name</label>
                  <input type="text" defaultValue="Inside Dhaka" className="w-full px-5 py-4 rounded-xl border border-slate-700/50 bg-[#0f172a] text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-inner font-medium" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Charge (BDT)</label>
                  <input type="number" defaultValue="60" className="w-full px-5 py-4 rounded-xl border border-slate-700/50 bg-[#0f172a] text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-inner font-bold text-lg" />
                </div>
                <div className="pt-4 flex gap-4">
                  <button type="button" onClick={() => setShowEditCode(false)} className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 rounded-xl font-bold uppercase tracking-widest text-[12px] transition-colors">Cancel</button>
                  <button type="submit" className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold uppercase tracking-widest text-[12px] shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-blue-400/30 transition-colors">Save</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-blue-500/10 p-8 rounded-2xl border border-blue-500/30 text-blue-100 relative overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.1)]">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-2xl pointer-events-none rounded-full"></div>
              <h3 className="font-extrabold text-lg mb-4 flex items-center gap-3 tracking-wide drop-shadow"><MdLocationOn size={24} className="text-blue-400" /> Quick Tips</h3>
              <p className="text-[13px] mb-4 font-medium leading-relaxed opacity-90">Click the edit icon on any delivery zone to update the delivery charge dynamically.</p>
              <div className="w-full h-px bg-blue-500/20 my-4"></div>
              <p className="text-[13px] font-medium leading-relaxed opacity-90">Typical rates: <span className="font-bold text-white bg-blue-500/20 px-2 py-1 rounded">60 BDT for Inside Dhaka</span> and <span className="font-bold text-white bg-blue-500/20 px-2 py-1 rounded">120 BDT for Outside Dhaka</span>.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shipping;
