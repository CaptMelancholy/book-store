import styled from 'styled-components';
import { BODY1, H3 } from '../../styles/components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookImageContainer = styled.div`
  padding: 0 60px;
  background-color: ${({ theme }) => theme.colors.blue};
  object-fit: fill;
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
