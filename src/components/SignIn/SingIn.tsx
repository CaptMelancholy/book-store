import * as C from '../../styles/components';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, generatePath } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { fetchSignIn, fetchUserMe } from '../../store/thunks/user/user.thunk';
import DefaultRoutes from '../../utils/Routes/Routes';
import { IUserAuthorization } from '../../utils/User/user.types';
import { setAuth } from '../../store/slices/user/user.slice';

interface IUserInput {
  email: string;
  password: string;
}

export default function SingIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserInput>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleLogin = (data: IUserInput) => {
    const payload: IUserAuthorization = {
      email: data.email,
      password: data.password,
    };
    try {
      dispatch(fetchSignIn({ auth : payload }));
      dispatch(fetchUserMe());
      dispatch(setAuth(true));
      navigate(generatePath(DefaultRoutes.default));
    } catch (e) {
      console.error(e);
    }
  };

  const registerOptions = {
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
  };
  return (
    <S.Form onSubmit={handleSubmit(handleLogin)}>
      <S.InputFields>
        <C.Label>
          Email
          <C.Input type="email" placeholder="Your email" {...register('email', registerOptions.email)} />
          {errors?.email && (
            <S.ErrorInfo>{errors.email.message as string}</S.ErrorInfo>
          )}
        </C.Label>
        <C.Label>
          Password
          <C.Input type="password" placeholder="Your password" {...register('password', registerOptions.password)} />
          {errors?.password && (
            <S.ErrorInfo>{errors.password.message as string}</S.ErrorInfo>
          )}
        </C.Label>
        <C.LinkHints>Forgot password?</C.LinkHints>
      </S.InputFields>
      <C.Button type="submit">SIGN IN</C.Button>
    </S.Form>
  );
}
