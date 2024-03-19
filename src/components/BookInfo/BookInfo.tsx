/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { FaRegHeart, FaChevronDown, FaHeart } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as C from '../../styles/components';
import * as S from './styles';
import StarRating from '../StarRating/StarRating';
import TabButtons from '../Tab/TabButtons/TabButtons';
import ETabTypes from '../Tab/TabButtons/TabButtons.types';
import TabContent from '../Tab/TabContent/TabContent';
import { IBook, IDetailedBook } from '../../utils/Books/book.types';
import Book from '../../utils/Books/book';
import {
  cartSelector,
  favoriteBooksSelector,
} from '../../store/slices/books/books.selectors';

import { AppDispatch } from '../../store';
import {
  popFromCart,
  popFromFavorite,
  pushToCart,
  pushToFavorite,
} from '../../store/slices/books/books.slice';

interface IProps {
  book: IDetailedBook | undefined;
}

export default function BookInfo({ book }: IProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isInCart, setIsInCart] = useState<boolean>();
  const [isFav, setIsFav] = useState<boolean>();
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector(cartSelector);
  const favorite = useSelector(favoriteBooksSelector);
  const handleChangeCart = () => {
    if (book !== undefined) {
      if (isInCart) {
        dispatch(popFromCart(book.isbn13));
      } else {
        const {
          title, subtitle, isbn13, price, image,
        } = book;
        const newBook: IBook = {
          title,
          subtitle,
          isbn13,
          price,
          image,
        };
        dispatch(pushToCart(newBook));
      }
      setIsInCart(!isInCart);
    }
  };
  const handleChangeFav = () => {
    if (book !== undefined) {
      if (isFav) {
        dispatch(popFromFavorite(book.isbn13));
      } else {
        const {
          title, subtitle, isbn13, price, image,
        } = book;
        const newBook: IBook = {
          title,
          subtitle,
          isbn13,
          price,
          image,
        };
        dispatch(pushToFavorite(newBook));
      }
      setIsFav(!isFav);
    }
  };
  const checkIsInCart = () => {
    if (book) {
      setIsInCart(Book.isInCart(cart, book.isbn13));
    }
  };
  const checkIsFav = () => {
    if (book) {
      setIsFav(Book.isInArray(favorite, book.isbn13));
    }
  };
  useEffect(() => {
    checkIsInCart();
    checkIsFav();
  }, []);
  const component = () => {
    if (book !== undefined) {
      return (
        <S.Container>
          <S.InfoSection>
            <S.ImageContainer>
              <S.ImageButton
                className={isFav ? 'active' : ''}
                onClick={handleChangeFav}
              >
                {isFav ? <FaHeart /> : <FaRegHeart />}
              </S.ImageButton>
              <S.Image src={book?.image} />
            </S.ImageContainer>
            <S.InfoContainer>
              <S.Line>
                <C.H2>{book?.price}</C.H2>
                <StarRating rates={book.rating} />
              </S.Line>
              <S.Line>
                <C.BODY2>Authors</C.BODY2>
                <C.BODY1>{book.authors}</C.BODY1>
              </S.Line>
              <S.Line>
                <C.BODY2>Publisher</C.BODY2>
                <C.BODY1>{book.publisher}</C.BODY1>
              </S.Line>
              <S.Line>
                <C.BODY2>Language</C.BODY2>
                <C.BODY1>{book.language}</C.BODY1>
              </S.Line>
              <S.Line>
                <C.BODY2>Format</C.BODY2>
                <C.BODY1>Paper book / ebook (PDF)</C.BODY1>
              </S.Line>
              <C.LinkHints>
                More details
                <FaChevronDown />
              </C.LinkHints>
              <C.Button onClick={handleChangeCart}>
                {isInCart ? 'REMOVE FROM CART' : 'ADD TO CART'}
              </C.Button>
              <S.InfoButton>Preview book</S.InfoButton>
            </S.InfoContainer>
          </S.InfoSection>
          <S.TabsContainer>
            <TabButtons
              name={['Description', 'Authors', 'Reviews']}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              typeButton={ETabTypes.DEFAULT}
            />
            <TabContent
              activeTab={activeTab}
              typeButton={ETabTypes.DEFAULT}
              content={[book.desc, book.authors, 'NOTHING HERE']}
            />
          </S.TabsContainer>
        </S.Container>
      );
    }
    return <C.H2>ERROR</C.H2>;
  };
  return component();
}
