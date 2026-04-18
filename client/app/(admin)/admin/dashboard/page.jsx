"use client";
import React from 'react';
import { MdSettings, MdAttachMoney, MdShoppingCart } from 'react-icons/md';

const recentTransactions = [
  { name: 'Jagarnath S.', date: '24.05.2023', amount: '$124.97', status: 'Paid' },
  { name: 'Anand G.', date: '23.05.2023', amount: '$55.42', status: 'Pending' },
  { name: 'Kartik S.', date: '23.05.2023', amount: '$89.90', status: 'Paid' },
  { name: 'Rakesh S.', date: '22.05.2023', amount: '$144.94', status: 'Pending' },
  { name: 'Anup S.', date: '22.05.2023', amount: '$70.52', status: 'Paid' },
];

const topProducts = [
  { name: 'Men Grey Hoodie', price: '$49.90', units: 204, img: 'https://via.placeholder.com/40' },
  { name: 'Women Striped T-Shirt', price: '$34.90', units: 155, img: 'https://via.placeholder.com/40' },
  { name: 'Wome White T-Shirt', price: '$40.90', units: 120, img: 'https://via.placeholder.com/40' },
  { name: 'Men White T-Shirt', price: '$49.90', units: 204, img: 'https://via.placeholder.com/40' },
  { name: 'Women Red T-Shirt', price: '$34.90', units: 155, img: 'https://via.placeholder.com/40' },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-white rounded-xl">
        <h2 className="text-[22px] font-bold text-slate-800">Dashboard</h2>
        <button className="flex items-center gap-2 border border-blue-500 text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
          <MdSettings size={18} />
          Manage
        </button>
      </div>

      {/* Top 5 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800">$10.54</h3>
            <p className="text-[11px] text-slate-500 font-medium">Total Reven</p>
            <p className="text-[11px] text-emerald-500 font-bold mt-1">22.45% ↑</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center font-bold">
            <MdAttachMoney size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800">1,056</h3>
            <p className="text-[11px] text-slate-500 font-medium">Orders</p>
            <p className="text-[11px] text-emerald-500 font-bold mt-1">15.34% ↑</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
            <MdShoppingCart size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-slate-500 font-medium">Unique Visits</p>
            <h3 className="text-xl font-bold text-slate-800">5.420</h3>
            <p className="text-[11px] text-red-500 font-bold mt-1">10.24% ↓</p>
          </div>
          <div className="flex items-end gap-1 h-8">
             {[1, 2, 4, 3, 5, 4].map((h, i) => (
                <div key={i} className="w-1.5 bg-amber-300 rounded-t-sm" style={{ height: `${h * 20}%` }}></div>
             ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-slate-500 font-medium">New Users</p>
            <h3 className="text-xl font-bold text-slate-800">1.650</h3>
            <p className="text-[11px] text-emerald-500 font-bold mt-1">15.34% ↑</p>
          </div>
          <div className="flex items-end gap-1 h-8">
             {[3, 2, 4, 5, 2, 4].map((h, i) => (
                <div key={i} className="w-1.5 bg-emerald-300 rounded-t-sm" style={{ height: `${h * 20}%` }}></div>
             ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-slate-500 font-medium">Existing User</p>
            <h3 className="text-xl font-bold text-slate-800">9.653</h3>
            <p className="text-[11px] text-emerald-500 font-bold mt-1">22.45% ↑</p>
          </div>
          <div className="flex items-end gap-1 h-8">
             {[2, 4, 3, 5, 4, 2].map((h, i) => (
                <div key={i} className="w-1.5 bg-blue-300 rounded-t-sm" style={{ height: `${h * 20}%` }}></div>
             ))}
          </div>
        </div>
      </div>

      {/* Middle Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-slate-800">Orders Over Time</h3>
             <select className="text-sm text-slate-500 border-none outline-none bg-transparent font-medium cursor-pointer">
               <option>Last 12 Hours</option>
               <option>Last 7 Days</option>
             </select>
          </div>
          <div className="flex gap-10 mb-8">
             <div>
                <h4 className="text-2xl font-bold text-slate-800">645</h4>
                <p className="text-xs text-slate-400 font-medium mt-1">Orders on May 22</p>
             </div>
             <div>
                <h4 className="text-2xl font-bold text-slate-800">472</h4>
                <p className="text-xs text-slate-400 font-medium mt-1">Orders on May 21</p>
             </div>
             <div className="ml-auto flex gap-4 text-xs font-semibold text-slate-500">
               <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-slate-200 rounded-sm"></span> May 21</div>
               <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></span> May 22</div>
             </div>
          </div>
          <div className="h-64 flex items-end justify-between relative mt-4">
             {/* Fake Line Chart representation */}
             <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,80 Q10,95 20,85 T40,65 T60,50 T80,85 T100,55" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                <path d="M0,65 Q10,75 20,60 T40,40 T60,25 T80,60 T100,45" fill="none" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="40" cy="40" r="3" fill="white" stroke="#3B82F6" strokeWidth="2" />
             </svg>
             <div className="absolute top-[20%] left-[34%] bg-slate-800 text-white p-2 rounded text-[10px] text-center font-medium shadow-md">
                34 Orders<br/><span className="text-slate-300 font-normal">May 22, 8:00AM</span>
             </div>
             {/* Grid Lines */}
             <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[50, 40, 30, 20, 10, 0].map((v) => (
                   <div key={v} className="w-full border-t border-slate-100 border-dashed text-[10px] text-slate-400 -mt-2">
                     <span className="bg-white pr-2">{v}</span>
                   </div>
                ))}
             </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
           <h3 className="font-bold text-slate-800 mb-6">Last 7 Days Sales</h3>
           <div>
              <h4 className="text-2xl font-bold text-slate-800">1,259</h4>
              <p className="text-sm text-slate-500 font-medium">Items Sold</p>
           </div>
           <div className="mt-4">
              <h4 className="text-2xl font-bold text-slate-800">$12,546</h4>
              <p className="text-sm text-slate-500 font-medium">Revenue</p>
           </div>
           <div className="h-40 mt-8 flex items-end justify-between gap-2 relative">
             <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[11px] font-bold px-3 py-1 rounded shadow-md z-10 w-max">
                $2,525
             </div>
             {[30, 50, 40, 45, 60, 80, 75].map((h, i) => (
                <div key={i} className="w-full bg-[#1bc48b] rounded-t-sm relative group cursor-pointer hover:opacity-90 transition-opacity" style={{ height: `${h}%` }}>
                </div>
             ))}
           </div>
           <div className="flex justify-between mt-3 text-[10px] text-slate-400 font-bold">
              <span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span>
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
                   <th className="pb-3 font-medium">Name</th>
                   <th className="pb-3 font-medium">Date</th>
                   <th className="pb-3 font-medium">Amount</th>
                   <th className="pb-3 font-medium">Status</th>
                </tr>
             </thead>
             <tbody>
                {recentTransactions.map((tx, i) => (
                   <tr key={i} className="border-b border-slate-50/50 last:border-0 hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 font-bold text-slate-800 text-[13px]">{tx.name}</td>
                      <td className="py-4 text-slate-600 text-[13px]">{tx.date}</td>
                      <td className="py-4 font-medium text-slate-800 text-[13px]">{tx.amount}</td>
                      <td className="py-4">
                         <span className={`px-3 py-1 rounded-md text-[11px] font-bold ${tx.status === 'Paid' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                            {tx.status}
                         </span>
                      </td>
                   </tr>
                ))}
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
                {topProducts.map((product, i) => (
                   <tr key={i} className="border-b border-slate-50/50 last:border-0 hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 flex items-center gap-3">
                         <div className="w-10 h-10 bg-slate-100 rounded overflow-hidden">
                            <img src={product.img} alt={product.name} className="w-full h-full object-cover opacity-50" />
                         </div>
                         <span className="font-bold text-slate-800 text-[13px]">{product.name}</span>
                      </td>
                      <td className="py-3 text-slate-600 text-[13px] font-medium">{product.price}</td>
                      <td className="py-3 font-medium text-slate-800 text-[13px]">{product.units}</td>
                   </tr>
                ))}
             </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
