import styled from 'styled-components';
import device from '../../styles/breakpoints';

// eslint-disable-next-line import/prefer-default-export
export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(352px, 1fr));
  gap: 32px 48px;
  justify-content: space-between;
  min-height: 0;  /* NEW */
  min-width: 0;   /* NEW; needed for Firefox */
  margin-bottom: 72px;
  @media ${device.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(328px, 1fr));
    gap: 10px 48px;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
    gap: 30px 68px;
  }
  @media ${device.phone} {
    display: flex;
    flex-direction: column;
    gap: 42px;
  }
`;
