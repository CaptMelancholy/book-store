import styled from 'styled-components';
import { Label } from '../../styles/components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ErrorInfo = styled(Label)`
  color: ${({ theme }) => theme.colors.red};
`;
