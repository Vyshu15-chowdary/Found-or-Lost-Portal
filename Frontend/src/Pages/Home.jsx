import { useState, useEffect } from "react";

// Import your images
import collegeLogo from "../assets/college-logo.jpeg";
import heroImage from "../assets/college-hero.jpeg";

export default function Home() {
  const [items, setItems] = useState([
    {
      id: 1,
      type: "Lost",
      title: "Black Wallet",
      description: "Lost near library",
      date: "2025-09-28",
    },
    {
      id: 2,
      type: "Found",
      title: "Blue Water Bottle",
      description: "Found in canteen",
      date: "2025-09-29",
    },
    {
        id:3,
        type:"Found",
        title:"boat earpods",
        description:"Found in 209 A-block",
        date:"2025-09-28",
    }
  ]);

  // Later fetch from backend
  useEffect(() => {
    // axios.get("/api/items").then(res => setItems(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex items-center">
        <img src={collegeLogo} alt="College Logo" className="h-12 mr-4" />
        <h1 className="text-2xl font-bold text-blue-600">
          Narayana Engineering College Lost & Found Portal
        </h1>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img
          src={heroImage}
          alt="College Campus"
          className="w-full h-64 object-cover brightness-90"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl text-blue-500 font-bold text-center">
            Helping Students Recover Lost Items Quickly
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section className="p-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">About This Portal</h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          This portal helps students report lost items and claim found items
          across the college campus. Users can post details of lost or found
          belongings, search for items, and connect with the owner/finder
          directly.
        </p>
      </section>

      {/* Latest Lost & Found Items */}
      <section className="p-6">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Latest Lost & Found Items
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition"
            >
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full mb-2 ${
                  item.type === "Lost"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {item.type}
              </span>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-400 text-sm mt-2">📅 {item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
