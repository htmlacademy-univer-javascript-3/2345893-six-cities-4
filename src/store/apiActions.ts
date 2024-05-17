import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import {
  loadOffers,
  redirectToRoute,
  setAuthorizationStatus,
  setOffersDataLoadingStatus,
  setOfferInfoLoadingStatus,
  loadOfferInfo, loadOffersNearby, setOffersNearbyLoadingStatus, setReviewsLoading, setReviews, setCities
} from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { OffersType } from '../types/OffersType.ts';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/AuthData';
import { UserData } from '../types/UserData';
import { OfferInfoType } from '../types/OfferInfoType.ts';
import { Reviews, ReviewSend } from '../types/Review.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<OffersType>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));

    const cities = data.map(({ city }) => (
      { title: city.name, lat: city.location.latitude, lng: city.location.longitude, zoom: city.location.zoom }));

    const unique = cities.filter((obj, idx, arr) =>
      idx === arr.findIndex((t) => t.title === obj.title));
    dispatch(setCities(unique));
  },
);

export const fetchOfferInfoAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferInfo',
  async (id, { dispatch, extra: api }) => {
    dispatch(setOfferInfoLoadingStatus(true));
    try {
      const { data } = await api.get<OfferInfoType>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOfferInfo(data));
    } catch (er) {
      console.log(er);
    } finally {
      dispatch(setOfferInfoLoadingStatus(false));
    }
  },
);

export const fetchOffersNearby = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferInfo',
  async (id, { dispatch, extra: api }) => {
    dispatch(setOffersNearbyLoadingStatus(true));
    try {
      const { data } = await api.get<OffersType>(`${APIRoute.Offers}/${id}/nearby`);
      dispatch(loadOffersNearby(data));
    } catch (er) {
      console.log(er);
    } finally {
      dispatch(setOffersNearbyLoadingStatus(false));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);


export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, { dispatch, extra: api }) => {
    dispatch(setReviewsLoading(true));
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    dispatch(setReviewsLoading(false));
    dispatch(setReviews(data));
  },
);

export const sendReview = createAsyncThunk<void, ReviewSend, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async ({ id, comment, rating }, { extra: api }) => {
    await api.post<ReviewSend>(`${APIRoute.Reviews}/${id}`, { comment, rating });
  },
);
