import { makeFakeOfferInfo } from '../../utils/mocks';
import { fetchOfferInfoAction } from '../apiActions';
import { offerInfoProcess } from './offerInfoProcess';

describe('OfferInfoProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offer: undefined,
      loading: false
    };

    const result = offerInfoProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offer: undefined,
      loading: false,
    };

    const result = offerInfoProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "loading" to "true" with "fetchOfferInfoAction.pending"', () => {
    const expectedState = {
      offer: undefined,
      loading: true,
    };

    const result = offerInfoProcess.reducer(undefined, fetchOfferInfoAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offer" from mock, "loading" to "false" with "fetchQuestionAction.fulfilled"', () => {
    const mockOfferInfo = makeFakeOfferInfo();
    const expectedState = {
      offer: mockOfferInfo,
      loading: false
    };

    const result = offerInfoProcess.reducer(
      undefined,
      fetchOfferInfoAction.fulfilled(
        mockOfferInfo, '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "loading" to "false", "offer" to "undefined" with "fetchAction.rejected', () => {
    const expectedState = {
      offer: undefined,
      loading: false,
    };


    const result = offerInfoProcess.reducer(
      undefined,
      fetchOfferInfoAction.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
