import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Contact, Themes, Cart, About } from './Container/Exports';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { MobileTabletPopUp, PageNotFound } from './Messages/Exports';

export const CartContext = React.createContext();

const MainLayout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileOrTablet(width < 1024); // Considering iPad Pro width (1024px) as well
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prevItems) => [...prevItems, itemId]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {isMobileOrTablet ? (
        <MobileTabletPopUp />
      ) : (
        <>
          <Navigation />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/themes" element={<Themes />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer theme="light" />
        </>
      )}
    </CartContext.Provider>
  );
};

export default MainLayout;
