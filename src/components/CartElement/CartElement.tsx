import { FaX } from 'react-icons/fa6';
import * as C from '../../styles/components';
import * as S from './styles';

export default function CartElement() {
  return (
    <S.Wrapper>
      <S.ImageInfoContainer>
        <S.ImageContainer>
          <S.Image src="https://itbook.store/img/books/9781098104030.png" />
        </S.ImageContainer>
        <S.InfoContainer>
          <S.Title>HELLO WORLD</S.Title>
          <S.Author>HELLO WORLD</S.Author>
        </S.InfoContainer>
      </S.ImageInfoContainer>
      <S.DataContainer>
        <S.Price>$31.2</S.Price>
        <C.IconButton>
          <FaX />
        </C.IconButton>
      </S.DataContainer>
    </S.Wrapper>
  );
}
