const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const User = require("./models/User");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (request, response) => {
  try {
    const { username, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    response.status(201).json(user);
  } catch (error) {
    console.error("Error in registration:", error);
    response.status(500).json({ error: "Registration failed" });
  }
});

app.get("/users", async (request, response) => {
  try {
    const users = await User.find();
    response.json(users);
  } catch (err) {
    console.error("Error fetching users:" + err);
    response.status(500).json({ message: "Error fetching users" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
