import { ImSad2 } from "react-icons/im";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect } from "react";

const iframeUrl = "https://drive.google.com/file/d/1vQ6cUC4bLybjXA0hOWquSFigpoVrwWZG/preview";

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
    bottom: 0;
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
  useEffect(() => {
    // Add no-scroll class to body when component mounts
    document.body.classList.add("no-scroll");

    // Example fetch request with CORS using GET
    fetch('https://play.google.com/log?format=json&hasfast=true&authuser=0', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      // handle your data here
    })
    .catch(error => {
      // handle your error here
    });

    // Remove no-scroll class from body when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
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
              Sorry for the inconvenience as our team is still discussing how to show preview on smaller devices as the preview of computer, tablet cannot be shown on tablet (Visible on iPad Pro) and mobile respectively. You can see the below video to know more about the issue 😃.
            </p>
            <div className="video-container mt-4 mb-4">
              <iframe
                src={iframeUrl}
                className="w-[100vw] h-[53vw] rounded-[3vw] border-[5px] border-x-[#09FFB5] border-y-border"
                allow="autoplay"
                allowFullScreen
              ></iframe>
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
                  href="https://www.instagram.com/chandankar_om/"
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
