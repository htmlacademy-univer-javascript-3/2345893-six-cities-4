import { makeFakeOffers } from '../../utils/mocks';
import { fetchOffersNearby } from '../apiActions';
import { offersNearbyProcess } from './offersNearbyProcess';

describe('OffersNearbyProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      loading: false,
    };

    const result = offersNearbyProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      loading: false,
    };

    const result = offersNearbyProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "loading" to "true" with "fetchQuestionAction.pending"', () => {
    const expectedState = {
      offers: [],
      loading: true,
    };

    const result = offersNearbyProcess.reducer(undefined, fetchOffersNearby.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array, "loading" to "false" with "fetchQuestionAction.fulfilled"', () => {
    const mockOffers = makeFakeOffers();
    const expectedState = {
      offers: mockOffers,
      loading: false,
    };

    const result = offersNearbyProcess.reducer(
      undefined,
      fetchOffersNearby.fulfilled(
        mockOffers, '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "loading" to "false", "offers" to [] with "fetchQuestionAction.rejected', () => {
    const expectedState = {
      offers: [],
      loading: false,
    };


    const result = offersNearbyProcess.reducer(
      undefined,
      fetchOffersNearby.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
