import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaRegSmileBeam, FaArrowCircleDown, FaArrowCircleRight } from "react-icons/fa";

// CSS for overlay and disabling scroll

const AddToCart = ({ onClose }) => {
  useEffect(() => {
    // Add no-scroll class to body when component mounts
    document.body.classList.add("no-scroll");

    // Remove no-scroll class from body when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <>
      {/* Inject styles */}
      <div className="message-overlay message-animation">
        <div className="bg-message bg-fixed bg-cover rounded-[25px] relative mt-32 mb-32 ml-96 mr-[25rem]">
          <IoClose
            className="cursor-pointer absolute top-4 right-4 text-[#0500FF] w-[3rem] h-[3rem] hover:text-[#09FFB5] dark:hover:text-[#09FFB5]"
            onClick={onClose}
          />
          <div className="flex flex-col ml-10">
            <div className="flex mt-10">
              <FaRegSmileBeam className="w-16 h-16 mt-4 text-white hover:text-[#09FFB5] dark:hover:text-[#09FFB5] icon-bounce" />
              <h1 className="font-cF text-[2.5rem] ml-4 mr-20 text-white">
                Theme Added to Cart Successfully
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <div
                className="rounded-[15px] cartItem bg-[#a6d2ea] border-[#0f94b2] dark:border-[#a6d2ea] dark:bg-black border-[3px] h-[5rem] w-[450px] flex justify-center items-center cursor-pointer mt-4 mb-4"
                onClick={onClose}
              >
                <div className="projectItem text-[40px] cursor-pointer animate-bounce flex items-center">
                  Continue Browsing <FaArrowCircleDown className="ml-4" />
                </div>
              </div>
            </div>
            <div className="mt-4 mb-4 flex flex-col justify-center items-center">
              <p className="underline text-white font-cL text-[1.5rem]">
                If you want to buy this now, you can also checkout
              </p>
              <div
                className="rounded-[15px] cartItem bg-[#a6d2ea] border-[#0f94b2] dark:border-[#a6d2ea] dark:bg-black border-[3px] h-[5rem] w-[450px] flex justify-center items-center cursor-pointer mt-4 mb-4"
                onClick={onClose}
              >
                <Link to="/cart">
                  <div className="projectItem text-[40px] cursor-pointer animate-bounce flex items-center">
                    Checkout Now <FaArrowCircleRight className="ml-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
