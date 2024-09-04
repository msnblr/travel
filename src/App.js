
import "./App.css";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
