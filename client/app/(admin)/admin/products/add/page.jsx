"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGetCategoriesQuery } from "@/app/(admin)/services/api";

const AddProduct = () => {
  const [variants, setVariants] = useState([{ id: Date.now(), sku: `KN-${Math.floor(Math.random() * 1000)}`, color: "", size: "", stock: ""}]);
  const [newProduct, setNewProduct] = useState({title: "",slug: "",description: "",category: "",price: "",discountPercentage: "",variants: "",tags: "",thumbnail: null,images: [],});
  const { data: categoryList } = useGetCategoriesQuery();

  const handleAddNewVariants = () => {
    const existVariant = [...variants];
    existVariant.push({
      id: Date.now(),
      sku: `KN-${Math.floor(Math.random() * 1000)}`,
      color: "",
      size: "",
      stock: "",
    });
    setVariants(existVariant);
  };

  const handleCancelVriants = (id) => {
    if (variants.length > 1) {
      const updatedVariantList = variants.filter((item) => item.id !== id);
      setVariants(updatedVariantList);
    }
  };

  const handleInputVariant = (id, feild, value) => {
    console.log(id, feild, value);
    let variantInputChange = variants.map((item) => {
      if (item.id == id) {
        item[feild] = value;
      }
      return item;
    });
    setVariants(variantInputChange);
  };

  const handleImages = (e) => {
    const img = [...newProduct.images];
    img.push(e.target.files[0]);
    setNewProduct((prev) => ({ ...prev, images: img }));
  };

  const handleRemoveImg = (i)=>{
    const imges = newProduct.images.filter((item,idx)=> idx !== i && item)
    setNewProduct((prev)=>({...prev,images : imges}))
  }

  console.log(newProduct);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Link
          href="/admin/products"
          className="text-sm font-semibold text-slate-500 hover:text-blue-600"
        >
          ← Back
        </Link>

        <div className="flex gap-3">
          <button className="px-5 py-2 text-sm font-semibold border border-slate-200 rounded-lg hover:bg-slate-50">
            Cancel
          </button>
          <button className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm">
            Save Product
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
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, title: e.target.value }))
              }
              type="text"
              placeholder="Enter product title"
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 transition"
            />
          </div>

          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-slate-600 mb-2">
              Slug
            </label>
            <input
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, slug: e.target.value }))
              }
              type="text"
              placeholder="product-slug"
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
            <select onChange={(e) => setNewProduct((prev) => ({ ...prev, category: e.target.value }))} className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-600">
                {categoryList?.categories?.map((category) => (
                <option
                  key={category._id}
                  value={category._id}
                  className="capitalize"
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-slate-600 mb-2">
              Price
            </label>
            <input
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, price: e.target.value }))
              }
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
              Discount Price
            </label>
            <input
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  discountPercentage: e.target.value,
                }))
              }
              type="number"
              placeholder="80"
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
                setNewProduct((prev) => ({ ...prev, tags: e.target.value }))
              }
              type="text"
              placeholder="e.g hoodie, winter, street"
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 transition"
            />
          </div>

          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-slate-600 mb-2">
              Upload Thumbnail
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
              {newProduct.thumbnail && (
                <Image
                  src={URL.createObjectURL(newProduct.thumbnail)}
                  width={100}
                  height={200}
                  alt="Thumbnail"
                  className="rounded-xl"
                />
              )}
            </div>
          </div>
        </div>

        {/* Images */}
        <div>
          <label className="block text-[13px] font-semibold text-slate-600 mb-2">
            Upload Images
          </label>
          <input
            onChange={handleImages}
            multiple
            type="file"
            className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 transition"
          />
          <div className="mt-3 flex gap-[10px]">
            {newProduct.images.length > 0 &&
              newProduct.images.map((item, i) => (
                <div
                  key={i}
                  className="w-[80px] h-[80px] relative overflow-hidden rounded-xl border group"
                >
                  <Image src={URL.createObjectURL(item)} alt="images" fill className="object-cover"/>

                  <button type="button" onClick={()=>handleRemoveImg(i)}
                    className="absolute top-1 right-1 z-10 w-6 h-6 flex items-center justify-center bg-black/60 backdrop-blur-md text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-red-600">
                    ✕
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Variants */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-[13px] font-semibold text-slate-600 mb-3">
              Variant Sample
            </label>

            <button
              onClick={handleAddNewVariants}
              className="px-6 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm"
            >
              Add Variants +
            </button>
          </div>

          {variants.map((item) => (
            <div key={item.id} className="flex flex-wrap gap-4 mb-2">
              <input
                onChange={(e) =>
                  handleInputVariant(item.id, "sku", e.target.value)
                }
                type="text"
                placeholder="SKU"
                className="flex-1 min-w-[150px] px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <input
                onChange={(e) =>
                  handleInputVariant(item.id, "color", e.target.value)
                }
                type="text"
                placeholder="Color"
                className="flex-1 min-w-[120px] px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <select
                onChange={(e) =>
                  handleInputVariant(item.id, "size", e.target.value)
                }
                className="flex-1 min-w-[120px] px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <input
                onChange={(e) =>
                  handleInputVariant(item.id, "stock", e.target.value)
                }
                type="number"
                placeholder="Stock"
                className="flex-1 min-w-[100px] px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {variants.length > 1 && (
                <button
                  onClick={(e) => handleCancelVriants(item.id)}
                  className="px-6 py-2 text-sm font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-sm"
                >
                  x
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-end gap-3">
        <button
          type="reset"
          className="px-6 py-2 text-sm font-semibold border border-slate-200 rounded-lg hover:bg-slate-50"
        >
          Cancel
        </button>
        <button className="px-6 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm">
          Save Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
