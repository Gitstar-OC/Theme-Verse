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
  return (
    <footer
      className={`relative flex flex-col items-center p-10 w-full ${
        theme === "dark"
          ? "bg-[#001724] bg-opacity-100"
          : "bg-[#A6D2EA] bg-opacity-50"
      }`}
    >
      <div className="flex flex-row justify-between w-full max-w-screen-xl mx-auto mb-8">
        <div className="flex flex-col items-center space-y-8">
          <Link to="/" className="navItem text-[36px] hover:text-[#09FFB5]">
            Home
          </Link>
          <Link
            to="/developer"
            className="navItem text-[36px] hover:text-[#09FFB5]"
          >
            Developer
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <Link
            to="/about"
            className="navItem text-[36px] hover:text-[#09FFB5] "
          >
            About
          </Link>
          <Link
            to="/contact"
            className="navItem text-[36px] hover:text-[#09FFB5]"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <Link
            to="/themes"
            className="navItem text-[36px] hover:text-[#09FFB5]"
          >
            Themes
          </Link>
          <Link to="/cart" className="navItem theme-text hover:text-[#09FFB5]">
            <div className="flex items-center space-x-1 hover:text-[#09FFB5]">
              <FaOpencart />
              <span>Cart</span>
            </div>
          </Link>
        </div>
        <img
          src={FooterLogo}
          alt="Footer Logo"
          className="w-48 h-48 rounded-2xl border-3 border-[#A6D2EA]"
        />
      </div>
      <div className="w-full border-b-2 border-[#1A3DF8] mb-4"></div>
      <div className="flex flex-row justify-between items-center w-full max-w-screen-xl mx-auto">
        <div className="font-cL text-30 bg-gradient-to-r from-[#45D0C9] to-[#00FFF3] text-transparent bg-clip-text">
          © 2024 Om Chandankar. All rights reserved
        </div>
        <div className="flex space-x-4">
          <Link to="#" className="w-10 h-10">
            <FaGithubSquare className="w-full h-full text-current" />
          </Link>
          <Link to="#" className="w-10 h-10">
            <FaInstagram className="w-full h-full text-current" />
          </Link>
          <Link to="#" className="w-10 h-10">
            <FaLinkedin className="w-full h-full text-current" />
          </Link>
          <Link to="#" className="w-10 h-10">
            <FaSquareXTwitter className="w-full h-full text-current" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
