import styled from 'styled-components';
import { Input, Button, InverseButton } from '../../styles/components';

export const FormWrapper = styled.form``;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 72px;
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  padding-top: 42px;
  padding-bottom: 72px;
`;

export const ProfileSection = styled.div`
  display: flex;
  gap: 32px;
`;

export const PasswordSection = styled.div`
  display: flex;
  gap: 32px;
`;

export const InputField = styled(Input)`
  max-width: 544px;
`;

export const CustomButton = styled(Button)`
  width: 256px;
`;

export const CustomInverseButton = styled(InverseButton)`
  width: 256px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
