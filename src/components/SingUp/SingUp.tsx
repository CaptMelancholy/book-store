import React from 'react';
import * as C from '../../styles/components';
import * as S from './styles';

export default function SingUp() {
  return (
    <S.Form>
      <S.InputFields>
        <C.Label>
          Name
          <C.Input type="text" placeholder="Your name" required />
        </C.Label>
        <C.Label>
          Email
          <C.Input type="email" placeholder="Your email" required />
        </C.Label>
        <C.Label>
          Password
          <C.Input type="password" placeholder="Your password" required />
        </C.Label>
        <C.Label>
          Confirm password
          <C.Input type="password" placeholder="Confirm your password" required />
        </C.Label>
      </S.InputFields>
      <C.Button type="submit">SIGN UP</C.Button>
    </S.Form>
  );
}
