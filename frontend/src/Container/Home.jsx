import  { useContext } from 'react';
import {  Projects, Main } from '../components/Exports';
import { CartContext } from '../MainLayout';

const Home = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Main />
      <Projects addToCart={addToCart} />
    </>
  );
};

export default Home;
