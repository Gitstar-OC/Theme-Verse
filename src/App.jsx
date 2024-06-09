import "./index.css";
import { Home, Contact, Themes, Cart, About } from "./Container/Exports";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
