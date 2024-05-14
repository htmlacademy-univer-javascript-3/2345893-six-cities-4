import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/City.ts';

const Action = {
  SET_CITY: 'SET_CITY',
};

export const setCity = createAction(Action.SET_CITY, (value: City) =>
  ({ payload: value }));

