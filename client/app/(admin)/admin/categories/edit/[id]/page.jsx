"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import generateSlug from "@/lib/utils";
import { useGetCategoriesQuery, useUpdateCategoryMutation } from "@/app/(admin)/services/api";
import toast, { Toaster } from "react-hot-toast";

const EditCategory = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const { data: categoryData, isLoading: isCategoriesLoading, isError } = useGetCategoriesQuery();
  const [updateCategory, { isLoading: isUpdating }] = useUpdateCategoryMutation();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [existingThumbnail, setExistingThumbnail] = useState("");

  const currentCategory = categoryData?.categories?.find((cat) => cat._id === id);

  useEffect(() => {
    if (currentCategory) {
      setName(currentCategory.name || "");
      setSlug(currentCategory.slug || "");
      setDescription(currentCategory.description || "");
      setExistingThumbnail(currentCategory.thumbnail || "");
    }
  }, [currentCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return toast.error("Category name is required");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("slug", slug || generateSlug(name));
      formData.append("description", description);
      
      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      const res = await updateCategory({ id, categoryData: formData }).unwrap();
      toast.success(res?.message || "Category updated successfully!", {
        position: "top-center",
      });

      setTimeout(() => {
        router.push("/admin/categories");
      }, 1500);
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update category");
    }
  };

  if (isCategoriesLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 py-32">
        <div className="w-8 h-8 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
        <span className="text-sm font-semibold tracking-wide text-slate-500">Loading Category Details...</span>
      </div>
    );
  }

  if (isError || !currentCategory) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 py-32 text-red-500">
        <p className="font-semibold text-lg">Failed to load category details.</p>
        <Link href="/admin/categories" className="text-blue-600 hover:underline">
          Go back to categories
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
      <Toaster />
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Link href="/admin/categories" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 mb-1">
            &larr; Back
          </Link>
          <h2 className="text-[22px] font-bold text-slate-800">Edit Category</h2>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/categories" className="px-5 py-2 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Cancel
          </Link>
          <button 
            type="submit" 
            disabled={isUpdating}
            className="px-5 py-2 text-sm font-bold text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/30 cursor-pointer disabled:opacity-50"
          >
            {isUpdating ? "Saving..." : "Update Category"}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Information */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Information</h3>
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1">
                <label className="block text-[13px] font-semibold text-slate-600 mb-2">Category Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setSlug(generateSlug(e.target.value));
                  }}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-slate-400"
                  placeholder="e.g. Summer Clothes"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] font-semibold text-slate-600 mb-2">Category Slug</label>
                <input 
                  type="text" 
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-slate-400"
                  placeholder="category-slug"
                />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-slate-600 mb-2">Category Description</label>
              <textarea 
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-slate-400 resize-none"
                placeholder="Describe this category"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Category Image</h3>
          <div className="space-y-4">
            <input 
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnail(e.target.files[0])}
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            
            <div className="mt-3">
              {thumbnail ? (
                <div>
                  <p className="text-xs text-slate-400 mb-1">New Image Preview:</p>
                  <Image
                    src={URL.createObjectURL(thumbnail)}
                    width={200}
                    height={150}
                    alt="Category preview"
                    className="rounded-xl border border-slate-200 object-cover"
                  />
                </div>
              ) : (
                existingThumbnail && (
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Current Image:</p>
                    <img
                      src={existingThumbnail}
                      alt="Category current image"
                      className="w-48 h-36 rounded-xl object-cover border border-slate-100"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditCategory;
