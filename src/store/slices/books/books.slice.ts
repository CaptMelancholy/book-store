import { createSlice } from '@reduxjs/toolkit';
import ESliceNames from '../../store.types';
import { storageBooksDefaultState } from './books.types';
import { IBook, IDetailedBook } from '../../../utils/Books/book.types';

const booksSlice = createSlice({
  name: ESliceNames.BOOKS_SLICE_NAME,
  initialState: storageBooksDefaultState,
  reducers: {
    setNewReleasesData: (state, action: { payload: Array<IBook> }) => ({
      ...state,
      newReleases: action.payload,
    }),
    setDetailedBook: (state, action: { payload: IDetailedBook }) => ({
      ...state,
      detailedBook: action.payload,
    }),
  },
});

export const { setNewReleasesData, setDetailedBook } = booksSlice.actions;

export default booksSlice.reducer;
