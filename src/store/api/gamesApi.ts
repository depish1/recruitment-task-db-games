import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, pageSize } from 'src/config';

import { GetGamesParamsType, GetGamesResponseType } from 'src/types/games.types';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGames: builder.query<GetGamesResponseType, GetGamesParamsType>({
      query: ({ apiKey, searchKey, page }) => `?key=${apiKey}&search=${searchKey}&page_size=${pageSize}&page=${page}`,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
