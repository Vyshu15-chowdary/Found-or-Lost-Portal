import React, { useEffect, useState } from "react";
import ItemCard from "../components/itemCard.jsx";
import { getItems } from "../Services/itemService.js";

export default function Lost() {
  const [lostItems, setLostItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const items = await getItems();
        setLostItems(items.filter((item) => item.status === "lost")); // use status
      } catch (err) {
        console.error("Failed to fetch lost items:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLostItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 mt-24">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
          Lost Items
        </h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : lostItems.length === 0 ? (
          <p className="text-center text-gray-600">
            No lost items reported yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lostItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
