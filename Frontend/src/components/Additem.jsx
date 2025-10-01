// src/Pages/AddItem.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddItem() {
  const navigate = useNavigate();
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    location: "",
    type: "lost",
    date: new Date().toISOString().slice(0, 10), // default today
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // send POST request to backend
      await axios.post("http://localhost:5000/api/items", itemData);
      alert("Item added successfully!");
      navigate("/dashboard"); // redirect to dashboard
    } catch (err) {
      console.error(err);
      setError("Failed to add item. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Lost/Found Item</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Item Name
            </label>
            <input
              type="text"
              name="name"
              value={itemData.name}
              onChange={handleChange}
              required
              className="w-full border-gray-300 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={itemData.description}
              onChange={handleChange}
              className="w-full border-gray-300 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={itemData.location}
              onChange={handleChange}
              className="w-full border-gray-300 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Type
            </label>
            <select
              name="type"
              value={itemData.type}
              onChange={handleChange}
              className="w-full border-gray-300 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="lost">Lost</option>
              <option value="found">Found</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={itemData.date}
              onChange={handleChange}
              className="w-full border-gray-300 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={itemData.image}
              onChange={handleChange}
              placeholder="Optional"
              className="w-full border-gray-300 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
          >
            {loading ? "Adding..." : "+ Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
}
