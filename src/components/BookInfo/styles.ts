import styled from 'styled-components';
import { IconButtonWithBg, LinkHints } from '../../styles/components';
import device from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin-bottom: 72px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${device.desktop} {
    flex-direction: column;
    gap: 32px;
  }
  @media ${device.tablet} {
    flex-direction: column;
    gap: 24px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 544px;
  height: 472px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => {
    function randomIntFromInterval(min: number, max: number) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const color = randomIntFromInterval(1, 4);
    switch (color) {
      case 1: {
        return theme.colors.blue;
      }
      case 2: {
        return theme.colors.red;
      }
      case 3: {
        return theme.colors.orange;
      }
      case 4: {
        return theme.colors.purple;
      }
      default: {
        return theme.colors.blue;
      }
    }
  }};
  @media ${device.desktop} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100%;
    height: 688px;
  }
  @media ${device.phone} {
    width: 100%;
    height: 272px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 300px;
  height: 350px;
  @media ${device.phone} {
    width: 150px;
    height: 175px;
  }
`;

export const ImageButton = styled(IconButtonWithBg)`
  position: absolute;
  top: 0px;
  right: 0px;
  &.active {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  gap: 24px;
  justify-content: space-between;
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.background_gray};
  @media ${device.desktop} {
    width: 100%;
    gap: 20px;
  }
  @media ${device.tablet} {
    padding-top: 32px;
  }
  @media ${device.phone} {
    padding-top: 24px;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: column;
    gap: 5px;
    align-items: start;
  }
`;

export const LineData = styled(Line)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoButton = styled(LinkHints)`
  text-align: center;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
