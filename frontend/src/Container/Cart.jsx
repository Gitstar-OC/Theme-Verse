import { useContext } from 'react';
import CartComponent from '../components/CartComponent';
import { CartContext } from '../MainLayout';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <>
      <CartComponent cartItems={cartItems} removeFromCart={removeFromCart} />
    </>
  );
}

export default Cart;
