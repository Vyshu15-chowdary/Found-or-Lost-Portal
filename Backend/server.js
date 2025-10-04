import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import authRoutes from "./routes/auth.js";
import itemRoutes from "./routes/itemRoutes.js";
import db from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

//connect to db

db.connect((err)=>{
    if(err){
        console.log("Database connection failed:",err);
    }else{
        console.log("connected db successfully")
    }
})

// Test route
app.get("/", (req, res) => res.send("Found or Lost Portal API running"));

// Use routes
app.use("/api/items", itemRoutes);
app.use("/api/auth",authRoutes);
app.get("/",(req,res)=>{
    res.send("API running....")
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
