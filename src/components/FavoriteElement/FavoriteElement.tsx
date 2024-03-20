import { FaHeart } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { generatePath, Link } from 'react-router-dom';
import * as C from '../../styles/components';
import * as S from './styles';
import { IBook } from '../../utils/Books/book.types';
import { AppDispatch } from '../../store';
import { popFromFavorite } from '../../store/slices/books/books.slice';
import DefaultRoutes from '../../utils/Routes/Routes';

interface IProps {
  book: IBook;
}

export default function FavoriteElement({ book }: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handlePopFromFavorite = () => {
    dispatch(popFromFavorite(book.isbn13));
  };
  return (
    <S.Wrapper>
      <S.ImageInfoContainer>
        <S.ImageContainer>
          <S.ImageButton onClick={handlePopFromFavorite}>
            <FaHeart />
          </S.ImageButton>
          <S.Image src={book.image} />
        </S.ImageContainer>
        <S.InfoContainer>
          <Link to={generatePath(DefaultRoutes.book, { isbn13: book.isbn13 })}>
            <S.Title>{book.title}</S.Title>
          </Link>
          <S.Author>{book.subtitle}</S.Author>
          <C.SUBLINE>{book.price}</C.SUBLINE>
        </S.InfoContainer>
      </S.ImageInfoContainer>
      <S.DataContainer>
        <S.IconButtonHeart onClick={handlePopFromFavorite}>
          <FaHeart />
        </S.IconButtonHeart>
      </S.DataContainer>
    </S.Wrapper>
  );
}
