import { FaArrowCircleRight } from "react-icons/fa";
import CartIcon from "../assets/CartIcon.png";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const EmptyCart = () => {
  const sectionRef = useRef(null);
  const seeAllRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (seeAllRef.current) {
      observer.observe(seeAllRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (seeAllRef.current) {
        observer.unobserve(seeAllRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flex space-x-10 mt-10 mb-20 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } `}
    >
      <div className="shadow-lg rounded-[25px] bg-gray-800 bg-opacity-10 relative p-10 w-[711px] flex flex-col space-y-8 contactDiv">
        <div className="text-[3rem] font-cF text-black dark:text-white mb-20">
          <img
            src={CartIcon}
            alt="CartImage"
            className="h-12 w-15 inline mr-2"
          />
          There is nothing in your cart
        </div>
        <Link to="/themes">
          <div
            className="cartItem ml-28 mr-28 flex items-center justify-center rounded-[15px]  border-2 cursor-pointer border-[#0f94b2] bg-[#a6d2ea] dark:border-[#a6d2ea] dark:bg-[#000000] "
            id="send"
          >
            <div className="projectItem icon-bounce">
              <span className="projectItem text-[2.5rem] text-center font-cL mt-1">
                Get Themes
                <FaArrowCircleRight className="ml-4" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
