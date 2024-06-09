// Components/Projects.js

import { useEffect, useRef, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { projects } from '../Constants/index';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const seeAllRef = useRef(null);

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

  const renderProject = (project, index) => {
    const isEven = index % 2 === 1;
    return (
      <div
        key={project.name}
        className={`projectCard flex ${isEven ? 'flex-row-reverse' : ''} items-center space-x-6 my-6`}
      >
        <div className='projectIframe'>
          <iframe
            src={project.url}
            title={project.name}
            className='w-96 h-64 border-0 rounded-lg shadow-lg'
          />
        </div>
        <div className='projectDetails'>
          <h3 className='text-2xl font-bold'>{project.name}</h3>
          <p className='text-lg'>{project.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className=' theme-bg flex flex-col items-center justify-start space-y-6 mb-4' id='section'>
      <div
        ref={sectionRef}
        className={`rectangleDiv transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className='projectItem text-[48px]'>
          Themes
        </div>
      </div>
      <div className='space-y-6'>
        {projects.slice(0, 3).map((project, index) => renderProject(project, index))}
      </div>
      <div
        ref={seeAllRef}
        className={`smallDiv transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <Link to="/themes">
        <div className={`projectItem text-[40px] cursor-pointer ${isVisible ? 'animate-bounce' : ''}`}>
            See all <FaArrowCircleRight className='ml-4' />
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
