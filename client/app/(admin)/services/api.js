import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000",
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
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/product/allproducts",
    }),
    getCategories: build.query({
      query: () => "/category/allcategories",
    }),
    createNewProduct: build.mutation({
      query: (productData) => ({
        url: "/product/create",
        method: "POST",
        body: productData,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useCreateNewProductMutation,
} = adminApiService;
