import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaOpencart, FaRegEye } from "react-icons/fa";
import { AddToCart, DoubleAdd, ErrorPreview, ViewPreview } from "../Messages/Exports";
import { IoMdMail } from "react-icons/io";
import { projects } from "../Constants/index";

const styles = `
@media (max-width: 1080px) {
  .projectCard {
    flex-direction: column !important;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .projectIframeContainer {
    width: 100vw;
  }

  .projectIframe {
    width: 100%;
    height: 50vh;
  }

  .projectInfo {
    margin: 0 !important;
    text-align: center;
  }

  .projectActions {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .projectAction {
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
    font-size: 2.5rem;
    cursor: pointer;
  }

  .projectAction .icon {
    margin-right: 0.5rem;
  }

  .tablet {
    font-size: 3rem;
  }

  .tablet_description {
    font-size: 2rem;
  }

  .projectAction:hover {
    text-decoration: underline;
  }
}
`;

const Projects = ({ addToCart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [showDoubleAdd, setShowDoubleAdd] = useState(false);
  const [showErrorPreview, setShowErrorPreview] = useState(false);
  const [showViewPreview, setShowViewPreview] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

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
  }, [filteredProjects]);

  const handleAddToCart = (projectId) => {
    if (cart.includes(projectId)) {
      setShowDoubleAdd(true);
    } else {
      const newCart = [...cart, projectId];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      addToCart(projectId);
      setShowAddToCart(true);
    }
  };

  const handleAddToCartClose = () => {
    setShowAddToCart(false);
  };

  const handleDoubleAddClose = () => {
    setShowDoubleAdd(false);
  };

  const handleErrorPreviewClose = () => {
    setShowErrorPreview(false);
  };

  const handleViewPreviewClose = () => {
    setShowViewPreview(false);
    setCurrentProjectId(null);
  };

  const handleSeePreview = (projectId) => {
    const isMobileOrTablet = window.innerWidth < 1080;
    if (isMobileOrTablet) {
      setShowErrorPreview(true);
    } else {
      setCurrentProjectId(projectId);
      setShowViewPreview(true);
    }
  };

  const renderProject = (project, index) => {
    const isEven = index % 2 === 1;
    return (
      <div
        key={project.name}
        data-index={index}
        className={`flex ${isEven ? 'flex-row-reverse' : ''} projectCard items-start justify-start my-6 p-4 content ml-[6rem] mr-[6rem] `}
        style={{  marginBottom: '8rem',  }}
      >
        <div className='projectIframeContainer'>
          <iframe
            src={project.url}
            title={project.name}
            className='projectIframe border-heading border-2 dark:border-heading'
          />
        </div>
        <div className='ml-8 mt-2 max-w-160 mr-20 projectInfo'>
          {/* <div className='mr-2 mt-4 border-heading border-solid border-2 dark:border-heading'></div> */}
          <h3 className='mt-4 text-[3rem] font-cF dark:text-white tablet'>
            {project.name}
          </h3>
          <p className='mt-4 text-[2rem] font-cL dark:text-slate-300 mb-4 tablet_description'>
            {project.description}
          </p>
          <div className='mr-2 border-heading border-solid border-2 dark:border-heading'></div>
          <div className="projectActions">
            <span
              className="projectAction projectItem animate-bounce text-[2.5rem] mx-32 mt-10"
              onClick={() => handleSeePreview(project.id)}
            >
              <FaRegEye className='icon mb-3' />
              <span>See Preview</span>
            </span>
            <span
              className="projectAction projectItem animate-bounce text-[2.5rem] mx-32 mt-10"
              onClick={() => handleAddToCart(project.id)}
            >
              <FaOpencart className='icon mb-3' />
              <span>Add to Cart</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{styles}</style>
      <div className='theme-bg flex flex-col items-center justify-center mb-20 mt-20 gap-12' id='section'>
        <div
          ref={sectionRef}
          className={`rectangleDiv transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } mb-8 flex items-center justify-center`}
        >
          <div className="projectItem text-[3rem] text-center">Themes</div>
        </div>
        <div className='flex flex-col items-start space-y-10 px-4 w-full overflow-x-hidden'>
          {projects.slice(0, 3).map((project, index) => renderProject(project, index))}
        </div>
        <div
          ref={seeAllRef}
          className={`smallDiv transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } flex items-center justify-center`}
        >
          <Link to="/themes">
            <div
              className={`projectItem text-[40px] cursor-pointer ${
                isVisible ? "animate-bounce" : ""
              }`}
            >
              See all <FaArrowCircleRight className="ml-4" />
            </div>
          </Link>
        </div>
        {showAddToCart && <AddToCart onClose={handleAddToCartClose} />}
        {showDoubleAdd && <DoubleAdd onClose={handleDoubleAddClose} />}
        {showErrorPreview && <ErrorPreview onClose={handleErrorPreviewClose} />}
        {showViewPreview && <ViewPreview projectId={currentProjectId} onClose={handleViewPreviewClose} />}
      </div>
    </>
  );
};

export default Projects;
