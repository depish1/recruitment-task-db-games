import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';

import { gamesApi } from 'Api/gamesApi';
import params from 'Store/slices/params';

export const setupStore = (preloadedState?: PreloadedState<RootStateType>) =>
  configureStore({
    reducer: {
      params,
      [gamesApi.reducerPath]: gamesApi.reducer,
    },
    preloadedState,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([gamesApi.middleware]),
  });

export type RootStateType = ReturnType<typeof store.getState>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type DispatchType = AppStoreType['dispatch'];
