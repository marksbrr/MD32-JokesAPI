import { configureStore } from '@reduxjs/toolkit';
import { reducer as jokesReducer, middleware as jokesMiddleware } from '../services/jokes';

const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jokesMiddleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
