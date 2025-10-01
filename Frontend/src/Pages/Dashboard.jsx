import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { getItems, deleteItem } from "../Services/itemService.js";

export default function Dashboard() {
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user items on mount
  useEffect(() => {
    const fetchMyItems = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const items = await getItems(); // Fetch all items
        setMyItems(items); // Optionally filter by userId from backend
      } catch (err) {
        console.error("Failed to fetch items:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyItems();
  }, [navigate]);

  // Delete an item
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await deleteItem(id); // call backend API to delete
      setMyItems(myItems.filter((item) => item.id !== id)); // remove from UI
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading items...</p>;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">My Dashboard</h2>
        <button
          onClick={() => navigate("/add-item")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add New Item
        </button>
      </div>

      {/* Items Grid */}
      {myItems.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">
          You have not added any items yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onEdit={() => navigate(`/edit-item/${item.id}`)}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
