import * as C from '../../styles/components';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { generatePath, useNavigate } from 'react-router-dom';
import DefaultRoutes from '../../utils/Routes/Routes';
import { IUserRegistration } from '../../utils/User/user.types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchSignUp } from '../../store/thunks/user/user.thunk';

interface IUserInput {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export default function SingUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserInput>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleRegistration = (data: IUserInput) => {
    const payload: IUserRegistration = {
      username: data.name,
      email: data.email,
      password: data.password,
      course_group: 1,
    };
    try {
      dispatch(fetchSignUp({ auth: payload }));
      navigate(generatePath(DefaultRoutes.activation_request));
    } catch (e) {
      console.error(e);
    }
  };
  const handleError = (errors: Object) => console.log(errors);

  const registerOptions = {
    name: { required: 'Name is required' },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'Invalid email address',
      },
    },
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
    <S.Form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <S.InputFields>
        <C.Label>
          Name
          <C.Input
            type="text"
            placeholder="Your name"
            {...register('name', registerOptions.name)}
          />
          {errors?.name && (
            <S.ErrorInfo>{errors.name.message as string}</S.ErrorInfo>
          )}
        </C.Label>
        <C.Label>
          Email
          <C.Input
            type="email"
            placeholder="Your email"
            {...register('email', registerOptions.email)}
          />
          {errors.email ? (
            <S.ErrorInfo>{errors?.email.message as string}</S.ErrorInfo>
          ) : (
            ''
          )}
        </C.Label>
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
            {...register('confirm_password', registerOptions.confirm_password)}
          />
          {errors?.confirm_password && (
            <S.ErrorInfo>
              {errors?.confirm_password.message as string}
            </S.ErrorInfo>
          )}
        </C.Label>
      </S.InputFields>
      <C.Button type="submit">SIGN UP</C.Button>
    </S.Form>
  );
}
