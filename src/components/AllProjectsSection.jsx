// Components/AllProjectsSection.js
import{ useEffect, useState, useRef } from 'react';
import { projects } from '../Constants/index';
import { useNavigate } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";

const AllProjectsSection = () => {
  const sectionRef = useRef(null)
  const seeAllRef = useRef(null)
  const navigate = useNavigate();
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

  const handleSeeAllClick = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderProject = (project, index) => {
    const isEven = index % 2 === 1;
    return (
      <div
        key={project.name}
        className={`projectCard flex ${isEven ? 'flex-row-reverse' : ''} items-center justify-between  my-6 p-4 rounded-2xl  m-0 max-w-[1000px] border-solid border-dark-bg border-2 dark:border-white  `}
      >
        <div className='projectIframeContainer'>
          <iframe
            src={project.url}
            title={project.name}
            className='projectIframe'
          />
        </div>
        <div className='projectDetails'>
          <h3 className='text-xl font-bold font-cF dark:text-white'>{project.name}</h3>
          <p className='text-md font-cL dark:text-slate-400 '>{project.description}</p>
        </div>
      </div>
    );
  };



  return (
    <div className='theme-bg flex flex-col items-center justify-start mb-20 mt-20 gap-12' id='section'>
      <div className='space-y-10'>
        {projects.slice(0, 8).map((project, index) => renderProject(project, index))}
      </div>
      <div
        ref={seeAllRef}
        className={`smallDiv transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } `}
      >
        <div
          className={`projectItem text-[40px] cursor-pointer  ${
            isVisible ? "animate-bounce" : ""
          }`}
          onClick={handleSeeAllClick}
        >
           <IoMdMail className="mr-4" /> Contact Us
        </div>
      </div>
    </div>
  );
};

export default AllProjectsSection;
