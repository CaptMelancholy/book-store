import styled from 'styled-components';
import { Input, Button, InverseButton } from '../../styles/components';
import device from '../../styles/breakpoints';

export const FormWrapper = styled.form``;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  padding-top: 42px;
  padding-bottom: 72px;
  @media ${device.desktop} {
    justify-content: center;
  }
  @media ${device.tablet} {
    padding-top: 36px;
    padding-bottom: 72px;
    flex-direction: column;
  }
  @media ${device.phone} {
    padding-top: 24px;
    padding-bottom: 56px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  gap: 32px;
  @media ${device.desktop} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const PasswordSection = styled.div`
  display: flex;
  gap: 32px;
  @media ${device.desktop} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const InputField = styled(Input)`
  max-width: 544px;
  @media ${device.desktop} {
    max-width: 100%;
  }
`;

export const CustomButton = styled(Button)`
  width: 256px;
  @media ${device.desktop} {
    width: 100%;
  }
`;

export const CustomInverseButton = styled(InverseButton)`
  width: 256px;
  @media ${device.desktop} {
    width: 100%;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
