import React, { useEffect, useState } from "react";
import { getItems } from "../Services/itemService";

export default function Lost() {
  const [lostItems, setLostItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLostItems = async () => {
      const items = await getItems();
      // Filter only lost items
      const lost = items.filter((item) => item.type === "lost");
      setLostItems(lost);
      setLoading(false);
    };
    fetchLostItems();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading lost items...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Lost Items</h2>
      {lostItems.length === 0 ? (
        <p className="text-center">No lost items found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lostItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-gray-500 mb-1">Location: {item.location}</p>
              <p className="text-gray-500">Date: {new Date(item.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
