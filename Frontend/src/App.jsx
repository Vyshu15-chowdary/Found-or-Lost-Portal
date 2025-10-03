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
import EditItem from "./Pages/Edititem.jsx";
import Footer from "./components/Footer.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


import { AuthProvider } from "./context/AuthContext.jsx";
import AddItem from "./Pages/Additem.jsx";

function App() {
  return (
    <>
   
    <BrowserRouter>
       <Navbar/>
        <AuthProvider/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={ <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>}/>
        <Route path="/Found" element={<ProtectedRoute>
          <Found/></ProtectedRoute>}/>
        <Route path="/Lost"element={<ProtectedRoute><Lost/></ProtectedRoute>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/signUp" element={<Signup/>}/>
        <Route path = "/items" element={<Found/>}/>
        <Route path ="/Add-item" element={<AddItem/>}/>
        <Route path="/edit-item/:id" element={<EditItem/>}/>
       
        
       
      </Routes>
     <Footer/>
      
    </BrowserRouter>
   
    </>
    
  );
}

export default App;
