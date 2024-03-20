import { FaX, FaPlus, FaMinus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import * as C from '../../styles/components';
import * as S from './styles';

import { ICartBook } from '../../utils/Books/book.types';
import { AppDispatch } from '../../store';
import {
  decInCart,
  incInCart,
  popFromCart,
} from '../../store/slices/books/books.slice';
import DefaultRoutes from '../../utils/Routes/Routes';

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
      <S.ImageContainer>
        <S.ImageButton onClick={handleDeleteFromCart}>
          <FaX />
        </S.ImageButton>
        <S.Image src={book.book.image} />
      </S.ImageContainer>
      <S.TransformContainer>
        <S.ManipulatingContainer>
          <S.InfoContainer>
            <Link
              to={generatePath(DefaultRoutes.book, {
                isbn13: book.book.isbn13,
              })}
            >
              <S.Title>{book.book.title}</S.Title>
            </Link>
            <S.Author>{book.book.subtitle}</S.Author>
            <S.CounterContainerIndependent>
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
            </S.CounterContainerIndependent>
          </S.InfoContainer>
          <S.Price>{`$ ${Math.ceil(parseFloat(book.book.price.substring(1)) * book.amount * 100) / 100}`}</S.Price>
          <S.DataContainer>
            <C.IconButton onClick={handleDeleteFromCart}>
              <FaX />
            </C.IconButton>
          </S.DataContainer>
        </S.ManipulatingContainer>
        <S.PriceCounterContainer>
          <S.CounterContainerWithPrice>
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
          </S.CounterContainerWithPrice>
          <S.Price>{`$ ${Math.ceil(parseFloat(book.book.price.substring(1)) * book.amount * 100) / 100}`}</S.Price>
        </S.PriceCounterContainer>
      </S.TransformContainer>
    </S.Wrapper>
  );
}
