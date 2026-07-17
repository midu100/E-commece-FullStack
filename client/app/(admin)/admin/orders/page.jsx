"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { MdVisibility, MdGetApp } from 'react-icons/md';
import { useGetOrdersQuery } from '../../services/api';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { data, isLoading, isError } = useGetOrdersQuery(activeTab);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Delivered': return <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded text-[11px] font-bold uppercase">Delivered</span>;
      case 'Pending': return <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded text-[11px] font-bold uppercase">Pending</span>;
      case 'Processing': return <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded text-[11px] font-bold uppercase text-indigo-600 border border-indigo-100">Processing</span>;
      case 'Shipped': return <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-[11px] font-bold uppercase">Shipped</span>;
      case 'Cancelled': return <span className="bg-red-50 text-red-600 px-3 py-1 rounded text-[11px] font-bold uppercase">Cancelled</span>;
      default: return <span className="bg-slate-50 text-slate-600 px-3 py-1 rounded text-[11px] font-bold uppercase">{status}</span>;
    }
  };

  const orders = data?.data || [];

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
        {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map(tab => (
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
            {isLoading ? (
              <tr>
                <td colSpan="7" className="py-16 text-center text-slate-500">
                  <div className="flex flex-col justify-center items-center gap-3">
                    <div className="w-6 h-6 border-2 border-slate-200 border-t-blue-500 rounded-full animate-spin"></div>
                    <span className="text-xs font-semibold tracking-wide">Loading Orders...</span>
                  </div>
                </td>
              </tr>
            ) : isError ? (
              <tr>
                <td colSpan="7" className="py-16 text-center text-red-500 font-semibold">
                  Failed to load orders list.
                </td>
              </tr>
            ) : orders.length > 0 ? (
              orders.map((row, i) => {
                const totalQuantity = row.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
                return (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                    <td className="py-3 px-6 font-bold text-slate-800 text-[13px]">{row.orderNumber || row._id.slice(-8).toUpperCase()}</td>
                    <td className="py-3 px-6">
                      <span className="font-bold text-slate-800 block text-[13px]">{row.user?.fullName || "Guest Customer"}</span>
                      <span className="text-[11px] text-slate-500 font-medium">{row.insideDhaka ? "Inside Dhaka" : "Outside Dhaka"}</span>
                    </td>
                    <td className="py-3 px-6 text-slate-600 font-medium">{totalQuantity} items</td>
                    <td className="py-3 px-6 font-bold text-slate-800">৳{row.totalPrice?.toLocaleString()}</td>
                    <td className="py-3 px-6">{getStatusBadge(row.status)}</td>
                    <td className="py-3 px-6 text-slate-600 font-medium">{new Date(row.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 px-6 text-right">
                      <Link 
                        href={`/admin/orders/${row._id}`}
                        className="inline-flex p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <MdVisibility size={18} />
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="py-16 text-center text-slate-400 font-semibold">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Orders;

