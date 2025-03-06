const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    console.log("Register API called:", req.body);

    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const existingUser = await User.findOne({ $or: [{ email: trimmedEmail }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: "Email or Username already exists" });
    }

    console.log("Password before hashing:", trimmedPassword);
    const newUser = new User({ username, email: trimmedEmail, password: trimmedPassword, role });
    await newUser.save();

    console.log("User saved to database:", newUser); // ✅ Log the saved user
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error in register function:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

const login = async (req, res) => {
  try {
    console.log("Login API called with data:", req.body);

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const user = await User.findOne({ email: trimmedEmail });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    console.log("✅ User found:", user);
    console.log("🔍 Entered Password:", trimmedPassword);
    console.log("🔍 Stored Hashed Password:", user.password);

    const isMatch = await bcrypt.compare(trimmedPassword, user.password);
    console.log("✅ Password Match Result:", isMatch);

    if (!isMatch) {
      console.log(`❌ Password does not match for user: ${trimmedEmail}`);
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      token,
      role: user.role,
      username: user.username,
      message: "Login successful!"
    });
  } catch (error) {
    console.error("Error in login function:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

module.exports = { register, login };