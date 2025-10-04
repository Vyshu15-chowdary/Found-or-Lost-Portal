import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import itemRoutes from "./routes/itemRoutes.js";
import db from "./config/db.js";
import fs from "fs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Connect to DB
db.connect((err) => {
  if (err) console.log("Database connection failed:", err);
  else console.log("Connected to DB successfully");
});
// Check if uploads folder exists, create if not
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Test route
app.get("/", (req, res) => res.send("Found or Lost Portal API running"));

// Routes
app.use("/api/items", itemRoutes);
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

