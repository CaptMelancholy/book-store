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
  @media ${device.desktop} {
    justify-content: space-between;
    &:has(h2) {
      padding: 22px 0;
    }
  }
  @media ${device.tablet} {
    &:has(h2) {
      z-index: 3;
    }
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const HeaderMenuLink = styled.div`
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.active {
    display: none;
  }
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${device.desktop} {
    display: none;
  }
`;
export const HeaderMenuLinkAccount = styled.div`
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    display: none;
  }
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${device.tablet} {
    display: none !important;
  }
`;

export const SearchContainer = styled.div`
  width: 542px;
  position: relative;
  padding: 24px 0;
  margin-left: 150px;
  margin-right: 120px;
  @media ${device.desktop} {
    display: none;
  }
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
