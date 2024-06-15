import { useEffect, useState, useRef } from "react";
import { projects } from "../Constants/index";
import { Link } from "react-router-dom";
import { FaOpencart, FaRegEye } from "react-icons/fa";
import { AddToCart, DoubleAdd } from "../Messages/Exports";
import { IoMdMail } from "react-icons/io";

const AllProjectsSection = ({ filters, addToCart }) => {
  const sectionRef = useRef(null);
  const seeAllRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [showDoubleAdd, setShowDoubleAdd] = useState(false);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

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
    const filterProjects = () => {
      let filtered = projects;
      const activeFilters = Object.keys(filters).filter((key) => filters[key]);
      if (activeFilters.length > 0) {
        filtered = projects.filter((project) => {
          const matchesDescription = activeFilters.some((filter) =>
            project.description.toLowerCase().includes(filter.toLowerCase())
          );
          const matchesTechnologies = activeFilters.some((filter) =>
            project.technologies.includes(filter)
          );
          return matchesDescription || matchesTechnologies;
        });
      }
      setFilteredProjects(filtered);
    };
    filterProjects();
  }, [filters]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              entry.target.dataset.index % 2 === 0
                ? "slide-in-right"
                : "slide-in-left"
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    const contentElements = document.querySelectorAll(".content");
    contentElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      contentElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [filteredProjects]);

  const renderProject = (project, index) => {
    const isEven = index % 2 === 1;
    return (
      <div
        key={project.name}
        data-index={index}
        className={`flex ${isEven ? "flex-row-reverse" : ""} projectCard items-start justify-start my-6 p-4 content`}
        style={{
          marginLeft: "4rem",
          marginBottom: "2rem",
          marginRight: "4rem",
        }}
      >
        <div className="projectIframeContainer">
          <iframe
            src={project.url}
            title={project.name}
            className="projectIframe border-heading border-2 dark:border-heading"
          />
        </div>
        <div className="ml-8 mt-2 max-w-160 mr-20">
          <div className=" mr-2 border-heading border-solid border-2 dark:border-heading"></div>
          <h3 className="mt-2 text-[2rem] font-cF dark:text-white">
            {project.name}
          </h3>
          <p className="mt-2 text-[1.5rem] font-cL dark:text-slate-300 mb-4">
            {project.description}
          </p>
          <div className="mr-2 border-heading border-solid border-2 dark:border-heading"></div>
          <div className="mt-8 mb-2 flex items-center space-x-1 font-cL justify-center text-[2.5rem] dark:text-white cursor-pointer">
            <div className="projectItem animate-bounce">
              <FaRegEye className="mb-3" />
              <span className="">See Preview</span>
            </div>
          </div>
          <div
            className="mt-4 mb-10 flex items-center space-x-1 font-cL text-[2.5rem] justify-center cursor-pointer dark"
            onClick={() => handleAddToCart(project.id)}
          >
            <div className="projectItem animate-bounce">
              <FaOpencart className=" mb-3" />
              <span className="">Add to Cart</span>
            </div>
          </div>
          <div className="mr-2  justify-end border-heading border-solid border-2 dark:border-heading"></div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="theme-bg flex flex-col items-center justify-center mb-20 mt-20 gap-12"
      id="section"
    >
      <div
        ref={sectionRef}
        className={`rectangleDiv transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} mb-8 flex items-center justify-center`}
      >
        <div className="projectItem text-[3rem] text-center">Themes</div>
      </div>
      <div className="flex flex-col items-start space-y-10  w-full">
        {filteredProjects
          .slice(0, 8)
          .map((project, index) => renderProject(project, index))}
      </div>
      <Link to="/contact">
        <div
          ref={seeAllRef}
          className={`smallDiv transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} flex items-center justify-center`}
        >
          <div
            className={`projectItem text-[40px] cursor-pointer ${isVisible ? "animate-bounce" : ""}`}
          >
            <IoMdMail className="mr-4" /> Contact Us
          </div>
        </div>
      </Link>
      {showAddToCart && <AddToCart onClose={handleAddToCartClose} />}
      {showDoubleAdd && <DoubleAdd onClose={handleDoubleAddClose} />}
    </div>
  );
};

export default AllProjectsSection;
