/* eslint-disable import/no-cycle */
import {
  AnyAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { listenerMiddleware } from './middleware';
import booksReducer from './slices/books/books.slice';

import ESliceNames from './store.types';

const rootReducer = combineReducers({
  [ESliceNames.BOOKS_SLICE_NAME]: booksReducer,
});

const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    [listenerMiddleware.middleware],
  ),
});

const store = setupStore();

export default store;

// annotation of all our reducers
export type RootState = ReturnType<typeof rootReducer>;
// annotation of function of creating stote
export type AppStore = ReturnType<typeof setupStore>;
// annotation of dispatch
export type AppDispatch = AppStore['dispatch'];
// annotation of actions
export const useAppDispatch = () => useDispatch<AppDispatch>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
