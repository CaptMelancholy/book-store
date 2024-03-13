import * as C from '../../styles/components';
import * as S from './styles';

export default function Book() {
  return (
    <S.Wrapper>
      <S.BookImageContainer>
        <S.BookImage src="https://itbook.store/img/books/9781098104030.png" />
      </S.BookImageContainer>
      <S.Title>Android Apps for Absolute Beginners, 2nd Edition</S.Title>
      <S.Author>by Lentin Joseph, Apress 2018</S.Author>
      <S.InfoContainer>
        <C.SUBLINE>$31.38</C.SUBLINE>
      </S.InfoContainer>
    </S.Wrapper>
  );
}
