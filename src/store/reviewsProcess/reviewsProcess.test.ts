import { makeFakeReviews } from '../../utils/mocks';
import { fetchReviews } from '../apiActions';
import { reviewsProcess } from './reviewsProcess';

describe('GameData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      reviews: [],
      loading: false,
    };

    const result = reviewsProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      reviews: [],
      loading: false,
    };

    const result = reviewsProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "loading" to "true" with "fetchQuestionAction.pending"', () => {
    const expectedState = {
      reviews: [],
      loading: true,
    };

    const result = reviewsProcess.reducer(undefined, fetchReviews.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "reviews" to array, "loading" to "false" with "fetchQuestionAction.fulfilled"', () => {
    const mockReviews = makeFakeReviews();
    const expectedState = {
      reviews: mockReviews,
      loading: false,
    };

    const result = reviewsProcess.reducer(
      undefined,
      fetchReviews.fulfilled(
        mockReviews, '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "loading" to "false", "reviews" to [] with "fetchQuestionAction.rejected', () => {
    const expectedState = {
      reviews: [],
      loading: false,
    };


    const result = reviewsProcess.reducer(
      undefined,
      fetchReviews.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
