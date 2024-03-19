import BodyTemplate from '../components/BodyTemplate/BodyTemplate';
import { BODY1 } from '../styles/components';

export default function RegSuccessPage() {
  return (
    <BodyTemplate title="ACCOUNT ACTIVATED SUCCESSFULLY" backButton>
      <BODY1>
        You successfully complete registration on web site. Sign in to continue
        our trip!
      </BODY1>
    </BodyTemplate>
  );
}
