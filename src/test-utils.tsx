import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { PreloadedStateType, AppStoreType, setupStore } from 'Store/store';

export function renderWithProviders(
  ui: React.ReactElement,
  { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions }: { preloadedState?: PreloadedStateType; store?: AppStoreType } = {},
) {
  setupListeners(store.dispatch);

  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
