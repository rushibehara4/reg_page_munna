const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Your routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Register route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.send(user);
});

// Fetch users route
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Export the API handler
module.exports = app;
