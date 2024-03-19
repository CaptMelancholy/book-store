export const VAT : number = 0.2;
export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
}

export interface ICartBook {
  book: IBook;
  amount: number;
}

export interface ISearchBook {
  total: string;
  page: string;
  books: Array<IBook>;
}

export interface IDetailedBook {
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
}
