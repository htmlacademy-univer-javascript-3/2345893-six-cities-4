import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browserHistory';
import { Middleware } from 'redux';
import { rootReducer } from '../rootReducer';
import { Action } from '../action.ts';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (action: PayloadAction<string>) => {
        if (action.type === Action.REDIRECT_TO_ROUTE) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
