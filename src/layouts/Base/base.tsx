import { ReactNode, useState } from 'react';

import * as S from './styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Screen from '../../components/Screen/Screen';

interface IProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: IProps) {
  const [showScreenBlock, setShowScreenBlock] = useState<boolean>(false);
  return (
    <S.Layout>
      <Screen show={showScreenBlock} />
      <Header setShowScreenBlock={setShowScreenBlock} />
      <S.Container>{children}</S.Container>
      <Footer />
    </S.Layout>
  );
}
