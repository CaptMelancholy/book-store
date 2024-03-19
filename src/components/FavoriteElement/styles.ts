import styled from 'styled-components';
import { BODY1, H3, IconButton } from '../../styles/components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background_gray};
`;

export const ImageInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.blue};
  width: 256px;
`;

export const InfoContainer = styled.div`
  width: 446px;
`;

export const Image = styled.img`
  object-fit: cover;
  padding: 40px;
`;

export const Title = styled(H3)`
  margin-bottom: 8px;
  width: 100%;
`;

export const Author = styled(BODY1)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
`;

export const IconButtonHeart = styled(IconButton)`
  color: ${({ theme }) => theme.colors.red};
`;
