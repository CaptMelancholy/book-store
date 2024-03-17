import { FaRegHeart, FaChevronDown } from 'react-icons/fa6';
import { useState } from 'react';
import * as C from '../../styles/components';
import * as S from './styles';
import StarRating from '../StarRating/StarRating';
import TabButtons from '../Tab/TabButtons/TabButtons';
import ETabTypes from '../Tab/TabButtons/TabButtons.types';
import SubscribeTemplate from '../SubscribeTemplate/SubscribeTemplate';
import TabContent from '../Tab/TabContent/TabContent';

export default function BookInfo() {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <S.Container>
      <S.InfoSection>
        <S.ImageContainer>
          <S.ImageButton>
            <FaRegHeart />
          </S.ImageButton>
          <S.Image src="https://itbook.store/img/books/9781098104030.png" />
        </S.ImageContainer>
        <S.InfoContainer>
          <S.Line>
            <C.H2>$ NN.NN</C.H2>
            <StarRating />
          </S.Line>
          <S.Line>
            <C.BODY2>Authors</C.BODY2>
            <C.BODY1>Something</C.BODY1>
          </S.Line>
          <S.Line>
            <C.BODY2>Publisher</C.BODY2>
            <C.BODY1>Something</C.BODY1>
          </S.Line>
          <S.Line>
            <C.BODY2>Language</C.BODY2>
            <C.BODY1>Something</C.BODY1>
          </S.Line>
          <S.Line>
            <C.BODY2>Format</C.BODY2>
            <C.BODY1>Something</C.BODY1>
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
          content={['ABOBA', 'BOBA', 'BOBUS']}
        />
      </S.TabsContainer>
      <SubscribeTemplate />
    </S.Container>
  );
}
