/* eslint-disable max-len */
import { RootState } from '../../index';
import ESliceNames from '../../store.types';

export const newReleasesSelector = (state: RootState) => state[ESliceNames.BOOKS_SLICE_NAME].newReleases;
export const cartSelector = (state: RootState) => state[ESliceNames.BOOKS_SLICE_NAME].cart;
export const favoriteBooksSelector = (state: RootState) => state[ESliceNames.BOOKS_SLICE_NAME].favoriteBooks;
export const detailedBookSelector = (state: RootState) => state[ESliceNames.BOOKS_SLICE_NAME].detailedBook;
