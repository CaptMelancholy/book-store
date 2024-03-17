import { ReactNode } from 'react';
import * as S from './styles';

interface IProps {
  children: ReactNode;
}

export default function CartList({ children } : IProps) {
  return <S.ListWrapper>{ children }</S.ListWrapper>;
}
