"use client";
import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { MdArrowBack, MdCloudUpload, MdSave } from 'react-icons/md';

const EditProduct = ({ params }) => {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-6 isolate">
      <div className="flex items-center gap-4 bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700/50">
        <Link 
          href="/admin/products"
          className="p-3 border border-slate-700/50 bg-[#0f172a] rounded-xl hover:bg-slate-800 transition-colors shadow-inner text-slate-400 group"
        >
          <MdArrowBack size={24} className="group-hover:-translate-x-1 transition-transform text-slate-300" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">Edit Product #{id}</h2>
          <p className="text-[13px] text-slate-400 font-medium tracking-wide mt-1">Update inventory details.</p>
        </div>
      </div>

      <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-slate-700/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl pointer-events-none rounded-full"></div>
        <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2.5">
              <label className="text-[13px] font-bold text-slate-300 tracking-wide uppercase">Product Name</label>
              <input 
                type="text" 
                defaultValue="Wireless Headphones"
                className="w-full px-5 py-4 rounded-xl border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all bg-[#0f172a] text-slate-200 placeholder-slate-600 font-medium shadow-inner"
              />
            </div>
            
            <div className="space-y-2.5">
              <label className="text-[13px] font-bold text-slate-300 tracking-wide uppercase">Category</label>
              <select defaultValue="Electronics" className="w-full px-5 py-4 rounded-xl border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all bg-[#0f172a] text-slate-200 shadow-inner appearance-none cursor-pointer">
                <option className="bg-slate-800">Electronics</option>
                <option className="bg-slate-800">Apparel</option>
                <option className="bg-slate-800">Accessories</option>
              </select>
            </div>

            <div className="space-y-2.5">
              <label className="text-[13px] font-bold text-slate-300 tracking-wide uppercase">Price ($)</label>
              <input 
                type="number" 
                defaultValue="99.99"
                className="w-full px-5 py-4 rounded-xl border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all bg-[#0f172a] text-slate-200 placeholder-slate-600 font-medium shadow-inner"
              />
            </div>

            <div className="space-y-2.5">
              <label className="text-[13px] font-bold text-slate-300 tracking-wide uppercase">Stock Quantity</label>
              <input 
                type="number" 
                defaultValue="45"
                className="w-full px-5 py-4 rounded-xl border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all bg-[#0f172a] text-slate-200 placeholder-slate-600 font-medium shadow-inner"
              />
            </div>
          </div>

          <div className="space-y-2.5">
            <label className="text-[13px] font-bold text-slate-300 tracking-wide uppercase">Product Description</label>
            <textarea 
              rows="4"
              defaultValue="High-quality wireless headphones with noise cancellation."
              className="w-full px-5 py-4 rounded-xl border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all bg-[#0f172a] text-slate-200 placeholder-slate-600 font-medium shadow-inner"
            ></textarea>
          </div>

          <div className="space-y-2.5">
            <label className="text-[13px] font-bold text-slate-300 tracking-wide uppercase">Product Image</label>
            <div className="flex gap-6 mb-4">
              <img src="https://via.placeholder.com/100" alt="Current" className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-700/50 shadow-xl" />
              <div 
                className={`flex-1 border-2 border-dashed rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer ${
                  dragActive 
                    ? 'border-blue-500 bg-blue-500/5' 
                    : 'border-slate-700 bg-[#0f172a]/50 hover:bg-[#0f172a]/80 hover:border-blue-500/30'
                }`}
                onDragEnter={() => setDragActive(true)}
                onDragLeave={() => setDragActive(false)}
                onDrop={() => setDragActive(false)}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors bg-slate-800 text-slate-500">
                  <MdCloudUpload size={24} />
                </div>
                <p className="font-bold text-slate-300 text-[13px] tracking-wide">Replace image (drop here)</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end pt-6 border-t border-slate-700/50">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-bold tracking-widest transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-2 border border-blue-400/30 uppercase text-xs">
              <MdSave size={18} />
              Update Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
