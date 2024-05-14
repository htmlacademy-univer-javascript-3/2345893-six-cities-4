import { OfferType } from '../types/offerType.ts';

export const sortOffersByRating = (offers: Array<OfferType>) => {
  offers.sort((offer1, offer2) => (offer2.rating - offer1.rating));
};
