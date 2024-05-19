import { name, internet, date, random, lorem, helpers, commerce, address, image } from 'faker';
// import {AuthorizationStatus, GameType} from '../const';
// import {QuestionArtist, QuestionGenre} from '../types/question';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import { AuthorizationStatus } from "../const.ts";
import { initialCity } from "../store/citiesProcess/citiesProcess.ts";
import { Reviews } from "../types/Review.ts";
import { OffersType } from "../types/OffersType.ts";

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

export const makeFakeOffers = (): OffersType => (new Array(3).fill(null).map(() =>
  ({
    id: helpers.slugify(),
    title: lorem.sentence(),
    type: lorem.word(),
    price: commerce.price(),
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


//
// export const makeFakeGenreQuestion = (): QuestionGenre => ({
//   type: GameType.Genre,
//   genre: music.genre(),
//   answers: new Array(4).fill(null).map(() => (
//     { src: system.filePath(), genre: music.genre() }),
//   ),
// } as QuestionGenre);

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
