/* eslint-disable react-hooks/rules-of-hooks */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://bookshelf-backend11.vercel.app/api/v1',
    baseUrl: 'http://localhost:5000/api/v1',
    prepareHeaders: (headers, { getState, endpoint }) => {
      const user = (getState() as RootState).user;

      console.log('User API', user?.user?.token);
      console.log('User API', user);

      if (user && endpoint !== 'refresh') {
        headers.set('authorization', `${user?.user?.token}`);
      }
      return headers;
    },
    credentials: 'include', // This allows server to set cookies
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
    logOut: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: 'POST',
      }),
    }),
    // logOut: builder.query({
    //   query: () => `/auth/logout`,
    // }),
    getAllBooks: builder.query({
      query: () => `/books`,
      providesTags: ['books'],
    }),
  }),
});

export default api;

export const {
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
  //   useLogOutQuery,
  useGetAllBooksQuery,
} = api;
