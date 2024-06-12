import { useState, useRef, useEffect } from "react";
import { Profile } from "./Exports";
import { IoMdPerson } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
// import "../index.css"; // Ensure you import the CSS file

const ContactForm = () => {
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
      className="theme-bg min-h-screen flex flex-col items-center justify-start mb-20 mt-20"
      id="section"
    >
      <div className="backgroundAnim backgroundAnim1"></div>
      <div className="backgroundAnim backgroundAnim2"></div>
      <div className="backgroundAnim backgroundAnim3"></div>
      <div className="backgroundAnim backgroundAnim4"></div>
      <div className="backgroundAnim backgroundAnim5"></div>
      <div
        ref={sectionRef}
        className={`rectangleDiv transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } mb-8 mt-8 flex items-center justify-center`}
      >
        <div className="projectItem text-[3rem] text-center font-cF">
          Contact
        </div>
      </div>

      <div className="flex space-x-10">
        <div className="shadow-lg rounded-l-[25px] bg-gray-800 bg-opacity-20 relative p-10 w-[711px] flex flex-col space-y-8 contactDiv">
          <div className="text-[3rem] font-cF text-black dark:text-white">
            Get In Touch
          </div>
          <div className="flex space-x-6">
            <div className="bg-gray-300 rounded-[10px] p-4 flex-1">
              <span className="font-['Inter'] text-[16px] text-black">
                Name
              </span>
            </div>
            <div className="bg-gray-300 rounded-[10px] p-4 flex-1">
              <span className="font-['Inter'] text-[16px] text-black">
                Email
              </span>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="bg-gray-300 rounded-[10px] p-4 flex-1">
              <span className="font-['Inter'] text-[16px] text-black">
                Position
              </span>
            </div>
            <div className="bg-gray-300 rounded-[10px] p-4 flex-1">
              <select className="font-['Inter'] text-[16px] text-black bg-transparent border-none outline-none w-full">
                <option value="instagram">Instagram</option>
                <option value="linkedin">Linkedin</option>
                <option value="facebook">Facebook</option>
                <option value="github">Github</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-300 rounded-[10px] p-4 w-full">
            <span className="font-['Inter'] text-[16px] text-black">
              Company
            </span>
          </div>
          {/* <div className="bg-gray-300 rounded-[10px] p-4 w-full">
            <span className="font-['Inter'] text-[16px] text-black">Link</span>
          </div> */}
          <div className="bg-gray-300 rounded-[10px] p-4 w-full">
            <span className="font-['Inter'] text-[16px] text-black">Link</span>
          </div>
          <div className="bg-gray-300 rounded-[15px] p-4 w-full h-[10rem]">
            <span className="font-['Inter'] text-[16px] text-black">
              Message
            </span>
          </div>
          <div
            className="flex items-center justify-center rounded-[15px] p-2 border-2 cursor-pointer border-[#0f94b2] bg-[#a6d2ea] dark:border-[#a6d2ea] dark:bg-[#000000] mx-40"
            id="send"
          >
            <div className="projectItem">
              <BsFillSendFill className="mr-2 mb-3 text-[2rem]" />
              <span className="projectItem text-[2.5rem] text-center font-cL">
                Send
              </span>
            </div>
          </div>
        </div>

        <div className="shadow-[0px_10px_15px_-3px_#1A3DF8] rounded-r-[25px] bg-[rgba(74,74,74,0.2)] relative flex flex-col p-8 w-[361px]">
          <div className="self-center w-[200px] h-[196.5px] flex items-center justify-center">
            <Profile size="small" />
          </div>
          <div className="bg-[#1A3DF8] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-cF text-[28px] text-black dark:text-white flex items-center">
              <IoMail className="mr-2" /> <span>Mail Me</span>
            </div>

            <div className="flex items-center text-black dark:text-white">
              <h3 style={{ fontSize: "1.5rem" }} className="font-cL">
                chandankarom07@gmail.com
              </h3>
            </div>
          </div>
          <div className="bg-[#1A3DF8] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-cF text-[1.75rem] text-black dark:text-white">
              Follow On Github
            </div>
            <a
              href="https://github.com/Gitstar-OC"
              className="flex items-center text-[1.5rem] font-cL text-black dark:text-white cursor-pointer"
            >
              <FaGithub className="mr-2 mb-3" />
              Gitstar-OC
            </a>
          </div>
          <div className="bg-[#1A3DF8] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-cF text-[1.75rem] text-black dark:text-white">
              Reach me on Social Media
            </div>
            <a
              href="https://www.instagram.com/chandankar_om/"
              className="flex items-center text-[1.5rem] font-cL text-black dark:text-white cursor-pointer"
            >
              <FaInstagram className="mr-2 mb-3" />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/om-chandankar"
              className="flex items-center mt-2 text-[1.5rem] font-cL text-black dark:text-white cursor-pointer"
            >
              <FaLinkedin className="mr-2 mb-3" />
              LinkedIn
            </a>
            <a
              href="https://x.com/Om_Chandankar"
              className="flex items-center mt-2 text-[1.5rem] font-cL text-black dark:text-white cursor-pointer"
            >
              <FaTwitter className="mr-2 mb-3" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
