import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { FaOpencart, FaSun, FaMoon } from "react-icons/fa";
import Logo from "../assets/Theme-Verse.svg";
import { CartContext } from "../MainLayout";
import '../index.css'; // Assuming you have a CSS file for additional styles

const Navigation = () => {
  const { cartItems } = useContext(CartContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const headerRef = useRef(null);
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  const triggerReflow = (element) => {
    element.offsetHeight; // This forces a reflow
  };

  const replayAnimations = () => {
    const headerElement = headerRef.current;
    const contentElement = document.getElementById('content');
    const imageElement = document.getElementById('image-container');

    if (headerElement && contentElement && imageElement) {
      headerElement.classList.remove('header-animation');
      contentElement.classList.remove('content-slide-in');
      imageElement.classList.remove('image-slide-in');

      triggerReflow(headerElement);
      triggerReflow(contentElement);
      triggerReflow(imageElement);

      headerElement.classList.add('header-animation');
      contentElement.classList.add('content-slide-in');
      imageElement.classList.add('image-slide-in');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    replayAnimations();
  };

  useEffect(() => {
    const headerElement = headerRef.current;
    headerElement.classList.add('header-animation');
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <header
      className="bg-hero w-full h-[55px] bg-cover flex items-center px-4 fixed top-0 left-0 right-0 z-50"
      style={{
        transitionProperty: "transform",
        transitionDuration: ".3s",
        transitionTimingFunction: "ease-in-out",
      }}
      ref={headerRef}
    >
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-8">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>
        <nav className="flex space-x-8">
          <Link to="/" className="navItem theme-text hover:text-[#09FFB5]" id={isActive('/') ? 'current-location' : undefined}>
            Home
          </Link>
          <Link to="/themes" className="navItem theme-text hover:text-[#09FFB5]" id={isActive('/themes') ? 'current-location' : undefined}>
            Themes
          </Link>
          <Link to="/about" className="navItem theme-text hover:text-[#09FFB5]" id={isActive('/about') ? 'current-location' : undefined}>
            About
          </Link>
          <Link to="/contact" className="navItem theme-text hover:text-[#09FFB5]" id={isActive('/contact') ? 'current-location' : undefined}>
            Contact
          </Link>
          <Link to="/cart" className="navItem theme-text hover:text-[#09FFB5] " id={isActive('/cart') ? 'current-location' : undefined}>
            <div className="flex items-center space-x-1 relative">
              <FaOpencart />
              <span>Cart</span>
              {cartItems.length > 0 && (
                <div className="absolute  font-mono top-2 right-14 w-4 h-4 bg-heading hover:bg-secondary text-black dark:text-white rounded-full flex items-center justify-center text-[1rem]" id={isActive('/cart') ? 'current-location' : undefined}>
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>
          <button onClick={toggleTheme} className="theme-text">
            <div className={`toggle-circle ${theme}`}>
              {theme === "light" ? <FaSun /> : <FaMoon />}
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
