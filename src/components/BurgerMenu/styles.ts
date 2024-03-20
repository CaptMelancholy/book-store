import styled from 'styled-components';
import device from '../../styles/breakpoints';
import { H2, IconButton, Input } from '../../styles/components';

export const MenuWrapper = styled.div`
  display: none;
  align-items: center;
  padding: 2px 5px;
  cursor: pointer;
  width: 56px;
  height: 56px;
  @media ${device.desktop} {
    display: flex;
  }
`;

export const MenuContainer = styled.div`
  position: relative;
  width: 20px;
  height: 100%;
  z-index: 3;
  &.active > :nth-child(1) {
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &.active > :nth-child(even) {
    opacity: 0;
  }
  &.active > :nth-child(3) {
    top: 50%;
    transform: translate(-50%,-50%) rotate(-45deg);
  }
`;

export const BurgerLine = styled.div`
  position: absolute;
  transition: 0.3s ease-in-out;
  top: 50%;
  left: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 2px;
  width: 100%;
  border-radius: 1px;
  &:nth-child(1) {
    top: calc(50% - 6px);
  }
  &:nth-child(3) {
    top: calc(50% + 6px);
  }
  transform: translate(-50%, -50%);
`;

export const Menu = styled.div`
  top: 0;
  right: 0;
  bottom: 100%;
  transition: 0.3s ease-in-out;
  position: absolute;
  width: 50vw;
  background-color: ${({ theme }) => theme.colors.background_white};
  height: calc(100vh + 103px);
  padding: 103px 40px 161px;
  overflow: hidden;
  &.hide {
    display: none;
  }
  & > h2 {
    display: none;
  }
  & > a {
    display: none;
  }
  transition: 3s ease-in-out;
  z-index: 2;
  @media ${device.tablet} {
    width: 100vw;
    & > h2 {
      position: absolute;
      top: 22px;
      left: 40px;
      display: flex;
    }
    & > a {
      position: absolute;
      top: 22px;
      right: 106px;
      width: 56px;
      display: flex;
      align-items: center;
      text-align: center;
      height: 56px;
      justify-content: center;
    }
  }
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.background_gray};
  height: 100%;
`;

export const LinksContainer = styled.div`
  display: flex;
  margin-top: 57px;
  flex-direction: column;
  gap: 48px;
`;

export const CustomLink = styled(H2)`
  text-align: center;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
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
  z-index: 5;
`;
