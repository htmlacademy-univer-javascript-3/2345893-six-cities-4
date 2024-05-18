import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersNearbyProcess } from '../../types/state';
import { fetchOffersNearby } from '../apiActions';

const initialState: OffersNearbyProcess = {
  offers: [],
  loading: false,
};

export const offersNearbyProcess = createSlice({
  name: NameSpace.OffersNearby,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearby.pending, (state) => {
        state.loading = true;
        state.offers = [];
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.offers = action.payload ?? [];
        state.loading = false;

        console.log(action.payload)
      })
      .addCase(fetchOffersNearby.rejected, (state) => {
        state.offers = [];
        state.loading = false;
      });
  }
});
