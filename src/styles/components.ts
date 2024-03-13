import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: var(--primary-family);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 56px;
  font-weight: bold;
`;

export const H2 = styled.h2`
  font-family: var(--primary-family);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 40px;
`;

export const H3 = styled.h3`
  font-family: var(--primary-family);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
`;

export const SUBLINE = styled.p`
  font-family: var(--primary-family);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
`;

export const BODY1 = styled.p`
  font-family: var(--secondary-family);
  font-size: 16px;
  font-weight: 400;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background_white};
  font-size: 24px;
  font-weight: bold;
  padding: 16px 0;
  transition: 0.3s ease-in-out;
  font-family: var(--primary-family);

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary2};
  }
`;

export const IconButton = styled.button`
  cursor: pointer;
  padding: 16px;
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.3s ease-in-out;
  background-color: transparent;
  & > {
    height: 24px;
    width: 24px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
  &:active {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Input = styled.input`
  padding: 20px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.background_gray};
  font-family: var(--secondary-family);
  font-size: 16px;
  transition: 0.3s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-family: var(--secondary-family);
    font-size: 16px;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.background_gray};
  }

  &:invalid {
    border: 1px solid red;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:active {
  }
`;
