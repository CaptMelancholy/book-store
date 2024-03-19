import { FaHeart } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import * as C from '../../styles/components';
import * as S from './styles';
import { IBook } from '../../utils/Books/book.types';
import { AppDispatch } from '../../store';
import { popFromFavorite } from '../../store/slices/books/books.slice';

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
          <S.Image src={book.image} />
        </S.ImageContainer>
        <S.InfoContainer>
          <S.Title>{book.title}</S.Title>
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
