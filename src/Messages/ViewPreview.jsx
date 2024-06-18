import { useEffect, useState } from "react";
import { FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { projects } from "../Constants/index";

const ViewPreview = ({ projectId, onClose }) => {
  const project = projects.find((project) => project.id === projectId);
  const [isMaximized, setIsMaximized] = useState(false);
  const [deviceType, setDeviceType] = useState("computer"); // "computer", "tablet", "mobile"

  useEffect(() => {
    // Disable scroll when the modal is active
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scroll when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  const getIframeStyle = () => {
    switch (deviceType) {
      case "mobile":
        return { width: "375px", height: "667px" }; // iPhone 6/7/8 dimensions
      case "tablet":
        return { width: "768px", height: "100vh" }; // Adjusted to not exceed 100vh
      case "computer":
      default:
        const width = window.innerWidth > 1440 ? "100vw" : "1440px";
        const height = isMaximized ? "100vh" : "80vh";
        return { width, height };
    }
  };

  const handleDeviceChange = (device) => {
    setDeviceType(device);
  };

  const handleMaximizeToggle = () => {
    if (!isMaximized) {
      // Request full-screen
      document.documentElement.requestFullscreen();
    } else {
      // Exit full-screen
      document.exitFullscreen();
    }
    setIsMaximized((prev) => !prev);
  };

  const handleClose = () => {
    if (isMaximized) {
      document.exitFullscreen();
      setIsMaximized(false);
    }
    onClose();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative bg-white dark:bg-gray-800" style={getIframeStyle()}>
          <div className="bg-gray-300 dark:bg-gray-900 w-full h-12 flex items-center justify-center px-4">
            <div className="flex space-x-4">
              <button
                onClick={() => handleDeviceChange("mobile")}
                className="text-[#0500FF] hover:text-black dark:hover:text-[#09FFB5] text-[1.5rem] cursor-pointer"
              >
                <FaMobileAlt />
              </button>
              <button
                onClick={() => handleDeviceChange("tablet")}
                className="text-[#0500FF] hover:text-black dark:hover:text-[#09FFB5] text-[1.5rem] cursor-pointer"
              >
                <FaTabletAlt />
              </button>
              <button
                onClick={() => handleDeviceChange("computer")}
                className="text-[#0500FF] hover:text-black dark:hover:text-[#09FFB5] text-[1.5rem] cursor-pointer"
              >
                <RiComputerLine />
              </button>
            </div>
            <div className="absolute right-0 flex space-x-2">
              <button
                onClick={handleMaximizeToggle}
                className="text-[#0500FF] hover:text-black dark:hover:text-[#09FFB5] text-[2rem] cursor-pointer"
              >
                {isMaximized ? <FiMinimize2 /> : <FiMaximize2 />}
              </button>
              <button
                onClick={handleClose}
                className="text-[#0500FF] hover:text-black dark:hover:text-[#09FFB5] text-[2.5rem] cursor-pointer "
              >
                <IoClose />
              </button>
            </div>
          </div>
          <iframe
            src={project.url}
            title={project.name}
            className="border-1 rounded-[25px]"
            style={{ width: "100%", height: "calc(100% - 48px)", borderWidth: "1px" }}
          />
        </div>
      </div>
    </>
  );
};

export default ViewPreview;
