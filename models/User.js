const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  already: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  relocate: {
    type: Boolean,
    default: false,
  },
  currentLocation: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    default: 0,
  },
  realExperience: {
    type: Number,
    default: 0,
  },
  realItExperience: {
    type: Number,
    default: 0,
  },
  itExperienceDescription: {
    type: String,
    required: true,
  },
  skillsLearned: {
    type: [String],
    default: [],
  },
  currentCompany: {
    type: String,
    required: true,
  },
  currentCompanySkills: {
    type: [String],
    default: [],
  },
  previousCompanies: [
    {
      domain: String,
      skills: [String],
    },
  ],
  cvLink: {
    type: String,
    required: true,
  },
  linkedinProfiles: {
    type: [String],
    default: [],
  },
  resumeReviewed: {
    type: String,
    required: true,
  },
  resumeReviewedStewards: {
    type: String,
    required: true,
  },
  mockClear: {
    type: Boolean,
    default: false,
  },
  round2Clear: {
    type: Boolean,
    default: false,
  },
  h1b: {
    type: Boolean,
    default: false,
  },
  round1Comments: {
    type: String,
    required: true,
  },
  round2Comments: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
