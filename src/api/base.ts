import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.DEV ? '/api' : import.meta.env.VITE_TARGET_URL }),
  reducerPath: 'api',
  keepUnusedDataFor: 5 * 60,
  refetchOnMountOrArgChange: 30 * 60,
  endpoints: () => ({})
})