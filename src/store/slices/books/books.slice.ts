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
    incInCart: (state, action: { payload: string }) => {
      state.cart = state.cart.map((element) => {
        const { book } = element;
        if (book.isbn13 === action.payload) {
          element.amount += 1;
          return element;
        }
        return element;
      });
    },
    decInCart: (state, action: { payload: string }) => {
      const cartElement = state.cart.find(
        ({ book }) => book.isbn13 === action.payload,
      );
      if (cartElement?.amount === 1) {
        state.cart = state.cart.filter(
          ({ book }) => book.isbn13 !== action.payload,
        );
      } else {
        state.cart = state.cart.map((element) => {
          const { book } = element;
          if (book.isbn13 === action.payload) {
            element.amount -= 1;
            return element;
          }
          return element;
        });
      }
    },
    pushToCart: (state, action: { payload: IBook }) => {
      state.cart.push({ book: action.payload, amount: 1 });
    },
    popFromCart: (state, action: { payload: string }) => ({
      ...state,
      cart: state.cart.filter(({ book }) => book.isbn13 !== action.payload),
    }),
    pushToFavorite: (state, action: { payload: IBook }) => {
      state.favoriteBooks.push(action.payload);
    },
    popFromFavorite: (state, action: { payload: string }) => ({
      ...state,
      favoriteBooks: state.favoriteBooks.filter(
        ({ isbn13 }) => isbn13 !== action.payload,
      ),
    }),
  },
});

export const {
  setNewReleasesData,
  setDetailedBook,
  incInCart,
  decInCart,
  pushToCart,
  pushToFavorite,
  popFromCart,
  popFromFavorite,
} = booksSlice.actions;

export default booksSlice.reducer;
