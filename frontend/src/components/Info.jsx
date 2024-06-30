import { useEffect, useRef, useState } from "react";
import { Profile } from "./Exports";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import "../index.css"; // Ensure you import the CSS file

const Info = () => {
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

  useEffect(() => {
    const onMouseMove = (e) => {
      const layers = document.querySelectorAll(".parallax-layer");
      layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const contentElement = document.getElementById("content");
    const imageElement = document.getElementById("image-container");
    contentElement.classList.add("content-slide-in");
    imageElement.classList.add("image-slide-in");
  }, []);

  const words = [
    "I",
    "am",
    "Om",
    "Chandankar",
    "a",
    "professional",
    "front",
    "end",
    "developer",
    "certified",
    "by",
    "Meta",
    "team",
    "from",
    "India",
    ".",
    "I",
    "am",
    "the",
    "creator",
    "of",
    "theme",
    "verse",
    "and",
    "a",
    "freelancer",
    "looking",
    "for",
    "a",
    "full",
    "time",
    "job",
    ".",
    "I",
    "have",
    "worked",
    "with",
    "multiple",
    "clients",
    "as",
    "a",
    "UI/",
    "UX",
    "Developer",
    "and",
    "a",
    "Front",
    "End",
    "Developer",
  ];

  const renderWord = (word, index) => {
    const cleanedWord = word.replace(/[.,!]/g, "");
    if (["Om", "Chandankar", "creator", "freelancer", "multiple", "clients"].includes(cleanedWord)) {
      if (cleanedWord === "Contact" || cleanedWord === "Today") {
        return (
          <Link key={index} to="/contact" className="hover-word special-word">
            {word}
          </Link>
        );
      }
      return (
        <span key={index} className="hover-word special-word">
          {word}
        </span>
      );
    }
    return (
      <span key={index} className="hover-word">
        {word}
      </span>
    );
  };

  return (
    <>
      <section
        className="pt-[55px] h-[calc(90vh-55px)] bg-light-bg dark:bg-dark-bg flex items-center w-full max-w-screen-xl mx-auto px-4 relative mb-0"
        id="section"
      >
        <div className="backgroundAnim backgroundAnim1"></div>
        <div className="backgroundAnim backgroundAnim2"></div>
        <div className="backgroundAnim backgroundAnim3"></div>
        <div className="backgroundAnim backgroundAnim4"></div>
        <div className="backgroundAnim backgroundAnim5"></div>
        <div className="parallax-container absolute inset-0 overflow-hidden">
          <div className="parallax-layer layer1" data-speed="2"></div>
          <div className="parallax-layer layer2" data-speed="5"></div>
        </div>
        <div className="parallax-content flex flex-col sm:flex-row items-center w-full z-10 relative">
          <div
            id="content"
            className="text-center sm:text-left w-full sm:w-1/2 mb-0 sm:mb-0 sm:mr-4 flex flex-col"
          >
            <h1 className="font-cL text-[3rem] font-normal leading-normal text-heading mb-4 relative inline-block self-start break-words">
              <h1 className="inline animate-bounce">👋🏻</h1> Hello, Nice to meet you!
              <svg
                className="absolute bottom-[-10px] left-0 w-[100%] h-5"
                viewBox="0 0 50 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 10 C 10 20, 30 0, 50 10"
                  stroke="url(#rainbow)"
                  strokeWidth="5"
                  fill="transparent"
                />
                <defs>
                  <linearGradient id="rainbow">
                    <stop offset="0%" stopColor="#FF0000" />
                    <stop offset="16.6%" stopColor="#FF7F00" />
                    <stop offset="33.3%" stopColor="#FFFF00" />
                    <stop offset="50%" stopColor="#00FF00" />
                    <stop offset="66.6%" stopColor="#0000FF" />
                    <stop offset="83.3%" stopColor="#4B0082" />
                    <stop offset="100%" stopColor="#8B00FF" />
                  </linearGradient>
                </defs>
              </svg>
            </h1>
            <p
              id="hover-paragraph"
              className="font-cL text-[1.75rem] mt-4 font-normal leading-normal mb-8 text-black dark:text-white break-words"
            >
              {words.map((word, index) => renderWord(word, index))}
            </p>
            <div className="flex flex-col sm:flex-row items-center mt-8">
              <Link to="/contact" className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
                <div
                  ref={seeAllRef}
                  className={`smallDiv transition-all duration-1000 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } flex items-center justify-center cursor-pointer`}
                >
                  <div
                    className={`projectItem text-[40px] cursor-pointer ${isVisible ? "animate-bounce" : ""}`}
                  >
                    <IoMdMail className="mr-4" /> Contact Me
                  </div>
                </div>
              </Link>
              <a href="https://drive.google.com/file/d/12yT322aHrAUYA2PGHHEQ1dsz1iXPaIn5/edit" className="w-full sm:w-auto">
                <div
                  className={`smallDiv transition-all duration-1000 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } flex items-center justify-center cursor-pointer ml-10`}
                >
                  <div
                    className={`projectItem text-[40px] cursor-pointer ${isVisible ? "animate-bounce" : ""}`}
                  >
                    <FaFileDownload className="mr-4" /> Get Resume
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            id="image-container"
            className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-0 sm:mt-0"
          >
            <div className="mb-20 mr-20">
              <Profile className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
