import db from "../config/db.js";

// Create a new item
export const createItem = (req, res) => {
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);

  const { title, description, contact, type } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  if (!title || !type) {
    return res.status(400).json({ error: "Title and Type are required" });
  }

  const query =
    "INSERT INTO items (title, description, contact, status, image) VALUES (?, ?, ?, ?, ?)";

  db.query(query, [title, description, contact, type, image], (err, result) => {
    if (err) return res.status(500).json({ error: err.sqlMessage || "Database error" });
    res.json({ message: "Item added successfully", itemId: result.insertId });
  });
};

// Get all items
export const getAllItems = (req, res) => {
  const query = "SELECT * FROM items ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.sqlMessage || "Database error" });
    res.json(results);
  });
};

// Get single item by ID
export const getItemById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM items WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.sqlMessage || "Database error" });
    if (results.length === 0) return res.status(404).json({ error: "Item not found" });
    res.json(results[0]);
  });
};

// Update item by ID
export const updateItem = (req, res) => {
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);

  const { id } = req.params;
  const { title, description, contact, type } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  let query, values;

  if (image) {
    query = "UPDATE items SET title = ?, description = ?, contact = ?, status = ?, image = ? WHERE id = ?";
    values = [title, description, contact, type, image, id];
  } else {
    query = "UPDATE items SET title = ?, description = ?, contact = ?, status = ? WHERE id = ?";
    values = [title, description, contact, type, id];
  }

  db.query(query, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.sqlMessage || "Database error" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item updated successfully" });
  });
};

// Delete item by ID
export const deleteItem = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM items WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.sqlMessage || "Database error" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  });
};
