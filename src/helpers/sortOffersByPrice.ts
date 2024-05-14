import { OfferType } from '../types/offerType.ts';

export const sortOffersByPrice = (offers: Array<OfferType>, reverse = false) => {
  offers.sort((offer1, offer2) => (offer1.price - offer2.price) * (reverse ? 1 : -1));
};
