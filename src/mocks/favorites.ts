import { offers } from './offers.ts';
import { groupBy } from '../helpers/groupBy.ts';


export const favorites = groupBy(offers.filter((offer) => offer.isFavorite), (offer) => offer.city);

