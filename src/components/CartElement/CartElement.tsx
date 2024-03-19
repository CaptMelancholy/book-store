import { FaX } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import * as C from '../../styles/components';
import * as S from './styles';

import { ICartBook } from '../../utils/Books/book.types';
import { AppDispatch } from '../../store';
import { popFromCart } from '../../store/slices/books/books.slice';

interface IProps {
  book: ICartBook;
}

export default function CartElement({ book }: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handleDeleteFromCart = () => {
    dispatch(popFromCart(book.book.isbn13));
  };
  return (
    <S.Wrapper>
      <S.ImageInfoContainer>
        <S.ImageContainer>
          <S.Image src={book.book.image} />
        </S.ImageContainer>
        <S.InfoContainer>
          <S.Title>{book.book.title}</S.Title>
          <S.Author>{book.book.subtitle}</S.Author>
        </S.InfoContainer>
      </S.ImageInfoContainer>
      <S.DataContainer>
        <S.Price>{book.book.price}</S.Price>
        <C.IconButton onClick={handleDeleteFromCart}>
          <FaX />
        </C.IconButton>
      </S.DataContainer>
    </S.Wrapper>
  );
}
