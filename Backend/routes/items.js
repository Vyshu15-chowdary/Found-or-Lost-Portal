import express from "express";
import multer from "multer";
import {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem
} from "../controllers/itemController.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder to store images
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  }
});

const upload = multer({ storage });

//routes

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", upload.single("image"),createItem);
router.put("/:id",upload.single("image"), updateItem);
router.delete("/:id", deleteItem);

export default router;
