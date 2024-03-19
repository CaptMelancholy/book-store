import { ReactNode } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

import * as C from '../../styles/components';
import * as S from './styles';
import DefaultRoutes from '../../utils/Routes/Routes';

interface IProps {
  // eslint-disable-next-line react/require-default-props
  title?: string;
  subtitle?: string;
  children: ReactNode;
  backButton: boolean;
}

export default function BodyTemplate({
  title,
  subtitle,
  children,
  backButton,
}: IProps) {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(generatePath(DefaultRoutes.default));
  };
  return (
    <S.Template>
      {backButton && (
        <S.BackButton onClick={handleBackClick}>
          <FaArrowLeftLong />
        </S.BackButton>
      )}
      {title && (
        <S.TextContainer>
          {title && <C.H1>{title}</C.H1>}
          {subtitle && <C.BODY2>{subtitle}</C.BODY2>}
        </S.TextContainer>
      )}
      {children}
    </S.Template>
  );
}
