// App.js
import React from "react";
import { BrowserRouter as  Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MyCv from "./Components/MyCv";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-cv" element={<MyCv />} />
        {/* Other routes */}
      </Routes>
   
  );
}

export default App;
