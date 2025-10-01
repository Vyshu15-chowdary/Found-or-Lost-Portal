import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Dummy auth state (replace with real auth context)
  const isLoggedIn = false; // Change to true if user is logged in

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDashboard = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/college-logo.jpeg" alt="College Logo" className="h-10 mr-2" />
            <span className="font-bold text-xl text-blue-600">
              Lost & Found Portal
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
            >
              Home
            </Link>
            <Link
              to="/lost"
              className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
            >
              Lost
            </Link>
            <Link
              to="/found"
              className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
            >
              Found
            </Link>
            <button
              onClick={handleDashboard}
              className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
            >
              Dashboard
            </button>

            {!isLoggedIn && (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
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
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-1">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/lost"
            className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
            onClick={toggleMenu}
          >
            Lost
          </Link>
          <Link
            to="/found"
            className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
            onClick={toggleMenu}
          >
            Found
          </Link>
          <button
            onClick={() => {
              handleDashboard();
              toggleMenu();
            }}
            className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded w-full text-left"
          >
            Dashboard
          </button>
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
                onClick={toggleMenu}
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
