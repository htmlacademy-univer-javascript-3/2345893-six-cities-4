import { groupBy } from './groupBy.ts';
import { makeFakeOffers } from '../utils/mocks.ts';

describe('Testing "groupBy"', () => {
  it('should return empty object', () => {
    const result = groupBy([], () => '');

    expect(result).toEqual({});
  });

  it('should return offers grouped by 13', () => {
    const mockOffers = makeFakeOffers();
    const result = groupBy(mockOffers, (o) => o.city.location.zoom);

    expect(result).toEqual({ 13: mockOffers });
  });
});
