import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const app = express();
const port = process.env.PORT || 5000;

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// MongoDB connection
const mongoURI =
  "mongodb://127.0.0.1:27017/jalalson-clone"; 

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.post("/signup", async (req, res) => {
  try {
    const { email, phoneNumber, password, confirmPassword } = req.body;

    // Check required fields
    if (!email || !phoneNumber || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Validate phone number format (10-15 digits)
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({ message: "Invalid phone number format" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Save new user (without confirmPassword)
    const hashedPassword = await bcrypt.hash(password, 10); // 10 = salt rounds
const newUser = new User({ email, phoneNumber, password: hashedPassword });
await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: {_id:newUser._id , email:newUser.email,phoneNumber: newUser.phoneNumber} });
  } catch (error) {
    console.error("Error in /signup route:", error);
    res.status(500).json({ message: "Server error" });
  }
});
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
if (!passwordMatch) {
  return res.status(401).json({ message: "Incorrect password" });
}

    res.status(200).json({ message: "Login successful",  user: {
    _id: user._id,
    email: user.email,
    phoneNumber: user.phoneNumber,
  }, });
  } catch (error) {
    console.error("Error in /login route:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
