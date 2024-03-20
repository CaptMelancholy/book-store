/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import device from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  @media ${device.desktop} {
    gap: 48px;
  }
  @media ${device.tablet} {
    gap: 36px;
  }
  @media ${device.tablet} {
    gap: 24px;
  }
`;
