import db from "../config/db.js";

// Create a new item
export const createItem = (req, res) => {
  const { title, description, contact, type } = req.body; // frontend still sends 'type'

  console.log("📥 Incoming data:", req.body);

  if (!title || !type) {
    return res.status(400).json({ error: "Title and status (type) are required" });
  }

  const query =
    "INSERT INTO items (title, description, contact, status) VALUES (?, ?, ?, ?)";

  db.query(query, [title, description, contact, type], (err, result) => {
    if (err) {
      console.error("❌ MySQL error:", err);
      return res.status(500).json({ error: err.sqlMessage || "Database error" });
    }
    console.log("✅ Insert success:", result);
    res.json({ message: "Item added successfully", itemId: result.insertId });
  });
};

// Get all items
export const getAllItems = (req, res) => {
  const query = "SELECT * FROM items ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ MySQL error:", err);
      return res.status(500).json({ error: err.sqlMessage || "Database error" });
    }
    res.json(results);
  });
};

// Delete item by id
export const deleteItem = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM items WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("❌ MySQL error:", err);
      return res.status(500).json({ error: err.sqlMessage || "Database error" });
    }
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  });
};
