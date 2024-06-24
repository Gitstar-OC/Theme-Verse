import { useEffect, useState } from "react";
import { FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { projects } from "../Constants/index";

const styles = `
  .no-scroll {
    overflow: hidden;
  }
`;

const ViewPreview = ({ projectId, onClose }) => {
  const project = projects.find((project) => project.id === projectId);
  const [isMaximized, setIsMaximized] = useState(false);
  const [deviceType, setDeviceType] = useState("computer"); // "computer", "tablet", "mobile"

  useEffect(() => {
    // Add no-scroll class to body when component mounts
    document.body.classList.add("no-scroll");

    // Remove no-scroll class from body when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const getIframeStyle = () => {
    switch (deviceType) {
      case "mobile":
        return { width: "375px", height: "667px" }; // iPhone 6/7/8 dimensions
      case "tablet":
        return { width: "768px", height: "1024px" }; // iPad dimensions
      case "computer":
      default:
        return { width: "1080px", height: isMaximized ? "calc(100vh - 60px)" : "75vh" };
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

  return (
    <>
      <style>{styles}</style>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden" style={getIframeStyle()}>
          <div className="bg-gray-300 dark:bg-gray-900 w-full h-12 flex items-center justify-between px-4">
            <div className="flex space-x-4 justify-center w-full">
              <button
                onClick={() => handleDeviceChange("mobile")}
                className="text-black dark:text-white text-xl cursor-pointer"
              >
                <FaMobileAlt />
              </button>
              <button
                onClick={() => handleDeviceChange("tablet")}
                className="text-black dark:text-white text-xl cursor-pointer"
              >
                <FaTabletAlt />
              </button>
              <button
                onClick={() => handleDeviceChange("computer")}
                className="text-black dark:text-white text-xl cursor-pointer"
              >
                <RiComputerLine />
              </button>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleMaximizeToggle}
                className="text-black dark:text-white text-2xl cursor-pointer"
              >
                {isMaximized ? <FiMinimize2 /> : <FiMaximize2 />}
              </button>
              <button
                onClick={onClose}
                className="text-blue-700 dark:text-red-500 text-2xl cursor-pointer"
              >
                <IoClose />
              </button>
            </div>
          </div>
          <iframe
            src={project.url}
            title={project.name}
            className="border-1 rounded-lg"
            style={{ width: "100%", height: "calc(100% - 48px)", borderWidth: "1px" }}
          />
        </div>
      </div>
    </>
  );
};

export default ViewPreview;
