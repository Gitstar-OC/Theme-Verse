import { useContext } from 'react';
import CartComponent from '../components/CartComponent';
import { CartContext } from '../MainLayout';
import { Helmet } from 'react-helmet-async'

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <>
      <Helmet>
        <title>Cart - Theme Verse</title>
      </Helmet>
      <CartComponent cartItems={cartItems} removeFromCart={removeFromCart} />
    </>
  );
}

export default Cart;
