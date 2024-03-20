import styled from 'styled-components';
import device from '../../styles/breakpoints';

export const AuthorizationWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 158px);
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    min-height: 100%;
    padding: 48px 0;
  }
`;

export const AuthorizationContainer = styled.div`
  padding-top: 26px;
  padding-bottom: 40px;
  border: 1px solid ${({ theme }) => theme.colors.background_gray};
  width: 544px;
  @media ${device.tablet} {
    width: 100%;
    padding: 0;
    border: 0;
  }
`;
