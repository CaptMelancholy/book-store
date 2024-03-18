import { ReactNode } from 'react';
import * as S from './styles';
import * as C from '../../styles/components';
import { IBook } from '../../utils/Books/book.types';
import Book from '../Book/Book';

interface IProps {
  books: Array<IBook>;
}

export default function BookList({ books }: IProps) {
  return (
    <S.ListWrapper>
      {books.length !== 0 ? (
        books.map((book): ReactNode => <Book book={book} />)
      ) : (
        <C.H2>LOADING... PLEASE WAIT!</C.H2>
      )}
    </S.ListWrapper>
  );
}
