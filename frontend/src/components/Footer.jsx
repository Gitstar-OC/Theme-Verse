// Footer.js

import { useEffect, useRef, useState } from 'react';
import {
  FaGithubSquare,
  FaInstagram,
  FaOpencart,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/FooterLogo.svg";

const Footer = ({ theme }) => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.75 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative  justify-end items-center flex flex-col   p-10 w-full bg-footer bg-cover bg-fixed transition-opacity duration-300 ease-in-out"
    >
      <div className="flex flex-row justify-between w-full max-w-screen-xl mx-auto mb-8">
        <div className={`flex flex-col items-center space-y-8 ${isVisible ? 'animate-slideUpFadeIn' : 'opacity-0'}`}>
          <Link to="/" className="navItem text-[36px] hover:text-[#09FFB5]">Home</Link>
          <Link to="/about" className="navItem text-[36px] hover:text-[#09FFB5]">Developer</Link>
        </div>
        <div className={`flex flex-col items-center space-y-8 ${isVisible ? 'animate-slideUpFadeIn' : 'opacity-0'}`}>
          <Link to="/about" className="navItem text-[36px] hover:text-[#09FFB5]">About</Link>
          <Link to="/contact" className="navItem text-[36px] hover:text-[#09FFB5]">Contact</Link>
        </div>
        <div className={`flex flex-col items-center space-y-8 ${isVisible ? 'animate-slideUpFadeIn' : 'opacity-0'}`}>
          <Link to="/themes" className="navItem text-[36px] hover:text-[#09FFB5]">Themes</Link>
          <Link to="/cart" className={`navItem hover:text-[#09FFB5]`}>
            <div className="flex items-center space-x-1">
              <FaOpencart />
              <span>Cart</span>
            </div>
          </Link>
        </div>
        <img src={FooterLogo} alt="Footer Logo" className={`w-48 h-48 rounded-2xl border-3 pointer-events-none  border-[#A6D2EA] ${isVisible ? 'icon-bounce' : 'opacity-0'}`} />
      </div>
      <div className="w-full border-b-[3px] navItem mb-4"></div>
      <div className="flex flex-row justify-between items-center w-full max-w-screen-xl mx-auto">
        <div className={`font-cL text-[36px] bg-gradient-to-r from-[#45D0C9] to-[#00FFF3] text-transparent bg-clip-text ${isVisible ? 'animate-bounce' : 'opacity-0'}`}>
          © 2024 Om Chandankar. All rights reserved
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/Gitstar-OC" className={`w-10 h-10 icon icon-bounce hover:text-[#09FFB5] navItem ${isVisible ? 'icon-bounce' : 'opacity-0'}`}>
            <FaGithubSquare className="w-full h-full" />
          </a>
          <a href="https://www.instagram.com/chandankar_om/" className={`w-10 h-10 icon icon-bounce hover:text-[#09FFB5] navItem ${isVisible ? 'icon-bounce' : 'opacity-0'}`}>
            <FaInstagram className="w-full h-full" />
          </a>
          <a href="https://www.linkedin.com/in/om-chandankar/" className={`w-10 h-10 icon icon-bounce hover:text-[#09FFB5] navItem ${isVisible ? 'icon-bounce' : 'opacity-0'}`}>
            <FaLinkedin className="w-full h-full" />
          </a>
          <a href="https://x.com/Om_Chandankar" className={`w-10 h-10 icon icon-bounce hover:text-[#09FFB5] navItem ${isVisible ? 'icon-bounce' : 'opacity-0'}`}>
            <FaSquareXTwitter className="w-full h-full" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
