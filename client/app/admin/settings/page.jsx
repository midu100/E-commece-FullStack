"use client";
import React, { useState } from 'react';
import { MdStorefront, MdAdminPanelSettings, MdLocalShipping, MdPayments, MdSave, MdPublic } from 'react-icons/md';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Store Info');
  
  const tabs = [
    { name: 'Store Info', icon: <MdStorefront size={22} /> },
    { name: 'Payments', icon: <MdPayments size={22} /> },
    { name: 'Delivery', icon: <MdLocalShipping size={22} /> },
    { name: 'Admin Profile', icon: <MdAdminPanelSettings size={22} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700/50 mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">Settings</h2>
          <p className="text-[13px] text-slate-400 mt-1 font-medium tracking-wide">Manage global configuration for your store.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 border border-blue-400/30 text-white px-8 py-3.5 rounded-xl flex items-center gap-2 font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all uppercase tracking-widest text-[12px]">
          <MdSave size={18} />
          Save Changes
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Menu */}
        <div className="w-full md:w-72 space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all text-left border ${
                activeTab === tab.name 
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] border-blue-400/30' 
                  : 'bg-[#1e293b] text-slate-400 border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/30 hover:text-slate-200 shadow-xl'
              }`}
            >
              <div className={`${activeTab === tab.name ? 'text-blue-200' : 'text-slate-500 transition-colors'}`}>
                {tab.icon}
              </div>
              <span className="tracking-wide">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-[#1e293b] p-10 rounded-2xl shadow-xl border border-slate-700/50 min-h-[500px] relative overflow-hidden isolate">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/5 blur-[100px] pointer-events-none rounded-full"></div>
          
          {/* Default Content view based on "Store Info" selection */}
          <div className={`${activeTab === 'Store Info' ? 'block' : 'hidden'} animate-in fade-in duration-300 relative z-10`}>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 tracking-wide uppercase">
              <MdStorefront className="text-blue-500" size={24} /> Store Information
            </h3>
            
            <div className="space-y-8 max-w-3xl">
              <div className="space-y-2.5">
                <label className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">Store Name</label>
                <input type="text" defaultValue="EcoStore Bangladesh" className="w-full px-5 py-4 rounded-xl border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 bg-[#0f172a] text-slate-200 transition-all font-medium shadow-inner" />
              </div>

              <div className="space-y-2.5">
                <label className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">Store Contact Email</label>
                <input type="email" defaultValue="support@ecostore.com.bd" className="w-full px-5 py-4 rounded-xl border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 bg-[#0f172a] text-slate-200 transition-all font-medium shadow-inner" />
              </div>

              <div className="space-y-2.5">
                <label className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">Store Primary Phone</label>
                <input type="text" defaultValue="+880 1711-223344" className="w-full px-5 py-4 rounded-xl border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 bg-[#0f172a] text-slate-200 transition-all font-medium shadow-inner" />
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">Currency Symbol</label>
                  <select className="w-full px-5 py-4 rounded-xl border border-slate-700/50 focus:outline-none focus:border-blue-500/30 bg-[#0f172a] text-slate-200 font-medium shadow-inner appearance-none cursor-pointer">
                    <option value="BDT" className="bg-slate-800">৳ (BDT)</option>
                    <option value="USD" className="bg-slate-800">$ (USD)</option>
                  </select>
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">Timezone</label>
                  <select className="w-full px-5 py-4 rounded-xl border border-slate-700/50 focus:outline-none focus:border-blue-500/30 bg-[#0f172a] text-slate-200 font-medium shadow-inner appearance-none cursor-pointer">
                    <option value="Asia/Dhaka" className="bg-slate-800">Asia/Dhaka (GMT+6)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">Store Logo</label>
                <div className="flex items-center gap-8 bg-[#0f172a] p-6 rounded-2xl border border-slate-700/50">
                  <div className="w-24 h-24 bg-slate-800 rounded-2xl flex items-center justify-center font-black text-slate-500 border-2 border-slate-700 border-dashed shadow-inner tracking-widest text-lg">
                    LOGO
                  </div>
                  <button className="px-6 py-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-bold tracking-widest uppercase text-[11px] rounded-xl transition-all border border-slate-600">
                    Upload New Logo
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${activeTab === 'Payments' ? 'block' : 'hidden'} animate-in fade-in duration-300 relative z-10`}>
             <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 tracking-wide uppercase">
              <MdPayments className="text-emerald-500" size={24} /> Payment Methods
            </h3>
            
            <div className="space-y-6 max-w-3xl">
              <label className="flex items-center justify-between p-6 border border-slate-700/50 rounded-2xl cursor-pointer bg-[#0f172a] hover:border-blue-500/30 transition-colors group shadow-inner">
                <div>
                  <h4 className="font-bold text-slate-200 text-lg tracking-wide group-hover:text-white transition-colors">Cash on Delivery (COD)</h4>
                  <p className="text-[13px] text-slate-400 mt-2 font-medium leading-relaxed max-w-lg">Allow customers to pay in cash upon receiving the order directly at their doorstep.</p>
                </div>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in flex-shrink-0">
                  <input type="checkbox" defaultChecked name="toggle" id="toggle-1" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-slate-100 border-4 appearance-none cursor-pointer translate-x-6 border-emerald-500 transition-all" />
                  <label htmlFor="toggle-1" className="toggle-label block overflow-hidden h-6 rounded-full bg-emerald-500 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.4)]"></label>
                </div>
              </label>

              <label className="flex items-center justify-between p-6 border border-slate-700/50 rounded-2xl cursor-pointer bg-[#0f172a] hover:border-blue-500/30 transition-colors group shadow-inner">
                <div>
                  <h4 className="font-bold text-slate-200 text-lg tracking-wide group-hover:text-white transition-colors">Online Payment Gateway (bKash/SSL)</h4>
                  <p className="text-[13px] text-slate-400 mt-2 font-medium leading-relaxed max-w-lg">Enable card and mobile banking payments securely through verified gateways.</p>
                </div>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in flex-shrink-0">
                  <input type="checkbox" name="toggle" id="toggle-2" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-slate-400 border-4 appearance-none cursor-pointer border-slate-700 transition-all" />
                  <label htmlFor="toggle-2" className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-700 cursor-pointer shadow-inner"></label>
                </div>
              </label>
            </div>
            <style jsx>{`
              .toggle-checkbox:checked { right: 0; border-color: #10b981; }
              .toggle-checkbox:checked + .toggle-label { background-color: #10b981; box-shadow: 0 0 15px rgba(16,185,129,0.4); }
              .toggle-checkbox { border-color: #334155; }
              .toggle-label { background-color: #334155; }
            `}</style>
          </div>

          <div className={`${activeTab === 'Delivery' ? 'block' : 'hidden'} animate-in fade-in duration-300 relative z-10`}>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 tracking-wide uppercase">
              <MdLocalShipping className="text-amber-500" size={24} /> Default Delivery Settings
            </h3>
            <div className="bg-[#0f172a] border border-amber-500/20 p-8 rounded-2xl shadow-inner max-w-3xl">
              <p className="text-slate-300 font-medium leading-relaxed max-w-xl mb-6">Delivery zones and specific charges have been moved to a specialized shipping section for better organization.</p>
              <a href="/admin/shipping" className="inline-flex items-center bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 px-6 py-3 rounded-xl font-bold tracking-widest uppercase text-[12px] transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]">Go to Advanced Shipping Page</a>
            </div>
          </div>

          <div className={`${activeTab === 'Admin Profile' ? 'block' : 'hidden'} animate-in fade-in duration-300 relative z-10`}>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 tracking-wide uppercase">
              <MdAdminPanelSettings className="text-blue-500" size={24} /> Admin Profile
            </h3>
            
            <div className="space-y-8 max-w-3xl">
              <div className="flex items-center gap-8 pb-8 border-b border-slate-700/50 relative">
                <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                <div className="w-24 h-24 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-4xl shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/30">
                  A
                </div>
                <div>
                  <h4 className="font-black text-2xl text-white tracking-wide">Admin User</h4>
                  <p className="text-[13px] font-bold text-blue-400 uppercase tracking-widest mt-1">Super Administrator</p>
                  <button className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-3 hover:text-white transition-colors bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">Change Avatar</button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">Full Name</label>
                  <input type="text" defaultValue="Admin User" className="w-full px-5 py-4 rounded-xl border border-slate-700/50 bg-[#0f172a] text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-inner font-bold" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">Email Address</label>
                  <input type="email" defaultValue="admin@ecostore.com" className="w-full px-5 py-4 rounded-xl border border-slate-700/50 bg-[#0f172a] text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-inner font-bold" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-5 py-4 rounded-xl border border-slate-700/50 bg-[#0f172a] text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-inner font-bold tracking-widest" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Settings;
