import { useState, useEffect } from "react";

export default function Lost() {
  // Dummy data (replace with API later)
  const [lostItems, setLostItems] = useState([
    {
      id: 1,
      title: "Black Wallet",
      description: "Lost near library",
      date: "2025-09-28",
      location: "Library",
    },
    {
      id: 2,
      title: "ID Card",
      description: "Lost in parking area",
      date: "2025-09-30",
      location: "Parking Lot",
    },
  ]);

  // Later fetch from backend
  useEffect(() => {
    // Example: axios.get("/api/items/lost").then(res => setLostItems(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Lost Items</h1>

      {lostItems.length === 0 ? (
        <p className="text-center text-gray-500">No lost items reported yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {lostItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition"
            >
              <span className="inline-block px-3 py-1 text-sm rounded-full mb-2 bg-red-100 text-red-600">
                Lost
              </span>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-400 text-sm mt-2">📅 {item.date}</p>
              <p className="text-gray-400 text-sm mt-1">📍 {item.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
