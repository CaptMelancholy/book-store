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

export const SumContainer = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: flex-end;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
