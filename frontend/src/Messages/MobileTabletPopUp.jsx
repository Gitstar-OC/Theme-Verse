import { ImSad2 } from "react-icons/im";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import ThemeVerse from '../assets/Theme-Verse.mp4';

const styles = `
  .no-scroll {
    overflow: hidden;
  }

  .full-screen-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 110vw;
    height: 120vh;
    z-index: 1000;
    overflow: auto;
    bottom: 0
  }

  .video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

@media (max-width: 768px) {
  .font-cF {
    font-size: 1.75rem;
  }

  .font-cL {
    font-size: 1.25rem;
  }
  }
`;

const MobileTabletPopUp = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Add no-scroll class to body when component mounts
    document.body.classList.add("no-scroll");
    // Remove no-scroll class from body when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useEffect(() => {
    // Auto play video and start at 5 seconds
    const video = videoRef.current;
    if (video) {
      video.currentTime = 1;
      video.play();
    }
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="full-screen-popup">
        <div className="bg-footer bg-fixed bg-cover rounded-[25px] relative mx-auto" style={{ width: '110vw', height: '110vh' }}>
          <div className="flex flex-col items-center justify-center h-full p-4">
            <div className="flex items-center">
              <ImSad2 className="w-32 h-32 text-[#09FFB5] icon-bounce hover:text-white dark:hover:text-white" />
              <h1 className="font-cF text-[2.5rem] ml-4 text-white dark:text-white">
                Sorry, we are still discussing the design on smaller devices.
              </h1>
            </div>
            <p className="font-cL text-[2rem] text-slate-200 dark:text-white mt-4 mx-4 text-center">
              Sorry for the inconvenience as our team is still discussing how to show preview on smaller devices as the preview of computer, tablet cannot be shown on tablet ( Visible on ipad pro )and mobile respectively. You can see the below video to know more about the issue 😃.
            </p>
            <div className="video-container mt-4 mb-4">
              <div className="video-border-box">
                <video
                  ref={videoRef}
                  controls
                  className="h-auto w-[80vw] justify-center items-center rounded-[3vw] border-[5px] border-x-[#09FFB5] border-y-border"
                >
                  <source src={ThemeVerse} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <p className="underline text-white dark:text-white font-cL text-[2rem] text-center">
                Have more questions? Ask me on social media!
              </p>
              <div className="flex space-x-4 mt-4 justify-center">
                <a
                  href="https://github.com/Gitstar-OC"
                  className="text-white dark:text-white icon-bounce w-8 h-8 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]"
                >
                  <FaGithubSquare className="w-full h-full" />
                </a>
                <a
                  href="https://www.instagram.com/oc__coder/"
                  className="text-white dark:text-white icon-bounce w-8 h-8 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]"
                >
                  <FaInstagram className="w-full h-full" />
                </a>
                <a
                  href="https://www.linkedin.com/in/om-chandankar/"
                  className="text-white dark:text-white icon-bounce w-8 h-8 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]"
                >
                  <FaLinkedin className="w-full h-full" />
                </a>
                <a
                  href="https://x.com/Om_Chandankar"
                  className="text-white dark:text-white icon-bounce w-8 h-8 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]"
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

export default MobileTabletPopUp;
