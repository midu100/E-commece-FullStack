"use client";
import React from 'react';
import Link from 'next/link';
import { MdAdd, MdEdit } from 'react-icons/md';

const categoriesData = [
  { id: 1, name: 'Men Clothes', count: 24, img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 2, name: 'Women Clothes', count: 12, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400&h=300', isHover: true },
  { id: 3, name: 'Accessories', count: 43, img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 4, name: 'Cotton Clothes', count: 31, img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 5, name: 'Summer Clothes', count: 26, img: 'https://images.unsplash.com/photo-1528654813589-9b419b40092c?auto=format&fit=crop&q=80&w=400&h=300', isActive: true },
  { id: 6, name: 'Wedding Clothes', count: 52, img: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 7, name: 'Spring Collection', count: 24, img: 'https://images.unsplash.com/photo-1522512115668-c09775d6f424?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 8, name: 'Casual Clothes', count: 52, img: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 9, name: 'Hats', count: 26, img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400&h=300' },
];

const Categories = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-transparent">
        <h2 className="text-[22px] font-bold text-slate-800">Categories</h2>
        <Link href="/admin/categories/add" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 font-medium text-sm transition-colors shadow-sm">
          <MdAdd size={20} />
          <span>Add Category</span>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesData.map((cat, i) => (
          <div 
            key={i} 
            className={`bg-white rounded-xl overflow-hidden shadow-sm transition-all group relative cursor-pointer ${cat.isActive ? 'border-2 border-blue-500' : 'border border-slate-100 hover:shadow-md hover:border-slate-200'}`}
          >
            <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
               <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               
               {/* Hover or active Edit action */}
               <div className={`absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity duration-300 ${cat.isHover ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded shadow-lg flex items-center gap-2 font-bold text-sm transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                     <MdEdit size={16} /> Edit
                  </button>
               </div>
            </div>
            <div className="p-5">
               <h3 className="font-bold text-slate-800 text-[15px]">{cat.name}</h3>
               <p className="text-[13px] text-slate-500 font-medium mt-0.5">{cat.count} items</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Categories;
