import Meta from "../assets/MetaCertificate.png"
import Stanford from "../assets/StanfordCertificate.png"
import { useEffect, useRef, useState } from "react"

const Certification = () => {
  const sectionRef = useRef(null);
  const metaRef = useRef(null);
  const stanfordRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [metaVisible, setMetaVisible] = useState(false);
  const [stanfordVisible, setStanfordVisible] = useState(false);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScrollObserver = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === metaRef.current) {
            setMetaVisible(true);
          } else if (entry.target === stanfordRef.current) {
            setStanfordVisible(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollObserver, { threshold: 0.5 });

    if (metaRef.current) {
      observer.observe(metaRef.current);
    }

    if (stanfordRef.current) {
      observer.observe(stanfordRef.current);
    }

    return () => {
      if (metaRef.current) {
        observer.unobserve(metaRef.current);
      }

      if (stanfordRef.current) {
        observer.unobserve(stanfordRef.current);
      }
    };
  }, []);

  return (
    <div className="border-t-2 my-12 border-heading flex flex-col items-center mx-12 lg:mx-32 ">
      <div
        ref={sectionRef}
        className={`cartDiv transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } mb-8 mt-10 flex items-center justify-center `}
      >
        <div className="projectItem text-[2.5rem] text-center font-cF">
          Certification
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start mb-20 w-full mt-10">
        <div 
          ref={metaRef} 
          className={`flex flex-col lg:flex-row items-center lg:items-start w-full lg:mr-20 ml-20 transition-transform duration-1000 ${
            metaVisible ? "content-slide-in" : "translate-y-10 opacity-0"
          }`}
        >
          <img 
            src={Meta} 
            alt="meta certificate" 
            className="rounded-[25px] w-[45rem] h-[30rem] transform transition-transform duration-2000 hover:scale-105 border-2 dark:border-white border-black mb-8 lg:mb-0 lg:mr-8" 
          />
          <div className="flex flex-col items-start justify-between h-[30rem] w-full lg:w-auto">
            <div className="text-[2.5rem] font-cF dark:text-white  mt-4">
              Meta Certification
            </div>
            <div className="text-[2rem] font-cL text-black dark:text-white flex-grow mt-8">
              This certificate is offered after completing the 9 course series and submitting all the project that are given.
            </div>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/CP2NHQXCUXGL" className="mb-4 underline text-[2rem] font-cL mt-auto dark:text-white hover:text-secondary dark:hover:text-secondary">
              View Certificate
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start mb-20 w-full ">
        <div 
          ref={stanfordRef} 
          className={`flex flex-col lg:flex-row-reverse items-center lg:items-start w-full ml-20 mr-20 transition-transform duration-1000 ${
            stanfordVisible ? "image-slide-in" : "translate-y-10 opacity-0"
          }`}
        >
          <img 
            src={Stanford} 
            alt="Stanford Certificate" 
            className="rounded-[25px] w-[45rem] h-[30rem] transform transition-transform duration-2000 hover:scale-105 border-2 dark:border-white border-black mb-8 lg:mb-0 lg:ml-8" 
          />
          <div className="flex flex-col items-start justify-between h-[30rem] w-full lg:w-auto">
            <div className="text-[2.5rem] font-cF dark:text-white mt-4">
              Stanford Certification
            </div>
            <div className="text-[2rem] font-cL text-black dark:text-white flex-grow mt-10">
              This certificate is offered after completing the first course of Machine Learning Specialization by Stanford (Learning is in Progress).
            </div>
            <a href="https://www.coursera.org/account/accomplishments/verify/3WJMWE6D7N7B" className="underline text-[2rem] font-cL mt-auto dark:text-white hover:text-secondary dark:hover:text-secondary mb-4">
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certification
