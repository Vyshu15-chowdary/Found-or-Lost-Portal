
import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../Services/authService.js";

export default function ProtectedRoute({ children }) {
  const token = getToken();

  if (!token) {
    
    return <Navigate to="/login" replace />;
  }

  // User logged in → render the protected component
  return children;
}
