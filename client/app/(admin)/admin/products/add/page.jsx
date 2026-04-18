"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const AddProduct = () => {
  const [hasMultipleOptions, setHasMultipleOptions] = useState(true);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Link href="/admin/products" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 mb-1">
            &larr; Back
          </Link>
          <h2 className="text-[22px] font-bold text-slate-800">Add Product</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Cancel
          </button>
          <button className="px-5 py-2 text-sm font-bold text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/30">
            Save
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Information */}
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Information</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-[13px] font-semibold text-slate-600 mb-2">Product Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-slate-400"
                  placeholder="Summer T-Shirt"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-slate-600 mb-2">Product Description</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-slate-400 resize-none"
                  placeholder="Product description"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Images</h3>
            <div className="border border-dashed border-slate-300 rounded-xl p-10 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
               <button className="px-4 py-2 bg-white border border-slate-200 rounded text-blue-600 font-semibold text-sm mb-2 shadow-sm">Add File</button>
               <p className="text-xs font-semibold text-slate-400">Or drag and drop files</p>
            </div>
          </div>

          {/* Price */}
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Price</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[13px] font-semibold text-slate-600 mb-2">Product Price</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400"
                  placeholder="Enter price"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-slate-600 mb-2">Discount Price</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400"
                  placeholder="Price at Discount"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-5 bg-blue-100 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform translate-x-5"></div>
              </div>
              <span className="text-sm font-semibold text-slate-600">Add tax for this product</span>
            </div>
          </div>

          {/* Variants */}
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Variants</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 mb-2">SKU</label>
                  <input type="text" className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white" placeholder="e.g. TSH-001" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 mb-2">Size</label>
                  <select className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-700 bg-white">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 mb-2">Color</label>
                  <input type="text" className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white" placeholder="e.g. Red" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 mb-2">Stock</label>
                  <input type="number" className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white" placeholder="0" />
                </div>
              </div>
              <button className="text-sm font-bold text-blue-600 mt-2 hover:text-blue-700 flex items-center gap-1">+ Add Another Variant</button>
            </div>
          </div>
          
        </div>

        {/* Right Column (Sidebar form items) */}
        <div className="space-y-6">
          {/* Categories */}
          <div className="bg-white p-6 rounded-xl border border-blue-500 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Categories</h3>
            <div className="space-y-3">
              {['Women', 'Men', 'T-Shirt', 'Hoodie', 'Dress'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm font-semibold text-slate-600">{cat}</span>
                </label>
              ))}
            </div>
            <button className="text-sm font-bold text-blue-600 mt-5 hover:text-blue-700">Create New</button>
          </div>


          {/* SEO Settings */}
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">SEO Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-2">Title</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-2">Description</label>
                <textarea 
                  rows="3"
                  className="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex justify-end gap-3 pt-6">
        <button className="px-6 py-2 text-sm font-bold text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-slate-50 transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2 text-sm font-bold text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/30">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
