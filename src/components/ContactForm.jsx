import { useState, useRef, useEffect } from "react";
import { Profile } from "./Exports";
import { IoMdPerson, IoMdMail } from "react-icons/io";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
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
    <div className="theme-bg min-h-screen flex flex-col items-center justify-start mb-20 mt-20" id="section">
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
        <div className="projectItem text-[3rem] text-center font-cF">Contact</div>
      </div>

      <div className="flex space-x-10">
        <div className="shadow-lg rounded-l-[25px] bg-gray-800 bg-opacity-20 relative p-10 w-[711px] flex flex-col space-y-8 contactDiv">
          <div className="text-[3rem] font-cF text-black dark:text-white">
            Get In Touch
          </div>
          <div className="flex space-x-6">
            <div className="bg-gray-300 rounded-[10px] p-4 flex-1">
              <span className="font-['Inter'] text-[16px] text-black">Name</span>
            </div>
            <div className="bg-gray-300 rounded-[10px] p-4 flex-1">
              <span className="font-['Inter'] text-[16px] text-black">Email</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="bg-gray-300 rounded-[10px] p-4 flex-1">
              <span className="font-['Inter'] text-[16px] text-black">Position</span>
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
            <span className="font-['Inter'] text-[16px] text-black">Company</span>
          </div>
          <div className="bg-gray-300 rounded-[10px] p-4 w-full">
            <span className="font-['Inter'] text-[16px] text-black">Link</span>
          </div>
          <div className="bg-gray-300 rounded-[15px] p-4 w-full h-[150px]">
            <span className="font-['Inter'] text-[16px] text-black">Message</span>
          </div>
          <div className="flex items-center justify-center rounded-[15px] p-4 border-2 cursor-pointer border-[#0f94b2] bg-[#a6d2ea] dark:border-[#a6d2ea] dark:bg-[#000000]" id="send">
            <div className="projectItem">
              <BsFillSendFill className="mr-2 mb-4 text-[2rem]" />
              <span className="projectItem text-[2.5rem] text-center font-cL">Send</span>
            </div>
          </div>
        </div>

        <div className="shadow-[0px_10px_15px_-3px_#1A3DF8] rounded-r-[25px] bg-[rgba(74,74,74,0.2)] relative flex flex-col p-[31px_0_19.8px_13px] w-[361px]">
          <div className="self-center w-[200px] h-[196.5px]">
            <Profile size="small" />
          </div>
          <div className="bg-[#FFFFFF] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-['Akaya_Telivigala'] text-[28px] text-[#FFFFFF] dark:text-black">
              Mail Me
            </div>
            <div className="flex items-center text-[24px] font-['Chilanka'] text-[#FFFFFF] dark:text-black">
              <IoMdMail className="mr-2" />
              chandankarom07@gmail.com
            </div>
          </div>
          <div className="bg-[#FFFFFF] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-['Akaya_Telivigala'] text-[28px] text-[#FFFFFF] dark:text-black">
              Follow On Github
            </div>
            <a
              href="https://github.com/Gitstar-OC"
              className="flex items-center text-[24px] font-['Chilanka'] text-[#FFFFFF] dark:text-black cursor-pointer"
            >
              <FaGithub className="mr-2" />
              Gitstar-OC
            </a>
          </div>
          <div className="bg-[#FFFFFF] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-['Akaya_Telivigala'] text-[28px] text-[#FFFFFF] dark:text-black">
              Reach me on Social Media
            </div>
            <div className="text-[24px] font-['Chilanka'] text-[#FFFFFF] dark:text-black">
              <FaInstagram className="inline mr-2" /> Instagram<br />
              <FaLinkedin className="inline mr-2" /> LinkedIn<br />
              <FaSquareXTwitter className="inline mr-2" /> Twitter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
