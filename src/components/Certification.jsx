import Meta from "../assets/MetaCertificate.png"
import Stanford from "../assets/StanfordCertificate.png"
import { useEffect, useRef, useState } from "react"

const Certification = () => {
  const sectionRef = useRef(null);
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
    <div className="border-t-2 my-12 lg:my-24 border-heading  flex flex-col items-center">
    <div
        ref={sectionRef}
        className={`cartDiv transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } mb-8 mt-8 flex items-center justify-center`}
      >
        <div className="projectItem text-[2.5rem] text-center font-cF">
          Certification
        </div>
      </div>
      <img src={Meta} alt="meta certificate" className="rounded-[25px] w-[45rem] h-[30rem] my-20" />
      <img src={Stanford} alt="Stanford Certificate" className="rounded-[25px] w-[45rem] h-[30rem]"/>
    </div>
    </>
  )
}

export default Certification