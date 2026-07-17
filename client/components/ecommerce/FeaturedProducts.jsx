"use client";
import React, { useState, useEffect, useRef } from "react";
import SingleFeature from "@/components/shared/SingleFeature";
import { apiClient } from "@/lib/apiClient";

const FeaturedProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false
  });
  const [isLoading, setIsLoading] = useState(true);
  const cacheRef = useRef({});

  useEffect(() => {
    const fetchProducts = async () => {
      // Check cache first
      if (cacheRef.current[currentPage]) {
        setProducts(cacheRef.current[currentPage].productList || []);
        setPagination(cacheRef.current[currentPage].pagination || {
          totalPages: 1,
          hasNextPage: false,
          hasPrevPage: false
        });
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const limit = 8;
        const res = await apiClient.get(`/product/allproducts?page=${currentPage}&limit=${limit}`);
        
        const prodList = res?.productList || [];
        const pagInfo = res?.pagination || {
          totalPages: 1,
          hasNextPage: false,
          hasPrevPage: false
        };

        setProducts(prodList);
        setPagination(pagInfo);
        
        // Save to cache
        cacheRef.current[currentPage] = {
          productList: prodList,
          pagination: pagInfo
        };
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const { totalPages, hasNextPage, hasPrevPage } = pagination;

  return (
    <section className="m-16">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl font-semibold tracking-wide">
            Featured Products
          </h2>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex flex-col justify-center items-center py-20 gap-3">
            <div className="w-8 h-8 border-2 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
            <span className="text-xs font-semibold text-slate-500">Loading Products...</span>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            <div className="row flex flex-wrap justify-center sm:justify-between gap-y-10">
              {products.length > 0 ? (
                products.map((item, i) => (
                  <SingleFeature 
                    key={item._id || i} 
                    name={item.title} 
                    price={item.price} 
                    src={item.thumbnail} 
                  />
                ))
              ) : (
                <div className="text-center w-full py-10 text-slate-400 font-semibold">
                  No products found.
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
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
    </section>
  );
};

export default FeaturedProducts;
