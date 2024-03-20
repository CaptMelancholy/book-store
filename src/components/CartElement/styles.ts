import styled from 'styled-components';
import {
  BODY1, H3, IconButtonWithBg, SUBLINE,
} from '../../styles/components';
import device from '../../styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 50px;
  gap: 32px;
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

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue};
  min-width: 256px;
  @media ${device.desktop} {
    min-width: 208px;
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
  @media ${device.tablet} {
    display: flex;
  }
`;

export const TransformContainer = styled.div`
  width: 100%;
  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
  }
`;

export const PriceCounterContainer = styled.div`
  display: none;
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right: 30px;
  }
  @media ${device.tablet} {
    padding-right: 0;
  }
`;

export const ManipulatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media ${device.desktop} {
    align-items: start;
    gap: 56px;
    justify-content: space-between;
    & > p {
      display: none;
    }
  }
  @media ${device.tablet} {
    gap: 10px;
    flex-direction: column;
    align-items: normal;
  }
`;

export const InfoContainer = styled.div`
  width: 446px;
  @media ${device.desktop} {
    width: 100%;
    margin-top: 8px;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Title = styled(H3)`
  margin-bottom: 8px;
  width: 100%;
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
  gap: 120px;
  @media ${device.desktop} {
    gap: 105px;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: end;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const Price = styled(SUBLINE)`
  font-size: 40px;
  @media ${device.tablet} {
    font-size: 28px;
  }
`;

export const CounterContainerIndependent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${device.desktop} {
    display: none;
  }
`;

export const CounterContainerWithPrice = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  @media ${device.desktop} {
    display: flex;
  }
`;

export const CounterElement = styled.div`
  font-family: var(--primary-family);
  width: 56px;
  text-align: center;
  font-size: 24px;
`;
