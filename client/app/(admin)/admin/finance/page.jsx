"use client";
import React from 'react';
import { MdAccountBalanceWallet, MdTrendingUp, MdAttachMoney, MdGetApp } from 'react-icons/md';
import { useGetDashboardStatsQuery } from '../../services/api';

const Finance = () => {
  const { data, isLoading, isError } = useGetDashboardStatsQuery();

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 py-32">
        <div className="w-8 h-8 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
        <span className="text-sm font-semibold tracking-wide text-slate-500">Loading Finance Data...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 py-32 text-red-500">
        <p className="font-semibold text-lg">Failed to load financial overview.</p>
      </div>
    );
  }

  const stats = data?.data || {};
  
  // Calculate total orders revenue for weekly overview
  const weeklyRevenue = stats.last7DaysRevenue?.reduce((sum, day) => sum + day.dailyRevenue, 0) || 0;
  
  // Pending orders amount calculation as pending payout/processing values
  const pendingAmount = stats.recentOrders?.filter(o => o.status === 'Pending' || o.status === 'Processing')
    .reduce((sum, o) => sum + o.totalPrice, 0) || 0;

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
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Total Revenue</p>
            <h3 className="text-2xl font-bold text-slate-800">৳{stats.totalRevenue?.toLocaleString() || 0}</h3>
            <p className="text-[11px] text-emerald-500 font-bold mt-2">Cumulative sales</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <MdAccountBalanceWallet size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Weekly Revenue</p>
            <h3 className="text-2xl font-bold text-slate-800">৳{weeklyRevenue.toLocaleString()}</h3>
            <p className="text-[11px] text-emerald-500 font-bold mt-2">Last 7 Days Sales</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <MdTrendingUp size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Pending Amount</p>
            <h3 className="text-2xl font-bold text-slate-800">৳{pendingAmount.toLocaleString()}</h3>
            <p className="text-[11px] text-slate-400 font-medium mt-2">From pending/processing orders</p>
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
               {stats.recentOrders?.length > 0 ? (
                 stats.recentOrders.map((order, idx) => (
                   <tr key={order._id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                     <td className="py-4 px-6 font-bold text-slate-800 text-[13px]">{order.orderNumber || order._id.slice(-8).toUpperCase()}</td>
                     <td className="py-4 px-6 text-slate-600 font-medium text-[13px]">{new Date(order.createdAt).toLocaleDateString()}</td>
                     <td className="py-4 px-6 font-semibold text-slate-800 text-[13px]">৳{order.totalPrice?.toLocaleString()}</td>
                     <td className="py-4 px-6">
                        <span className={`inline-flex px-3 py-1 rounded text-[11px] font-bold uppercase ${
                          order.payment?.status === 'Paid' 
                            ? 'bg-emerald-50 text-emerald-600' 
                            : 'bg-amber-50 text-amber-600'
                        }`}>
                          {order.payment?.status || 'Pending'}
                        </span>
                     </td>
                   </tr>
                 ))
               ) : (
                 <tr>
                   <td colSpan="4" className="py-10 text-center text-slate-400">No recent transactions recorded.</td>
                 </tr>
               )}
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
};

export default Finance;

