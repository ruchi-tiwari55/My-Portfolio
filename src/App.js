import React from "react";
import "./index.css"
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";
import AboutContent from "./component/AboutContent";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     </Routes>
     <AboutContent/>
    
    </>
  );
}

export default App;
