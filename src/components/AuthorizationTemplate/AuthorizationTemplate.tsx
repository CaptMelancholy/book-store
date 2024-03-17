import { useState } from 'react';
import * as S from './styles';
import TabButtons from '../Tab/TabButtons/TabButtons';
import ETabTypes from '../Tab/TabButtons/TabButtons.types';
import TabContent from '../Tab/TabContent/TabContent';
import SingIn from '../SignIn/SingIn';
import SingUp from '../SingUp/SingUp';

export default function AuthorizationTemplate() {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <S.AuthorizationWrapper>
      <S.AuthorizationContainer>
        <TabButtons
          name={['SIGN IN', 'SIGN UP']}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          typeButton={ETabTypes.BOLD}
        />
        <TabContent activeTab={activeTab} typeButton={ETabTypes.BOLD}>
          <SingIn />
          <SingUp />
        </TabContent>
      </S.AuthorizationContainer>
    </S.AuthorizationWrapper>
  );
}
