import styled from 'styled-components';
import device from '../../styles/breakpoints';

export const Template = styled.div`
  padding: 72px 0;
  @media ${device.tablet} {
    padding: 56px 0;
  }
  @media ${device.tablet} {
    padding: 48px 0;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${device.tablet} {
    margin-bottom: 36px;
  }
  @media ${device.tablet} {
    margin-bottom: 24px;
  }
`;

export const BackButton = styled.div`
  margin-bottom: 32px;
  width: 42px;
  cursor: pointer;
  @media ${device.tablet} {
    margin-bottom: 24px;
  }
  @media ${device.tablet} {
    margin-bottom: 20px;
  }
`;
