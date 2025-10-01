import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Dashboard  from "./Pages/Dashboard.jsx";
import Found from "./Pages/Found.jsx";
import Lost from "./Pages/Lost.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ItemCard from "./components/ItemCard.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <>
   
    <BrowserRouter>
       <Navbar/>
        <AuthProvider/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/Found" element={<Found/>}/>
        <Route path="/Lost"element={<Lost/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="signUp" element={<Signup/>}/>
       
      </Routes>
     
      
    </BrowserRouter>
   
    </>
    
  );
}

export default App;
