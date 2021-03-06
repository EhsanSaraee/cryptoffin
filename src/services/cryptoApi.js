import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
   'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
   'x-rapidapi-key': 'b630919d7cmsh9fcb3a3cd5ddc79p16ec4ejsne9f5c16d8d3e',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
   reducerPath: 'cryptoApi',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getCryptos: builder.query({
         query: (count) => createRequest(`/coins?limit=${count}`),
      }),
      getCryptoDetails: builder.query({
         query: (coinID) => createRequest(`/coin/${coinID}`),
      }),
      getCryptoHistory: builder.query({
         query: ({ coinID, timePeriod }) =>
            createRequest(`/coin/${coinID}/history/${timePeriod}`),
      }),
      getExchanges: builder.query({
         query: () => createRequest('/exchanges'),
      }),
   }),
});

export const {
   useGetCryptosQuery,
   useGetCryptoDetailsQuery,
   useGetCryptoHistoryQuery,
   useGetExchangesQuery,
} = cryptoApi;
