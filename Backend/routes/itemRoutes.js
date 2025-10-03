import express from "express";
import { createItem, getAllItems, deleteItem } from "../controllers/itemController.js";

const router = express.Router();

// Routes
router.post("/", createItem);
router.get("/", getAllItems);
router.delete("/:id", deleteItem);

export default router;
