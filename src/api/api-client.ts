import axios from 'axios';
import { ISearchBook, IDetailedBook } from '../utils/Books/book.types';

enum EAPIs {
  BOOK_API = 'https://api.itbook.store/1.0',
  AUTH_API = 'https://studapi.teachmeskills.by/auth',
}

export const fetchInfoBook = async (isbn13: string) => {
  const response = await axios
    .get(`${EAPIs.BOOK_API}/books/${isbn13}`)
    .then(({ data }) => data);
  return response as IDetailedBook;
};

export const searchBooks = async (keyword: string, page: string) => {
  const response = await axios
    .get(`${EAPIs.BOOK_API}/search/${keyword}/${page}`)
    .then(({ data }) => data);
  return response as ISearchBook;
};

export default EAPIs;
