import { ReactNode } from 'react';

import * as S from './styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface IProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: IProps) {
  return (
    <S.Layout>
      <Header />
      <S.Container>{children}</S.Container>
      <Footer />
    </S.Layout>
  );
}
