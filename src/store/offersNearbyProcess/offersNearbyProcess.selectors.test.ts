import { NameSpace } from '../../const';
import { getOffersNearby, getOffersNearbyLoading } from './selectors';
import { makeFakeOffers } from "../../utils/mocks.ts";

describe('OffersNearbyProcess selectors', () => {
  const mockOffers = makeFakeOffers();
  const state = {
    [NameSpace.OffersNearby]: {
      offers: mockOffers,
      loading: true
    }
  }

  it('should return offers from state', () => {
    const { offers } = state[NameSpace.OffersNearby];
    const result = getOffersNearby(state);

    expect(result).toEqual(offers);
  });

  it('should return reviews loading status state', () => {
    const { loading } = state[NameSpace.OffersNearby];
    const result = getOffersNearbyLoading(state);

    expect(result).toEqual(loading);
  });
});
