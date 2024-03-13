import * as C from '../../styles/components';
import * as S from './styles';

export default function SubscribeTemplate() {
  return (
    <S.SubscribeContainer>
      <C.H2>SUBSCRIBE TO NEWSLETTER</C.H2>
      <S.SubscribeDescription>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </S.SubscribeDescription>
      <S.SubscribeFormContainer>
        <S.SubscribeInput placeholder="Your email" />
        <S.SubscribeButton>SUBSCRIBE</S.SubscribeButton>
      </S.SubscribeFormContainer>
    </S.SubscribeContainer>
  );
}
