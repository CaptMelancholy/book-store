import styled from 'styled-components';
import device from '../../styles/breakpoints';

export const Wrapper = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const WrapperSlider = styled.div`
  .slick-truck {
    margin-right: -33px;
  }
  .slick-slide {
    padding-right: 33px;
  }
  .slick-item {
    max-width: 100%;
  }
  @media ${device.desktop} {
    .slick-truck {
      margin-right: -27px;
    }
    .slick-slide {
      padding-right: 27px;
    }
  }
  @media ${device.tablet} {
    .slick-truck {
      margin-right: 0;
    }
    .slick-slide {
      padding-right: 0;
    }
  }
`;
