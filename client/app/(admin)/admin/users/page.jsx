"use client";
import React from 'react';
import { MdBlock, MdDelete, MdPeople, MdPersonAdd, MdStar } from 'react-icons/md';

const usersData = [
  { id: 101, name: 'Alice Cooper', email: 'alice@example.com', role: 'Customer', joinDate: 'Jan 15, 2023', status: 'Active' },
  { id: 102, name: 'Bob Marley', email: 'bob@example.com', role: 'Premium', joinDate: 'Feb 10, 2023', status: 'Active' },
  { id: 103, name: 'Charlie Puth', email: 'charlie@example.com', role: 'Customer', joinDate: 'Mar 22, 2023', status: 'Blocked' },
  { id: 104, name: 'David Bowie', email: 'david@example.com', role: 'Admin', joinDate: 'Apr 05, 2023', status: 'Active' },
];

const Users = () => {
  const getStatusBadge = (status) => {
    return status === 'Active' 
      ? <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded text-[11px] font-bold uppercase">Active</span>
      : <span className="bg-red-50 text-red-600 px-3 py-1 rounded text-[11px] font-bold uppercase">Blocked</span>;
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-[22px] font-bold text-slate-800">User Management</h2>
          <p className="text-[13px] text-slate-500 font-medium mt-1">Manage customers, admins, and roles.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Total Active Users</p>
            <h3 className="text-2xl font-bold text-slate-800">892</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <MdPeople size={24} />
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">New Users (7 Days)</p>
            <h3 className="text-2xl font-bold text-slate-800">124</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <MdPersonAdd size={24} />
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Top Customers</p>
            <h3 className="text-2xl font-bold text-slate-800">15</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
            <MdStar size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white w-full overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 text-slate-500 font-medium">
              <th className="py-4 px-6 font-semibold w-1/3">User</th>
              <th className="py-4 px-6 font-semibold">Role</th>
              <th className="py-4 px-6 font-semibold">Joined Date</th>
              <th className="py-4 px-6 font-semibold">Status</th>
              <th className="py-4 px-6 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((row) => (
              <tr key={row.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      {row.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-[13px]">{row.name}</p>
                      <p className="text-[11px] text-slate-500 font-medium">{row.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 font-semibold text-slate-600">{row.role}</td>
                <td className="py-4 px-6 font-medium text-slate-600">{row.joinDate}</td>
                <td className="py-4 px-6">{getStatusBadge(row.status)}</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {row.status === 'Active' ? (
                      <button className="text-amber-500 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors font-bold text-[11px] flex items-center gap-1 uppercase">
                        <MdBlock size={14} /> Block
                      </button>
                    ) : (
                      <button className="text-emerald-600 hover:bg-emerald-50 px-2 py-1.5 rounded transition-colors font-bold text-[11px] flex items-center gap-1 uppercase">
                        Unblock
                      </button>
                    )}
                    <button className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded transition-colors">
                      <MdDelete size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Users;
