import { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import * as S from './styles';

interface IProps {
  rates: string;
}

export default function StarRating({ rates } : IProps) {
  const [rating, setRating] = useState<number>(parseInt(rates, 10));
  const [hover, setHover] = useState<number | null>(null);
  return (
    <S.Wrapper>
      {[...Array(5)].map((_Star, i) => {
        const rate = i + 1;
        return (
          <S.StarWrapper key={rate}>
            <S.CheckStar
              type="radio"
              value={rate}
              onClick={() => setRating(rate)}
            />
            <S.StarContainer
              onMouseEnter={() => setHover(rate)}
              onMouseLeave={() => setHover(null)}
              className={rate <= (hover || rating) ? 'active' : ''}
            >
              <FaStar />
            </S.StarContainer>
          </S.StarWrapper>
        );
      })}
    </S.Wrapper>
  );
}
