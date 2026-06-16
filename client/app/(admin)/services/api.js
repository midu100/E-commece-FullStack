import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://e-commece-fullstack.onrender.com",
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
  tagTypes : ["product"],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/product/allproducts",
      providesTags : ["product"]
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
      providesTags:["product"]
    }),

    getUsers : build.query({
      query : ()=> `/users/get`,
    })
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useCreateNewProductMutation,
  useGetUsersQuery
} = adminApiService;
