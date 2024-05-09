import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { offers } from './mocks/offers.ts';
import { favorites } from './mocks/favorites.ts';
import { Provider } from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} favorites={favorites}/>
    </Provider>
  </React.StrictMode>
);
