import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { OffersType } from "../../types/OffersType.ts";

export const getOffersNearbyLoading = (state: Pick<State, NameSpace.OffersNearby>): boolean => state[NameSpace.OffersNearby]?.loading;

export const getOffersNearby = (state: Pick<State, NameSpace.OffersNearby>): OffersType => state[NameSpace.OffersNearby]?.offers;
