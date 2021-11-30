import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type SingleJoke = {
  error: boolean,
  category: string,
  type: string,
  joke: string,
  flags: {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean,
    explicit: boolean
  },
  id: number,
  safe: boolean,
  lang: string;
}

type ListOfJokes = {
  error: boolean,
  amount: number,
  jokes:
    {
      category: string,
      type: string,
      joke: string,
      flags: {
        nsfw: boolean,
        religious: boolean,
        political: boolean,
        racist: boolean,
        sexist: boolean,
        explicit: boolean
      },
      id: number,
      safe: boolean,
      lang: string,
  }[]
}

type Categories = {
  error: boolean,
  categories: string[],
  categoryAliases: [
    {
      alias: string,
      resolved: string
    },
  ]
  timestamp: number,
}

export const jokesApi = createApi({
  reducerPath: 'jokes',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<Categories, undefined>({
      query: () => '/categories',
    }),
    getJokesByCategory: builder.query<ListOfJokes, string>({
      query: (name) => `/joke/${name}?type=single&amount=10/`,
    }),
    getIndividualJokeById: builder.query<SingleJoke, string>({
      query: (id) => `/joke/Any?type=single&idRange=${id}`,
    }),
  }),
});

export const { reducer, middleware } = jokesApi;

export const { useGetAllCategoriesQuery, useGetJokesByCategoryQuery, useGetIndividualJokeByIdQuery } = jokesApi;
