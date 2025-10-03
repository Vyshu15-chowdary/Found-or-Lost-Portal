// backend/routes/admin.js
import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Get all items
router.get("/items", (req, res) => {
  const query = "SELECT * FROM items ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});

// Get all users
router.get("/users", (req, res) => {
  const query = "SELECT id, name, email, created_at FROM users ORDER BY id DESC";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});

export default router;
