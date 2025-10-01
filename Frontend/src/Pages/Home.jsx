
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
        const items = await getItems(); // fetch all items from backend
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
    <div className="min-h-screen bg-gray-50">
    
     
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
             
              
            </Link>
          
          </div>
        </div>
     

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[450px] flex items-center justify-center"
        style={{ backgroundImage: "url('/college-hero.jpeg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Helping Students Recover Lost Items Quickly
          </h1>
          <p className="mb-4">
            Report lost or found items instantly. Stay updated with the latest
            posts and help your peers recover belongings faster!
          </p>
          <Link
            to="/add-item"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded"
          >
            Report an Item
          </Link>
        </div>
      </section>

      {/* About Portal Section */}
      <section className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          About the Portal
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
          Our Lost & Found Portal is dedicated to helping students quickly
          recover their lost belongings. You can report lost items, notify found
          items, and keep track of recent updates—all in one interactive platform.
        </p>
      </section>

      {/* Latest Lost Items */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
          Latest Lost Items
        </h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : lostItems.length === 0 ? (
          <p className="text-center text-gray-600">No lost items reported yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lostItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>

      {/* Latest Found Items */}
      <section className="max-w-6xl mx-auto px-4 mt-10 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-500">
          Latest Found Items
        </h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : foundItems.length === 0 ? (
          <p className="text-center text-gray-600">No found items reported yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
