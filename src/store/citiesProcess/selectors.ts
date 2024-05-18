import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { City } from '../../types/City.ts';

export const getCurCity = (state: Pick<State, NameSpace.Cities>): City => state[NameSpace.Cities]?.city;

export const getCities = (state: Pick<State, NameSpace.Cities>): Array<City> => state[NameSpace.Cities]?.cities;

