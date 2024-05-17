import type { OffersType } from '../types/OffersType.ts';

export const sortOffersByPrice = (offers: OffersType, reverse = false) => {
  offers.sort((offer1, offer2) => (offer1.price - offer2.price) * (reverse ? 1 : -1));
};
