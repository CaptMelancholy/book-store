import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const StarContainer = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.background_gray};
  transition: 0.1s ease-in-out;
  & > {
    height: 16px;
    width: 16px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CheckStar = styled.input`
  display: none;
`;

export const StarWrapper = styled.label`

`;
