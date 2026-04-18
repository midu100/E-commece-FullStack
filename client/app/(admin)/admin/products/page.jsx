"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  MdAdd,
  MdEdit,
  MdDelete,
  MdSearch,
  MdWarning,
} from "react-icons/md";
import { useGetProductsQuery } from "../../services/api";

const Products = () => {
  const [filter, setFilter] = useState("All");

  const { data: allProducts, isLoading } = useGetProductsQuery();

  // 🔥 Total Stock Calculate Function
  const getTotalStock = (variants) => {
    return variants?.reduce((total, v) => total + v.stock, 0) || 0;
  };

  // 🔥 Filter Logic
  const filteredProducts = allProducts?.productList?.filter((p) => {
    const totalStock = getTotalStock(p.variants);

    if (filter === "Low Stock") return totalStock > 0 && totalStock < 20;
    if (filter === "Out of Stock") return totalStock === 0;

    return true;
  });

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700/50">
        <div>
          <h2 className="text-2xl font-bold text-white">Products</h2>
          <p className="text-[13px] text-slate-400 mt-1">
            Manage your store inventory here.
          </p>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <div className="flex items-center bg-[#0f172a] border border-slate-700 px-4 py-2 rounded-xl">
            <MdSearch className="text-slate-500" />
            <input
              type="text"
              placeholder="Search product..."
              className="bg-transparent outline-none px-2 text-sm text-white"
            />
          </div>

          <Link
            href="/admin/products/add"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl flex items-center gap-2"
          >
            <MdAdd />
            Add Product
          </Link>
        </div>
      </div>

      {/* FILTER */}
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
      </div>

      {/* TABLE */}
      <div className="bg-[#1e293b] rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#0f172a] text-slate-300 text-sm">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6" className="text-center p-6 text-slate-400">
                  Loading...
                </td>
              </tr>
            ) : filteredProducts?.length > 0 ? (
              filteredProducts.map((row, index) => {
                const totalStock = getTotalStock(row.variants);

                return (
                  <tr
                    key={index}
                    className={`border-b border-slate-700 transition ${
                      totalStock < 20
                        ? "bg-red-500/5"
                        : "hover:bg-slate-800"
                    }`}
                  >
                    {/* IMAGE */}
                    <td className="p-4">
                      <img
                        src={
                          row.thumbnail ||
                          "https://via.placeholder.com/50"
                        }
                        className="w-12 h-12 rounded object-cover"
                      />
                    </td>

                    {/* NAME */}
                    <td className="p-4">
                      <div className="text-white font-semibold">
                        {row.title}
                      </div>

                      {totalStock < 20 && totalStock > 0 && (
                        <div className="text-red-500 text-xs flex items-center gap-1 mt-1">
                          <MdWarning /> Low Stock
                        </div>
                      )}
                    </td>

                    {/* CATEGORY */}
                    <td className="p-4 text-slate-400">
                      {row?.category?.name}
                    </td>

                    {/* PRICE */}
                    <td className="p-4 text-white font-bold">
                      ${row.price}
                    </td>

                    {/* STOCK */}
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs rounded font-bold
                        ${
                          totalStock === 0
                            ? "bg-red-500/10 text-red-400"
                            : totalStock < 20
                            ? "bg-red-500/10 text-red-400"
                            : "bg-green-500/10 text-green-400"
                        }`}
                      >
                        {totalStock === 0
                          ? "Out of Stock"
                          : totalStock < 20
                          ? `${totalStock} Low`
                          : `${totalStock} in stock`}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/products/edit/${row._id}`}
                          className="text-blue-400"
                        >
                          <MdEdit />
                        </Link>

                        <button className="text-red-400">
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-6 text-slate-400">
                  No products found
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