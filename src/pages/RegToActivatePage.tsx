import { useSelector } from 'react-redux';
import { BODY1 } from '../styles/components';
import BodyTemplate from '../components/BodyTemplate/BodyTemplate';
import { activationEmailSelector } from '../store/slices/user/user.selectors';

export default function RegToActivatePage() {
  const email = useSelector(activationEmailSelector);
  return (
    <BodyTemplate title="You're Almost Done..." backButton>
      <BODY1>
        A verification email was sent to your email:
        {' '}
        {email}
        . Open this email
        and click the link to activate your account.
      </BODY1>
    </BodyTemplate>
  );
}
