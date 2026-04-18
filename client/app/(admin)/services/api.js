import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminApiService = createApi({
    baseQuery : fetchBaseQuery({ baseUrl: 'http://localhost:8000'}),
    endpoints : (build)=>({
        getProducts : build.query({
            query : ()=> '/product/allproducts'
        }),

    })
})

exports const {useGetProductsQuery }= adminApiService