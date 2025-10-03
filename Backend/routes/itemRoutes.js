import express from "express";
import {
  createItem,
  getAllItems,
  getItemById,
  deleteItem
} from "../controllers/itemController.js";

const router = express.Router();

// Create a new item
router.post("/", createItem);

// Get all items
router.get("/", getAllItems);

// Get a single item by ID
router.get("/:id", getItemById);

// Delete an item by ID
router.delete("/:id", deleteItem);

export default router;
