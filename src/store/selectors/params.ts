import { createSelector } from 'reselect';

import { RootStateType } from 'Store/store';

export const paramsSelector = (state: RootStateType) => state.params;

export const pageSelector = createSelector(paramsSelector, ({ page }) => page);

export const apiKeySelector = createSelector(paramsSelector, ({ apiKey }) => apiKey);

export const searchKeySelector = createSelector(paramsSelector, ({ searchKey }) => searchKey);
