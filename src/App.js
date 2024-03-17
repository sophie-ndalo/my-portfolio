// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MyCv from "./Components/MyCv";
import Work from "./Components/Work";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycv" element={<MyCv />} />
        <Route exact path="/work" element={<Work/>} />
        {/* Other routes */}
      </Routes>
   
  );
}

export default App;
