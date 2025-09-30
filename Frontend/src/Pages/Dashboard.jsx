import { useState, useEffect } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Lost");
  const [items, setItems] = useState([
    {
      id: 1,
      type: "Lost",
      title: "Black Wallet",
      description: "Lost near library",
      date: "2025-09-28",
      status: "Pending",
    },
    {
      id: 2,
      type: "Found",
      title: "Blue Water Bottle",
      description: "Found in canteen",
      date: "2025-09-29",
      status: "Claimed",
    },
  ]);

  const [newItem, setNewItem] = useState({
    type: "Lost",
    title: "",
    description: "",
    date: "",
  });

  // Filter items by tab
  const filteredItems = items.filter((item) => item.type === activeTab);

  const handleAddItem = (e) => {
    e.preventDefault();
    const itemToAdd = { ...newItem, id: Date.now(), status: "Pending" };
    setItems([itemToAdd, ...items]);
    setNewItem({ type: "Lost", title: "", description: "", date: "" });
    setActiveTab(newItem.type);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-6 space-x-4">
        {["Lost", "Found", "Post"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 shadow hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Post" ? (
        // Post New Item Form
        <form
          className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
          onSubmit={handleAddItem}
        >
          <label className="block mb-2 font-semibold">Type</label>
          <select
            value={newItem.type}
            onChange={(e) =>
              setNewItem({ ...newItem, type: e.target.value })
            }
            className="w-full mb-4 p-2 border rounded"
          >
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>

          <label className="block mb-2 font-semibold">Title</label>
          <input
            type="text"
            value={newItem.title}
            onChange={(e) =>
              setNewItem({ ...newItem, title: e.target.value })
            }
            className="w-full mb-4 p-2 border rounded"
            required
          />

          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
            className="w-full mb-4 p-2 border rounded"
            required
          />

          <label className="block mb-2 font-semibold">Date</label>
          <input
            type="date"
            value={newItem.date}
            onChange={(e) =>
              setNewItem({ ...newItem, date: e.target.value })
            }
            className="w-full mb-4 p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Post Item
          </button>
        </form>
      ) : (
        // Lost or Found Items
        <div className="grid md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
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
              <p className="mt-2">
                <b>Status:</b>{" "}
                <span
                  className={`font-semibold ${
                    item.status === "Pending"
                      ? "text-yellow-500"
                      : "text-green-600"
                  }`}
                >
                  {item.status}
                </span>
              </p>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">
              No {activeTab.toLowerCase()} items yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
