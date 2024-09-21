import { createAPI } from '@/services/api';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

export const api = createAPI();

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            thunk: {
                extraArgument: api
            }
        })
  })
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
