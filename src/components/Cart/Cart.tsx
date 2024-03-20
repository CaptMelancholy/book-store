/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-one-expression-per-line */
import { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as C from '../../styles/components';
import * as S from './styles';
import CartElement from '../CartElement/CartElement';
import CartList from '../CartList/CartList';
import { cartSelector } from '../../store/slices/books/books.selectors';
import { VAT } from '../../utils/Books/book.types';

export default function Cart() {
  const [vat, setVat] = useState<number>(0.0);
  const [price, setPrice] = useState<number>(0.0);
  const [sum, setSum] = useState<number>(0.0);
  const cartElements = useSelector(cartSelector);
  const calcParameters = () => {
    const value = cartElements.reduce(
      (accum, current) => (accum + parseFloat(current.book.price.substring(1)) * current.amount),
      0,
    );
    setPrice(value);
    setVat(Math.ceil(value * VAT * 100) / 100);
    setSum(Math.ceil((price + vat) * 100) / 100);
  };
  useEffect(() => {
    calcParameters();
  });
  return (
    <S.Container>
      <CartList>
        {cartElements.length !== 0 ? (
          cartElements.map((book): ReactNode => <CartElement book={book} />)
        ) : (
          <C.H2>NOTHING HERE</C.H2>
        )}
      </CartList>
      <S.SumContainer>
        <S.Line>
          <C.BODY2>Sum total</C.BODY2>
          <C.BODY1>$ {price}</C.BODY1>
        </S.Line>
        <S.Line>
          <C.BODY2>VAT</C.BODY2>
          <C.BODY1>$ {vat}</C.BODY1>
        </S.Line>
        <S.Line>
          <C.H2>TOTAL:</C.H2>
          <C.H2>$ {sum}</C.H2>
        </S.Line>
        <C.Button>CHECK OUT</C.Button>
      </S.SumContainer>
    </S.Container>
  );
}
