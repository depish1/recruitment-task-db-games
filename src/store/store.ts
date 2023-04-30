import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';

import { gamesApi } from 'Api/gamesApi';
import params from 'Store/slices/params';

export type PreloadedStateType = PreloadedState<RootStateType>;

const reducer = combineReducers({ params, [gamesApi.reducerPath]: gamesApi.reducer });

export const setupStore = (preloadedState?: PreloadedStateType) =>
  configureStore({
    reducer,
    preloadedState,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat([gamesApi.middleware]),
  });

export type RootStateType = typeof reducer;
export type AppStoreType = ReturnType<typeof setupStore>;
export type DispatchType = AppStoreType['dispatch'];
