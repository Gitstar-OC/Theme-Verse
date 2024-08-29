import React, { useEffect, useRef, useState } from "react";
import { skillsData } from "../Constants/index";
import { skillsImage } from "../Constants/index";
import Marquee from "react-fast-marquee";

const Skills = () => {
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

  const getSkillAndPercentage = (skill) => {
    const [skillName, skillPercentage] = skill.split(' ');
    return { skillName, skillPercentage: parseInt(skillPercentage) };
  };

  return (
    <div
      id="skills"
      className="relative z-50 border-t-2 my-12 lg:my-24 border-heading  flex flex-col items-center"
    >
      <div className="backgroundAnim backgroundAnim1"></div>
      {/* <div className="backgroundAnim backgroundAnim2"></div> */}
      {/* <div className="backgroundAnim backgroundAnim3"></div> */}
      {/* <div className="backgroundAnim backgroundAnim4"></div> */}
      {/* <div className="backgroundAnim backgroundAnim5"></div> */}

      <div
        ref={sectionRef}
        className={`cartDiv transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } mb-8 mt-8 flex items-center justify-center`}
      >
        <div className="projectItem text-[2.5rem] text-center font-cF">
          Skills
        </div>
      </div>

      <div className="w-full my-12 flex justify-center">
        <div className="w-3/4 pointer-events-none">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => {
              const { skillName, skillPercentage } = getSkillAndPercentage(skill);
              const image = skillsImage(skillName)?.src || skillsImage(skillName);
              return (
                <div
                  className="w-36 min-w-fit h-48 flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                  key={id}
                >
                  <div className="h-full w-full rounded-lg border border-border bg-[#a6d2ea] shadow-none shadow-gray-50 group-hover:border-[#3F44C4] transition-all duration-500 bg-opacity-20 relative">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#3F44C4] to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 p-4 relative"> {/* Adjusted gap and padding */}
                      <div className="h-8 sm:h-10 z-10">
                        <img
                          src={image}
                          alt={skillName}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                        />
                      </div>
                      <p className="text-black dark:text-white text-sm sm:text-lg z-10">
                        {skillName}
                      </p>
                      {skillPercentage < 100 && (
                        <div className="w-full mt-1 z-10"> {/* Adjusted margin-top */}
                          <div className="relative w-full h-2 bg-gray-200 rounded-full">
                            <div
                              className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
                              style={{ width: `${skillPercentage}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {skillPercentage < 100 && (
                        <div className="tooltip absolute top-full left-1/2 transform -translate-x-1/2 mt-1 p-2 bg-black text-white dark:bg-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          I am learning this
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
