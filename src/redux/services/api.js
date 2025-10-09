import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://backend.goodcup.annasoft.site/api/v1" }),
    keepUnusedDataFor: 60,
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (page) => `/good/?page=${page}`,
        }),
    }),
});

export const { 
    useGetProductsQuery, 
} = api;