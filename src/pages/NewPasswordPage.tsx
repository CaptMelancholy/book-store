import React from 'react';
import NewPassword from '../components/Password/NewPassword/NewPassword';
import BodyTemplate from '../components/BodyTemplate/BodyTemplate';

export default function NewPasswordPage() {
  return (
    <BodyTemplate backButton={false}>
      <NewPassword />
    </BodyTemplate>
  );
}
