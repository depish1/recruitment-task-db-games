import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ParamsStateType } from 'Types/params.types';

const initialState: ParamsStateType = {
  page: 1,
  searchKey: '',
  apiKey: import.meta.env.VITE_API_KEY || '',
};

export const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setSearchKey: (state, { payload }: PayloadAction<string>) => {
      state.searchKey = payload;
    },
    setApiKey: (state, { payload }: PayloadAction<string>) => {
      state.apiKey = payload;
    },
  },
});

export default paramsSlice.reducer;

export const { setPage, setSearchKey, setApiKey } = paramsSlice.actions;
