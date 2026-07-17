"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  useGetProductBySlugQuery,
  useUpdateProductMutation,
  useGetCategoriesQuery,
} from "@/app/(admin)/services/api";
import toast, { Toaster } from "react-hot-toast";

const EditProduct = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.id;

  const { data: productData, isLoading: isProductLoading, isError } = useGetProductBySlugQuery(slug);
  const { data: categoryList } = useGetCategoriesQuery();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    discountPercentage: "",
    tags: "",
    thumbnail: null,
    existingThumbnail: "",
  });

  const [variants, setVariants] = useState([]);

  useEffect(() => {
    if (productData?.productDetails) {
      const p = productData.productDetails;
      setNewProduct({
        title: p.title || "",
        description: p.description || "",
        category: p.category?._id || p.category || "",
        price: p.price || "",
        discountPercentage: p.discountPercentage || "",
        tags: Array.isArray(p.tags) ? p.tags.join(", ") : p.tags || "",
        thumbnail: null,
        existingThumbnail: p.thumbnail || "",
      });

      if (p.variants) {
        setVariants(
          p.variants.map((v, i) => ({
            id: v._id || i,
            sku: v.sku || "",
            color: v.color || "",
            size: v.size || "",
            stock: v.stock || "",
          }))
        );
      }
    }
  }, [productData]);

  const handleAddNewVariants = () => {
    setVariants((prev) => [
      ...prev,
      {
        id: Date.now(),
        sku: `KN-${Math.floor(Math.random() * 1000)}`,
        color: "",
        size: "",
        stock: "",
      },
    ]);
  };

  const handleCancelVariants = (id) => {
    if (variants.length > 1) {
      setVariants((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleInputVariant = (id, field, value) => {
    setVariants((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", newProduct.title);
      formData.append("description", newProduct.description);
      formData.append("category", newProduct.category);
      formData.append("price", newProduct.price);
      formData.append("discountPercentage", newProduct.discountPercentage);

      // Process tags as array if expected by server
      const tagsArray = newProduct.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      tagsArray.forEach((tag) => formData.append("tags", tag));

      // Append variants
      // Format variants to match SIZE_ENUM check
      const formattedVariants = variants.map(({ sku, color, size, stock }) => ({
        sku,
        color,
        size: size || "S",
        stock: Number(stock),
      }));
      formData.append("variants", JSON.stringify(formattedVariants));

      if (newProduct.thumbnail) {
        formData.append("thumbnail", newProduct.thumbnail);
      }

      const res = await updateProduct({ slug, productData: formData }).unwrap();

      toast.success(res?.message || "Product updated successfully!", {
        duration: 4000,
        position: "top-center",
      });

      setTimeout(() => {
        router.push("/admin/products");
      }, 1500);
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update product");
      console.log(error);
    }
  };

  if (isProductLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 py-32">
        <div className="w-8 h-8 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
        <span className="text-sm font-semibold tracking-wide text-slate-500">Loading Product Data...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 py-32 text-red-500">
        <p className="font-semibold text-lg">Failed to load product details.</p>
        <Link href="/admin/products" className="text-blue-600 hover:underline">
          Go back to products
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleUpdateProduct} className="max-w-5xl mx-auto p-6 space-y-6">
      <Toaster />
      {/* Header */}
      <div className="flex justify-between items-center">
        <Link
          href="/admin/products"
          className="text-sm font-semibold text-slate-500 hover:text-blue-600"
        >
          ← Back
        </Link>

        <div className="flex gap-3">
          <Link
            href="/admin/products"
            className="px-5 py-2 text-sm font-semibold border border-slate-200 rounded-lg hover:bg-slate-50 flex items-center"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isUpdating}
            className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm disabled:opacity-50"
          >
            {isUpdating ? "Updating..." : "Update Product"}
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-6">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-slate-600 mb-2">
              Title
            </label>
            <input
              value={newProduct.title}
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              type="text"
              placeholder="Enter product title"
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 transition"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-slate-600 mb-2">
              Category
            </label>
            <select
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-600 capitalize bg-white"
            >
              <option value="">Select Category</option>
              {categoryList?.categories?.map((category) => (
                <option
                  key={category._id}
                  value={category._id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-slate-600 mb-2">
              Price (৳)
            </label>
            <input
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  price: e.target.value,
                }))
              }
              value={newProduct.price}
              type="number"
              placeholder="100"
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 transition"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-slate-600 mb-2">
              Discount Percentage (%)
            </label>
            <input
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  discountPercentage: e.target.value,
                }))
              }
              value={newProduct.discountPercentage}
              type="number"
              placeholder="0"
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 transition"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-[13px] font-semibold text-slate-600 mb-2">
            Description
          </label>
          <textarea
            onChange={(e) =>
              setNewProduct((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            value={newProduct.description}
            rows={4}
            placeholder="Write product description"
            className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 transition resize-none"
          />
        </div>

        {/* Tags + Thumbnail */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-slate-600 mb-2">
              Tags (comma separated)
            </label>
            <input
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  tags: e.target.value,
                }))
              }
              value={newProduct.tags}
              type="text"
              placeholder="e.g hoodie, winter, street"
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 transition"
            />
          </div>

          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-slate-600 mb-2">
              Change Thumbnail (Optional)
            </label>
            <input
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  thumbnail: e.target.files[0],
                }))
              }
              type="file"
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 transition"
            />

            <div className="mt-3">
              {newProduct.thumbnail ? (
                <div>
                  <p className="text-xs text-slate-400 mb-1">New Thumbnail Preview:</p>
                  <Image
                    src={URL.createObjectURL(newProduct.thumbnail)}
                    width={120}
                    height={120}
                    alt="New Thumbnail Preview"
                    className="rounded-xl border object-cover"
                  />
                </div>
              ) : (
                newProduct.existingThumbnail && (
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Current Thumbnail:</p>
                    <img
                      src={newProduct.existingThumbnail}
                      alt="Current Thumbnail"
                      className="w-28 h-28 rounded-xl object-cover border border-slate-100"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Variants */}
        <div>
          <div className="flex items-center justify-between mb-3 border-b pb-2">
            <label className="block text-[13px] font-semibold text-slate-600">
              Product Variants
            </label>
            <button
              type="button"
              onClick={handleAddNewVariants}
              className="px-4 py-1.5 text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 transition"
            >
              Add Variant +
            </button>
          </div>

          {variants.map((item) => (
            <div key={item.id} className="flex flex-wrap gap-4 mb-3 items-center">
              <div className="flex-1 min-w-[150px]">
                <input
                  value={item.sku}
                  onChange={(e) =>
                    handleInputVariant(item.id, "sku", e.target.value)
                  }
                  type="text"
                  placeholder="SKU (e.g. KN-101)"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex-1 min-w-[120px]">
                <input
                  onChange={(e) =>
                    handleInputVariant(item.id, "color", e.target.value)
                  }
                  value={item.color}
                  type="text"
                  placeholder="Color"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex-1 min-w-[100px]">
                <select
                  value={item.size}
                  onChange={(e) =>
                    handleInputVariant(item.id, "size", e.target.value)
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-white"
                >
                  <option value="">Size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="3XL">3XL</option>
                </select>
              </div>

              <div className="flex-1 min-w-[100px]">
                <input
                  onChange={(e) =>
                    handleInputVariant(item.id, "stock", e.target.value)
                  }
                  value={item.stock}
                  type="number"
                  placeholder="Stock qty"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>

              {variants.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleCancelVariants(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-100 transition"
                  title="Remove variant"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default EditProduct;
