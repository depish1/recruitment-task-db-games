import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GetGamesParamsType, GetGamesResponseType } from 'src/types/games.types';

const baseUrl = 'https://api.rawg.io/api/games';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGames: builder.query<GetGamesResponseType, GetGamesParamsType>({
      query: ({ apiKey, searchKey, page }) => `?key=${apiKey}&search=${searchKey}&page_size=10&page=${page}`,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
