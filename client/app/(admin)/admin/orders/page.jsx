"use client";
import React, { useState } from 'react';
import Link from 'next/link';
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
      case 'Delivered': return <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded text-[11px] font-bold uppercase">Delivered</span>;
      case 'Pending': return <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded text-[11px] font-bold uppercase">Pending</span>;
      case 'Shipped': return <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-[11px] font-bold uppercase">Shipped</span>;
      case 'Cancelled': return <span className="bg-red-50 text-red-600 px-3 py-1 rounded text-[11px] font-bold uppercase">Cancelled</span>;
      default: return <span>{status}</span>;
    }
  };

  const filteredOrders = activeTab === 'All' ? ordersData : ordersData.filter(o => o.status === activeTab);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-transparent">
        <div>
          <h2 className="text-[22px] font-bold text-slate-800">Orders</h2>
          <p className="text-[13px] text-slate-500 font-medium mt-1">View and process customer orders.</p>
        </div>
        <button className="bg-white hover:bg-slate-50 text-slate-700 px-5 py-2.5 flex items-center gap-2 rounded-lg border border-slate-200 transition-colors font-bold text-sm shadow-sm">
          <MdGetApp size={18} /> Export CSV
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm flex flex-wrap gap-2">
        {['All', 'Pending', 'Shipped', 'Delivered', 'Cancelled'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-[13px] font-bold transition-all ${activeTab === tab ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Modern Table */}
      <div className="bg-white w-full overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 text-slate-500 font-medium">
              <th className="py-4 px-6 font-semibold">Order ID</th>
              <th className="py-4 px-6 font-semibold">Customer</th>
              <th className="py-4 px-6 font-semibold">Items</th>
              <th className="py-4 px-6 font-semibold">Total</th>
              <th className="py-4 px-6 font-semibold">Status</th>
              <th className="py-4 px-6 font-semibold">Date</th>
              <th className="py-4 px-6 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((row, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                <td className="py-3 px-6 font-bold text-slate-800">{row.id}</td>
                <td className="py-3 px-6">
                  <span className="font-bold text-slate-800 block text-[13px]">{row.customer}</span>
                  <span className="text-[11px] text-slate-500 font-medium">{row.location}</span>
                </td>
                <td className="py-3 px-6 text-slate-600 font-medium">{row.items} items</td>
                <td className="py-3 px-6 font-bold text-slate-800">{row.total}</td>
                <td className="py-3 px-6">{getStatusBadge(row.status)}</td>
                <td className="py-3 px-6 text-slate-600 font-medium">{row.date}</td>
                <td className="py-3 px-6 text-right">
                  <Link 
                    href={`/admin/orders/[id]`} 
                    as={`/admin/orders/${row.id.replace('#', '')}`}
                    className="inline-flex p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <MdVisibility size={18} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Orders;
