import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bookshelf-backend11.vercel.app/api/v1',
  }),
  tagTypes: ['books', 'wishlist', 'reading'],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `/auth/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    logIn: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: 'POST',
        body: data,
      }),
    }),
    getAllBooks: builder.query({
      query: () => `/books`,
      providesTags: ['books'],
    }),
  }),
});

export default api;

export const { useSignUpMutation, useLogInMutation, useGetAllBooksQuery } = api;
