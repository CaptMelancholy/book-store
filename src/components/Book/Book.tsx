import { Link, generatePath } from 'react-router-dom';
import * as C from '../../styles/components';
import { IBook } from '../../utils/Books/book.types';
import * as S from './styles';
import DefaultRoutes from '../../utils/Routes/Routes';

interface IProps {
  book: IBook;
}

export default function Book({ book }: IProps) {
  return (
    <S.Wrapper>
      <S.BookImageContainer>
        <S.BookImage src={book.image} />
      </S.BookImageContainer>
      <Link to={generatePath(DefaultRoutes.book, { isbn13: book.isbn13 })}>
        <S.Title>{book.title}</S.Title>
      </Link>

      <S.Author>{book.subtitle}</S.Author>
      <S.InfoContainer>
        <C.SUBLINE>{book.price}</C.SUBLINE>
      </S.InfoContainer>
    </S.Wrapper>
  );
}
