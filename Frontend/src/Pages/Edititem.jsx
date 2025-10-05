import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    contact: "",
    type: "", // status: found/lost
  });

  // Load item data
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("You must be logged in to edit items");
          navigate("/login");
          return;
        }

        const res = await axios.get(`http://localhost:5000/api/items/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setFormData({
          title: res.data.title || "",
          description: res.data.description || "",
          contact: res.data.contact || "",
          type: res.data.status || "",
        });
      } catch (err) {
        console.error("Failed to load item", err);
        alert("Failed to load item. Make sure you have access.");
      }
    };

    fetchItem();
  }, [id, navigate]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit updated item
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to update items");
        navigate("/login");
        return;
      }

      await axios.put(`http://localhost:5000/api/items/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Item updated successfully!");
      navigate("/"); // Redirect back to dashboard
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update item. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-96"
      >
        <h2 className="text-2xl font-bold mb-4">✏️ Edit Item</h2>

        <label className="block mb-2 font-semibold">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded w-full p-2 mb-4"
          required
        />

        <label className="block mb-2 font-semibold">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded w-full p-2 mb-4"
          required
        />

        <label className="block mb-2 font-semibold">Contact</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="border rounded w-full p-2 mb-4"
          required
        />

        <label className="block mb-2 font-semibold">Status</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border rounded w-full p-2 mb-4"
          required
        >
          <option value="">Select status</option>
          <option value="found">Found</option>
          <option value="lost">Lost</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}
