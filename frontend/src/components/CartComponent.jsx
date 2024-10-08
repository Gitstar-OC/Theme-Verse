import  { useEffect, useRef, useState, useContext } from "react";
import { PageInConstruction, PlatformFee } from "../Messages/Exports";
import { projects } from "../Constants/index";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../MainLayout";

const CartComponent = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPlatformFee, setShowPlatformFee] = useState(false);
  const sectionRef = useRef(null);
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleRemoveFromCart = (projectId) => {
    removeFromCart(projectId);
  };

  const handleCheckoutClick = () => {
    setShowSuccessMessage(true);
  };

  const handleSuccessClose = () => {
    setShowSuccessMessage(false);
  };

  const handleQuestionMarkClick = () => {
    setShowPlatformFee(true);
  };

  const handlePlatformFeeClose = () => {
    setShowPlatformFee(false);
  };

  const renderProject = (project) => (
    <div key={project.id} className="flex items-start justify-start my-6 p-4 rounded-[25px]">
      <div className="projectIframeContainer rounded-[5px] overflow-hidden">
        <iframe
          src={project.url}
          title={project.name}
          className={`border-2 rounded-[25px] ${document.documentElement.classList.contains("dark") ? "border-white" : "border-black"}`}
          style={{ width: "400px", height: "280px" }}
        />
      </div>
      <div className="ml-20 mr-10 mt-2 max-w-160 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[2.25rem] font-cF dark:text-white">{project.name}</h3>
          <div className="flex items-center">
            <span className="text-[2.25rem] font-cL dark:text-white bg-border p- rounded-md">${project.price}</span>
          </div>
        </div>
        <p className="mt-2 text-[1.25rem] max-w-80 font-cL dark:text-slate-300 mb-8">{project.description}</p>
        <span
          className="bg-black text-[2rem] font-cL  cursor-pointer hover:text-secondary dark:hover:text-secondary text-white p-2 rounded-lg"
          onClick={() => handleRemoveFromCart(project.id)}
        >
          Remove from Cart
        </span>
      </div>
    </div>
  );

  const totalPrice = cartItems.reduce((acc, itemId) => {
    const project = projects.find((project) => project.id === itemId);
    return acc + project.price;
  }, 0);

  const discount = totalPrice * 0.05;
  const taxes = (totalPrice - discount) * 0.12;
  const finalPrice = totalPrice - discount + taxes;

  return (
    <div className="theme-bg flex flex-col items-center justify-start mb-20 mt-20 " id="section">
      <div className="backgroundAnim backgroundAnim1"></div>
      <div className="backgroundAnim backgroundAnim2"></div>
      <div className="backgroundAnim backgroundAnim3"></div>
      <div className="backgroundAnim backgroundAnim4"></div>
      <div className="backgroundAnim backgroundAnim5"></div>
      <div
        ref={sectionRef}
        className={`cartDiv transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} mb-8 mt-8 flex items-center justify-center`}
      >
        <div className="projectItem text-[2.5rem] text-center font-cF">Your Cart</div>
      </div>
      <div className="flex mt-10">
        <div className="content-slide-in inputItem flex rounded-[25px] flex-col items-start bg-gray-800 bg-opacity-20 p-2 mr-20 space-y-2 flex-grow">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            cartItems.map((itemId, index) => (
              <div key={itemId}>
                {renderProject(projects.find((project) => project.id === itemId))}
                {index < cartItems.length - 1 && <div className="border-heading border-[1.5px] w-full"></div>}
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="summary-box rounded-[25px] bg-slate-800 bg-opacity-20 flex-col p-8 mb-60 sticky top-20 self-start cartItem image-slide-in">
            <div className="flex font-cF text-[2.5rem] text-black dark:text-white mb-2">Summary</div>
            <div className="border-[1.5px] border-solid border-heading mb-2"></div>
            <p className="font-cL text-[1.5rem] text-black dark:text-white flex justify-between mb-2">
              <span>{`Price (${cartItems.length} items)`}</span>
              <span>{totalPrice}</span>
            </p>
            <p className="font-cL text-[1.5rem] text-black dark:text-white flex justify-between mb-2">
              <span>Discount (5%)</span>
              <span>{discount.toFixed(2)}</span>
            </p>
            <p className="font-cL text-[1.5rem] text-black dark:text-white flex justify-between mb-2">
              <span>Taxes (12%)</span>
              <span>{taxes.toFixed(2)}</span>
            </p>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row">
                <div className="font-cL text-[1.5rem] text-black dark:text-white">Platform Fee</div>
                <HiQuestionMarkCircle
                  className="text-[#1A3DF8] w-[1.75rem] h-[1.75rem] ml-1 mt-1 hover:text-secondary dark:hover:text-secondary cursor-pointer"
                  onClick={handleQuestionMarkClick}
                />
              </div>
              <div className="font-sans font-normal text-[14px] text-black dark:text-white">FREE</div>
            </div>
            <div className="border-[1.5px] border-solid border-heading mb-2"></div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-cF text-[2rem] text-black dark:text-white flex justify-between mb-2">Total Price</p>
              <p className="font-cF text-[2rem] text-black dark:text-white flex justify-between mb-2">{finalPrice.toFixed(2)}</p>
            </div>
            <div className="rounded-[15px] cartItem bg-[#a6d2ea] border-[#0f94b2] dark:border-[#a6d2ea] dark:bg-black border-[3px] h-[5rem] w-[300px] flex justify-center items-center cursor-pointer " onClick={handleCheckoutClick}>
              <div className="projectItem">
                <span className="font-cL text-[2.25rem] animate-bounce">Checkout</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {showSuccessMessage && <PageInConstruction onClose={handleSuccessClose} title="Checkout - Page Under Construction" />}
      {showPlatformFee && <PlatformFee onClose={handlePlatformFeeClose} />}
    </div>
  );
};

export default CartComponent;
