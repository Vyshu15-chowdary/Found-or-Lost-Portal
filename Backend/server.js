import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import itemRoutes from "./routes/itemRoutes.js";
import db from "./config/db.js"; // MySQL connection

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Found or Lost Portal API running");
});

// Use item routes
app.use("/api/items", itemRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
