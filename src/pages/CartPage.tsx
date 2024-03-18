import BodyTemplate from '../components/BodyTemplate/BodyTemplate';
import Cart from '../components/Cart/Cart';

export default function CartPage() {
  return (
    <BodyTemplate title="YOUR CART" backButton>
      <Cart />
    </BodyTemplate>
  );
}
