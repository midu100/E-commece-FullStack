"use client";
import React from 'react';
import DataTable from '@/components/admin/DataTable';
import { MdBlock, MdDelete, MdPeople, MdPersonAdd, MdStar } from 'react-icons/md';
import DashboardCard from '@/components/admin/DashboardCard';

const usersData = [
  { id: 101, name: 'Alice Cooper', email: 'alice@example.com', role: 'Customer', joinDate: 'Jan 15, 2023', status: 'Active' },
  { id: 102, name: 'Bob Marley', email: 'bob@example.com', role: 'Premium', joinDate: 'Feb 10, 2023', status: 'Active' },
  { id: 103, name: 'Charlie Puth', email: 'charlie@example.com', role: 'Customer', joinDate: 'Mar 22, 2023', status: 'Blocked' },
  { id: 104, name: 'David Bowie', email: 'david@example.com', role: 'Admin', joinDate: 'Apr 05, 2023', status: 'Active' },
];

const Users = () => {
  const getStatusBadge = (status) => {
    return status === 'Active' 
      ? <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider">Active</span>
      : <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider">Blocked</span>;
  };

  const columns = [
    { 
      label: 'User', 
      render: (row) => (
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            {row.name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-slate-200 tracking-wide">{row.name}</p>
            <p className="text-[11px] text-slate-500 mt-0.5 tracking-wider">{row.email}</p>
          </div>
        </div>
      )
    },
    { label: 'Role', render: (row) => <span className="font-bold text-slate-400">{row.role}</span> },
    { label: 'Joined Date', render: (row) => <span className="font-medium text-slate-400">{row.joinDate}</span> },
    { label: 'Status', render: (row) => getStatusBadge(row.status) },
  ];

  const actions = (row) => (
    <div className="flex justify-end gap-3">
      {row.status === 'Active' ? (
        <button className="text-amber-500 hover:bg-amber-500/10 border border-amber-500/10 hover:border-amber-500/30 px-3 py-2 rounded-xl transition-all font-bold text-[11px] flex items-center gap-1.5 uppercase tracking-widest">
          <MdBlock size={16} /> Block
        </button>
      ) : (
        <button className="text-emerald-400 hover:bg-emerald-500/10 border border-emerald-500/10 hover:border-emerald-500/30 px-3 py-2 rounded-xl transition-all font-bold text-[11px] flex items-center gap-1.5 uppercase tracking-widest">
          Unblock
        </button>
      )}
      <button className="text-red-500 hover:bg-red-500/10 border border-red-500/10 hover:border-red-500/30 p-2 rounded-xl transition-all">
        <MdDelete size={18} />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700/50 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">User Management</h2>
          <p className="text-[13px] text-slate-400 mt-1 font-medium tracking-wide">Manage customers, admins, and roles.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard 
          title="Total Active Users" 
          value="892" 
          icon={<MdPeople size={28} />} 
          gradient="bg-gradient-to-br from-indigo-500 to-indigo-700"
        />
        <DashboardCard 
          title="New Users (7 Days)" 
          value="124" 
          icon={<MdPersonAdd size={28} />} 
          gradient="bg-gradient-to-br from-emerald-500 to-emerald-700"
        />
        <DashboardCard 
          title="Top Customers" 
          value="15" 
          icon={<MdStar size={28} />} 
          gradient="bg-gradient-to-br from-amber-500 to-amber-700"
        />
      </div>

      <DataTable columns={columns} data={usersData} actions={actions} />
    </div>
  );
};

export default Users;
