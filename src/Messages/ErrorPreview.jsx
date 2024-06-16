import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { ImSad } from "react-icons/im";

const styles = `
  .no-scroll {
    overflow: hidden;
  }
`;

const ErrorPreview = ({ onClose }) => {
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
      <div>{styles}</div>
      <div className="message-overlay message-animation">
        <div className="bg-message bg-fixed bg-cover rounded-[25px] relative mt-32 mb-32 ml-96 mr-[25rem]">
          <IoClose
            className="cursor-pointer absolute top-4 right-4 text-[#0500FF] w-[3rem] h-[3rem] hover:text-[#09FFB5] dark:hover:text-[#09FFB5]"
            onClick={onClose}
          />
          <div className="flex flex-col ml-10">
            <div className="flex mt-10">
              <ImSad className="w-16 h-16 mt-4 text-white hover:text-[#09FFB5] dark:hover:text-[#09FFB5] icon-bounce" />
              <h1 className="font-cF text-[2.5rem] ml-4 mr-20 text-white">
                Oops, You need a larger screen!
              </h1>
            </div>

            <p className="font-cL text-[1.75rem] text-white mt-10 ml-24 mr-10">
              Sorry to view the preview of the website you need to have a display whose width is larger than or equal to 1080 px. 🙁
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPreview;
