import styled from 'styled-components';
import device from '../../styles/breakpoints';
import { IconButton, Input } from '../../styles/components';

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

export const SearchContainer = styled.div`
  width: 542px;
  position: relative;
  padding: 24px 0;
  margin-left: 150px;
  margin-right: 120px;
`;

export const SearchInput = styled(Input)`
  padding-right: 52px;
`;

export const IconButtonInInput = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  cursor: pointer;

`;
