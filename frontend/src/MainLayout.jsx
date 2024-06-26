import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Contact, Themes, Cart, About } from './Container/Exports';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PopUp from './Messages/PopUp';

export const CartContext = React.createContext();

const MainLayout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const checkZoomLevel = () => {
    const zoomLevel = Math.round(window.devicePixelRatio * 100);
    return zoomLevel !== 90;
  };

  useEffect(() => {
    if (!initialCheckDone && checkZoomLevel()) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000); // Show popup after 5 seconds if zoom level is not 90%

      return () => clearTimeout(timer);
    }
    setInitialCheckDone(true);
  }, [initialCheckDone]);

  const addToCart = (itemId) => {
    setCartItems((prevItems) => [...prevItems, itemId]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item !== itemId));
  };

  const handleResize = () => {
    document.body.style.zoom = '90%';
    setShowPopup(false);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
      {showPopup && <PopUp onResize={handleResize} />}
    </CartContext.Provider>
  );
};

export default MainLayout;
