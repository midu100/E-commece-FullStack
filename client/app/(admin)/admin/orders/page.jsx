"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import DataTable from '@/components/admin/DataTable';
import { MdVisibility, MdGetApp } from 'react-icons/md';

const ordersData = [
  { id: '#ORD-1001', customer: 'Alice Cooper', location: 'Inside Dhaka', items: 3, total: '৳12,050', status: 'Delivered', date: 'Oct 12, 2023' },
  { id: '#ORD-1002', customer: 'Bob Marley', location: 'Outside Dhaka', items: 1, total: '৳3,450', status: 'Pending', date: 'Oct 14, 2023' },
  { id: '#ORD-1003', customer: 'Charlie Puth', location: 'Inside Dhaka', items: 5, total: '৳45,000', status: 'Shipped', date: 'Oct 15, 2023' },
  { id: '#ORD-1004', customer: 'David Bowie', location: 'Outside Dhaka', items: 2, total: '৳8,900', status: 'Cancelled', date: 'Oct 16, 2023' },
];

const Orders = () => {
  const [activeTab, setActiveTab] = useState('All');

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Delivered': return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider">Delivered</span>;
      case 'Pending': return <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider">Pending</span>;
      case 'Shipped': return <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider">Shipped</span>;
      case 'Cancelled': return <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider">Cancelled</span>;
      default: return <span>{status}</span>;
    }
  };

  const columns = [
    { label: 'Order ID', render: (row) => <span className="font-bold text-slate-200 tracking-wide">{row.id}</span> },
    { label: 'Customer', render: (row) => (
      <div>
        <span className="font-bold text-slate-300 block">{row.customer}</span>
        <span className="text-[11px] text-slate-500 mt-1 uppercase tracking-widest">{row.location}</span>
      </div>
    )},
    { label: 'Items', render: (row) => <span className="text-slate-400 font-medium">{row.items} items</span> },
    { label: 'Total', render: (row) => <span className="font-bold text-blue-400 tracking-wide">{row.total}</span> },
    { label: 'Status', render: (row) => getStatusBadge(row.status) },
    { label: 'Date', render: (row) => <span className="text-slate-400 font-medium">{row.date}</span> },
  ];

  const actions = (row) => (
    <Link 
      href={`/admin/orders/[id]`} 
      as={`/admin/orders/${row.id.replace('#', '')}`}
      className="text-blue-400 hover:bg-blue-500/10 p-2.5 rounded-xl transition-colors inline-block border border-transparent hover:border-blue-500/20 shadow-sm"
    >
      <MdVisibility size={20} />
    </Link>
  );

  const filteredOrders = activeTab === 'All' ? ordersData : ordersData.filter(o => o.status === activeTab);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700/50">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">Orders</h2>
          <p className="text-[13px] text-slate-400 font-medium tracking-wide mt-1">View and process customer orders.</p>
        </div>
        <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-2.5 flex items-center gap-2 rounded-xl transition-all border border-slate-600 shadow-inner font-bold tracking-wide uppercase text-[12px]">
          <MdGetApp size={18} /> Export CSV
        </button>
      </div>

      <div className="bg-[#1e293b] p-2 rounded-2xl shadow-xl border border-slate-700/50 flex flex-wrap gap-2">
        {['All', 'Pending', 'Shipped', 'Delivered', 'Cancelled'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-xl text-[13px] font-bold tracking-wider uppercase transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-blue-400/30' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <DataTable columns={columns} data={filteredOrders} actions={actions} />
    </div>
  );
};

export default Orders;
