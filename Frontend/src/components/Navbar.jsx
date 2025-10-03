// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getToken, logout } from "../Services/authService.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDashboard = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/college-logo.jpeg"
              alt="College Logo"
              className="h-10 w-10 rounded-full border-2 border-blue-500 mr-3"
            />
            <span className="font-extrabold text-lg sm:text-xl text-blue-700 group-hover:text-blue-800 transition">
              NECN Lost & Found Portal
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" label="Home" />
            <NavLink to="/lost" label="Lost" />
            <NavLink to="/found" label="Found" />
            <NavLink to ="/about" label="About"/>

            {isLoggedIn ? (
              <>
                <button
                  onClick={handleDashboard}
                  className="relative px-3 py-2 text-gray-700 hover:text-blue-600 transition group"
                >
                  Dashboard
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" label="Login" />
                <Link
                  to="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-3 pb-4 space-y-2 animate-fadeIn">
          <NavLink to="/" label="Home" mobile onClick={toggleMenu} />
          <NavLink to="/lost" label="Lost" mobile onClick={toggleMenu} />
          <NavLink to="/found" label="Found" mobile onClick={toggleMenu} />
          <NavLink to ="/about" label="About" mobile onClick={toggleMenu}/>

          {isLoggedIn ? (
            <>
              <button
                onClick={() => {
                  handleDashboard();
                  toggleMenu();
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="block w-full text-left bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" label="Login" mobile onClick={toggleMenu} />
              <Link
                to="/signup"
                onClick={toggleMenu}
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, label, mobile, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-3 py-2 transition ${
        mobile
          ? "block text-gray-700 hover:text-blue-500"
          : "text-gray-700 hover:text-blue-600 group"
      }`}
    >
      {label}
      {!mobile && (
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
      )}
    </Link>
  );
}
