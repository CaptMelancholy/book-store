/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import * as S from './styles';
import * as C from '../../../styles/components';
import API from '../../../api';
import EAPIs from '../../../api/api-client';
import DefaultRoutes from '../../../utils/Routes/Routes';

interface IUserInput {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IUserInput>();
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const handleReset = (data: IUserInput) => {
    const payload = {
      uid,
      token,
      new_password: data.password,
    };
    try {
      API.post(`${EAPIs.AUTH_API}/users/reset_password_confirm/`, payload);
      navigate(generatePath(DefaultRoutes.default));
    } catch (e) {
      navigate(generatePath(DefaultRoutes.reset));
    }
  };

  const registerOptions = {
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
    },
    confirm_password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
      validate: {
        password_is_same: (v: string) => {
          if (watch('password') !== v) {
            return 'Passwords do not match';
          }
        },
      },
    },
  };
  return (
    <S.AuthorizationWrapper>
      <S.AuthorizationContainer>
        <S.Form onSubmit={handleSubmit(handleReset)}>
          <C.H3>NEW PASSWORD</C.H3>
          <S.InputFields>
            <C.Label>
              Password
              <C.Input
                type="password"
                placeholder="Your password"
                {...register('password', registerOptions.password)}
              />
              {errors?.password && (
                <S.ErrorInfo>{errors?.password.message as string}</S.ErrorInfo>
              )}
            </C.Label>
            <C.Label>
              Confirm password
              <C.Input
                type="password"
                placeholder="Confirm your password"
                {...register(
                  'confirm_password',
                  registerOptions.confirm_password,
                )}
              />
              {errors?.confirm_password && (
                <S.ErrorInfo>
                  {errors?.confirm_password.message as string}
                </S.ErrorInfo>
              )}
            </C.Label>
          </S.InputFields>
          <C.Button type="submit">SET PASSWORD</C.Button>
        </S.Form>
      </S.AuthorizationContainer>
    </S.AuthorizationWrapper>
  );
}
