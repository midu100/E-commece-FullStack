"use client";
import React, { useState } from 'react';
import { MdMenu, MdNotificationsNone, MdOutlineAccountCircle, MdSearch } from 'react-icons/md';

const AdminNavbar = ({ setSidebarOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: 'New Order #ORD-1025 received', time: '10 mins ago', type: 'order' },
    { id: 2, text: 'Payment Received: $120.00', time: '1 hour ago', type: 'payment' },
    { id: 3, text: 'Low Stock Alert: Wireless Headphones (Only 2 left)', time: '2 hours ago', type: 'alert' },
  ];

  return (
    <header className="h-20 bg-[#0f172a]/80 backdrop-blur-xl border-b border-indigo-500/10 flex items-center justify-between px-6 sticky top-0 z-40 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors shadow-sm"
        >
          <MdMenu size={24} />
        </button>
        <div className="hidden md:flex items-center bg-slate-800/50 border border-slate-700/50 px-4 py-2.5 rounded-2xl min-w-[320px] focus-within:ring-2 focus-within:ring-blue-500/50 transition-all shadow-inner">
          <MdSearch size={22} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search orders, products..." 
            className="bg-transparent border-none outline-none px-3 text-[13px] w-full text-slate-200 placeholder-slate-500 font-medium"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6 relative">
        <button 
          className="relative p-2.5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/80 transition-colors shadow-sm"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <MdNotificationsNone size={24} className="text-blue-400" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#0f172a] shadow-[0_0_8px_rgba(239,68,68,1)]"></span>
        </button>

        {showNotifications && (
          <div className="absolute top-14 right-10 w-80 bg-[#1e293b] border border-indigo-500/20 shadow-2xl rounded-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="bg-[#0f172a]/50 px-5 py-4 border-b border-slate-700/50 flex justify-between items-center backdrop-blur-sm">
              <h3 className="font-bold text-slate-200 text-sm tracking-wide">Notifications</h3>
              <span className="text-[10px] bg-blue-500/10 text-blue-400 outline outline-1 outline-blue-500/30 px-2 py-1 rounded-full font-bold uppercase tracking-wider">3 New</span>
            </div>
            <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
              {notifications.map((notif) => (
                <div key={notif.id} className="px-5 py-4 border-b border-slate-700/30 hover:bg-slate-800/80 cursor-pointer transition-colors group">
                  <p className="text-[13px] font-semibold text-slate-300 group-hover:text-blue-300 transition-colors leading-relaxed">{notif.text}</p>
                  <p className="text-[11px] font-medium text-slate-500 mt-2 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {notif.time}</p>
                </div>
              ))}
            </div>
            <div className="p-3 text-center border-t border-slate-700/50 bg-[#0f172a]/50 hover:bg-slate-800 cursor-pointer transition-colors backdrop-blur-sm">
              <span className="text-xs font-bold text-blue-400 tracking-wide">View All Notifications</span>
            </div>
          </div>
        )}
        
        <div className="flex items-center gap-3 pl-4 border-l border-slate-700/50 cursor-pointer hover:bg-slate-800/50 p-2 rounded-2xl transition-colors">
          <div className="hidden sm:block text-right">
            <p className="text-[13px] font-bold text-slate-200 tracking-wide">Admin</p>
            <p className="text-[10px] text-blue-400 font-bold tracking-widest uppercase mt-0.5">Super Admin</p>
          </div>
          <MdOutlineAccountCircle size={42} className="text-slate-500 -ml-1 border-2 border-slate-700 rounded-full bg-slate-800" />
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
