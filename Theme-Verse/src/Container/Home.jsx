// import React from "react";
import { Navigation, Projects, Main, Footer } from './Exports'

const Home = () => {
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
      <Main />
      <Projects />
      <Footer />
    </>
  );
};
export default Home;
