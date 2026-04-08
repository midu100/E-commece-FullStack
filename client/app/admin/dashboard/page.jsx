"use client";
import React from 'react';
import DashboardCard from '../components/DashboardCard';
import SalesChart from '../components/SalesChart';
import DataTable from '../components/DataTable';
import { OrdersPieChart, TopProductsBarChart } from '../components/AdvancedCharts';
import { MdAttachMoney, MdShoppingCart, MdPeople, MdInventory } from 'react-icons/md';

const recentOrders = [
  { id: '#ORD-001', customer: 'John Doe', date: '2023-10-01', total: '$120.00', status: 'Delivered' },
  { id: '#ORD-002', customer: 'Jane Smith', date: '2023-10-02', total: '$45.50', status: 'Pending' },
  { id: '#ORD-003', customer: 'Robert Brown', date: '2023-10-03', total: '$250.00', status: 'Shipped' },
  { id: '#ORD-004', customer: 'Emily White', date: '2023-10-04', total: '$89.99', status: 'Delivered' },
  { id: '#ORD-005', customer: 'Michael Green', date: '2023-10-05', total: '$14.00', status: 'Pending' }
];

const getStatusBadge = (status) => {
  switch(status) {
    case 'Delivered':
      return <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">Delivered</span>;
    case 'Pending':
      return <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">Pending</span>;
    case 'Shipped':
      return <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Shipped</span>;
    default:
      return <span>{status}</span>;
  }
};

const Dashboard = () => {
  const columns = [
    { label: 'Order ID', key: 'id' },
    { label: 'Customer', key: 'customer' },
    { label: 'Date', key: 'date' },
    { label: 'Total', key: 'total' },
    { label: 'Status', render: (row) => getStatusBadge(row.status) },
  ];

  return (
    <div className="space-y-6 isolate">
      <div className="flex justify-between items-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden border border-white/10">
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold mb-2 tracking-wide drop-shadow-md">Welcome Back, Admin!</h2>
          <p className="text-blue-100 max-w-lg leading-relaxed font-medium">Here is a summary of your store's performance. Monitor sales, check inventory, and handle orders smoothly.</p>
        </div>
        <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 rounded-full -translate-y-20 translate-x-20 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 bottom-0 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Total Sales" 
          value="$24,500" 
          icon={<MdAttachMoney size={28} />} 
          gradient="bg-gradient-to-br from-blue-500 to-blue-700"
        />
        <DashboardCard 
          title="Total Orders" 
          value="1,245" 
          icon={<MdShoppingCart size={28} />} 
          gradient="bg-gradient-to-br from-emerald-500 to-emerald-700"
        />
        <DashboardCard 
          title="Total Users" 
          value="892" 
          icon={<MdPeople size={28} />} 
          gradient="bg-gradient-to-br from-amber-500 to-amber-700"
        />
        <DashboardCard 
          title="Total Products" 
          value="142" 
          icon={<MdInventory size={28} />} 
          gradient="bg-gradient-to-br from-rose-500 to-rose-700"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div className="lg:col-span-1">
          <OrdersPieChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TopProductsBarChart />
        </div>
        <div className="bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col h-[400px]">
          <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
          <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700/50">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  <MdShoppingCart className="text-blue-400" size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-200 tracking-wide">New Order Placed</p>
                  <p className="text-[11px] text-slate-400 mt-1 font-medium">Order #ORD-{304 + i} • 2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1e293b] rounded-2xl shadow-xl border border-slate-700/50 p-6 overflow-hidden mt-6">
        <h3 className="text-lg font-bold text-white mb-6 font-sans tracking-wide">Recent Orders</h3>
        <DataTable columns={columns} data={recentOrders} />
      </div>
    </div>
  );
};

export default Dashboard;
