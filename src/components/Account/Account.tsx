import * as S from './styles';
import * as C from '../../styles/components';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/slices/user/user.selectors';
import { useEffect } from 'react';
import { fetchUserMe } from '../../store/thunks/user/user.thunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { generatePath, useNavigate } from 'react-router-dom';
import DefaultRoutes from '../../utils/Routes/Routes';

export default function Account() {
  const userData = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();
  
  useEffect(() => {
    const getUser = async () => {
      try {
        dispatch(fetchUserMe());
      } catch (e) {
        navigation(generatePath(DefaultRoutes.authorization));
      }
    };
    getUser();
  }, []);
  return (
    <S.FormWrapper>
      <S.InfoContainer>
        <S.SectionWrapper>
          <C.SUBLINE>PROFILE</C.SUBLINE>
          <S.ProfileSection>
            <C.Label>
              Name
              <S.InputField
                type="text"
                placeholder="Your name"
                value={userData?.username}
              />
            </C.Label>
            <C.Label>
              Email
              <S.InputField
                type="email"
                placeholder="Your email"
                value={userData?.email}
              />
            </C.Label>
          </S.ProfileSection>
        </S.SectionWrapper>
        <S.SectionWrapper>
          <C.SUBLINE>PASSWORD</C.SUBLINE>
          <C.Label>
            Password
            <S.InputField type="password" placeholder="Your password" />
          </C.Label>
          <S.PasswordSection>
            <C.Label>
              New password
              <S.InputField type="password" placeholder="New password" />
            </C.Label>
            <C.Label>
              Confirm new password
              <S.InputField type="password" placeholder="Confirm password" />
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
function dispatch(arg0: unknown) {
  throw new Error('Function not implemented.');
}