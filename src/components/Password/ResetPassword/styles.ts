import styled from 'styled-components';
import { BODY1, BODY2, Label } from '../../../styles/components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ErrorInfo = styled(Label)`
  color: ${({ theme }) => theme.colors.red};
`;

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

export const InfoBox = styled(BODY1)`
  padding: 20px 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.purple};;
`;
