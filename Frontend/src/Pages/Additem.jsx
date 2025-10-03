import React, { useState } from "react";
import axios from "axios";

export default function AddItem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState("found"); // default type
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debug: check what is being sent
    console.log({ title, description, contact, type });

    // Simple validation
    if (!title || !type) {
      setMessage("Title and Type are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/items", {
        title,
        description,
        contact,
        type,
      });

      setMessage("Item added successfully!");
      // Clear form
      setTitle("");
      setDescription("");
      setContact("");
      setType("found");
      console.log(response.data);
    } catch (err) {
      console.error(err.response?.data || err);
      setMessage(err.response?.data?.error || "Failed to add item");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add Item</h2>

        {message && <p className="mb-4 text-center text-red-500">{message}</p>}

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Item Title"
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact Info"
          className="w-full p-2 mb-3 border rounded"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        >
          <option value="found">Found</option>
          <option value="lost">Lost</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
