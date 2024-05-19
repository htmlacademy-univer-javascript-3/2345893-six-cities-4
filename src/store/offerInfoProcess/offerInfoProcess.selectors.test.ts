import { NameSpace } from '../../const';
import { getOfferInfoIsLoading, getOfferInfo } from './selectors';
import { makeFakeOfferInfo } from '../../utils/mocks.ts';

describe('OfferInfoProcess selectors', () => {
  const mockOfferInfo = makeFakeOfferInfo();
  const state = {
    [NameSpace.OfferInfo]: {
      offer: mockOfferInfo,
      loading: true
    }
  };

  it('should return offerInfo from state', () => {
    const { offer } = state[NameSpace.OfferInfo];
    const result = getOfferInfo(state);

    expect(result).toEqual(offer);
  });

  it('should return offerInfo loading status state', () => {
    const { loading } = state[NameSpace.OfferInfo];
    const result = getOfferInfoIsLoading(state);

    expect(result).toEqual(loading);
  });
});
