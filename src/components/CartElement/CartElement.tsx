import { FaX, FaPlus, FaMinus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as C from '../../styles/components';
import * as S from './styles';

import { ICartBook } from '../../utils/Books/book.types';
import { AppDispatch } from '../../store';
import {
  decInCart,
  incInCart,
  popFromCart,
} from '../../store/slices/books/books.slice';

interface IProps {
  book: ICartBook;
}

enum IOps {
  inc = 'INC',
  dec = 'DEC',
}

export default function CartElement({ book }: IProps) {
  const [count, setCount] = useState<number>(book.amount);
  const dispatch = useDispatch<AppDispatch>();
  const handleCartChanging = (op: IOps) => {
    if (op === IOps.inc) {
      dispatch(incInCart(book.book.isbn13));
      setCount(count + 1);
    } else {
      dispatch(decInCart(book.book.isbn13));
      setCount(count - 1);
    }
  };
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
          <S.CounterContainer>
            <S.CounterElement>
              <C.IconButton
                type="button"
                onClick={() => handleCartChanging(IOps.dec)}
              >
                <FaMinus />
              </C.IconButton>
            </S.CounterElement>
            <S.CounterElement>{count}</S.CounterElement>
            <S.CounterElement>
              <C.IconButton onClick={() => handleCartChanging(IOps.inc)}>
                <FaPlus />
              </C.IconButton>
            </S.CounterElement>
          </S.CounterContainer>
        </S.InfoContainer>
      </S.ImageInfoContainer>
      <S.DataContainer>
        <S.Price>{`$ ${Math.ceil(parseFloat(book.book.price.substring(1)) * book.amount * 100) / 100}`}</S.Price>
        <C.IconButton onClick={handleDeleteFromCart}>
          <FaX />
        </C.IconButton>
      </S.DataContainer>
    </S.Wrapper>
  );
}
