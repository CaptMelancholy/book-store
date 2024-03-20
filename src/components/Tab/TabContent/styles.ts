import styled from 'styled-components';
import { BODY1 } from '../../../styles/components';
import device from '../../../styles/breakpoints';

export const ContentWrapperDefault = styled.div`
  padding: 54px 0;
`;

export const ContentWrapperBold = styled(ContentWrapperDefault)`
  padding: 33px;
  @media ${device.tablet} {
    padding: 36px 0 0 0;
  }
`;

export const ContentDefault = styled(BODY1)`
  display: none;
  transition: 0.3s ease-in-out;
  &.active {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentBold = styled.div`
  display: none;
  transition: 0.3s ease-in-out;
  &.active {
    display: flex;
    flex-direction: column;
  }
`;
