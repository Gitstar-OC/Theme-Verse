import EmptyCart from "./EmptyCart";
import { useEffect, useRef, useState } from "react";
// import {PageInConstruction, Successful} from "../Messages/Exports"



const CartComponent = () => {
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
      className="theme-bg min-h-[80vh] flex flex-col items-center justify-start  mt-20"
      id="section"
    >
      <div className="backgroundAnim backgroundAnim1"></div>
      <div className="backgroundAnim backgroundAnim2"></div>
      <div className="backgroundAnim backgroundAnim3"></div>
      <div className="backgroundAnim backgroundAnim4"></div>
      <div className="backgroundAnim backgroundAnim5"></div>
      <div
        ref={sectionRef}
        className={`cartDiv transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } mb-8 mt-8 flex items-center justify-center`}
      >
        <div className="projectItem text-[2.5rem] text-center font-cF">
          Your Cart
        </div>
      </div>

      <div>
        <EmptyCart />
      </div>
    </div>
  );
};

export default CartComponent;
