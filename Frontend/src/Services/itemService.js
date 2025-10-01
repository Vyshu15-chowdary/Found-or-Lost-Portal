import { getToken } from "./authService.js";

const API_URL = "http://localhost:5000/api/items";

// Get all items (public)
export const getItems = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

// Get single item by ID
export const getItemById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

// Create item (protected)
export const createItem = async (itemData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(itemData),
  });
  return await res.json();
};

// Update item (protected)
export const updateItem = async (id, itemData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(itemData),
  });
  return await res.json();
};

// Delete item (protected)
export const deleteItem = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return await res.json();
};
