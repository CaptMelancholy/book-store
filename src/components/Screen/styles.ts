import styled from 'styled-components';

const ScreenBlock = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.75;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.primary};
  &.hide{
    display: none;
  }
`;

export default ScreenBlock;
