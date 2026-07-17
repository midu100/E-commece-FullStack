"use client";
import React from 'react';
import { MdSettings, MdAttachMoney, MdShoppingCart, MdInventory, MdPeople } from 'react-icons/md';
import { useGetDashboardStatsQuery } from '../../services/api';

const Dashboard = () => {
  const { data, isLoading, isError } = useGetDashboardStatsQuery();

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 py-32">
        <div className="w-8 h-8 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
        <span className="text-sm font-semibold tracking-wide text-slate-500">Loading Dashboard Stats...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 py-32 text-red-500">
        <p className="font-semibold text-lg">Failed to load dashboard statistics.</p>
        <p className="text-sm">Please make sure the server is running and try again.</p>
      </div>
    );
  }

  const stats = data?.data || {};

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-[22px] font-bold text-slate-800">Dashboard</h2>
          <p className="text-[13px] text-slate-500 font-medium">Real-time overview of your store's performance.</p>
        </div>
        <button className="flex items-center gap-2 border border-blue-500 text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
          <MdSettings size={18} />
          Manage
        </button>
      </div>

      {/* Top 5 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800">৳{stats.totalRevenue?.toLocaleString() || 0}</h3>
            <p className="text-[11px] text-slate-500 font-medium">Total Revenue</p>
            <p className="text-[11px] text-emerald-500 font-bold mt-1">Active Sales</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <MdAttachMoney size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800">{stats.totalOrders || 0}</h3>
            <p className="text-[11px] text-slate-500 font-medium">Total Orders</p>
            <p className="text-[11px] text-blue-500 font-bold mt-1">{stats.ordersByStatus?.pending || 0} Pending</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <MdShoppingCart size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800">{stats.totalProducts || 0}</h3>
            <p className="text-[11px] text-slate-500 font-medium">Active Products</p>
            <p className="text-[11px] text-amber-500 font-bold mt-1">{stats.totalCategories || 0} Categories</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
            <MdInventory size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800">{stats.newUsers || 0}</h3>
            <p className="text-[11px] text-slate-500 font-medium">New Users (7d)</p>
            <p className="text-[11px] text-indigo-500 font-bold mt-1">Growth phase</p>
          </div>
          <div className="flex items-end gap-1 h-8">
             {[3, 2, 4, 5, 2, 4].map((h, i) => (
                <div key={i} className="w-1.5 bg-indigo-300 rounded-t-sm" style={{ height: `${h * 20}%` }}></div>
             ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800">{stats.activeUsers || 0}</h3>
            <p className="text-[11px] text-slate-500 font-medium">Verified Users</p>
            <p className="text-[11px] text-emerald-500 font-bold mt-1">Total {stats.totalUsers || 0}</p>
          </div>
          <div className="flex items-end gap-1 h-8">
             {[2, 4, 3, 5, 4, 2].map((h, i) => (
                <div key={i} className="w-1.5 bg-emerald-300 rounded-t-sm" style={{ height: `${h * 20}%` }}></div>
             ))}
          </div>
        </div>
      </div>

      {/* Middle Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-slate-800">Orders Over Time (Last 7 Days)</h3>
             <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Weekly Overview</span>
          </div>
          <div className="flex gap-10 mb-8">
             <div>
                <h4 className="text-2xl font-bold text-slate-800">{stats.totalOrders || 0}</h4>
                <p className="text-xs text-slate-400 font-medium mt-1">Cumulative Orders</p>
             </div>
             <div>
                <h4 className="text-2xl font-bold text-slate-800">৳{stats.totalRevenue?.toLocaleString() || 0}</h4>
                <p className="text-xs text-slate-400 font-medium mt-1">Total Sales Revenue</p>
             </div>
          </div>
          <div className="h-64 flex items-end justify-between relative mt-4">
             <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,80 Q10,95 20,85 T40,65 T60,50 T80,85 T100,55" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                <path d="M0,65 Q10,75 20,60 T40,40 T60,25 T80,60 T100,45" fill="none" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="50" cy="30" r="3" fill="white" stroke="#3B82F6" strokeWidth="2" />
             </svg>
             <div className="absolute top-[10%] left-[45%] bg-slate-800 text-white p-2 rounded text-[10px] text-center font-medium shadow-md">
                Active Store Status<br/><span className="text-slate-300 font-normal">Real Data Sync</span>
             </div>
             {/* Grid Lines */}
             <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[100, 80, 60, 40, 20, 0].map((v) => (
                   <div key={v} className="w-full border-t border-slate-100 border-dashed text-[10px] text-slate-400 -mt-2">
                     <span className="bg-white pr-2">{v}%</span>
                   </div>
                ))}
             </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
           <h3 className="font-bold text-slate-800 mb-6">Recent Sales Trend</h3>
           <div>
              <h4 className="text-2xl font-bold text-slate-800">{stats.last7DaysRevenue?.reduce((acc, curr) => acc + curr.dailyOrders, 0) || 0}</h4>
              <p className="text-sm text-slate-500 font-medium">Weekly Items Sold</p>
           </div>
           <div className="mt-4">
              <h4 className="text-2xl font-bold text-slate-800">৳{stats.last7DaysRevenue?.reduce((acc, curr) => acc + curr.dailyRevenue, 0)?.toLocaleString() || 0}</h4>
              <p className="text-sm text-slate-500 font-medium">Weekly Revenue</p>
           </div>
           <div className="h-40 mt-8 flex items-end justify-between gap-2 relative">
             {stats.last7DaysRevenue?.length > 0 ? (
               stats.last7DaysRevenue.map((day, i) => {
                 const maxRevenue = Math.max(...stats.last7DaysRevenue.map(d => d.dailyRevenue), 1);
                 const heightPct = (day.dailyRevenue / maxRevenue) * 80 + 10; // min 10% height
                 return (
                    <div 
                      key={i} 
                      className="w-full bg-[#1bc48b] rounded-t-sm relative group cursor-pointer hover:opacity-90 transition-opacity" 
                      style={{ height: `${heightPct}%` }}
                      title={`${day._id}: ৳${day.dailyRevenue}`}
                    >
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        ৳{day.dailyRevenue}
                      </div>
                    </div>
                 );
               })
             ) : (
               <div className="w-full text-center text-slate-400 text-xs py-10">No recent transactions this week</div>
             )}
           </div>
           <div className="flex justify-between mt-3 text-[9px] text-slate-400 font-bold">
              {stats.last7DaysRevenue?.map((day, i) => (
                <span key={i}>{day._id.split('-')[2]}</span>
              )) || <span>No Data</span>}
           </div>
        </div>
      </div>

      {/* Bottom Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 overflow-x-auto">
          <h3 className="font-bold text-slate-800 mb-6">Recent Transactions</h3>
          <table className="w-full text-left text-sm">
             <thead>
                <tr className="text-slate-500 font-medium border-b border-slate-100">
                   <th className="pb-3 font-medium">Customer</th>
                   <th className="pb-3 font-medium">Date</th>
                   <th className="pb-3 font-medium">Amount</th>
                   <th className="pb-3 font-medium">Status</th>
                </tr>
             </thead>
             <tbody>
                {stats.recentOrders?.length > 0 ? (
                  stats.recentOrders.map((tx, i) => (
                     <tr key={i} className="border-b border-slate-50/50 last:border-0 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4">
                           <span className="font-bold text-slate-800 text-[13px] block">{tx.user?.fullName || "Guest Customer"}</span>
                           <span className="text-[10px] text-slate-400">{tx.orderNumber}</span>
                        </td>
                        <td className="py-4 text-slate-600 text-[13px]">{new Date(tx.createdAt).toLocaleDateString()}</td>
                        <td className="py-4 font-bold text-slate-800 text-[13px]">৳{tx.totalPrice?.toLocaleString()}</td>
                        <td className="py-4">
                           <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase ${
                             tx.status === 'Delivered' ? 'bg-emerald-100 text-emerald-600' :
                             tx.status === 'Pending' ? 'bg-amber-100 text-amber-600' :
                             tx.status === 'Cancelled' ? 'bg-red-100 text-red-600' :
                             'bg-blue-100 text-blue-600'
                           }`}>
                              {tx.status}
                           </span>
                        </td>
                     </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-10 text-center text-slate-400 text-xs">No transactions recorded yet.</td>
                  </tr>
                )}
             </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 overflow-x-auto">
          <h3 className="font-bold text-slate-800 mb-6">Top Products by Units Sold</h3>
          <table className="w-full text-left text-sm">
             <thead>
                <tr className="text-slate-500 font-medium border-b border-slate-100">
                   <th className="pb-3 font-medium">Name</th>
                   <th className="pb-3 font-medium">Price</th>
                   <th className="pb-3 font-medium">Units Sold</th>
                </tr>
             </thead>
             <tbody>
                {stats.topProducts?.length > 0 ? (
                  stats.topProducts.map((product, i) => (
                     <tr key={i} className="border-b border-slate-50/50 last:border-0 hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 flex items-center gap-3">
                           <div className="w-10 h-10 bg-slate-100 rounded overflow-hidden">
                              <img src={product.product?.thumbnail || "https://placehold.co/100x100/f8fafc/94a3b8?text=Img"} alt={product.product?.title} className="w-full h-full object-cover" />
                           </div>
                           <span className="font-bold text-slate-800 text-[13px]">{product.product?.title}</span>
                        </td>
                        <td className="py-3 text-slate-600 text-[13px] font-semibold">৳{product.product?.price?.toLocaleString()}</td>
                        <td className="py-3 font-bold text-slate-800 text-[13px]">{product.totalSold} units</td>
                     </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-10 text-center text-slate-400 text-xs">No product sales recorded yet.</td>
                  </tr>
                )}
             </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;

