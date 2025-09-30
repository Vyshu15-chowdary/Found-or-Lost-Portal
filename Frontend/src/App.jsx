import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Dashboard  from "./Pages/Dashboard.jsx";
import Found from "./Pages/Found.jsx";
import Lost from "./Pages/Lost.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/Found" element={<Found/>}/>
        <Route path="/Lost"element={<Lost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
