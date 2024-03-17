import * as C from '../../styles/components';
import * as S from './styles';
import CartElement from '../CartElement/CartElement';
import CartList from '../CartList/CartList';

export default function Cart() {
  return (
    <S.Container>
      <CartList>
        <CartElement />
        <CartElement />
        <CartElement />
        <CartElement />
      </CartList>
      <S.SumContainer>
        <S.Line>
          <C.BODY2>Sum total</C.BODY2>
          <C.BODY1>$ NN.NN</C.BODY1>
        </S.Line>
        <S.Line>
          <C.BODY2>VAT</C.BODY2>
          <C.BODY1>$ NN.NN</C.BODY1>
        </S.Line>
        <S.Line>
          <C.H2>TOTAL:</C.H2>
          <C.H2>$NN.NN</C.H2>
        </S.Line>
        <C.Button>CHECK OUT</C.Button>
      </S.SumContainer>
    </S.Container>
  );
}
