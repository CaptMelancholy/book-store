import { IBook, ICartBook } from './book.types';

class Book {
  static isInArray(books: Array<IBook>, isbn13: string): boolean {
    return books.some((book) => book.isbn13 === isbn13);
  }

  static isInCart(books: Array<ICartBook>, isbn13: string): boolean {
    return books.some(({ book }) => book.isbn13 === isbn13);
  }
}

export default Book;
