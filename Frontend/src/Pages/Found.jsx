import React, { useEffect, useState } from "react";
import ItemCard from "../components/itemCard.jsx";
import { getItems } from "../Services/itemService.js";

export default function Found() {
  const [foundItems, setFoundItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        const items = await getItems(); // fetch all items
        setFoundItems(items.filter((item) => item.status === "found")); // use status
      } catch (err) {
        console.error("Failed to fetch found items:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoundItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 mt-24">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
          Found Items
        </h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : foundItems.length === 0 ? (
          <p className="text-center text-gray-600">
            No found items reported yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
