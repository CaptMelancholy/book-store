import styled from 'styled-components';
import {
  BODY1,
  H3,
  IconButton,
  IconButtonWithBg,
} from '../../styles/components';
import device from '../../styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background_gray};
  @media ${device.desktop} {
   align-items: start;
  }
  @media ${device.tablet} {
    width: 100%;
    display: block;
    align-items: normal;
    justify-content: normal;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue};
  width: 256px;
  @media ${device.desktop} {
    width: 208px;
  }
  @media ${device.tablet} {
    width: 100%;
    position: relative;
  }
`;

export const ImageButton = styled(IconButtonWithBg)`
  display: none;
  position: absolute;
  top: 0px;
  right: 0px;
  color: ${({ theme }) => theme.colors.red};
  @media ${device.tablet} {
    display: flex;
  }
`;

export const ImageInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  @media ${device.desktop} {
   align-items: start;
  }
  @media ${device.tablet} {
    gap: 10px;
    flex-direction: column;
    align-items: normal;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 164px;
  height: 191px;
  @media ${device.desktop} {
    width: 133px;
    height: 155px;
  }
  @media ${device.tablet} {
    width: 174px;
    height: 203px;
  }
`;

export const InfoContainer = styled.div`
  width: 446px;
  @media ${device.desktop} {
    width: 340px;
    margin-top: 8px;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Title = styled(H3)`
  margin-bottom: 8px;
  width: 100%;
  @media ${device.tablet} {
    margin-bottom: 5px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Author = styled(BODY1)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media ${device.tablet} {
    display: none;
  }
  
`;

export const IconButtonHeart = styled(IconButton)`
  color: ${({ theme }) => theme.colors.red};
`;
