import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import User from "./models/user.js";
import Item from "./models/Item.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Lost & Found Backend Running with MySQL");
});

// Sync models
sequelize.sync({ alter: true }).then(() => {
  console.log("Database & tables synced");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
