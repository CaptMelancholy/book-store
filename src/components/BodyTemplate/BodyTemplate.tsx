import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

import * as S from './styles';

interface IProps {
  // eslint-disable-next-line react/require-default-props
  title?: string;
  children: ReactNode;
  backButton: boolean;
}

export default function BodyTemplate({ title, children, backButton }: IProps) {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <S.Template>
      {backButton && (
        <S.BackButton onClick={handleBackClick}>
          <FaArrowLeftLong />
        </S.BackButton>
      )}
      {title && <S.Title>{title}</S.Title>}
      {children}
    </S.Template>
  );
}
