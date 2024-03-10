import styled from 'styled-components';
import device from '../../styles/breakpoints';

export const Header = styled.header`
  padding: 0 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const HeaderMenuLink = styled.div`
  width: 56px;
`;
