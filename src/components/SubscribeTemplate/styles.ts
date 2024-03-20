import styled from 'styled-components';
import { BODY1, Button, Input } from '../../styles/components';
import device from '../../styles/breakpoints';

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 56px 64px;
  background-color: ${({ theme }) => theme.colors.purple};
  @media ${device.tablet} {
    padding: 36px 50px;
  }
  @media ${device.phone} {
    padding: 20px 24px;
  }
`;

export const SubscribeFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.phone} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const SubscribeButton = styled(Button)`
  width: 147px;
  font-size: 18px;
  @media ${device.tablet} {
    width: 167px;
  }
  @media ${device.phone} {
    width: 100%;
  }
`;

export const SubscribeInput = styled(Input)`
  width: 885px;
  @media ${device.tablet} {
    width: 608px;
  }
  @media ${device.phone} {
    width: 100%;
  }
`;

export const SubscribeDescription = styled(BODY1)`
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.secondary};
  @media ${device.phone} {
    margin-bottom: 24px;
  }
`;
