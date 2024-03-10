import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: var(--second-family);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 56px;
  font-weight: bold;
`;

export const H2 = styled.h2`
  font-family: var(--second-family);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 40px;
  font-weight: bold;
`;

export const BODY1 = styled.p`
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 400;
`;
