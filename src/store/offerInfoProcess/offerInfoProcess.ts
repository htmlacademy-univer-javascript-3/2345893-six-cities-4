import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferInfoProcess } from '../../types/state';
import { fetchOfferInfoAction } from '../apiActions';
import { OfferInfoType } from "../../types/OfferInfoType.ts";

const initialState: OfferInfoProcess = {
  offer: undefined,
  loading: false,
};

export const offerInfoProcess = createSlice({
  name: NameSpace.OfferInfo,
  initialState,
  reducers: {
    updateOfferInfo: (state, action: PayloadAction<OfferInfoType>) => {
      state.offer = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferInfoAction.pending, (state) => {
        state.loading = true;
        state.offer = undefined;
      })
      .addCase(fetchOfferInfoAction.fulfilled, (state, action) => {
        state.loading = false;
        state.offer = action.payload ?? undefined;
      })
      .addCase(fetchOfferInfoAction.rejected, (state) => {
        state.loading = false;
        state.offer = undefined;
      });
  }
});

export const { updateOfferInfo } = offerInfoProcess.actions;
