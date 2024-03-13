import styled from 'styled-components';
import { BODY1, Button, Input } from '../../styles/components';

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 56px 64px;
  background-color: ${({ theme }) => theme.colors.purple};
`;

export const SubscribeFormContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubscribeButton = styled(Button)`
  width: 147px;
  font-size: 18px;
`;

export const SubscribeInput = styled(Input)`
  width: 885px;
`;

export const SubscribeDescription = styled(BODY1)`
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.secondary};
`;
