"use client";
import React, { useState, useEffect, useRef } from "react";
import SingleProduct from "@/components/shared/SingleProduct";
import { apiClient } from "@/lib/apiClient";

const ShopProductsList = ({ category, search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
    total: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const cacheRef = useRef({});

  // Reset cache and page when search filters change
  useEffect(() => {
    cacheRef.current = {};
    setCurrentPage(1);
  }, [category, search]);

  useEffect(() => {
    const fetchShopProducts = async () => {
      const cacheKey = `${currentPage}`;
      
      // Check cache first
      if (cacheRef.current[cacheKey]) {
        setProducts(cacheRef.current[cacheKey].productList || []);
        setPagination(cacheRef.current[cacheKey].pagination || {
          totalPages: 1,
          hasNextPage: false,
          hasPrevPage: false,
          total: 0
        });
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const limit = 12;
        let url = `/product/allproducts?page=${currentPage}&limit=${limit}`;
        if (category) url += `&category=${encodeURIComponent(category)}`;
        if (search) url += `&search=${encodeURIComponent(search)}`;

        const res = await apiClient.get(url);
        
        const prodList = res?.productList || [];
        const pagInfo = res?.pagination || {
          totalPages: 1,
          hasNextPage: false,
          hasPrevPage: false,
          total: 0
        };

        setProducts(prodList);
        setPagination(pagInfo);
        
        // Save to cache
        cacheRef.current[cacheKey] = {
          productList: prodList,
          pagination: pagInfo
        };
      } catch (error) {
        console.error("Failed to fetch shop products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShopProducts();
  }, [currentPage, category, search]);

  const { totalPages, hasNextPage, hasPrevPage, total } = pagination;

  return (
    <div className="flex-1">
      {/* Result Count Top bar info */}
      <div className="flex items-center justify-between mb-6 -mt-14">
        <p className="text-[13px] text-gray-500">
          Showing <span className="font-bold text-black">{total}</span> results
        </p>
      </div>

      {isLoading ? (
        <div className="flex flex-col justify-center items-center py-32 gap-3">
          <div className="w-8 h-8 border-2 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
          <span className="text-xs font-semibold text-slate-500">Loading Products...</span>
        </div>
      ) : (
        <>
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product, i) => (
                <SingleProduct
                  key={product._id || i}
                  name={product.title}
                  price={product.price}
                  src={product.thumbnail}
                  cngPic={product.images?.[0] || product.thumbnail}
                />
              ))
            ) : (
              <div className="text-center col-span-full py-16 text-slate-400 font-semibold">
                No products found matching the criteria.
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-14">
              {hasPrevPage && (
                <button
                  onClick={() => setCurrentPage(prev => prev - 1)}
                  className="px-4 py-2 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
                >
                  &larr; Prev
                </button>
              )}

              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === currentPage;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-4 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? "bg-slate-800 text-white shadow-md scale-105"
                        : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  className="px-4 py-2 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
                >
                  Next &rarr;
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShopProductsList;
