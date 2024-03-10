import styled from 'styled-components';
import device from '../../styles/breakpoints';
import { BODY1 } from '../../styles/components';

export const Footer = styled.footer`
  padding: 0 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Text = styled(BODY1)`
  color: ${({ theme }) => theme.colors.secondary};
`;
