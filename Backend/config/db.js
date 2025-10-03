import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,      // e.g., "localhost"
  user: process.env.DB_USER,      // e.g., "root"
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

export default db;
