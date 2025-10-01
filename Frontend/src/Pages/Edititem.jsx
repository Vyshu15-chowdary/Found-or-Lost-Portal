
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", description: "" });

  // Load item data
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/items/${id}`);
        setFormData({ name: res.data.name, description: res.data.description });
      } catch (err) {
        console.error("Failed to load item", err);
      }
    };
    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/items/${id}`, formData);
      alert("Item updated successfully!");
      navigate("/"); // back to dashboard
    } catch (err) {
      console.error(err);
      alert("Failed to update item");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-96"
      >
        <h2 className="text-2xl font-bold mb-4">✏️ Edit Item</h2>

        <label className="block mb-2 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
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
