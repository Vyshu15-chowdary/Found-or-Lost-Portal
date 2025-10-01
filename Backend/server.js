import express from "express";
import { authMiddleware } from "./middleware/authMiddleware.js";
import Item from "./models/Item.js"


const app = express();
app.use(express.json());
// protected route
app.get("/api/items", authMiddleware,async (req, res) => {
  try {
    const items = await Item.findAll(); // fetch from database
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch items", error: err });
  }
});