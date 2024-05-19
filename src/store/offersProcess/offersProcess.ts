import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersProcess } from '../../types/state';
import { fetchOffersAction } from '../apiActions';

const initialState: OffersProcess = {
  offers: [],
  loading: false,
  hasError: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.loading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.loading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
        state.loading = false;
        state.hasError = true;
      });
  }
});
