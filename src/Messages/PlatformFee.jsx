import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { MdConstruction } from "react-icons/md";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const styles = `
  .no-scroll {
    overflow: hidden;
  }
`;

const PlatformFee = ({ onClose }) => {
  useEffect(() => {
    // Add no-scroll class to body when component mounts
    document.body.classList.add("no-scroll");

    // Remove no-scroll class from body when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="message-overlay message-animation">
        <div className="bg-message  rounded-[25px] relative mt-32 mb-32  ml-96 mr-[25rem]">
          <IoClose
            onClick={onClose}
            className="cursor-pointner absolute top-4 right-4 text-[#0500FF] w-[3rem] h-[3rem] hover:text-[#09FFB5] dark:hover:text-[#09FFB5]"
          />

          <div className=" flex flex-col ml-10 ">
            <div className="flex mt-10">
              <MdConstruction className="w-20 h-20 mt-4  text-[#0500FF] " />
              <h1 className="font-cF text-[3rem]  ml-10 text-black dark:text-white ">
                Page Under Construction
              </h1>
            </div>
            <p className="font-cL text-[2.25rem] text-black dark:text-white  mt-4 ml-28 mr-16">
              Oops!! it looks like this page has not been created as it needs
              back end which I am learning currently. Sorry for this
              Inconvenience. 🙁
            </p>

            <div className="mt-4 mb-4">
              <p className="underline text-black dark:text-white  font-cL text-[1.5rem] ">
                Follow on other platform
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/Gitstar-OC"
                  className=" text-black dark:text-white icon-bounce  w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5] "
                >
                  <FaGithubSquare className="w-full h-full" />
                </a>
                <a
                  href="https://www.instagram.com/oc__coder/"
                  className=" text-black dark:text-white icon-bounce w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5] "
                >
                  <FaInstagram className="w-full h-full" />
                </a>
                <a
                  href="https://www.linkedin.com/in/om-chandankar/"
                  className=" text-black dark:text-white icon-bounce  w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5] "
                >
                  <FaLinkedin className="w-full h-full" />
                </a>
                <a
                  href="https://x.com/Om_Chandankar"
                  className="text-black dark:text-white icon-bounce w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5] "
                >
                  <FaSquareXTwitter className="w-full h-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformFee;