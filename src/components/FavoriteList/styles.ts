import styled from 'styled-components';
import device from '../../styles/breakpoints';

// eslint-disable-next-line import/prefer-default-export
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media ${device.desktop} {
    gap: 36px;
  }
  @media ${device.tablet} {
    gap: 24px;
  }
  @media ${device.tablet} {
    gap: 20px;
  }
`;
