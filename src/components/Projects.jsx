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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              entry.target.dataset.index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      contentElements.forEach((element) => {
        observer.unobserve(element);
      });
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
        data-index={index}
        className={`flex ${isEven ? 'flex-row-reverse' : ''} projectCard items-start justify-start my-6 p-4 content`}
        style={{ marginLeft: '8rem', marginBottom: '2rem', marginRight: "8rem" }}
      >
        <div className='projectIframeContainer'>
          <iframe
            src={project.url}
            title={project.name}
            className='projectIframe border-heading border-2 dark:border-heading'
          />
        </div>
        <div className='ml-8 mt-2 max-w-160 mr-20'>
          <div className=' mr-2 mt-4 border-heading border-solid border-2 dark:border-heading'></div>
          <h3 className='mt-8 text-[2rem] font-cF dark:text-white'>{project.name}</h3>
          <p className='mt-4 text-[1.5rem] font-cL dark:text-slate-300 mb-8'>{project.description}</p>
          <div className='mr-2 border-heading border-solid border-2 dark:border-heading'></div>
          <div className="mt-8 mb-2 flex items-center space-x-1 font-cL justify-center text-[2.5rem] dark:text-white cursor-pointer">
            <div className="projectItem animate-bounce">
              <FaRegEye className='mb-3' />
              <span className=""> See Preview</span>
            </div>
          </div>
          <div className="mt-4 mb-10 flex items-center space-x-1 font-cL text-[2.5rem] justify-center cursor-pointer dark:text-white">
            <div className="projectItem animate-bounce">
              <FaOpencart className=' mb-3' />
              <span className="">Add to Cart</span>
            </div>
          </div>
          <div className='mr-2 mb-4  justify-end border-heading border-solid border-2 dark:border-heading'></div>
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
      <div className='flex flex-col items-start space-y-10 px-4 w-full'>
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
