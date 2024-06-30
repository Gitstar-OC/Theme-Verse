import { FaHome } from "react-icons/fa";
import { BiSolidHappyBeaming } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const PageNotFound = () => {
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
      className={`flex justify-center items-center min-h-screen transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="backgroundAnim backgroundAnim1"></div>
      <div className="backgroundAnim backgroundAnim2"></div>
      <div className="backgroundAnim backgroundAnim3"></div>
      <div className="backgroundAnim backgroundAnim4"></div>
      <div className="backgroundAnim backgroundAnim5"></div>
      <div className="rounded-[25px] bg-not bg-fixed bg-cover h-[25rem]  relative p-10 w-full max-w-4xl flex items-center space-x-8 m-4">
        <BiSolidHappyBeaming className="h-80 w-80 icon-bounce text-[#09FFB5] flex-1" />
        <div className="flex flex-col items-center space-y-4 flex-1">
          <div className="text-[2.25rem] font-cF text-black dark:text-white text-center">
            What a Great Discovery!
          </div>
          <div className="text-[1.25rem] text-black dark:text-white font-cL text-center">
            You found a page that does not exist 
          </div>
          <div className="text-[1rem] text-black dark:text-white font-cL text-center">
            Fun Fact: The first website was launched on August 6, 1991, by Tim Berners-Lee.
          </div>
          <Link to="/">
            <div
              className="cartItem flex items-center justify-center rounded-[15px] border-2 cursor-pointer border-[#0f94b2] bg-[#a6d2ea] dark:border-[#a6d2ea] dark:bg-[#000000] px-6 py-3 "
              id="send"
            >
              <span className="projectItem text-[1.5rem] text-center font-cL flex items-center">
                <FaHome className="mr-2 mb-3" />
                Go to Home Page
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
