import styled from 'styled-components';

export const AuthorizationWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 158px);
  justify-content: center;
  align-items: center;
`;

export const AuthorizationContainer = styled.div`
  padding-top: 26px;
  padding-bottom: 40px;
  border: 1px solid ${({ theme }) => theme.colors.background_gray};
  width: 544px;
  
`;
