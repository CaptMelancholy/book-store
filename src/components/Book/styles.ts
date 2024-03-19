import styled from 'styled-components';
import { BODY1, H3 } from '../../styles/components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookImageContainer = styled.div`
  padding: 0 60px;
  background-color: ${({ theme }) => {
    function randomIntFromInterval(min: number, max: number) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const color = randomIntFromInterval(1, 4);
    switch (color) {
      case 1: {
        return theme.colors.blue;
      }
      case 2: {
        return theme.colors.red;
      }
      case 3: {
        return theme.colors.orange;
      }
      case 4: {
        return theme.colors.purple;
      }
      default: {
        return theme.colors.blue;
      }
    }
  }};
  object-fit: fill;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

export const BookImage = styled.img`
  object-fit: cover;
  padding: 40px;
`;

export const Title = styled(H3)`
  display: -webkit-box;
  text-align: justify;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  width: 100%;
  word-break: break-all;
  transition: 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
  }
`;

export const Author = styled(BODY1)`
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
