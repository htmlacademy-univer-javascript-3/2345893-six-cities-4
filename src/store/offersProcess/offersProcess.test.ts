import { makeFakeOffers } from '../../utils/mocks';
import { fetchOffersAction } from '../apiActions';
import { offersProcess } from './offersProcess';

describe('OffersProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      loading: false,
      hasError: false,
    };

    const result = offersProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      loading: false,
      hasError: false,
    };

    const result = offersProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "loading" to "true", hasError" to "false" with "fetchQuestionAction.pending"', () => {
    const expectedState = {
      offers: [],
      loading: true,
      hasError: false,
    };

    const result = offersProcess.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array, "hasError" to false, "loading" to "false" with "fetchQuestionAction.fulfilled"', () => {
    const mockReviews = makeFakeOffers();
    const expectedState = {
      offers: mockReviews,
      loading: false,
      hasError: false
    };

    const result = offersProcess.reducer(
      undefined,
      fetchOffersAction.fulfilled(
        mockReviews, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "loading" to "false", "reviews" to [], "hasError" to "true" with "fetchQuestionAction.rejected', () => {
    const expectedState = {
      offers: [],
      loading: false,
      hasError: true

    };

    const result = offersProcess.reducer(
      undefined,
      fetchOffersAction.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
