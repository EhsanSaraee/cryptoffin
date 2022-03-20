import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
   'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
   'x-rapidapi-key': 'b630919d7cmsh9fcb3a3cd5ddc79p16ec4ejsne9f5c16d8d3e',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
   reducerPath: 'cryptoApi',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getCryptos: builder.query({
         query: () => createRequest('/'),
      }),
   }),
});

export const { useGetCryptosQuery } = cryptoApi;
