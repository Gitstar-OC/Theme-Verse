import { useState, useRef, useEffect } from "react";
import { Profile } from "./Exports"
import { IoMdPerson ,IoMdMail } from "react-icons/io";
import { FaGithub, FaInstagram,  FaLinkedin, FaSquareXTwitter, FaLink, FaRegBuilding, FaPersonCircleQuestion } from "react-icons/fa6";
import { BsFillSendCheckFill, BsFillSendFill } from "react-icons/bs";
import { TbMessage } from "react-icons/tb";
import "../index.css"; // Ensure you import the CSS file

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
    <div className="min-h-screen justify-center bg-light-bg dark:bg-dark-bg flex items-center w-full max-w-screen-xl mx-auto px-4 relative mb-0">
      <div className="backgroundAnim backgroundAnim1"></div>
      <div className="backgroundAnim backgroundAnim2"></div>
      <div className="backgroundAnim backgroundAnim3"></div>
      <div className="backgroundAnim backgroundAnim4"></div>
      <div className="backgroundAnim backgroundAnim5"></div>
      <div
        ref={sectionRef}
        className={`rectangleDiv transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } mb-8 flex items-center justify-center`}
      >
        <div className="projectItem text-[3rem] text-center">Contact</div>
      </div>
      <Profile size="small"/>
    </div>
  );
};

export default ContactForm;
