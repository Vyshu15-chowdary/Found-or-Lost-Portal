import express from "express";
import { createItem, getAllItems, deleteItem,updateItem,getItemById } from "../controllers/itemController.js";

const router = express.Router();

// Routes
router.post("/", createItem);
router.get("/", getAllItems);
router.get("/:id",getItemById);
router.put("/:id",updateItem);
router.delete("/:id", deleteItem);

export default router;
