const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err.message));

// Register route
app.post("/register", async (req, res) => {
  const {
    fullName,
    already,
    email,
    mobileNumber,
    password,
    dob,
    relocate,
    currentLocation,
    experience,
    realExperience,
    realItExperience,
    itExperienceDescription,
    skillsLearned,
    currentCompany,
    currentCompanySkills,
    previousCompanies,
    cvLink,
    linkedinProfile1,
    linkedinProfile2,
    resumeReviewed,
    resumeReviewedStewards,
    mockClear,
    round2Clear,
    h1b,
    round1Comments,
    round2Comments,
  } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const user = new User({
      fullName,
      already,
      email,
      mobileNumber,
      password: hashedPassword,
      dob,
      relocate,
      currentLocation,
      experience,
      realExperience,
      realItExperience,
      itExperienceDescription,
      skillsLearned,
      currentCompany,
      currentCompanySkills,
      previousCompanies,
      cvLink,
      linkedinProfile1,
      linkedinProfile2,
      resumeReviewed,
      resumeReviewedStewards,
      mockClear,
      round2Clear,
      h1b,
      round1Comments,
      round2Comments,
    });

    // Save user to database
    const savedUser = await user.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all users route
app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
});

// Delete all users route
app.delete("/users", async (req, res) => {
  try {
    await User.deleteMany();
    res.status(200).json({ message: "All users deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
