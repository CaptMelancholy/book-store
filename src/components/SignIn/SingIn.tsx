import React from 'react';
import * as C from '../../styles/components';
import * as S from './styles';

export default function SingIn() {
  return (
    <S.Form>
      <S.InputFields>
        <C.Label>
          Email
          <C.Input type="email" placeholder="Your email" required />
        </C.Label>
        <C.Label>
          Password
          <C.Input type="password" placeholder="Your password" required />
        </C.Label>
        <C.LinkHints>Forgot password?</C.LinkHints>
      </S.InputFields>
      <C.Button type="submit">SIGN IN</C.Button>
    </S.Form>
  );
}
