/* eslint-disable react/no-unescaped-entities */
import { FaRegHeart, FaChevronDown } from 'react-icons/fa6';
import { useState } from 'react';
import * as C from '../../styles/components';
import * as S from './styles';
import StarRating from '../StarRating/StarRating';
import TabButtons from '../Tab/TabButtons/TabButtons';
import ETabTypes from '../Tab/TabButtons/TabButtons.types';
import TabContent from '../Tab/TabContent/TabContent';
import { IDetailedBook } from '../../utils/Books/book.types';

interface IProps {
  book: IDetailedBook;
}

export default function BookInfo({ book }: IProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <S.Container>
      <S.InfoSection>
        <S.ImageContainer>
          <S.ImageButton>
            <FaRegHeart />
          </S.ImageButton>
          <S.Image src={book.image} />
        </S.ImageContainer>
        <S.InfoContainer>
          <S.Line>
            <C.H2>{book.price}</C.H2>
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
          <C.Button>ADD TO CART</C.Button>
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
