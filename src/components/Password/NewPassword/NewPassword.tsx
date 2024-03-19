import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, generatePath, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../../store';
import API from '../../../api';
import EAPIs from '../../../api/api-client';
import * as S from './styles';
import * as C from '../../../styles/components';
import DefaultRoutes from '../../../utils/Routes/Routes';

interface IUserInput {
  email: string;
}

export default function NewPassword() {
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserInput>();
  const navigate = useNavigate();
  const handleReset = (data: IUserInput) => {
    const payload = {
      email: data.email,
    };
    try {
      API.post(`${EAPIs.AUTH_API}/users/reset_password/`, payload);
      setSuccess(true);
      setError(false);
    } catch (e) {
      setSuccess(false);
      setError(true);
    }
  };
  const handleRedirect = () => {
    navigate(generatePath(DefaultRoutes.default));
  };

  const registerOptions = {
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'Invalid email address',
      },
    },
  };
  return (
    <S.AuthorizationWrapper>
      <S.AuthorizationContainer>
        <S.Form onSubmit={handleSubmit(handleReset)}>
          <C.H3>RESET PASSWORD</C.H3>
          {success ? (
            <S.InfoBox>
              You will receive an email with a link to reset your password!
            </S.InfoBox>
          ) : (
            error && <S.InfoBox>Something goes wrong, try again.</S.InfoBox>
          )}
          <S.InputFields>
            <C.Label>
              Email
              <C.Input
                type="email"
                placeholder="Your email"
                {...register('email', registerOptions.email)}
              />
              {errors?.email && (
                <S.ErrorInfo>{errors.email.message as string}</S.ErrorInfo>
              )}
            </C.Label>
          </S.InputFields>
          {success ? (
            <C.Button type="button" onClick={handleRedirect}>
              GO TO HOME
            </C.Button>
          ) : (
            <C.Button type="submit">RESET</C.Button>
          )}
        </S.Form>
      </S.AuthorizationContainer>
    </S.AuthorizationWrapper>
  );
}
