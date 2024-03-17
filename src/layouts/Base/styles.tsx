import styled from 'styled-components';
import device from '../../styles/breakpoints';

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background_white};
`;

export const Container = styled.main`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1200px;
  min-height:100%;
  @media ${device.tablet} {
    max-width: 100%;
  }
`;
