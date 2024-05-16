import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, setCity, setOffersDataLoadingStatus } from './action';
import type { City } from '../types/City.ts';
import { OfferType } from '../types/offerType.ts';

const initialCity = {
  title: 'Paris',
  lat: 48.856663,
  lng: 2.3515568,
  zoom: 10
};

type InitialState = {
  city: City;
  offers: Array<OfferType>;
  isOffersDataLoading: boolean;
}

const initialState: InitialState = {
  city: initialCity,
  offers: [],
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
