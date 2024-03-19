import { useSelector } from 'react-redux';
import { ReactNode } from 'react';
import * as C from '../../styles/components';
import FavoriteList from '../FavoriteList/FavoriteList';
import * as S from './styles';
import { favoriteBooksSelector } from '../../store/slices/books/books.selectors';
import FavoriteElement from '../FavoriteElement/FavoriteElement';

export default function Favorite() {
  const favorite = useSelector(favoriteBooksSelector);
  return (
    <S.Container>
      <FavoriteList>
        {favorite.length !== 0 ? (
          favorite.map((book): ReactNode => <FavoriteElement book={book} />)
        ) : (
          <C.H2>NOTHING HERE</C.H2>
        )}
      </FavoriteList>
    </S.Container>
  );
}
