// Components/Projects.js

import { useEffect, useRef, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { projects } from "../Constants/index";
import { useNavigate } from "react-router-dom";
import { FaOpencart, FaRegEye } from 'react-icons/fa';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const seeAllRef = useRef(null);
  const navigate = useNavigate();

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
    navigate("/themes");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderProject = (project, index) => {
    const isEven = index % 2 === 1;
    return (
      <div
        key={project.name}
        className={` flex ${isEven ? 'flex-row-reverse' : ''}  projectCard items-start justify-start my-6 p-4`}
        style={{ marginLeft: '8rem', marginBottom: '2rem', marginRight: "8rem" }} // Adjust left, right, and bottom margins
      >
        <div className='projectIframeContainer'>
          <iframe
            src={project.url}
            title={project.name}
            className='projectIframe border-black border-2 dark:border-white'
          />
        </div>
        <div className='ml-20 mt-4 max-w-160 mr-20'> {/* projectDetails Add left margin for the project details */}
          <div className='mt-4  mr-8 border-black border-solid border-2 dark:border-white'> </div>
          <h3 className='mt-10 text-[2.5rem] font-cF dark:text-white'>{project.name}</h3>
          <p className='mt-4 text-[1.5rem] font-cL dark:text-slate-400 mb-20'>{project.description}</p>

          <div className=' mr-8 border-black border-solid border-2 dark:border-white '></div> 
          <div className=" mt-20 mb-10 flex items-center space-x-1 font-cL justify-center text-[2.5rem] dark:text-white cursor-pointer">
            <div className="projectItem">
            <FaRegEye className='mb-3'/> 
            <span className=""> See Preview</span>
            </div>
          </div>
          <div className="  mt-10 mb-20 flex items-center space-x-1 font-cL text-[2.5rem] justify-center cursor-pointer dark:text-white" onClick="">
              <div className="projectItem">
              <FaOpencart className=' mb-3'/>
              <span className="">Add to Cart</span>
              </div>
            </div>
        <div className='mr-8 mb-4 justify-end border-black border-solid border-2 dark:border-white'></div> 
        </div>
      </div>
    );
  };

  return (
    <div className='theme-bg flex flex-col items-center justify-center mb-20 mt-20 gap-12' id='section'>
      <div
        ref={sectionRef}
        className={`rectangleDiv transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } mb-8 flex items-center justify-center`}
      >
        <div className="projectItem text-[3rem] text-center">Themes</div>
      </div>
      <div className='flex flex-col items-start space-y-10 px-4 w-full'> {/* Align projects to the start with padding */}
        {projects.slice(0, 3).map((project, index) => renderProject(project, index))}
      </div>
      <div
        ref={seeAllRef}
        className={`smallDiv transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } flex items-center justify-center`}
      >
        <div
          className={`projectItem text-[40px] cursor-pointer ${
            isVisible ? "animate-bounce" : ""
          }`}
          onClick={handleSeeAllClick}
        >
          See all <FaArrowCircleRight className="ml-4" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
