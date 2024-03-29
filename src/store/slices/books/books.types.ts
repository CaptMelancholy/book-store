import { IBook, ICartBook, IDetailedBook } from '../../../utils/Books/book.types';

export interface IStorageBooks {
  newReleases: Array<IBook>;
  detailedBook: IDetailedBook | null;
  cart: Array<ICartBook>;
  favoriteBooks: Array<IBook>;
}

export const storageBooksDefaultState: IStorageBooks = {
  newReleases: [],
  detailedBook: null,
  cart: [],
  favoriteBooks: [],
};
