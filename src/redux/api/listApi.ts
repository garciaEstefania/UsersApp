import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {User} from './interfaces';
import {BASE_URL} from '@env';

// Define a service using a base URL and expected endpoints
export const listApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }),
  endpoints: builder => ({
    getUsers: builder.query<User[], undefined>({
      query: () => ({method: 'get', url: '/users'}),
    }),
  }),
});

export const {useGetUsersQuery} = listApi;
