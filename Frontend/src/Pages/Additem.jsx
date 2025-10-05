import React, { useState } from "react";
import axios from "axios";

export default function AddItem() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    phone:"+9109912355",
    contact: "",           // optional user input
    type: "found",         // default type
    image: null,           // store file object
  });

  const defaultPhone = "+919109912355"; // default phone number (hidden)

  const [message, setMessage] = useState("");

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.type) {
      setMessage("Title and Type are required");
      return;
    }

    //token

    const token = localStorage.getItem("token");
    if(!token){
      setMessage("please login first");
      return;
    }

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("contact", formData.contact);
      data.append("phone", defaultPhone); // send default phone
      data.append("type", formData.type);
      if (formData.image) data.append("image", formData.image);

      const response = await axios.post(
        "http://localhost:5000/api/items",
        data,
        {
          headers: { 
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${localStorage.getItem("token")}` // optional JWT
          },
        }
      );

      setMessage("Item added successfully!");
      console.log("created item:",response.data);

      //reset form
      setFormData({
        title: "",
        description: "",
        contact: "",
        type: "found",
        image: null,
      });

      console.log("Created item:", response.data);
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

        {message && (
          <p className="mb-4 text-center text-red-500">{message}</p>
        )}

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Item Title"
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact Info (optional)"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full mb-3"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
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
