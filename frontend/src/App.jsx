import './index.css';
import MainLayout from './MainLayout';
import ScrollToTop from './components/ScrollToTop';
import { useEffect, useState } from 'react';
// import PopUp from './Messages/PopUp';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const checkZoomLevel = () => {
    const zoomLevel = Math.round(window.devicePixelRatio * 100);
    return zoomLevel !== 90;
  };

  useEffect(() => {
    const handleZoomChange = () => {
      if (checkZoomLevel()) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    // Set initial zoom level
    if (checkZoomLevel()) {
      document.body.style.zoom = '90%';
    }

    // Add event listeners
    window.addEventListener('resize', handleZoomChange);
    window.addEventListener('wheel', handleZoomChange, { passive: true });
    window.addEventListener('keydown', handleZoomChange);

    return () => {
      window.removeEventListener('resize', handleZoomChange);
      window.removeEventListener('wheel', handleZoomChange);
      window.removeEventListener('keydown', handleZoomChange);
    };
  }, []);

  const handleResize = () => {
    document.body.style.zoom = '90%';
    setShowPopup(false);
  };

  return (
    <>
      <ScrollToTop />
      <MainLayout />
      {showPopup && <PopUp onResize={handleResize} />}
    </>
  );
}

export default App;
