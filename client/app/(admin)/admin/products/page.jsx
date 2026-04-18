"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  MdAdd,
  MdEdit,
  MdDelete,
  MdSearch,
} from "react-icons/md";
import { useGetProductsQuery } from "../../services/api";

const Products = () => {
  const [filter, setFilter] = useState("All");

  const { data: allProducts, isLoading } = useGetProductsQuery();

  const getTotalStock = (variants) => {
    return variants?.reduce((total, v) => total + v.stock, 0) || 0;
  };

  const filteredProducts = allProducts?.productList?.filter((p) => {
    const totalStock = getTotalStock(p.variants);

    if (filter === "Low Stock") return totalStock > 0 && totalStock < 20;
    if (filter === "Out of Stock") return totalStock === 0;

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-transparent border-b border-transparent pb-2">
        <h2 className="text-[22px] font-bold text-slate-800">Products</h2>
        <Link
          href="/admin/products/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 font-medium text-sm transition-colors shadow-sm"
        >
          <MdAdd size={20} />
          <span>Add Product</span>
        </Link>
      </div>

      {/* FILTER & SEARCH */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="flex gap-2">
          {['All', 'Low Stock', 'Out of Stock'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                filter === f 
                  ? 'bg-slate-800 text-white shadow-sm' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[13px] rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 font-medium"
          />
        </div>
      </div>

      {/* MINIMAL TABLE */}
      <div className="bg-white w-full overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 text-slate-500 font-medium">
              <th className="py-4 px-6 font-semibold w-1/3">Product Name</th>
              <th className="py-4 px-6 font-semibold">Category</th>
              <th className="py-4 px-6 font-semibold">Price</th>
              <th className="py-4 px-6 font-semibold">Stock Status</th>
              <th className="py-4 px-6 font-semibold text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="5" className="py-16 text-center text-slate-500">
                  <div className="flex flex-col justify-center items-center gap-3">
                    <div className="w-6 h-6 border-2 border-slate-200 border-t-blue-500 rounded-full animate-spin"></div>
                    <span className="text-xs font-semibold tracking-wide">Loading Check...</span>
                  </div>
                </td>
              </tr>
            ) : filteredProducts?.length > 0 ? (
              filteredProducts.map((row, index) => {
                const totalStock = getTotalStock(row.variants);

                return (
                  <tr
                    key={index}
                    className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group"
                  >
                    {/* PRODUCT (Image + Name) */}
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded overflow-hidden bg-slate-100 shrink-0">
                           <img
                             src={row.thumbnail || "https://placehold.co/100x100/f8fafc/94a3b8?text=Img"}
                             alt={row.title}
                             className="w-full h-full object-cover"
                           />
                        </div>
                        <div className="font-bold text-slate-800 text-[13px] line-clamp-1">
                          {row.title}
                        </div>
                      </div>
                    </td>

                    {/* CATEGORY */}
                    <td className="py-3 px-6 text-slate-600 font-medium text-[13px]">
                      {row?.category?.name || "—"}
                    </td>

                    {/* PRICE */}
                    <td className="py-3 px-6 text-slate-800 font-semibold text-[13px]">
                      ${row.price?.toFixed(2) || "0.00"}
                    </td>

                    {/* STOCK STATUS */}
                    <td className="py-3 px-6">
                      {totalStock === 0 ? (
                        <span className="inline-flex px-3 py-1 bg-red-50 text-red-600 rounded text-[11px] font-bold">
                          Out of stock
                        </span>
                      ) : totalStock < 20 ? (
                        <span className="inline-flex px-3 py-1 bg-amber-50 text-amber-600 rounded text-[11px] font-bold">
                          Low stock ({totalStock})
                        </span>
                      ) : (
                        <span className="inline-flex px-3 py-1 bg-emerald-50 text-emerald-600 rounded text-[11px] font-bold">
                          In stock ({totalStock})
                        </span>
                      )}
                    </td>

                    {/* ACTIONS */}
                    <td className="py-3 px-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Link
                          href={`/admin/products/edit/${row._id}`}
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="Edit Product"
                        >
                          <MdEdit size={16} />
                        </Link>

                        <button 
                          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                          title="Delete Product"
                        >
                          <MdDelete size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="py-16 text-center text-slate-500">
                  <p className="text-sm font-medium">No products found matching your criteria.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;