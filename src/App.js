// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MyCv from "./Components/MyCv";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycv" element={<MyCv />} />
        {/* Other routes */}
      </Routes>
   
  );
}

export default App;
