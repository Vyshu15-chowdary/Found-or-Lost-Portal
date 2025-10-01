import React, { useEffect, useState } from "react";
import { getItems } from "../Services/itemService.js";

export default function Home() {
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getItems();
      // Separate lost and found
      setLostItems(items.filter((item) => item.type === "lost"));
      setFoundItems(items.filter((item) => item.type === "found"));
      setLoading(false);
    };
    fetchItems();
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-lg">Loading items...</p>;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      {/* College info */}
      <div className="text-center mb-10">
        <img
          src="/college-logo.jpeg"
          alt="College Logo"
          className="mx-auto h-24 mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
          Helping Students Recover Lost Items Quickly
        </h1>
        <p className="text-gray-700">
          Welcome to the Lost & Found Portal of XYZ College. Report lost or found
          items easily and stay updated with the latest posts.
        </p>
      </div>

      {/* Lost Items Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
          Latest Lost Items
        </h2>
        {lostItems.length === 0 ? (
          <p className="text-center">No lost items reported yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lostItems.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-2">{item.description}</p>
                <p className="text-gray-500 mb-1">Location: {item.location}</p>
                <p className="text-gray-500">
                  Date: {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Found Items Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-500">
          Latest Found Items
        </h2>
        {foundItems.length === 0 ? (
          <p className="text-center">No found items reported yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundItems.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-2">{item.description}</p>
                <p className="text-gray-500 mb-1">Location: {item.location}</p>
                <p className="text-gray-500">
                  Date: {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
