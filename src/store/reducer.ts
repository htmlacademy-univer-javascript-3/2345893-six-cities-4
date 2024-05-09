import { createReducer } from '@reduxjs/toolkit';
import { setCity } from './action';
import { CITIES } from '../mocks/cities.ts';

const initialState = {
  city: CITIES[0]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    });
});

export { reducer };
