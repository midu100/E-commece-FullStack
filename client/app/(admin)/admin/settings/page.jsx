"use client";
import React, { useState } from 'react';
import { MdStorefront, MdSecurity, MdNotifications, MdCreditCard } from 'react-icons/md';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-[22px] font-bold text-slate-800">Settings</h2>
          <p className="text-[13px] text-slate-500 font-medium mt-1">Manage global preferences and store configurations.</p>
        </div>
        <button className="px-6 py-2 text-sm font-bold text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/30">
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="col-span-1 border border-slate-100 bg-white rounded-xl shadow-sm p-2 h-max">
           <button 
             onClick={() => setActiveTab('general')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-[13px] transition-colors text-left ${activeTab === 'general' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
           >
             <MdStorefront size={20} />
             General Store
           </button>
           <button 
             onClick={() => setActiveTab('security')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-[13px] transition-colors text-left ${activeTab === 'security' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
           >
             <MdSecurity size={20} />
             Security
           </button>
           <button 
             onClick={() => setActiveTab('notifications')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-[13px] transition-colors text-left ${activeTab === 'notifications' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
           >
             <MdNotifications size={20} />
             Notifications
           </button>
           <button 
             onClick={() => setActiveTab('payment')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-[13px] transition-colors text-left ${activeTab === 'payment' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
           >
             <MdCreditCard size={20} />
             Payment
           </button>
        </div>

        {/* Settings Content */}
        <div className="col-span-1 md:col-span-3 space-y-6">
          
          {activeTab === 'general' && (
            <>
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-in fade-in duration-300">
                <h3 className="font-bold text-slate-800 mb-6">Store Information</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-600 mb-2">Store Name</label>
                    <input 
                      type="text" 
                      defaultValue="FastCart Ecommerce"
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-slate-600 mb-2">Support Email</label>
                      <input 
                        type="email" 
                        defaultValue="support@fastcart.com"
                        className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-slate-600 mb-2">Support Phone</label>
                      <input 
                        type="text" 
                        defaultValue="+1 234 567 890"
                        className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-600 mb-2">Store Address</label>
                    <textarea 
                      rows="3"
                      defaultValue="123 Commerce St, Tech City, 10001"
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 resize-none bg-white"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-in fade-in duration-300">
                <h3 className="font-bold text-slate-800 mb-6">Currency & Regional</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-600 mb-2">Currency</label>
                    <select className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white">
                      <option defaultValue>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>BDT (৳)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-600 mb-2">Timezone</label>
                    <select className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white">
                      <option defaultValue>(UTC) Coordinated Universal Time</option>
                      <option>(UTC+06:00) Dhaka</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'security' && (
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-in fade-in duration-300">
              <h3 className="font-bold text-slate-800 mb-6">Change Password</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-[13px] font-semibold text-slate-600 mb-2">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-slate-600 mb-2">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-slate-600 mb-2">Confirm New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white" />
                </div>
                <button className="px-5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold text-[13px] rounded-lg transition-colors border border-blue-100">Update Password</button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-in fade-in duration-300">
              <h3 className="font-bold text-slate-800 mb-6">Email Notifications</h3>
              <div className="space-y-4">
                {[
                  { title: "Order Placement", desc: "Receive an email when a new order is placed." },
                  { title: "Order Cancellations", desc: "Receive an email when an order is cancelled." },
                  { title: "Stock Alerts", desc: "Receive an email when inventory is low." },
                  { title: "Daily Summary", desc: "Receive a daily summary of sales and activity." }
                ].map((notif, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-bold text-slate-700 text-[14px]">{notif.title}</h4>
                      <p className="text-[12px] text-slate-500 mt-0.5">{notif.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={idx !== 3} />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-in fade-in duration-300">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-slate-800">Payment Gateways</h3>
                 <button className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-[13px] rounded-lg transition-colors border border-slate-200">+ Add Gateway</button>
              </div>
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-8 bg-[#6772E5] rounded flex items-center justify-center text-white font-bold text-xs">Stripe</div>
                     <div>
                       <h4 className="font-bold text-slate-800 text-[14px]">Stripe Checkout</h4>
                       <p className="text-[12px] text-emerald-600 font-semibold mt-0.5">Connected • Active</p>
                     </div>
                   </div>
                   <button className="text-[13px] font-bold text-slate-500 hover:text-slate-800">Manage</button>
                 </div>
                 
                 <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-8 bg-[#00457C] rounded flex items-center justify-center text-white font-bold text-[10px]">PayPal</div>
                     <div>
                       <h4 className="font-bold text-slate-800 text-[14px]">PayPal Express</h4>
                       <p className="text-[12px] text-slate-400 font-semibold mt-0.5">Disconnected</p>
                     </div>
                   </div>
                   <button className="text-[13px] font-bold text-blue-600 hover:text-blue-800">Connect</button>
                 </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Settings;
