import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CitiesProcess } from '../../types/state';
import { fetchOffersAction } from '../apiActions';
import { City } from "../../types/City.ts";

export const initialCity = {
  title: 'Paris',
  lat: 48.856663,
  lng: 2.3515568,
  zoom: 13
};

const initialState: CitiesProcess = {
  city: initialCity,
  cities: [],
};

export const citiesProcess = createSlice({
  name: NameSpace.Cities,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        const cities = action.payload.map(({ city }) => (
          { title: city.name, lat: city.location.latitude, lng: city.location.longitude, zoom: city.location.zoom }));

        state.cities = cities.filter((obj, idx, arr) =>
          idx === arr.findIndex((t) => t.title === obj.title));
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.cities = [];
      });
  }
});

export const { setCity } = citiesProcess.actions;
