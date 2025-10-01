// server.js
import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import Item from "./models/Item.js";

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// --- Add Item Route ---
app.post("/api/items", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add item", error: err });
  }
});

// --- Get all items ---
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch items", error: err });
  }
});

const PORT = 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.sync();
    console.log("Database & tables synced");
  } catch (err) {
    console.error("DB sync failed:", err);
  }
});
