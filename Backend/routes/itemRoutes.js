import express from "express";
import { createItem, getAllItems, deleteItem,updateItem,getItemById } from "../controllers/itemController.js";
import multer from "multer";


const router = express.Router();


// cofigure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder where images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes

// POST /api/items with image upload
router.post("/", upload.single("image") ,createItem);
router.put("/:id",upload.single("image"),updateItem);
router.get("/", getAllItems);
router.get("/:id",getItemById);
router.put("/:id",updateItem);
router.delete("/:id", deleteItem);

export default router;
