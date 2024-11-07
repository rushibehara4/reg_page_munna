const mongoose = require("mongoose");

const previousCompanySchema = new mongoose.Schema({
  domain: { type: String, trim: true },
  skills: { type: [String], default: [] },
});

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    already: { type: Boolean, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    mobileNumber: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
      trim: true,
    },
    password: { type: String, required: true },
    dob: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value <= new Date();
        },
        message: "Date of birth cannot be in the future.",
      },
    },
    relocate: { type: Boolean, required: true },
    currentLocation: { type: String, required: true, trim: true },
    experience: { type: Number, required: true },
    realExperience: { type: Number, required: true },
    realItExperience: { type: Number, required: true },
    itExperienceDescription: { type: String, default: "", trim: true },
    skillsLearned: { type: [String], default: [] },
    currentCompany: { type: String, required: true, trim: true },
    currentCompanySkills: { type: [String], default: [] },
    previousCompanies: { type: [previousCompanySchema], default: [] },
    cvLink: {
      type: String,
      required: true,
    },
    linkedinProfile1: {
      type: String,
      match:
        /^(https?:\/\/(www\.)?linkedin\.com\/(in|pub|company)\/[a-zA-Z0-9_-]+)$/,
      trim: true,
      required: false,
    },
    linkedinProfile2: {
      type: String,
      match:
        /^(https?:\/\/(www\.)?linkedin\.com\/(in|pub|company)\/[a-zA-Z0-9_-]+)$/,
      trim: true,
      required: false,
    },
    resumeReviewed: { type: String, required: true },
    resumeReviewedStewards: { type: String, required: true },
    mockClear: { type: Boolean, default: false },
    round2Clear: { type: Boolean, default: false },
    h1b: { type: Boolean, default: false },
    round1Comments: { type: String, trim: true },
    round2Comments: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
