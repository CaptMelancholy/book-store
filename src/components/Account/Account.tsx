/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from './styles';
import * as C from '../../styles/components';
import { userSelector } from '../../store/slices/user/user.selectors';
import { fetchUserMe } from '../../store/thunks/user/user.thunk';

import { AppDispatch } from '../../store';
import DefaultRoutes from '../../utils/Routes/Routes';
import { IEmail, IPassword } from '../../utils/Payloads/payloads.types';
import { updateEmail, updatePassword } from '../../api/api-client';

interface IUserInput {
  name: string;
  email: string;
  password: string;
  new_password: string;
  confirm_new_password: string;
}

export default function Account() {
  const userData = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserInput>();

  useEffect(() => {
    const getUser = async () => {
      try {
        dispatch(fetchUserMe());
      } catch (e) {
        navigation(generatePath(DefaultRoutes.authorization));
      }
    };
    getUser();
  }, [dispatch, navigation]);

  const handleAccount = (data: IUserInput) => {
    const emailPayload: IEmail = {
      new_email: data.email,
      current_password: data.password,
    };
    const passwordPayload: IPassword = {
      new_password: data.new_password,
      current_password: data.password,
    };
    if (
      emailPayload.new_email !== userData?.email
      && data.new_password === ''
    ) {
      updateEmail(emailPayload);
    } else if (emailPayload.new_email === '') {
      updatePassword(passwordPayload);
    } else {
      updateEmail(emailPayload);
      updatePassword(passwordPayload);
    }
  };

  const registerOptions = {
    email: {
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'Invalid email address',
      },
      validate: {
        email_to_change: (v: string) => {
          if (
            watch('password') === ''
            && v.length > 0
            && v !== userData?.email
          ) {
            return 'You need to enter password';
          }
        },
        all_empty: () => {
          if (
            watch('new_password') === ''
            && watch('email') === ''
            && watch('confirm_new_password') === ''
          ) {
            return 'All fields are empty';
          }
        },
      },
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
    },
    new_password: {
      validate: {
        password_to_change: (v: string) => {
          if (watch('password') === '' && v.length > 0) {
            return 'You need to enter password';
          }
        },
        password_length: (v: string) => {
          if (v.length > 0 && v.length < 8) {
            return 'Password must have at least 8 characters';
          }
        },
        all_empty: (v: string) => {
          if (
            v === ''
            && watch('email').length === 0
            && watch('confirm_new_password').length === 0
          ) {
            return 'All fields are empty';
          }
        },
      },
    },
    confirm_new_password: {
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
      validate: {
        password_is_same: (v: string) => {
          if (watch('new_password') !== v) {
            return 'Passwords do not match';
          }
        },
        password_to_change: (v: string) => {
          if (watch('password') === '' && v.length > 0) {
            return 'You need to enter password';
          }
        },
        password_length: (v: string) => {
          if (v.length > 0 && v.length < 8) {
            return 'Password must have at least 8 characters';
          }
        },
        all_empty: () => {
          if (
            watch('new_password') === ''
            && watch('email') === ''
            && watch('confirm_new_password') === ''
          ) {
            return 'All field are empty';
          }
        },
      },
    },
  };
  return (
    <S.FormWrapper onSubmit={handleSubmit(handleAccount)}>
      <S.InfoContainer>
        <S.SectionWrapper>
          <C.SUBLINE>PROFILE</C.SUBLINE>
          <S.ProfileSection>
            <C.Label>
              Name
              <S.InputField
                type="text"
                placeholder="Your name"
                defaultValue={userData?.username}
              />
            </C.Label>
            <C.Label>
              Email
              <S.InputField
                type="email"
                placeholder="Your email"
                defaultValue={userData?.email}
                {...register('email', registerOptions.email)}
              />
              {errors?.email && (
                <S.ErrorInfo>{errors.email.message as string}</S.ErrorInfo>
              )}
            </C.Label>
          </S.ProfileSection>
        </S.SectionWrapper>
        <S.SectionWrapper>
          <C.SUBLINE>PASSWORD</C.SUBLINE>
          <C.Label>
            Password
            <S.InputField
              type="password"
              placeholder="Your password"
              {...register('password', registerOptions.password)}
            />
            {errors?.password && (
              <S.ErrorInfo>{errors.password.message as string}</S.ErrorInfo>
            )}
          </C.Label>
          <S.PasswordSection>
            <C.Label>
              New password
              <S.InputField
                type="password"
                placeholder="New password"
                {...register('new_password', registerOptions.new_password)}
              />
              {errors?.new_password && (
                <S.ErrorInfo>
                  {errors.new_password.message as string}
                </S.ErrorInfo>
              )}
            </C.Label>
            <C.Label>
              Confirm new password
              <S.InputField
                type="password"
                placeholder="Confirm password"
                {...register(
                  'confirm_new_password',
                  registerOptions.confirm_new_password,
                )}
              />
              {errors?.confirm_new_password && (
                <S.ErrorInfo>
                  {errors.confirm_new_password.message as string}
                </S.ErrorInfo>
              )}
            </C.Label>
          </S.PasswordSection>
        </S.SectionWrapper>
      </S.InfoContainer>
      <S.ButtonSection>
        <S.CustomButton>SAVE CHANGES</S.CustomButton>
        <S.CustomInverseButton>CANCEL</S.CustomInverseButton>
      </S.ButtonSection>
    </S.FormWrapper>
  );
}
