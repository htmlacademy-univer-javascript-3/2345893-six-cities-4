import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { OffersType } from "../../types/OffersType.ts";

export const getOffers = (state: Pick<State, NameSpace.Offers>): OffersType => state[NameSpace.Offers]?.offers;

export const getOffersIsLoading = (state: Pick<State, NameSpace.Offers>): boolean => state[NameSpace.Offers]?.loading;

export const getOffersHasError = (state: Pick<State, NameSpace.Offers>): boolean => state[NameSpace.Offers]?.hasError;
