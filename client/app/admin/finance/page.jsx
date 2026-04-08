"use client";
import React from 'react';
import DataTable from '../components/DataTable';
import { MdAccountBalanceWallet, MdTrendingUp, MdMonetizationOn, MdGetApp } from 'react-icons/md';
import DashboardCard from '../components/DashboardCard';
import SalesChart from '../components/SalesChart';

const paymentHistory = [
  { id: '#PAY-2001', orderId: '#ORD-1001', method: 'bKash', status: 'Paid', amount: '৳12,050', date: 'Oct 12, 2023' },
  { id: '#PAY-2002', orderId: '#ORD-1002', method: 'COD', status: 'Unpaid', amount: '৳3,450', date: 'Oct 14, 2023' },
  { id: '#PAY-2003', orderId: '#ORD-1003', method: 'SSLCommerz', status: 'Paid', amount: '৳45,000', date: 'Oct 15, 2023' },
  { id: '#PAY-2004', orderId: '#ORD-1004', method: 'COD', status: 'Paid', amount: '৳2,000', date: 'Oct 16, 2023' },
];

const Finance = () => {
  const getStatusBadge = (status) => {
    return status === 'Paid' 
      ? <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider">Paid</span>
      : <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider">Unpaid</span>;
  };

  const getMethodBadge = (method) => {
    return method === 'COD'
      ? <span className="bg-slate-800 text-slate-300 border border-slate-700 font-bold px-2.5 py-1 rounded text-[11px] uppercase tracking-wider">{method}</span>
      : <span className="bg-blue-500/10 text-blue-400 border border-blue-500/30 font-bold px-2.5 py-1 rounded text-[11px] uppercase tracking-wider shadow-[0_0_8px_rgba(59,130,246,0.2)]">{method}</span>;
  }

  const columns = [
    { label: 'Payment ID', render: (row) => <span className="font-bold text-slate-200 tracking-wide">{row.id}</span> },
    { label: 'Order ID', render: (row) => <span className="text-blue-400 font-bold tracking-wider">{row.orderId}</span> },
    { label: 'Method', render: (row) => getMethodBadge(row.method) },
    { label: 'Status', render: (row) => getStatusBadge(row.status) },
    { label: 'Amount', render: (row) => <span className="font-bold text-slate-200">{row.amount}</span> },
    { label: 'Date', render: (row) => <span className="font-medium text-slate-400">{row.date}</span> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700/50">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">Payments & Finance</h2>
          <p className="text-[13px] text-slate-400 mt-1 font-medium tracking-wide">Monitor revenue, profit, and payment history.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 border border-blue-400/30 text-white px-6 py-2.5 flex items-center gap-2 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] font-bold uppercase tracking-wider text-[12px]">
          <MdGetApp size={18} /> Export Finance Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard 
          title="Total Revenue" 
          value="৳450,200" 
          icon={<MdAccountBalanceWallet size={28} />} 
          gradient="bg-gradient-to-br from-indigo-500 to-indigo-700"
        />
        <DashboardCard 
          title="Net Profit" 
          value="৳120,500" 
          icon={<MdTrendingUp size={28} />} 
          gradient="bg-gradient-to-br from-emerald-500 to-emerald-700"
        />
        <DashboardCard 
          title="Pending Clearance" 
          value="৳45,000" 
          icon={<MdMonetizationOn size={28} />} 
          gradient="bg-gradient-to-br from-amber-500 to-amber-700"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-3xl pointer-events-none rounded-full"></div>
          <h3 className="text-lg font-bold text-white mb-8 tracking-wide relative z-10 w-full text-left uppercase text-[12px]">Payment Methods</h3>
          
          <div className="w-48 h-48 rounded-full border-[16px] border-[#0f172a] relative flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
             <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" r="42%" className="stroke-blue-500" strokeWidth="16" fill="none" strokeDasharray="65 100" />
                <circle cx="50%" cy="50%" r="42%" className="stroke-emerald-500" strokeWidth="16" fill="none" strokeDasharray="35 100" strokeDashoffset="-65" />
             </svg>
             <div className="text-center relative z-10">
               <p className="font-extrabold text-3xl text-white tracking-tighter">65%</p>
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Online</p>
             </div>
          </div>

          <div className="w-full mt-10 space-y-4 relative z-10">
            <div className="flex justify-between items-center px-4 py-3 bg-[#0f172a] rounded-xl border border-slate-700/50">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                <span className="text-sm font-bold text-slate-300">Online Payments</span>
              </div>
              <span className="font-bold text-blue-400">65%</span>
            </div>
             <div className="flex justify-between items-center px-4 py-3 bg-[#0f172a] rounded-xl border border-slate-700/50">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                <span className="text-sm font-bold text-slate-300">Cash on Delivery</span>
              </div>
              <span className="font-bold text-emerald-400">35%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1e293b] rounded-2xl shadow-xl border border-slate-700/50 p-6 overflow-hidden">
        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Payment History</h3>
        <DataTable columns={columns} data={paymentHistory} />
      </div>
    </div>
  );
};

export default Finance;
