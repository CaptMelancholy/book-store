import { Pagination } from '@mui/material';
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
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 400;
`;

export const BODY2 = styled.p`
  font-family: var(--secondary-family);
  color: ${({ theme }) => theme.colors.secondary};
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

export const InverseButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.background_white};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.background_light};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background_gray};
    border: 0px;
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

export const IconButtonWithBg = styled(IconButton)`
  color: ${({ theme }) => theme.colors.background_white};
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
  &:active {
    color: ${({ theme }) => theme.colors.red};
  }
  &:active > {
    fill: ${({ theme }) => theme.colors.red};
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

export const Label = styled.label`
  font-size: 16px;
  font-family: var(--secondary-family);
  font-weight: bold;
  margin-bottom: 5px;
`;

export const LinkHints = styled.p`
  font-size: 14px;
  font-family: var(--secondary-family);
  color: ${({ theme }) => theme.colors.primary};
`;

export const PaginationConatiner = styled.div`
  padding-top: 48px;
  border-top: 1px solid ${({ theme }) => theme.colors.background_gray};
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 72px;
`;

export const StyledPagination = styled(Pagination)`
  & > ul {
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;
  }
  & > ul > li > a {
    font-size: 16px;
    font-family: var(--primary-family) !important;
    color: ${({ theme }) => theme.colors.secondary};
  }
  & > ul > li > .Mui-selected {
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
  }
`;
