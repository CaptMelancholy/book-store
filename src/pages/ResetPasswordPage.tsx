import React from 'react'
import ResetPassword from '../components/Password/ResetPassword/ResetPassword'
import BodyTemplate from '../components/BodyTemplate/BodyTemplate'

export default function ResetPasswordPage() {
  return (
    <BodyTemplate backButton={false}>
      <ResetPassword />
    </BodyTemplate>
  )
}
