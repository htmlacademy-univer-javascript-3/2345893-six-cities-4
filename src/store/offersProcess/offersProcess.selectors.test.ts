import { NameSpace } from '../../const';
import { getOffers, getOffersIsLoading, getOffersHasError } from './selectors';
import { makeFakeOffers } from '../../utils/mocks.ts';

describe('OffersProcess selectors', () => {
  const mockOffers = makeFakeOffers();
  const state = {
    [NameSpace.Offers]: {
      offers: mockOffers,
      loading: true,
      hasError: false,
    }
  };

  it('should return offers from state', () => {
    const { offers } = state[NameSpace.Offers];
    const result = getOffers(state);

    expect(result).toEqual(offers);
  });

  it('should return reviews loading status state', () => {
    const { loading } = state[NameSpace.Offers];
    const result = getOffersIsLoading(state);

    expect(result).toEqual(loading);
  });


  it('should return error status from state', () => {
    const { hasError } = state[NameSpace.Offers];
    const result = getOffersHasError(state);
    expect(result).toBe(hasError);
  });
});
