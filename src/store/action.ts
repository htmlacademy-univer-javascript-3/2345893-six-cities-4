import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/City.ts';
import { OfferType } from '../types/offerType.ts';
import { AppRoute, AuthorizationStatus } from '../const';

const Action = {
  SET_CITY: 'SET_CITY',
  LOAD_OFFERS: 'LOAD_OFFERS',
  SET_OFFERS_LOADING_STATUS: 'SET_OFFERS_LOADING_STATUS',
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE'
};

export const setCity = createAction(Action.SET_CITY, (value: City) =>
  ({ payload: value }));

export const loadOffers = createAction<Array<OfferType>>(Action.LOAD_OFFERS);

export const setOffersDataLoadingStatus = createAction<boolean>(Action.SET_OFFERS_LOADING_STATUS);

export const setAuthorizationStatus = createAction<AuthorizationStatus>(Action.SET_AUTHORIZATION_STATUS);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);
