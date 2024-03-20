import styled from 'styled-components';
import { BODY1, H3, SUBLINE } from '../../styles/components';
import device from '../../styles/breakpoints';

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
  @media ${device.desktop} {
    gap: 105px;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: end;
  }
`;

export const Price = styled(SUBLINE)`
  font-size: 40px;
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CounterElement = styled.div`
  font-family: var(--primary-family);
  width: 56px;
  text-align: center;
  font-size: 24px;
`;
