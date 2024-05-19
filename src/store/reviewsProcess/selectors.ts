import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Reviews } from '../../types/Review.ts';

export const getReviewsIsLoading = (state: Pick<State, NameSpace.Reviews>): boolean => state[NameSpace.Reviews].loading;

export const getReviews = (state: Pick<State, NameSpace.Reviews>): Reviews => state[NameSpace.Reviews]?.reviews;

