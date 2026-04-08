"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import DataTable from '../components/DataTable';
import { MdAdd, MdEdit, MdDelete, MdSearch, MdFilterList, MdWarning } from 'react-icons/md';

const productsData = [
  { id: 1, image: 'https://via.placeholder.com/50', name: 'Wireless Headphones', price: '$99.99', stock: 45, category: 'Electronics' },
  { id: 2, image: 'https://via.placeholder.com/50', name: 'Running Shoes', price: '$120.00', stock: 12, category: 'Apparel' },
  { id: 3, image: 'https://via.placeholder.com/50', name: 'Smart Watch Series 7', price: '$299.00', stock: 0, category: 'Electronics' },
  { id: 4, image: 'https://via.placeholder.com/50', name: 'Leather Wallet', price: '$45.00', stock: 3, category: 'Accessories' },
  { id: 5, image: 'https://via.placeholder.com/50', name: 'Cotton T-Shirt', price: '$18.00', stock: 150, category: 'Apparel' },
];

const Products = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [filter, setFilter] = useState('All');

  const filteredProducts = productsData.filter(p => {
    if(filter === 'Low Stock') return p.stock > 0 && p.stock < 15;
    if(filter === 'Out of Stock') return p.stock === 0;
    return true;
  });

  const columns = [
    { 
      label: 'Image', 
      render: (row) => (
        <img src={row.image} alt={row.name} className="w-12 h-12 rounded-xl object-cover border border-slate-700/50" />
      )
    },
    { label: 'Product Name', render: (row) => (
      <div>
        <span className="font-bold text-slate-200 block tracking-wide">{row.name}</span>
        {row.stock < 15 && row.stock > 0 && <span className="text-[10px] text-amber-500 flex items-center gap-1 font-bold mt-0.5 uppercase tracking-wider"><MdWarning /> Low Stock</span>}
      </div>
    )},
    { label: 'Category', render: (row) => <span className="text-slate-400 font-medium">{row.category}</span> },
    { label: 'Price', render: (row) => <span className="text-slate-300 font-bold">{row.price}</span> },
    { 
      label: 'Stock', 
      render: (row) => (
        <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase border ${row.stock === 0 ? 'bg-red-500/10 text-red-400 border-red-500/20' : row.stock < 15 ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>
          {row.stock === 0 ? 'Out of Stock' : `${row.stock} in stock`}
        </span>
      )
    },
  ];

  const actions = (row) => (
    <div className="flex justify-end gap-3">
      <Link href={`/admin/products/edit/${row.id}`} className="text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 p-2 rounded-xl transition-colors">
        <MdEdit size={20} />
      </Link>
      <button className="text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 p-2 rounded-xl transition-colors">
        <MdDelete size={20} />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700/50">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">Products</h2>
          <p className="text-[13px] text-slate-400 mt-1 font-medium">Manage your store inventory here.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex items-center bg-[#0f172a] border border-slate-700/50 px-4 py-2.5 rounded-xl shadow-inner focus-within:border-blue-500/50 transition-colors">
            <MdSearch size={22} className="text-slate-500" />
            <input type="text" placeholder="Search product..." className="bg-transparent border-none outline-none px-3 w-full text-[13px] text-slate-200 placeholder-slate-500 font-medium" />
          </div>
          <Link 
            href="/admin/products/add" 
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl flex justify-center items-center gap-2 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] font-bold tracking-wide border border-blue-400/30"
          >
            <MdAdd size={20} />
            <span>Add Product</span>
          </Link>
        </div>
      </div>

      <div className="bg-[#1e293b] p-5 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-2 bg-[#0f172a] p-1.5 rounded-xl border border-slate-700/50">
          {['All', 'Low Stock', 'Out of Stock'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-[13px] font-bold transition-all tracking-wide ${filter === f ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
            >
              {f}
            </button>
          ))}
        </div>
        
        {selectedIds.length > 0 && (
          <button className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 px-5 py-2.5 rounded-xl text-[13px] font-bold flex items-center gap-2 transition-colors">
            <MdDelete size={18} /> Delete Selected ({selectedIds.length})
          </button>
        )}
      </div>

      <DataTable 
        columns={columns} 
        data={filteredProducts} 
        actions={actions} 
        selectable={true} 
        onSelectionChange={setSelectedIds} 
      />
    </div>
  );
};

export default Products;
