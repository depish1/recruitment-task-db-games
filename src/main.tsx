import 'src/styles/global.css';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'src/App';
import { setupStore } from 'Store/store';

const store = setupStore({});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
