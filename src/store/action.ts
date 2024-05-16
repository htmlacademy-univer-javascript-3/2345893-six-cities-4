import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/City.ts';
import { OfferType } from '../types/offerType.ts';

const Action = {
  SET_CITY: 'SET_CITY',
  LOAD_OFFERS: 'LOAD_OFFERS',
  SET_OFFERS_LOADING_STATUS: 'SET_OFFERS_LOADING_STATUS'
};

export const setCity = createAction(Action.SET_CITY, (value: City) =>
  ({ payload: value }));

export const loadOffers = createAction<Array<OfferType>>(Action.LOAD_OFFERS);

export const setOffersDataLoadingStatus = createAction<boolean>(Action.SET_OFFERS_LOADING_STATUS);
