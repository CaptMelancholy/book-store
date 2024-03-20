import styled from 'styled-components';

export const ButtonDefaultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background_gray};
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const ButtonBoldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background_gray};
  justify-content: center;
`;

export const ButtonDefault = styled.div`
  padding: 0 40px 24px;
  font-family: var(--secondary-family);
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  transition: .3s ease-in-out;
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
  &.active::after {
    content: '';
    position: absolute;
    height: 2px;
    left: 50%;
    top: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translate(-50%, -50%);
  }
  
`;

export const ButtonBold = styled(ButtonDefault)`
  padding: 0 0 20px;
  width: 239px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  transition: .3s ease-in-out;
`;
