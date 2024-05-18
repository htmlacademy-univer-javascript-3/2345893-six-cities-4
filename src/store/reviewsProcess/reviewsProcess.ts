import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewsProcess } from '../../types/state';
import { fetchReviews } from '../apiActions';

const initialState: ReviewsProcess = {
  reviews: [],
  loading: false,
};

export const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.reviews = [];
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload ?? [];
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.loading = false;
        state.reviews = [];
      });
  }
});
