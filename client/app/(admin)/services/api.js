import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000",
  credentials: "include",
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: "/auth/refreshtoken",
        method: "POST",
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      // retry original request
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};


export const adminApiService = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes : ["product", "order", "category", "dashboard"],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/product/allproducts",
      providesTags : ["product"]
    }),
    getCategories: build.query({
      query: () => "/category/allcategories",
      providesTags: ["category"]
    }),
    createNewProduct: build.mutation({
      query: (productData) => ({
        url: "/product/create",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["product"]
    }),

    getUsers : build.query({
      query : ()=> `/users/get`,
    }),

    getDashboardStats: build.query({
      query: () => "/dashboard/stats",
      providesTags: ["dashboard"]
    }),

    getOrders: build.query({
      query: (status) => ({
        url: "/orders",
        params: status && status !== "All" ? { status } : {}
      }),
      providesTags: ["order"]
    }),

    getOrderDetails: build.query({
      query: (id) => `/orders/${id}`,
      providesTags: ["order"]
    }),

    updateOrderStatus: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/orders/${id}/status`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["order", "dashboard"]
    }),

    createNewCategory: build.mutation({
      query: (categoryData) => ({
        url: "/category/create",
        method: "POST",
        body: categoryData
      }),
      invalidatesTags: ["category", "dashboard"]
    }),

    getProductBySlug: build.query({
      query: (slug) => `/product/${slug}`,
      providesTags: ["product"]
    }),

    updateProduct: build.mutation({
      query: ({ slug, productData }) => ({
        url: `/product/updateproduct/${slug}`,
        method: "PUT",
        body: productData
      }),
      invalidatesTags: ["product", "dashboard"]
    }),

    updateCategory: build.mutation({
      query: ({ id, categoryData }) => ({
        url: `/category/update/${id}`,
        method: "PUT",
        body: categoryData
      }),
      invalidatesTags: ["category", "dashboard"]
    })
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useCreateNewProductMutation,
  useGetUsersQuery,
  useGetDashboardStatsQuery,
  useGetOrdersQuery,
  useGetOrderDetailsQuery,
  useUpdateOrderStatusMutation,
  useCreateNewCategoryMutation,
  useGetProductBySlugQuery,
  useUpdateProductMutation,
  useUpdateCategoryMutation
} = adminApiService;

