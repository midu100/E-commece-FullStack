import React, { useState } from 'react';
import { MdMenu, MdNotificationsNone, MdOutlineAccountCircle, MdSearch, MdMessage } from 'react-icons/md';

const AdminNavbar = ({ setSidebarOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: 'New Order #ORD-1025 received', time: '10 mins ago', type: 'order' },
    { id: 2, text: 'Payment Received: $120.00', time: '1 hour ago', type: 'payment' },
    { id: 3, text: 'Low Stock Alert: Wireless Headphones (Only 2 left)', time: '2 hours ago', type: 'alert' },
  ];

  return (
    <header className="h-20 bg-[#1E222D] flex items-center justify-between px-8 sticky top-0 z-40 relative border-b border-white/5">
      <div className="flex items-center gap-6 w-full">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:bg-white/5 transition-colors"
        >
          <MdMenu size={26} />
        </button>
        <div className="hidden md:flex items-center gap-2 border-1 border-white p-2 rounded-[10px]">
          <MdSearch size={22} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none text-[14px] w-64 text-slate-200 placeholder-slate-400 font-medium focus:ring-0"
          />
        </div>
        
      </div>

      <div className="flex items-center gap-4 md:gap-6 relative shrink-0">
        
        <button className="text-slate-400 hover:text-white transition-colors">
           <MdMessage size={22} />
        </button>

        <button 
          className="relative text-slate-400 hover:text-white transition-colors"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <MdNotificationsNone size={24} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-[#1E222D]">5</span>
        </button>

        {showNotifications && (
          <div className="absolute top-12 right-12 w-80 bg-white shadow-xl rounded-2xl overflow-hidden z-50 border border-slate-100">
            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 text-sm tracking-wide">Notifications</h3>
              <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-bold uppercase tracking-wider">3 New</span>
            </div>
            <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
              {notifications.map((notif) => (
                <div key={notif.id} className="px-5 py-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors group">
                  <p className="text-[13px] font-semibold text-slate-700 group-hover:text-blue-600 transition-colors leading-relaxed">{notif.text}</p>
                  <p className="text-[11px] font-medium text-slate-400 mt-2 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> {notif.time}</p>
                </div>
              ))}
            </div>
            <div className="p-3 text-center border-t border-slate-100 bg-white hover:bg-slate-50 cursor-pointer transition-colors">
              <span className="text-xs font-bold text-blue-600 tracking-wide">View All Notifications</span>
            </div>
          </div>
        )}
        
        <div className="flex items-center gap-3 pl-4 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-[#1bc48b] text-white flex items-center justify-center font-bold text-[15px] shadow-sm">
            KM
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <p className="text-[14px] font-bold text-slate-200">Kazi Mridul</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
