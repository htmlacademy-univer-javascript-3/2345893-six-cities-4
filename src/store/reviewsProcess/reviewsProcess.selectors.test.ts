import { NameSpace } from '../../const';
import { getReviews, getReviewsIsLoading } from './selectors';
import { makeFakeReviews } from '../../utils/mocks.ts';

describe('ReviewsProcess selectors', () => {
  const mockReviews = makeFakeReviews();
  const state = {
    [NameSpace.Reviews]: {
      reviews: mockReviews,
      loading: true
    }
  };

  it('should return reviews from state', () => {
    const { reviews } = state[NameSpace.Reviews];
    const result = getReviews(state);

    expect(result).toEqual(reviews);
  });

  it('should return reviews loading status state', () => {
    const { loading } = state[NameSpace.Reviews];
    const result = getReviewsIsLoading(state);

    expect(result).toEqual(loading);
  });
});
