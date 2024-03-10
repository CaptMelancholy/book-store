import { ReactNode } from 'react';

import * as S from './styles';

interface IProps {
  // eslint-disable-next-line react/require-default-props
  title?: string;
  children: ReactNode;
}

export default function BodyTemplate({ title, children }: IProps) {
  return (
    <S.Template>
      {title && <S.Title>{title}</S.Title>}
      {children}
    </S.Template>
  );
}
