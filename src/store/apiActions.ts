import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import {
  redirectToRoute,
} from './action';
import { APIRoute, AppRoute } from '../const';
import { OffersType } from '../types/OffersType.ts';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/AuthData';
import { UserData } from '../types/UserData';
import { OfferInfoType } from '../types/OfferInfoType.ts';
import { Reviews, ReviewSend } from '../types/Review.ts';

export const fetchOffersAction = createAsyncThunk<OffersType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OffersType>(APIRoute.Offers);

    return data;
  },
);

export const fetchOfferInfoAction = createAsyncThunk<OfferInfoType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferInfo',
  async (id, { extra: api }) => {
    const { data } = await api.get<OfferInfoType>(`${APIRoute.Offers}/${id}`);

    return data;
  },
);

export const fetchOffersNearby = createAsyncThunk<OffersType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async (id, { extra: api }) => {
    const { data } = await api.get<OffersType>(`${APIRoute.Offers}/${id}/nearby`);

    console.log(data)
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.Login);
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
    dispatch(redirectToRoute(AppRoute.Root));
  },
);


export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchReviews = createAsyncThunk<Reviews, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);

    return data;
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

export const changeIsFavorite = createAsyncThunk<void, { id: string, status: 0 | 1 }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/changeIsFavorite',
  async ({ id, status }, { extra: api }) => {
    await api.post(`${APIRoute.Favorite}/${id}/${status}`);
  },
);
