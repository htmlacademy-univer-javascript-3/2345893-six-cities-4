import { name, internet, date, random, lorem, helpers, address, image } from 'faker';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import { AuthorizationStatus } from "../const.ts";
import { initialCity } from "../store/citiesProcess/citiesProcess.ts";
import { Reviews } from "../types/Review.ts";
import { OffersType } from "../types/OffersType.ts";
import { OfferInfoType } from "../types/OfferInfoType.ts";

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const makeFakeReviews = (): Reviews => (new Array(3).fill(null).map(() =>
  ({
    id: helpers.slugify(),
    date: date.past().toString(),
    user: {
      name: name.title(),
      avatarUrl: internet.avatar(),
      isPro: false,
    },
    comment: lorem.paragraph(),
    rating: random.number({ min: 0, max: 5 })
  })
) as Reviews);

export const makeFakeOffers = (): OffersType => (new Array(3).fill(null).map(() => ({
    id: helpers.slugify(),
    title: lorem.sentence(),
    type: lorem.word(),
    price: random.number({ min: 1 }),
    city: {
      name: address.cityName(),
      location: {
        latitude: address.latitude(),
        longitude: address.longitude(),
        zoom: 13,
      },
    },
    location: {
      latitude: address.latitude(),
      longitude: address.longitude(),
      zoom: 13,
    },
    isFavorite: random.boolean(),
    isPremium: random.boolean(),
    rating: random.number({ min: 0, max: 5 }),
    previewImage: image.imageUrl()
  })
) as unknown as OffersType);

export const makeFakeOfferInfo = (): OfferInfoType | undefined => ({
  id: helpers.slugify(),
  title: lorem.sentence(),
  type: lorem.word(),
  price: random.number({ min: 1 }),
  city: {
    name: address.cityName(),
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: 13,
    },
  },
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 13,
  },
  isFavorite: random.boolean(),
  isPremium: random.boolean(),
  rating: random.number({ min: 0, max: 5 }),
  description: lorem.sentence(),
  bedrooms: random.number({ min: 0, max: 5 }),
  goods: new Array(3).fill(null).map(() => lorem.paragraph()),
  host: {
    name: name.title(),
    avatarUrl: image.imageUrl(),
    isPro: random.boolean(),
  },
  images: new Array(3).fill(null).map(() => image.imageUrl()),
  maxAdults: random.number({ min: 0, max: 5 }),
} as OfferInfoType);


export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  USER: { authorizationStatus: AuthorizationStatus.NoAuth },
  OFFERS: { loading: false, offers: [], hasError: false },
  OFFER_INFO: { offer: undefined, loading: false },
  OFFERS_NEARBY: { loading: false, offers: [] },
  CITIES: { cities: [], city: initialCity },
  REVIEWS: { reviews: [], loading: false },
  ...initialState ?? {},
});
