import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { offers } from './mocks/offers.ts';
import { favorites } from './mocks/favorites.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} favorites={favorites}/>
  </React.StrictMode>
);
