import 'src/styles/global.css';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'src/App';
import { setupStore } from 'Store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
);
