const mongoose = require("mongoose");

const previousCompanySchema = new mongoose.Schema({
  domain: { type: String },
  skills: { type: [String], default: [] },
});

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    already: { type: Boolean, required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    mobileNumber: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    relocate: { type: Boolean, required: true },
    currentLocation: { type: String, required: true },
    experience: { type: Number, required: true },
    realExperience: { type: Number, required: true },
    realItExperience: { type: Number, required: true },
    itExperienceDescription: { type: String },
    skillsLearned: { type: [String], default: [] },
    currentCompany: { type: String, required: true },
    currentCompanySkills: { type: [String], default: [] },
    previousCompanies: { type: [previousCompanySchema], default: [] },
    cvLink: {
      type: String,
      match: /https?:\/\/(www\.)?[a-z0-9]+(\.[a-z]{2,})/,
    },
    linkedinUrls1: { type: String },
    linkedinUrls2: { type: String },
    resumeReviewed: { type: Boolean, default: false },
    resumeReviewedStewards: { type: String },
    mockClear: { type: Boolean, default: false },
    round2Clear: { type: Boolean, default: false },
    h1b: { type: Boolean, default: false },
    round1Comments: { type: String },
    round2Comments: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
