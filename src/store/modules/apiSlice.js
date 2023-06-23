import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catsFactsApi = createApi({
  reducerPath: "catsFactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://catfact.ninja/" }),
  endpoints: (builder) => ({
    getRandomCatFact: builder.query({
      query: () => "fact",
    }),
    getRandomCatFactWithMaxLength: builder.query({
      query: (maxLength) => `fact?max_length=${maxLength}`,
    }),
    getRandomCatFactsLimitedList: builder.query({
      query: (limit) => `facts?limit=1${limit}`,
    }),
  }),
});

export const {
  useGetRandomCatFactQuery,
  useLazyGetRandomCatFactQuery,

  useGetRandomCatFactWithMaxLengthQuery,
  useGetRandomCatFactsLimitedListQuery,
} = catsFactsApi;
