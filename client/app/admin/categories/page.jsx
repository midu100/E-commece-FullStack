"use client";
import React from 'react';
import DataTable from '../components/DataTable';
import { MdAdd, MdEdit, MdDelete } from 'react-icons/md';

const categoriesData = [
  { id: 1, name: 'Electronics', count: 120, status: 'Active' },
  { id: 2, name: 'Apparel', count: 340, status: 'Active' },
  { id: 3, name: 'Accessories', count: 85, status: 'Active' },
  { id: 4, name: 'Home & Garden', count: 42, status: 'Inactive' },
];

const Categories = () => {
  const columns = [
    { label: 'Category Name', render: (row) => <span className="font-bold text-slate-200 tracking-wide">{row.name}</span> },
    { label: 'Products Count', render: (row) => <span className="text-slate-400 font-medium">{row.count} items</span> },
    { 
      label: 'Status', 
      render: (row) => (
        <span className={`px-3 py-1.5 rounded-md text-[11px] font-bold tracking-wider uppercase border ${row.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-800 text-slate-400 border-slate-700/50'}`}>
          {row.status}
        </span>
      )
    },
  ];

  const actions = (row) => (
    <div className="flex justify-end gap-3">
      <button className="text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 p-2 rounded-xl transition-colors">
        <MdEdit size={20} />
      </button>
      <button className="text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 p-2 rounded-xl transition-colors">
        <MdDelete size={20} />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700/50">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">Categories</h2>
          <p className="text-[13px] text-slate-400 mt-1 font-medium tracking-wide">Organize your products by category.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-blue-400/30 uppercase text-[13px] font-bold tracking-widest">
          <MdAdd size={20} />
          <span>Add Category</span>
        </button>
      </div>

      <DataTable columns={columns} data={categoriesData} actions={actions} />
    </div>
  );
};

export default Categories;
