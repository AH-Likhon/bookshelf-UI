import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  tagTypes: ['books', 'wishlist', 'reading'],
  endpoints: () => ({}),
});

export default api;

// export const {} = api;
