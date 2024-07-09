import './index.css';
import MainLayout from './MainLayout';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  useEffect(() => {
    // Set initial zoom level to 90%
    document.body.style.zoom = '90%';
  }, []);

  return (
    <>
      <ScrollToTop />
      <MainLayout />
      <SpeedInsights/>
      <Analytics/>
    </>
  );
}

export default App;
