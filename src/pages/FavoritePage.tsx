import { useSelector } from 'react-redux';
import BodyTemplate from '../components/BodyTemplate/BodyTemplate';
import Favorite from '../components/Favorite/Favorite';
import { newReleasesSelector } from '../store/slices/books/books.selectors';
import CustomSlider from '../components/Slider/CustomSlider';

export default function FavoritePage() {
  const books = useSelector(newReleasesSelector);
  return (
    <BodyTemplate title="FAVORITES" backButton>
      <Favorite />
      {books && (
        <CustomSlider title="POPULAR BOOKS" books={books.slice(0, 9)} />
      )}
    </BodyTemplate>
  );
}
