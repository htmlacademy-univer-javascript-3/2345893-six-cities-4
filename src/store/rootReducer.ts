import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const.ts';
import { userProcess } from './userProcess/userProcess.ts';
import { offersProcess } from './offersProcess/offersProcess.ts';
import { citiesProcess } from './citiesProcess/citiesProcess.ts';
import { reviewsProcess } from './reviewsProcess/reviewsProcess.ts';
import { offerInfoProcess } from './offerInfoProcess/offerInfoProcess.ts';
import { offersNearbyProcess } from './offersNearbyProcess/offersNearbyProcess.ts';

const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Cities]: citiesProcess.reducer,
  [NameSpace.Reviews]: reviewsProcess.reducer,
  [NameSpace.OfferInfo]: offerInfoProcess.reducer,
  [NameSpace.OffersNearby]: offersNearbyProcess.reducer,
},
);

export { rootReducer };
