import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsApiHeaders = {
   'X-BingApis-SDK': 'true',
   'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
   'X-RapidAPI-Key': 'b630919d7cmsh9fcb3a3cd5ddc79p16ec4ejsne9f5c16d8d3e',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const newsApi = createApi({
   reducerPath: 'newsApi',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getNews: builder.query({
         query: ({ newsCategory, count }) =>
            createRequest(
               `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
            ),
      }),
   }),
});

export const { useGetNewsQuery } = newsApi;
