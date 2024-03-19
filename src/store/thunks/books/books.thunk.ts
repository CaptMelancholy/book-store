import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../..';
import EAPIs from '../../../api/api-client';
import {
  setDetailedBook,
  setNewReleasesData,
} from '../../slices/books/books.slice';

export const fetchNewReleases = createAsyncThunk<void, void, { state: RootState }>(
  'books/getNewReleases',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios
        .get(`${EAPIs.BOOK_API}/new`)
        .then(({ data }) => data.books);
      dispatch(setNewReleasesData(response));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const fetchDetailedBook = createAsyncThunk<void, { isbn13: string }>(
  'books/getDetailedBook',
  async ({ isbn13 }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios
        .get(`${EAPIs.BOOK_API}/books/${isbn13}`)
        .then(({ data }) => data);
      dispatch(setDetailedBook(response));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);
