import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFillSendXFill } from "react-icons/bs";

// CSS for overlay and disabling scroll
const styles = `
  .no-scroll {
    overflow: hidden;
  }
`;

const MessageNotSuccessful = ({ onClose }) => {
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
      {/* Inject styles */}
      <style>{styles}</style>
      <div className="message-overlay message-animation">
        <div className="bg-message bg-fixed bg-cover rounded-[25px] relative mt-32 mb-32 ml-96 mr-[25rem]">
          <IoClose
            className="cursor-pointer absolute top-4 right-4 text-[#0500FF] w-[3rem] h-[3rem] hover:text-[#09FFB5] dark:hover:text-[#09FFB5]"
            onClick={onClose}
          />
          <div className="flex flex-col ml-10">
            <div className="flex mt-10">
              <BsFillSendXFill className="w-16 h-16 mt-4 text-white hover:text-[#09FFB5] dark:hover:text-[#09FFB5]" />
              <h1 className="font-cF text-[3rem] ml-10 text-white">Oops! Message could not be sent.</h1>
            </div>
            <p className="font-cL text-[2.25rem] text-white mt-4 ml-24 mr-10">
              Sorry your message cannot be sent due to backend, server and CORS issue. Please message us via the below links 🙂.
            </p>
            <div className="mt-4 mb-4">
              <p className="underline text-white font-cL text-[1.5rem]">Message us on other platforms</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/Gitstar-OC" className="text-white icon-bounce w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]">
                  <FaGithubSquare className="w-full h-full" />
                </a>
                <a href="https://www.instagram.com/oc__coder/" className="text-white icon-bounce w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]">
                  <FaInstagram className="w-full h-full" />
                </a>
                <a href="https://www.linkedin.com/in/om-chandankar/" className="text-white icon-bounce w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]">
                  <FaLinkedin className="w-full h-full" />
                </a>
                <a href="https://x.com/Om_Chandankar" className="text-white icon-bounce w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]">
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

export default MessageNotSuccessful;
