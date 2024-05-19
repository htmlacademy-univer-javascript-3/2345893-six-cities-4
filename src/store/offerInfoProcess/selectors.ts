import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { OfferInfoType } from "../../types/OfferInfoType.ts";

export const getOfferInfoIsLoading = (state: Pick<State, NameSpace.OfferInfo>): boolean => state[NameSpace.OfferInfo].loading;

export const getOfferInfo = (state: Pick<State, NameSpace.OfferInfo>): OfferInfoType | undefined => state[NameSpace.OfferInfo].offer;

