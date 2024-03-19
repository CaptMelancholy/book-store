import BodyTemplate from '../components/BodyTemplate/BodyTemplate';
import Favorite from '../components/Favorite/Favorite';

export default function FavoritePage() {
  return (
    <BodyTemplate title="FAVORITES" backButton>
      <Favorite />
    </BodyTemplate>
  );
}
