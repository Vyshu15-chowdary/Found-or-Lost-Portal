import { Link } from "react-router-dom";
import collegeLogo from "../assets/college-logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <div className="flex items-center mb-4">
            <img src={collegeLogo} alt="College Logo" className="h-10 mr-2" />
            <span className="text-xl font-bold text-yellow-400">
              Lost & Found Portal
            </span>
          </div>
          <p className="text-gray-400">
            A portal to help students report and recover lost items within the
            college campus quickly and efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/lost" className="hover:text-yellow-400">
                Lost
              </Link>
            </li>
            <li>
              <Link to="/found" className="hover:text-yellow-400">
                Found
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-yellow-400">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400">📍 College Campus, City</p>
          <p className="text-gray-400">📧 support@college.edu</p>
          <p className="text-gray-400">📞 +91 98765 43210</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400 border-t border-gray-700">
        © {new Date().getFullYear()} Your College Name — All Rights Reserved
      </div>
    </footer>
  );
}
