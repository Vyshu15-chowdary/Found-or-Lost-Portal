import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard.jsx";
import { getItems } from "../Services/itemService.js";

export default function Home() {
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getItems();
        setLostItems(items.filter((item) => item.type === "lost"));
        setFoundItems(items.filter((item) => item.type === "found"));
      } catch (err) {
        console.error("Failed to fetch items:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100">
      {/* Navbar */}
      <header className="bg-white/70 backdrop-blur-md shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
          <Link to="/" className="text-2xl font-extrabold text-blue-600">
            🎒 Lost&Found
          </Link>
          <nav className="space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/add-item"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition"
            >
              Report Item
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Recover Lost Items.  
            <br />
            Connect With Helpers Instantly.
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            A student-driven Lost & Found portal to make recovering your belongings easy, fast, and reliable.
          </p>
          <Link
            to="/add-item"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full shadow-lg transition"
          >
            🚀 Report an Item Now
          </Link>
        </div>

        {/* Decorative waves at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 320" className="w-full h-32 text-white">
            <path
              fill="currentColor"
              d="M0,192L60,176C120,160,240,128,360,117.3C480,107,600,117,720,138.7C840,160,960,192,1080,186.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 mt-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Why Use Our Portal?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">📢 Instant Reporting</h3>
            <p className="text-gray-600">Report lost or found items in seconds with our simple form.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">🔍 Easy Search</h3>
            <p className="text-gray-600">Find your belongings with powerful filters and recent updates.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">🤝 Community Help</h3>
            <p className="text-gray-600">Students helping students — recover items faster together.</p>
          </div>
        </div>
      </section>

      {/* Latest Lost Items */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-red-600">
          🚨 Latest Lost Items
        </h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : lostItems.length === 0 ? (
          <p className="text-center text-gray-500">No lost items reported yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lostItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>

      {/* Latest Found Items */}
      <section className="max-w-6xl mx-auto px-6 mt-20 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-600">
          ✅ Latest Found Items
        </h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : foundItems.length === 0 ? (
          <p className="text-center text-gray-500">No found items reported yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foundItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p className="text-lg font-semibold">🎒 Lost & Found Portal</p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} Built with ❤️ by Students
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Help</a>
        </div>
      </footer>
    </div>
  );
}
