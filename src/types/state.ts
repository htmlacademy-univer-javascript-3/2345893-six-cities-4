import { store } from '../store';
import { AuthorizationStatus } from '../const.ts';
import { OffersType } from './OffersType.ts';
import type { City } from './City.ts';
import { Reviews } from './Review.ts';
import { OfferInfoType } from './OfferInfoType.ts';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type OffersProcess = {
  offers: OffersType;
  loading: boolean;
  hasError: boolean;
};

export type OffersNearbyProcess = {
  offers: OffersType;
  loading: boolean;
};

export type CitiesProcess = {
  city: City;
  cities: Array<City>;
};

export type ReviewsProcess = {
  reviews: Reviews;
  loading: boolean;
}

export type OfferInfoProcess = {
  offer: OfferInfoType | undefined;
  loading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

