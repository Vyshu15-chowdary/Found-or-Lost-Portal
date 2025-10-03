import db from "../config/db.js";

// Create a new item
export const createItem = (req, res) => {
  const { title, description, contact, status } = req.body;

  if (!title || !status) {
    return res.status(400).json({ error: "Title and status are required" });
  }

  const query = "INSERT INTO items (title, description, contact, status) VALUES (?, ?, ?, ?)";
  db.query(query, [title, description, contact, status], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "Item saved successfully", itemId: result.insertId });
  });
};

// Get all items
export const getAllItems = (req, res) => {
  const query = "SELECT * FROM items ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
};

// Get a single item by ID
export const getItemById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM items WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (results.length === 0) return res.status(404).json({ error: "Item not found" });
    res.json(results[0]);
  });
};

// Delete an item by ID
export const deleteItem = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM items WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  });
};
