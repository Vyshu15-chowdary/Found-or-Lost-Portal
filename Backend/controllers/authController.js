import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const JWT_SECRET =" Process.env.JWT_SECRET"; // replace with .env in production

// Register user
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields are required" });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(query, [name, email, hashedPassword], (err, result) => {
    if (err) {
      console.error("MySQL error:", err);
      return res.status(500).json({ error: err.sqlMessage || "Database error" });
    }
    res.json({ message: "User registered successfully", userId: result.insertId });
  });
};

// Login user
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Email and password are required" });

  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error("MySQL error:", err);
      return res.status(500).json({ error: err.sqlMessage || "Database error" });
    }

    if (results.length === 0)
      return res.status(400).json({ error: "User not found" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid password" });

    // Generate JWT token
    const token = jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token, user: { id: user.id, name: user.name, email: user.email } });
  });
};
