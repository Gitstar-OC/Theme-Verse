import { useState, useRef, useEffect } from "react";
import { IoMdPerson, IoMdMail } from "react-icons/io";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
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
        <div className="projectItem text-[3rem] text-center font-cF text-white dark:text-black">Contact</div>
      </div>

      <div className="shadow-lg rounded-l-[25px] bg-gray-800 bg-opacity-20 relative p-10 w-[711px] flex flex-col space-y-8">
        <div className="text-[3rem] font-cF text-white dark:text-black">
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
        <div className="flex items-center justify-center bg-black rounded-[15px] p-4 border-2 border-[#0F94B2] text-[#0F94B2] cursor-pointer">
          <BsFillSendFill className="mr-2" />
          <span className="font-cL text-[2.5rem]">Send</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
