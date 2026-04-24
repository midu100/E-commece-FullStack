"use client";
import React from "react";
import Link from "next/link";
import { MdAdd, MdEdit } from "react-icons/md";
import { useGetCategoriesQuery } from "../../services/api";
import Image from "next/image";

const Categories = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery();

  // 🔄 Loading state
  if (isLoading) {
    return (
      <div className="text-center py-10 text-slate-500">
        Loading categories...
      </div>
    );
  }

  // ❌ Error state
  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load categories
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] font-bold text-slate-800">
          Categories
        </h2>

        <Link
          href="/admin/categories/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm transition shadow-sm"
        >
          <MdAdd size={20} />
          Add Category
        </Link>
      </div>

      {/* Flexbox Layout */}
      <div className="flex flex-wrap gap-6">
        {data?.categories?.map((cat, i) => (
          <div
            key={i}
            className="w-full sm:w-[48%] lg:w-[31%] bg-white rounded-xl overflow-hidden shadow-sm transition-all group relative cursor-pointer border border-slate-100 hover:shadow-md hover:border-slate-200"
          >
            {/* Image */}
            <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
              <Image
                width={400}
                height={300}
                src={cat?.thumbnail || "/fallback.jpg"}
                alt={cat?.name || "category"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Edit Button */}
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white text-blue-600 px-4 py-2 rounded shadow-lg flex items-center gap-2 font-bold text-sm">
                  <MdEdit size={16} /> Edit
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-bold text-slate-800 text-[15px] capitalize">
                {cat?.name}
              </h3>
              <p className="text-[13px] text-slate-500 font-medium mt-0.5">
                {cat?.count || 0} items
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;