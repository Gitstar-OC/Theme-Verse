// import {navigation} from "../Constants/index"
// import React from 'react'
import { FaOpencart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from "../assets/Theme-Verse.svg"
//import BG from "../assets/Rectangle 4150.png"


const Navigation = () => {
  return (
<>
  <header className='bg-hero w-[100%] h-[55px] bg-cover ' id='section'>
  <img src={Logo} alt="Logo" />  
    
    <nav className='font-cF flex flex-row items-center justify-center space-x-[20px] shrink-0'>
      {/* {navigation.map((item) => (
      ))} */}
      <Link to="/" className='navItem'>Home</Link>
      <Link to="/themes" className='navItem'>Themes</Link>
      <Link to="/about" className='navItem'>About</Link>
      <Link to="/contact" className='navItem'>Contact</Link>
      <Link to="/cart" className='navItem'>
        <div className='flex items-center space-x-1'>
          <FaOpencart />
          <span>Cart</span>
        </div>
      </Link>
    </nav>
  </header>
</>
  )
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