import { useState, useEffect } from "react";

export default function Found() {
  // Dummy data (replace with API later)
  const [foundItems, setFoundItems] = useState([
    {
      id: 1,
      title: "Blue Water Bottle",
      description: "Found in canteen near the counter",
      date: "2025-09-29",
      location: "Canteen",
    },
    {
      id: 2,
      title: "Black Umbrella",
      description: "Found in library study hall",
      date: "2025-09-27",
      location: "Library",
    },
  ]);

  // Later fetch from backend
  useEffect(() => {
    // Example: axios.get("/api/items/found").then(res => setFoundItems(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Found Items</h1>

      {foundItems.length === 0 ? (
        <p className="text-center text-gray-500">No found items yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {foundItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition"
            >
              <span className="inline-block px-3 py-1 text-sm rounded-full mb-2 bg-green-100 text-green-600">
                Found
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
