import { useSelector } from 'react-redux';
import BodyTemplate from '../components/BodyTemplate/BodyTemplate';
import Cart from '../components/Cart/Cart';
import CustomSlider from '../components/Slider/CustomSlider';
import { newReleasesSelector } from '../store/slices/books/books.selectors';

export default function CartPage() {
  const books = useSelector(newReleasesSelector);
  return (
    <BodyTemplate title="YOUR CART" backButton>
      <Cart />
      {books && (
        <CustomSlider title="POPULAR BOOKS" books={books.slice(0, 9)} />
      )}
    </BodyTemplate>
  );
}
