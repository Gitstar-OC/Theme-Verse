// import { BrowserRouter as Route, Routes } from 'react-router-dom';
import { Navigation, Home, Projects, Footer } from './Container/Exports'
import './index.css';

function App() {
  return (
      <>
        <Navigation />
        {/* <Routes>
          <Route path="/" element={<Home />} /> */}
          {/* <Route path="/themes" element={<Projects />} />
          <Route path="/about" element={<Projects />} />
          <Route path="/contact" element={<Projects />} />
          <Route path="/cart" element={<Projects />} /> */}
        {/* </Routes> */}
        <Home /> 
        <Projects /> 
        <Footer />
      </>
  );
}

export default App;

