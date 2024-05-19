import { OffersType } from '../types/OffersType.ts';

export const sortOffersByRating = (offers: OffersType) => [...offers].sort((offer1, offer2) => (offer2.rating - offer1.rating));
