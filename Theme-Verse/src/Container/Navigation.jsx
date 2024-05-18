import { FaOpencart, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from "../assets/Theme-Verse.svg";
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className='bg-hero w-full h-[55px] bg-cover flex items-center px-4' id="section">
      <div className='flex justify-between items-center w-full max-w-screen-xl mx-auto'>
        <div className='flex items-center space-x-8'>
          <img src={Logo} alt="Logo" className='h-8' />
        </div>
        <nav className='flex space-x-8'>
          <Link to="/" className='navItem theme-text hover:text-[#09FFB5]'>Home</Link>
          <Link to="/themes" className='navItem theme-text hover:text-[#09FFB5]'>Themes</Link>
          <Link to="/about" className='navItem theme-text hover:text-[#09FFB5] '>About</Link>
          <Link to="/contact" className='navItem theme-text hover:text-[#09FFB5]'>Contact</Link>
          <Link to="/cart" className='navItem theme-text hover:text-[#09FFB5]'>
            <div className='flex items-center space-x-1 hover:text-[#09FFB5]'>
              <FaOpencart />
              <span>Cart</span>
            </div>
          </Link>
          <button onClick={toggleTheme} className='navItem theme-text'>
            <div className={`toggle-circle ${theme}`}>
              {theme === 'light' ? <FaSun /> : <FaMoon />}
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;