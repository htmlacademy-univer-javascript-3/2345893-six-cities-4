import { createReducer } from '@reduxjs/toolkit';
import {
  loadOfferInfo,
  loadOffers, loadOffersNearby,
  setAuthorizationStatus,
  setCity,
  setOfferInfoLoadingStatus,
  setOffersDataLoadingStatus, setOffersNearbyLoadingStatus, setReviews, setReviewsLoading
} from './action';
import type { City } from '../types/City.ts';
import { OffersType } from '../types/OffersType.ts';
import { AuthorizationStatus } from '../const.ts';
import { OfferInfoType } from '../types/OfferInfoType.ts';
import { Reviews } from "../types/Review.ts";

const initialCity = {
  title: 'Paris',
  lat: 48.856663,
  lng: 2.3515568,
  zoom: 10
};

type InitialState = {
  authorizationStatus: AuthorizationStatus;

  city: City;

  offers: OffersType;
  isOffersDataLoading: boolean;

  selectedOffer: OfferInfoType | undefined;
  isLoadingOfferInfo: boolean;

  offersNearby: OffersType;
  isLoadingOffersNearby: boolean;

  reviews: Reviews;
  reviewsLoading: boolean;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,

  city: initialCity,

  offers: [],
  isOffersDataLoading: false,

  selectedOffer: undefined,
  isLoadingOfferInfo: false,

  offersNearby: [],
  isLoadingOffersNearby: false,

  reviews: [],
  reviewsLoading: false,
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.offers = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadOfferInfo, (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.selectedOffer = action.payload;
    })
    .addCase(setOfferInfoLoadingStatus, (state, action) => {
      state.isLoadingOfferInfo = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.offersNearby = action.payload;
    })
    .addCase(setOffersNearbyLoadingStatus, (state, action) => {
      state.isLoadingOffersNearby = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReviewsLoading, (state, action) => {
      state.reviewsLoading = action.payload;
    });
});

export { reducer };
