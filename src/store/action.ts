import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/City.ts';
import { OffersType } from '../types/OffersType.ts';
import { AppRoute, AuthorizationStatus } from '../const';
import { OfferInfoType } from '../types/OfferInfoType.ts';
import { Reviews } from "../types/Review.ts";

const Action = {
  SET_CITY: 'SET_CITY',
  SET_CITIES: 'SET_CITIES',
  LOAD_OFFERS: 'LOAD_OFFERS',
  SET_OFFERS_LOADING_STATUS: 'SET_OFFERS_LOADING_STATUS',
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  LOAD_OFFER_INFO: 'LOAD_OFFER_INFO',
  SET_OFFER_INFO_LOADING_STATUS: 'SET_OFFER_INFO_LOADING_STATUS',
  LOAD_OFFERS_NEARBY: 'LOAD_OFFERS_NEARBY',
  SET_OFFERS_NEARBY_LOADING_STATUS: 'SET_OFFERS_NEARBY_LOADING_STATUS',
  SET_REVIEWS: 'SET_REVIEWS',
  SET_REVIEWS_LOADING: 'SET_REVIEWS_LOADING'
};

export const setCity = createAction(Action.SET_CITY, (value: City) =>
  ({ payload: value }));

export const setCities = createAction<Array<City>>(Action.SET_CITIES);

export const loadOffers = createAction<OffersType>(Action.LOAD_OFFERS);

export const setOffersDataLoadingStatus = createAction<boolean>(Action.SET_OFFERS_LOADING_STATUS);

export const loadOfferInfo = createAction<OfferInfoType>(Action.LOAD_OFFER_INFO);

export const setOfferInfoLoadingStatus = createAction<boolean>(Action.SET_OFFER_INFO_LOADING_STATUS);

export const loadOffersNearby = createAction<OffersType>(Action.LOAD_OFFERS_NEARBY);

export const setOffersNearbyLoadingStatus = createAction<boolean>(Action.SET_OFFERS_NEARBY_LOADING_STATUS);

export const setAuthorizationStatus = createAction<AuthorizationStatus>(Action.SET_AUTHORIZATION_STATUS);

export const setReviews = createAction<Reviews>(Action.SET_REVIEWS);

export const setReviewsLoading = createAction<boolean>(Action.SET_REVIEWS_LOADING);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);
