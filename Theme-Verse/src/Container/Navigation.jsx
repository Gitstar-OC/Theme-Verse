import { FaOpencart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from "../assets/Theme-Verse.svg";
// import './styles.css';
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
    <>
      <header className='bg-hero w-full h-[55px] bg-cover flex items-center px-4' id="section">
        <div className='flex justify-between items-center w-full max-w-screen-xl mx-auto'>
          <div className='flex items-center space-x-8'>
            <img src={Logo} alt="Logo" className='h-8' />
          </div>
          <nav className='flex space-x-8'>
            <Link to="/" className='navItem theme-text'>Home</Link>
            <Link to="/themes" className='navItem theme-text'>Themes</Link>
            <Link to="/about" className='navItem theme-text'>About</Link>
            <Link to="/contact" className='navItem theme-text'>Contact</Link>
            <Link to="/cart" className='navItem theme-text'>
              <div className='flex items-center space-x-1'>
                <FaOpencart />
                <span>Cart</span>
              </div>
            </Link>
            <button onClick={toggleTheme} className='navItem theme-text'>
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navigation;

/*        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
*/