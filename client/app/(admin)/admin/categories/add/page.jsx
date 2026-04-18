"use client";
import React from 'react';
import Link from 'next/link';

const AddCategory = () => {

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Link href="/admin/categories" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 mb-1">
            &larr; Back
          </Link>
          <h2 className="text-[22px] font-bold text-slate-800">Add Category</h2>
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

      <div className="space-y-6">
        {/* Information */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Information</h3>
          <div className="space-y-5">
            <div>
              <label className="block text-[13px] font-semibold text-slate-600 mb-2">Category Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-slate-400"
                placeholder="e.g. Summer Clothes"
              />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-slate-600 mb-2">Category Description</label>
              <textarea 
                rows="5"
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-slate-400 resize-none"
                placeholder="Describe this category"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Category Image</h3>
          <div className="border border-dashed border-slate-300 rounded-xl p-10 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
             <button className="px-4 py-2 bg-white border border-slate-200 rounded text-blue-600 font-semibold text-sm mb-2 shadow-sm">Add File</button>
             <p className="text-xs font-semibold text-slate-400">Or drag and drop files</p>
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

export default AddCategory;
