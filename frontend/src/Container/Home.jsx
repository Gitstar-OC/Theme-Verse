import  { useContext } from 'react';
import {  Projects, Main } from '../components/Exports';
import { CartContext } from '../MainLayout';
import { Helmet } from 'react-helmet-async'

const Home = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
    <Helmet>
        <title>About Us - Theme Verse</title>
    </Helmet>
      <Main />
      <Projects addToCart={addToCart} />
    </>
  );
};

export default Home;
