import React, { useEffect, useState } from "react";
import ItemCard from "../components/itemCard.jsx";
import { getItems } from "../Services/itemService.js";

export default function Found() {
  const [foundItems, setFoundItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        const items = await getItems();
        setFoundItems(items.filter((item) => item.status === "found"));
      } catch (err) {
        console.error("Failed to fetch found items:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoundItems();
  }, []);

  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/background2.jpg')" }} 
    >
      

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
          Found Items
        </h2>

        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : foundItems.length === 0 ? (
          <p className="text-center text-white text-opacity-80">
            No found items reported yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundItems.map((item) => (
              <div
                key={item.id}
                className="bg-white bg-opacity-90 shadow-lg rounded-lg p-4"
              >
                <ItemCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
